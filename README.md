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

## CMS (Sanity)

Events en de wederkerende events worden beheerd in Sanity (`studio/`, online op
https://ark-website.sanity.studio). De site haalt die inhoud op tijdens de build (`lib/content.js`);
zolang `lib/sanity.js` geen `projectId` heeft, gebruikt ze `src/data/events.json` en `src/data/recurring.json`.
Na "Publiceren" in Sanity start een webhook een nieuwe build op Netlify.

```bash
cd studio && nvm use        # Node >= 22.12 (zie .nvmrc)
npm install
npm run dev                 # beheeromgeving lokaal
npm run deploy              # beheeromgeving online zetten
npm run import              # huidige JSON-inhoud + flyers naar Sanity (eenmalig)
```

Handleiding voor de beheerder: `studio/HANDLEIDING.md`.
