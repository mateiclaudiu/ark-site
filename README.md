# ARK-website (Next.js)

Opvolger van de Gatsby-site (`mateiclaudiu/ark-site`) voor antwerpseraadvankerken.be.
Fase 1: 1:1-port, pixel-identiek aan de live site.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statische export naar ./out
node scripts/compare.mjs                          # vergelijk ./out met de live site
node scripts/compare.mjs --new https://<preview>.netlify.app
```

- `app/` routes en metadata; `src/views/` de pagina's (overgenomen uit Gatsby `src/pages`)
- `src/components/` ongewijzigde componenten (styled-components), `src/data/` inhoud (JSON)
- Afbeeldingen worden als URL geïmporteerd (webpack `asset/resource`), zoals bij Gatsby
- Netlify: statische export, formulieren via Netlify Forms (`Contact Form`)
