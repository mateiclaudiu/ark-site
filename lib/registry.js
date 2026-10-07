"use client"

import React, { useState } from "react"
import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import isPropValid from "@emotion/is-prop-valid"

// styled-components v5 (Gatsby) gaf alleen geldige HTML-attributen door aan de DOM
// en voegde vendor prefixes toe; v6 doet dat standaard niet meer.
const shouldForwardProp = (prop, target) => (typeof target === "string" ? isPropValid(prop) : true)

export default function StyledComponentsRegistry({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement()
    sheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== "undefined") {
    return <StyleSheetManager shouldForwardProp={shouldForwardProp} enableVendorPrefixes>{children}</StyleSheetManager>
  }

  return (
    <StyleSheetManager sheet={sheet.instance} shouldForwardProp={shouldForwardProp} enableVendorPrefixes>
      {children}
    </StyleSheetManager>
  )
}
