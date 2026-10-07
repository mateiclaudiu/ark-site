"use client"

import React from "react"
import Link from "next/link"
import bibleImage from "../images/bible_q_20.jpeg"

import Layout from "../components/layout"
import { SectionTitle } from "../components/section-title"
import { HeroImageContainerStyled, ItalicTitleStyled, LeaderShipContainerStyled, SectionStyled, TitleStyled } from "../components/styled"
import { Leadership, LeaderShipGridStyled } from "../components/leadership"
import { PageContainer } from "../components/page-container"
import { PageHeadingStyled } from "../components/events-styled"
import john from "../images/leadership/9.png"
import hans from "../images/leadership/6.png"
import gijsbertus from "../images/leadership/3.png"
import jeanmarie from "../images/leadership/10.png"
import michelFranzen from "../images/leadership/8.png"
import annie from "../images/leadership/11.png"
import lieven from "../images/leadership/4.png"
import gunda from "../images/leadership/5.png"
import embrecht from "../images/leadership/embrecht.jpg"
import kamalidis from "../images/leadership/1.png"
import paul from "../images/leadership/7.png"
import freda from "../images/leadership/freda.png"
import marian from "../images/leadership/12.png"
import claudia from "../images/leadership/13.png"
import ninia from "../images/leadership/nina.jpg"
import faith from "../images/leadership/faith-olumobi.png"
import profile from "../images/profile.png"



const SecondPage = () => (
  <Layout>
    <HeroImageContainerStyled paddingDesktop={"150px 0"} padding={"50px 0"} image={bibleImage}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>ARK</TitleStyled>
    </HeroImageContainerStyled>

    <PageContainer>
      <PageHeadingStyled>Bestuur</PageHeadingStyled>
      <p style={{fontStyle: "italic", color: "#5b6070", margin: "0 0 2rem 0"}}>
        'Wie de belangrijkste wil zijn, moet de minste van allemaal willen zijn en ieders dienaar'
      </p>
      <LeaderShipGridStyled>
        <Leadership name={"John van der Dussen"} position={"Voorzitter"} image={john}/>
        {/*<Leadership name={"Gijsbertus van Hattem"} position={"Penningmeester"} image={gijsbertus}/>*/}
        <Leadership name={"Jean-Marie Houben"} position={"Secretaris"} image={jeanmarie}/>
        {/*<Leadership name={"Annie Walscharts"} position={"Oecumenisch middaggebed"} image={annie}/>*/}
        <Leadership name={"Lieven Gorissen"} position={"Hoofdredacteur, opstellen en publicatie ARK-berichten"} image={lieven}/>
        {/*<Leadership name={"Gunda Wilckens"} position={""} image={gunda}/>*/}
        {/*<Leadership name={"Vader Barnabas"} position={""} image={profile}/>*/}
        <Leadership name={"Embrecht van Groesen"} position={"Oecumenisch middaggebed"} image={embrecht}/>
        {/*<Leadership name={"Paul Van Uffelen"} position={"Website"} image={paul}/>*/}
        <Leadership name={"Freda Nkansah"} position={"Penningmeester"} image={freda}/>
        <Leadership name={"Marian Knetemann"} position={""} image={marian}/>
        <Leadership name={"Claudia Lochner"} position={""} image={claudia}/>
        <Leadership name={"Ninia Lucas"} position={""} image={ninia}/>
        <Leadership name={"Faith Olumobi"} position={""} image={faith}/>
      </LeaderShipGridStyled>
    </PageContainer>
  </Layout>
)

export default SecondPage
