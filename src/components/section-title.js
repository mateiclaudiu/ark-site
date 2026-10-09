"use client"

import React from "react"
import { PageHeadingStyled, mutedText } from "./events-styled"

// Zelfde kopstijl als de rest van de site: links, donkerblauw, met het accent in de logokleuren.
export const SectionTitle = ({title, subtitle}) => (
  <div style={{ marginBottom: "2rem" }}>
    <PageHeadingStyled>{title}</PageHeadingStyled>
    {subtitle && <p style={{ fontStyle: "italic", color: mutedText, margin: 0 }} data-reveal="">{subtitle}</p>}
  </div>
)
