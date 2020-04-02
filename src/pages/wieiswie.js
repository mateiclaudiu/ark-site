import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionTitle } from "../components/section-title"
import { LeaderShipContainerStyled, SectionStyled, TitleStyled } from "../components/styled"
import { Leadership } from "../components/leadership"



const SecondPage = () => (
  <Layout>
    <SEO title="Wie is wie"/>
      <SectionTitle title={"Wie is wie?"} subtitle={"'Wie de belangrijkste wil zijn, moet de minste van allemaal willen zijn en ieders dienaar'"}/>
      <LeaderShipContainerStyled>
        <Leadership name={"John van der Dussen"} position={"Voorzitter"} image={"https://antwerpseraadvankerken.be/wp-content/uploads/2018/08/P1060743-150x150.jpg"}/>
        <Leadership name={"Ds. Hans Neels (VPKB)"} position={"Ondervoorzitter / Moderator"} image={"https://antwerpseraadvankerken.be/wp-content/uploads/2015/09/Hans-223x300.jpg"}/>
        <Leadership name={"Pastor Gijsbertus van Hattem (Lutherse kerk)"} position={"Penningmeester"} image={"https://antwerpseraadvankerken.be/wp-content/uploads/2015/09/Gijsbertus-Van-Hattum-met-boord.jpg"}/>
        <Leadership name={"Diaken Jean-Marie Houben (RKK)"} position={"Secretaris"} image={"https://antwerpseraadvankerken.be/wp-content/uploads/2018/08/P1060745-150x150.jpg"}/>
      </LeaderShipContainerStyled>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
