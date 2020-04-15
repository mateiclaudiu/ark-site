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
const ContactStyled = styled.div`
  background-color: #424555;
  background-color: #d14f42;
//  padding: 2%;
  padding-bottom: 3rem;
  input{
    width: 100%;
    border: 1px solid #eaebec;

  } 
  textarea{
    width: 100%;
    border: 1px solid #eaebec;
  }
`

const ButtonStyled = styled.button`
  padding: 1rem;
  border-radius: 5%;
  border: 1px solid #eaebec;
  font-family: Poppins;
  font-weight: 600;
  text-transform: uppercase;
  color:#707176;


`

const ContactLabelStyled = styled.div

const IndexPage = () => {
  const { events } = useStaticQuery(graphql`
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

  return <Layout>
    <SEO title="Home"/>
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
    <ContactStyled>
      <PageContainer>
      <SectionTitleForDarkMode title={"Contact"} subtitle={"Hoe mooi is het wanneer mensen samen in vrede leven"}/>
      <form method="post" action="#">
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Naam</ItalicTitleStyled></label>
          <div><input type="text" name="name" id="name" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
          <div><input type="email" name="email" id="email"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Onderwerp</ItalicTitleStyled></label>
          <div><input type="text" name="subject" id="subject"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Bericht</ItalicTitleStyled></label>

          <div><textarea name="message" id="message" rows="5"/>
          </div>
        </div>
        <ButtonStyled type="submit">Stuur</ButtonStyled>
      </form>
      </PageContainer>
    </ContactStyled>
  </Layout>
}

export default IndexPage
