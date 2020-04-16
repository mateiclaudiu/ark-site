import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { FeatureBlockStyled, HelloContainerStyled, IntroStyled, ItalicTitleStyled, TitleStyled } from "../components/styled"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { SectionTitle, SectionTitleForDarkMode } from "../components/section-title"
import { PageContainer } from "../components/page-container"
import { Event, UpcomingEventList } from "../components/event"
import introImage from "../images/together.jpg"
import { Contact } from "../components/contact"

const NavStyled = styled.div`
  font-family: Poppins;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  color:white;
  background:#31333b;

  ul{
    margin: 0;
  }
  
  li{
    border-top: 1px solid #707176;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
  
  a{
    text-decoration: none;
    color: white;
  }
  li:hover{
    text-decoration: none;
    cursor: pointer;
    background:#2a2c33;
    transition: 0.3s;
  }
  
  @media (min-width: 768px) {
    display:none;
  } 
`

const IndexPage = () => {
  const { events, websites } = useStaticQuery(graphql`
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
    <NavStyled>
      <ul id="navigation">
        <li><Link to="/wieiswie/">Wie is wie?</Link></li>
        <li><Link to="/links/">Handige links</Link></li>
      </ul>
    </NavStyled>
    <Intro image={introImage}/>
    <Feature/>
    <PageContainer>
      <Hello/>
    </PageContainer>
    <Banner/>
    <PageContainer>
      <UpcomingEventList events={events.edges}/>
    </PageContainer>
    <Link to="/wieiswie/">Wie is wie?</Link>
    <Contact/>
  </Layout>
}

export default IndexPage
