import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {SpecialEvent} from "../components/special-events";
import {PageContainer} from "../components/page-container";

const BijzondereEvents = () => (
  <Layout>
    <SEO title="Bijzondere Events"/>

      <SectionTitle title={"Bijzondere Events"} subtitle={""}/>
      <PageContainer>
          <SpecialEvent></SpecialEvent>
      </PageContainer>
  </Layout>
)

export default BijzondereEvents
