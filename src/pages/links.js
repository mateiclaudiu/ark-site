import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { FeatureBlockStyled, HelloContainerStyled, IntroStyled, ItalicTitleStyled, SectionStyled, TitleStyled } from "../components/styled"
import { Hello } from "../components/hello"
import { Banner } from "../components/banner"
import { SectionTitle, SectionTitleForDarkMode } from "../components/section-title"
import { PageContainer } from "../components/page-container"
import { Event, UpcomingEventList } from "../components/event"
import introImage from "../images/together.jpg"
import { LinksContainer } from "../components/links"

const LinksPage = () => {
  const { websites } = useStaticQuery(graphql`
    {    
      websites: allLinksJson {
        edges {
          node {
            id
            links {
              title
              url
            }
            groupTitle
          }
        }
      }
    }
  `)

  return <Layout>
    <SEO title="Handige Links"/>
    <PageContainer>
      <SectionTitle title={"Handige links"} subtitle={"\"Trek heel de wereld rond en maak aan ieder schepsel het goede nieuws bekend\""}/>
      {websites.edges.map(({ node }) => (
        <LinksContainer groupTitle={node.groupTitle} links={node.links}/>
      ))}
      <div style={{ fontStyle:"italic"}}>
        Had u graag uw website hier vermeld gezien? Of juist liever niet? Of zag u een fout?
        Neem dan gerust contact met ons en wij zullen het nodige doen.
        <br/>
        <br/>
        De ARK kan niet verantwoordelijk gesteld worden voor foutieve links, noch voor de inhoud van de vermelde links.
        Dat wij de links hier vermelden wil niet zeggen dat wij altijd met de inhoud instemmen.
      </div>
    </PageContainer>
  </Layout>
}

export default LinksPage
