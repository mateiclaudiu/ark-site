import StyledComponentsRegistry from "../lib/registry"
import "../src/components/layout.css"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#df6d27",
}

// <head>-links: manifest en iconen zoals de Gatsby-site; fonts: Montserrat (koppen) + Source Serif 4 (tekst).
const iconVersion = "2b31b46ecf43a89f0b921f3b9fa0228a"
const iconSizes = [48, 72, 96, 144, 192, 256, 384, 512]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <link rel="icon" href={`/favicon-32x32.png?v=${iconVersion}`} type="image/png"/>
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="anonymous"/>
        {iconSizes.map(size => (
          <link key={size} rel="apple-touch-icon" sizes={`${size}x${size}`}
                href={`/icons/icon-${size}x${size}.png?v=${iconVersion}`}/>
        ))}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
              rel="stylesheet"/>
      </head>
      <body>
        <div id="___gatsby">
          <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </div>
      </body>
    </html>
  )
}
