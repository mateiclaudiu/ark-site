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
  flex-direction: column;
  margin-bottom: 4rem;
  border-bottom: 1px darkgray solid;
  padding-bottom: 1rem; 
  @media (min-width: 768px) {
    flex-direction: row;
  } 
  &:last-child {
     border-bottom: none;
  }

`

const EventDayStyled = styled.div`
  width: 7.5rem;
  @media (min-width: 768px) {
    text-align: right;
  } 
`

const EventDateStyled = styled.div`
  display: flex;
  width: 16rem;

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
      <SectionTitle title={"Geplande events"} subtitle={"Hoe mooi is het wanneer mensen samen in vrede leven"}/>
      <EventsContainerStyled>
        <EventDateStyled>
          <EventDayStyled>
            <TitleStyled fontSize={"5rem"} color={"lightgray"}>13</TitleStyled>
          </EventDayStyled>
          <div><TitleStyled fontSize={"1rem"} color={"gray"}> April</TitleStyled><TitleStyled fontSize={"1rem"} color={"black"}> ZATERDAG</TitleStyled></div>
        </EventDateStyled>
        <div>
          <TitleStyled fontSize={"1.6rem"} color={"#d14f42"}>Building a Church Fellowship</TitleStyled>
          <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>June 17, 2019 @ 8:00 am - December 14, 2020 @ 5:00 pm</ItalicTitleStyled>
          <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Norfolk United States</ItalicTitleStyled>
        </div>
      </EventsContainerStyled>
      <EventsContainerStyled>
        <EventDateStyled>
          <EventDayStyled>
            <TitleStyled fontSize={"5rem"} color={"lightgray"}>25</TitleStyled>
          </EventDayStyled>
          <div><TitleStyled fontSize={"1rem"} color={"gray"}> Januari</TitleStyled><TitleStyled fontSize={"1rem"} color={"black"}> MAANDAG</TitleStyled></div>
        </EventDateStyled>
        <div>
          <TitleStyled fontSize={"1.6rem"} color={"#d14f42"}>Building a Church Fellowship</TitleStyled>
          <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>June 17, 2019 @ 8:00 am - December 14, 2020 @ 5:00 pm</ItalicTitleStyled>
          <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Norfolk United States</ItalicTitleStyled>
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
