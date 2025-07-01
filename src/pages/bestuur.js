import React from "react"
import { Link } from "gatsby"
import bibleImage from "../images/bible_q_20.jpeg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SectionTitle } from "../components/section-title"
import { HeroImageContainerStyled, ItalicTitleStyled, LeaderShipContainerStyled, SectionStyled, TitleStyled } from "../components/styled"
import { Leadership } from "../components/leadership"
import john from "../images/leadership/9.png"
import hans from "../images/leadership/6.png"
import gijsbertus from "../images/leadership/3.png"
import jeanmarie from "../images/leadership/10.png"
import michelFranzen from "../images/leadership/8.png"
import annie from "../images/leadership/11.png"
import lieven from "../images/leadership/4.png"
import gunda from "../images/leadership/5.png"
import embrecht from "../images/leadership/2.png"
import kamalidis from "../images/leadership/1.png"
import paul from "../images/leadership/7.png"
import freda from "../images/leadership/freda.png"
import profile from "../images/profile.png"



const SecondPage = () => (
  <Layout>
    <SEO title="Bestuur"/>
    <HeroImageContainerStyled paddingDesktop={"150px 0"} padding={"50px 0"} image={bibleImage}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>ARK</TitleStyled>
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Love, Care, Share</TitleStyled>
    </HeroImageContainerStyled>

      <SectionTitle title={"Bestuur"} subtitle={"'Wie de belangrijkste wil zijn, moet de minste van allemaal willen zijn en ieders dienaar'"}/>
      <LeaderShipContainerStyled>
        <Leadership name={"John van der Dussen"} position={"Voorzitter"} image={john}/>
        {/*<Leadership name={"Gijsbertus van Hattem"} position={"Penningmeester"} image={gijsbertus}/>*/}
        <Leadership name={"Jean-Marie Houben"} position={"Secretaris"} image={jeanmarie}/>
        <Leadership name={"Michel Franzen"} position={"Oecumenisch middaggebed"} image={michelFranzen}/>
        {/*<Leadership name={"Annie Walscharts"} position={"Oecumenisch middaggebed"} image={annie}/>*/}
        <Leadership name={"Lieven Gorissen"} position={"hoofdredacteur, opstellen en publicatie ARK-berichten"} image={lieven}/>
        {/*<Leadership name={"Gunda Wilckens"} position={""} image={gunda}/>*/}
        {/*<Leadership name={"Vader Barnabas"} position={""} image={profile}/>*/}
        <Leadership name={"Embrecht van Groesen"} position={"Oecumenisch middaggebed"} image={embrecht}/>
        {/*<Leadership name={"Paul Van Uffelen"} position={"Website"} image={paul}/>*/}
        <Leadership name={"Freda Nkansah"} position={""} image={freda}/>
      </LeaderShipContainerStyled>
  </Layout>
)

export default SecondPage
