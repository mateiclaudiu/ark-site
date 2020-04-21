import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionTitle } from "../components/section-title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <SectionTitle title={"OEPS. PAGINA NIET GEVONDEN"} subtitle={"Hij geeft mij nieuwe kracht en leidt mij langs veilige paden tot eer van zijn naam.- Psalm" +
    " 23:3"}/>
  </Layout>
)

export default NotFoundPage
