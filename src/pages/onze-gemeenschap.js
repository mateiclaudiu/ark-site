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

const JoinUsBannerStyled = styled.div`
 @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }  
`

const JoinUsTextStyled = styled.div`
  color: white;
  background: #d14f42;
  padding: 3rem;
  height: 24rem;
  @media (min-width: 768px) {
    padding: 4rem;
    width: 50%;
  }  
`

const JoinUsImageStyled = styled.div`
  background: url("https://my-religion.cmsmasters.net/wp-content/uploads/2016/05/Depositphotos_76136149_original-1.jpg");
  height: 24rem;
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
  @media (min-width: 768px) {
    width: 50%;
    background-position-y: inherit;
  }  
`

const OurCommunityPage = () => {
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
    <SEO title="Onze gemeenschap"/>
    <IntroStyled paddingDesktop={"150px 0"} padding={"50px 0"} image={"https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>Het Orgaan</TitleStyled>
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Love, Care, Share</TitleStyled>
    </IntroStyled>
    <PageContainer>
      <SectionTitle title={"Onze gemeenschap"} subtitle={"\"Trek heel de wereld rond en maak aan ieder schepsel het goede nieuws bekend\""}/>
      {/*{websites.edges.map(({ node }) => (
        <LinksContainer groupTitle={node.groupTitle} links={node.links}/>
      ))}
      <div style={{ fontStyle: "italic" }}>
        Had u graag uw website hier vermeld gezien? Of juist liever niet? Of zag u een fout?
        Neem dan gerust contact met ons en wij zullen het nodige doen.
        <br/>
        <br/>
        De ARK kan niet verantwoordelijk gesteld worden voor foutieve links, noch voor de inhoud van de vermelde links.
        Dat wij de links hier vermelden wil niet zeggen dat wij altijd met de inhoud instemmen.
      </div>*/}
    </PageContainer>
    <JoinUsBannerStyled>
      <JoinUsImageStyled></JoinUsImageStyled>
      <JoinUsTextStyled>
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Wilt u lid worden?</TitleStyled>
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Contacteer ons!</TitleStyled>
        <div>Wij nodigen U graag uit voor een nadere kennismaking.</div>
        <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form t is a long established fact
          that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
        </div>
      </JoinUsTextStyled>
    </JoinUsBannerStyled>
  </Layout>
}

export default OurCommunityPage
