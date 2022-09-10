import React, {Component} from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Bloks from "../components/feature"
import {FeatureBlockStyled, HelloContainerStyled, IntroStyled, ItalicTitleStyled, TitleStyled} from "../components/styled"
import {Hello} from "../components/hello"
import {Banner} from "../components/banner"
import {SectionTitle, SectionTitleForDarkMode} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {Event, UpcomingEventList} from "../components/event"
import introImage from "../images/together_q_50.jpeg"
import {Contact} from "../components/contact"
import {Subscribe} from "../components/subscribe";


const IndexPage = () => {
    const {events, websites} = useStaticQuery(graphql`
    {    
      events: allEventsJson(sort: {fields: eventDate, order: ASC}) {
        edges {
          node {
            eventDate
            title
            dayNumber
            dayName
            monthName
            info
            place
          }
        }
      }
    }
  `)
    console.log(websites)

    return <Layout>
        <SEO title="Home"/>
        <Intro image={introImage}/>
        <Subscribe></Subscribe>
        <Bloks/>
        <SectionTitle title={"Hallo & Welkom"} subtitle={"Samen één in de naam van Jezus"}/>
        <Banner/>
        <PageContainer>
            <Hello/>
        </PageContainer>
        <div id="events">
            <PageContainer>
                <UpcomingEventList events={events.edges}/>
            </PageContainer>
        </div>
        <div id="contact">
            <Contact/>
        </div>
    </Layout>
}

export default IndexPage
