import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { FeatureBlockStyled, HelloContainerStyled, IntroStyled, ItalicTitleStyled, TitleStyled } from "../components/styled"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { SectionTitle } from "../components/section-title"
import { PageContainer } from "../components/page-container"

const EventsContainerStyled = styled.div`
  display: flex;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Intro/>
    <Feature/>
    <PageContainer>
      <Hello/>
    </PageContainer>

    <Banner/>
    <PageContainer>
      <SectionTitle title={"Opkomende events"} subtitle={"Hoe mooi is het wanneer mensen samen in vrede leven"}/>
      <EventsContainerStyled>
        <div>
          13 April ZATERDAG
        </div>
        <div>
          <TitleStyled fontSize={"35px"} color={"#d14f42"}>Building a Church Fellowship</TitleStyled>
          <ItalicTitleStyled fontSize={"16px"} color={"gray"}>June 17, 2019 @ 8:00 am - December 14, 2020 @ 5:00 pm</ItalicTitleStyled>
          <ItalicTitleStyled fontSize={"16px"} color={"gray"}>Norfolk United States</ItalicTitleStyled>
        </div>
      </EventsContainerStyled>
    </PageContainer>


    {/*    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
