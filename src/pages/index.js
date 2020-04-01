import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { IntroStyled, ItalicTitleStyled, TitleStyled } from "../components/styled"

const HelloContainerStyled = styled.div`
  padding: 10% 3%;
`

const HelloStyled = styled.div`
  text-align:center;
  padding-bottom: 10%;
`

const ColumnStyled = styled.div`
  color: gray;
  column-count: 2;
  column-gap: 30px;
  @media (max-width: 768px) {
    column-count: unset;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Intro/>
    <Feature/>
    <div style={{ maxWidth: 960, margin: `auto` }}>
      <HelloContainerStyled>
        <HelloStyled>
          <TitleStyled fontSize={"2.5em"} color={"black"}>Hallo & Welkom</TitleStyled>
          <ItalicTitleStyled fontSize={"1.1em"} color={"#707176"}>Onze geschiedenis</ItalicTitleStyled>
        </HelloStyled>
        <ColumnStyled>
          <div>Het was de tijd van terug opbloeiende oecumenische dialoog. De behoefde om elkaar beter te leren kennen, samen te discussiëren, in debat te gaan
            en
            vooral ook samen te kunnen bezinnen en bidden, groeide en vroeg om een behoudend orgaan.
            Deze interkerkelijke raad heeft zich tot doel gesteld de oecumenische contacten in de Provincie Antwerpen
            te bevorderen en de christenen onder elkaar gevoelig te maken voor het belang om samen hun geloof te
            kunnen en mogen belijden en beleven met het oog op de eenheid.

          </div>
          <div style={{ marginTop: `20px` }}>

            In zijn samenstelling is de raad een ruimte van ontmoeting en bewustwording
            – een forum voor gesprek en overleg,
            – een werkteam voor gemeenschappelijk pastoraal bekommernis
            – en voor de dienst aan de wereld
            in evangelisch getuigenis en gebed van alle kerken die het doopsel en de weg van de Heer Jezus Christus belijden.

            De Raad van Kerken is verbonden met de internationale oecumenische beweging.
          </div>
        </ColumnStyled>
      </HelloContainerStyled>
    </div>

  {/*  <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
