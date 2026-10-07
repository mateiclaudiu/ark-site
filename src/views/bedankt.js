"use client"

import React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import { PageContainer } from "../components/page-container"
import { PageHeadingStyled } from "../components/events-styled"
import { activeColor } from "../components/colors"

// Netlify Forms stuurt hierheen na het versturen van het contactformulier
// (action="/bedankt/" in contact.js), in plaats van naar zijn Engelse standaardpagina.
const ThankYouPage = () => (
  <Layout>
    <PageContainer>
      <div style={{ minHeight: "50vh", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <PageHeadingStyled>Bedankt voor uw bericht</PageHeadingStyled>
        <p style={{ lineHeight: 1.7, color: "#333", margin: "0 0 2rem 0" }}>
          We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <Link href="/" style={{ color: activeColor, fontWeight: 600, textDecoration: "underline" }}>
          Terug naar de homepagina
        </Link>
      </div>
    </PageContainer>
  </Layout>
)

export default ThankYouPage
