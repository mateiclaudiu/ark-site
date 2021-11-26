import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionTitle } from "../components/section-title"
import pdfDocument from "../../static/0_KAFT_OIKOUMENE_2021-4_proef_1.pdf"

const Oikumene = () => (
  <Layout>
    <SEO title="Oikumene"/>
    <SectionTitle title={"Oikumene"} subtitle={""}/>
      <a href={pdfDocument} download>Klik hier om de Oikoumene van oktober-november-december te downloaden</a>
  </Layout>
)

export default Oikumene
