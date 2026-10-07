// Vergelijkt de nieuwe site pixel per pixel met de live Gatsby-site.
//
//   node scripts/compare.mjs                       # nieuwe = lokale build in ./out
//   node scripts/compare.mjs --new https://x.netlify.app
//   node scripts/compare.mjs --only /bestuur/ --widths 390
//
// Resultaat: compare-output/report.html met per route en breedte oud / nieuw / verschil.

import http from "node:http"
import fs from "node:fs/promises"
import path from "node:path"
import { chromium } from "playwright"
import pixelmatch from "pixelmatch"
import { PNG } from "pngjs"

const ROUTES = ["/", "/bijzondere-events/", "/bestuur/", "/onze-gemeenschap/", "/links/",
  "/oikumene/", "/events/", "/onze-gemeenschap-3/", "/page-2/", "/deze-pagina-bestaat-niet/"]

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) =>
  a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]]] : acc, []))
const OLD = args.old || "https://antwerpseraadvankerken.be"
const WIDTHS = (args.widths || "1440,768,390").split(",").map(Number)
const routes = args.only ? args.only.split(",") : ROUTES
const OUT = path.resolve("compare-output")

// Kleine statische server voor ./out, met dezelfde regels als Netlify
// (map → index.html, onbekend → 404.html).
async function serveOut() {
  const root = path.resolve("out")
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png",
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".pdf": "application/pdf", ".webmanifest": "application/manifest+json",
    ".txt": "text/plain" }
  const server = http.createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname)
    const candidates = p.endsWith("/") ? [p + "index.html"] : [p, p + "/index.html", p + ".html"]
    for (const c of candidates) {
      try {
        const body = await fs.readFile(path.join(root, c))
        res.writeHead(200, { "content-type": types[path.extname(c)] || "application/octet-stream" })
        return res.end(body)
      } catch {}
    }
    res.writeHead(404, { "content-type": "text/html" })
    res.end(await fs.readFile(path.join(root, "404.html")))
  })
  await new Promise(r => server.listen(0, r))
  return { url: `http://localhost:${server.address().port}`, close: () => server.close() }
}

async function shoot(page, url) {
  await page.goto(url, { waitUntil: "networkidle" })
  await page.evaluate(async () => {
    await document.fonts.ready
    // Dynamische inhoud gelijkzetten: de builddatum in de footer.
    for (const el of document.querySelectorAll("footer div")) {
      if (el.textContent.includes("last update")) el.textContent = "© Built by Matei for ARK - last update (gemaskeerd)"
    }
    // Lazy afbeeldingen laden
    await Promise.all([...document.images].map(img => img.complete ? null : new Promise(r => { img.onload = img.onerror = r })))
  })
  await page.waitForTimeout(300)
  return PNG.sync.read(await page.screenshot({ fullPage: true, animations: "disabled" }))
}

function pad(png, width, height) {
  if (png.width === width && png.height === height) return png
  const out = new PNG({ width, height })
  out.data.fill(255)
  PNG.bitblt(png, out, 0, 0, png.width, png.height, 0, 0)
  return out
}

const local = args.new ? null : await serveOut()
const NEW = args.new || local.url
await fs.rm(OUT, { recursive: true, force: true })
await fs.mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const rows = []
for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 })
  const page = await context.newPage()
  for (const route of routes) {
    const oldPng = await shoot(page, OLD + route)
    const newPng = await shoot(page, NEW + route)
    const w = Math.max(oldPng.width, newPng.width), h = Math.max(oldPng.height, newPng.height)
    const a = pad(oldPng, w, h), b = pad(newPng, w, h)
    const diff = new PNG({ width: w, height: h })
    const changed = pixelmatch(a.data, b.data, diff.data, w, h, { threshold: 0.1 })
    const name = `${route.replace(/\//g, "_").replace(/^_|_$/g, "") || "home"}-${width}`
    await fs.writeFile(path.join(OUT, `${name}-old.png`), PNG.sync.write(a))
    await fs.writeFile(path.join(OUT, `${name}-new.png`), PNG.sync.write(b))
    await fs.writeFile(path.join(OUT, `${name}-diff.png`), PNG.sync.write(diff))
    const pct = (100 * changed / (w * h)).toFixed(3)
    rows.push({ route, width, name, pct, oldH: oldPng.height, newH: newPng.height })
    console.log(`${changed === 0 ? "OK  " : "DIFF"} ${String(width).padStart(4)} ${route.padEnd(28)} ${pct}%  hoogte ${oldPng.height} → ${newPng.height}`)
  }
  await context.close()
}
await browser.close()
local?.close()

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;")
await fs.writeFile(path.join(OUT, "report.html"), `<!doctype html><meta charset="utf-8"><title>Vergelijking</title>
<style>body{font:14px system-ui;margin:16px}table{border-collapse:collapse}td,th{padding:4px 8px;border-bottom:1px solid #ddd}
.ok{color:green}.diff{color:#b00}.row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:8px 0 32px}img{width:100%;border:1px solid #ccc}</style>
<h1>Live (${esc(OLD)}) vs nieuw (${esc(NEW)})</h1>
<table><tr><th>Route</th><th>Breedte</th><th>Verschil</th><th>Hoogte oud → nieuw</th></tr>
${rows.map(r => `<tr><td><a href="#${r.name}">${esc(r.route)}</a></td><td>${r.width}</td><td class="${r.pct === "0.000" ? "ok" : "diff"}">${r.pct}%</td><td>${r.oldH} → ${r.newH}</td></tr>`).join("")}
</table>
${rows.map(r => `<h2 id="${r.name}">${esc(r.route)} @ ${r.width}px — ${r.pct}%</h2><div class="row">
<figure><figcaption>live</figcaption><img loading="lazy" src="${r.name}-old.png"></figure>
<figure><figcaption>nieuw</figcaption><img loading="lazy" src="${r.name}-new.png"></figure>
<figure><figcaption>verschil</figcaption><img loading="lazy" src="${r.name}-diff.png"></figure></div>`).join("")}`)
console.log(`\nRapport: ${path.join(OUT, "report.html")}`)
