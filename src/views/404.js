"use client"

import React from "react"

import Layout from "../components/layout"
import Link from "next/link"
import { SectionTitle } from "../components/section-title"
import { PageContainer } from "../components/page-container"
import { activeColor } from "../components/colors"

const bibleVerse = "Hij geeft mij nieuwe kracht en leidt mij langs veilige paden tot eer van zijn naam. - Psalm 23:3"
const NotFoundPage = () => (
  <Layout>
    <PageContainer>
      <div style={{ minHeight: "45vh" }}>
        <SectionTitle title={"Oeps, pagina niet gevonden"} subtitle={bibleVerse}/>
        <Link href="/" style={{ color: activeColor, fontWeight: 600, textDecoration: "underline" }}>Naar de homepagina</Link>
      </div>
    </PageContainer>
  </Layout>
)

export default NotFoundPage
