"use client"

import React from "react"

import Layout from "../components/layout"
import { SectionTitle } from "../components/section-title"

const bibleVerse = "Hij geeft mij nieuwe kracht en leidt mij langs veilige paden tot eer van zijn naam. - Psalm 23:3"
const NotFoundPage = () => (
  <Layout>
    <SectionTitle title={"OEPS. PAGINA NIET GEVONDEN"} subtitle={bibleVerse}/>
  </Layout>
)

export default NotFoundPage
