import StyledComponentsRegistry from "../lib/registry"
import "../src/components/layout.css"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#df6d27",
}

// Zelfde <head>-links als de Gatsby-site (manifest, iconen, Google Fonts).
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
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,600,900|Roboto+Latin&display=swap"
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
