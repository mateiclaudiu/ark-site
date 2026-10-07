// Zelfde vorm als de oude Gatsby-build: "Monday 28 September 2026 12:53:04" (UTC,
// zoals gatsby-plugin-build-date op Netlify).
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"]
const now = new Date()
const pad = n => String(n).padStart(2, "0")
const buildDate = `${days[now.getUTCDay()]} ${now.getUTCDate()} ${months[now.getUTCMonth()]} ${now.getUTCFullYear()} ` +
  `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: { BUILD_DATE: buildDate, BUILD_DATE_ISO: now.toISOString() },
  compiler: { styledComponents: true },
  // Afbeeldingen en pdf's importeren als gewone URL (zoals bij Gatsby),
  // zodat `src={logo}` en `url(${image})` ongewijzigd blijven werken.
  images: { disableStaticImages: true, unoptimized: true },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|pdf)$/i,
      type: "asset/resource",
      generator: { filename: "static/media/[name]-[hash][ext]" },
    })
    return config
  },
}

export default nextConfig
