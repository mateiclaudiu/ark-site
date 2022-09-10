import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {TitleStyled,} from "../components/styled"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {color3} from "../components/colors";
import {Subscribe} from "../components/subscribe";

const SmallContactFormStyled = styled.form`
  margin-top: 2rem;

  input {
    width: 100%;
    border: 1px solid #eaebec;
  }

  textarea {
    width: 100%;
    border: 1px solid #eaebec;
  }
`

const JoinUsBannerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`

const JoinUsTextStyled = styled.div`
  color: white;
  background: #f7a145;
  padding: 3rem;
  height: 36rem;
  @media (min-width: 768px) {
    padding: 4rem;
    width: 50%;
  }
`

const JoinUsImageStyled = styled.div`
  background: url("https://my-religion.cmsmasters.net/wp-content/uploads/2016/05/Depositphotos_76136149_original-1.jpg");
  height: 36rem;
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
  @media (min-width: 768px) {
    width: 50%;
    background-position-y: inherit;
  }
`
const groupBy = key => array => {
    const newArray = []

    array.map(({node}) => {
        return newArray.push(node)
    })

    return newArray.reduce((objectsByKeyValue, obj) => {
        const value = obj[key]
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
        return objectsByKeyValue
    }, {})
}

const OurCommunityPage = () => {

    const {churches} = useStaticQuery(graphql`
    {    
      churches: allKerkJson(sort: {fields: kerk, order: ASC}) {
        edges {
          node {
            kerk
            kerken {
              adres
              hoofdkerk
              naam
              plaats
            }
          }
        }
      }
    }
  `)

    let academischeZetting = <>
        <TitleStyled fontSize={"1.6rem"} color={color3}>{"Academische zitting"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"wanneer: : vrijdag 14 oktober van 15.00 tot 18.00 uur"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"waar: Theologisch Pastoraal Centrum, zaal O, Groenenborgerlaan 149, 2020 Antwerpen"}</TitleStyled>
        <p>
            15:00 - 15:15 uur: Inleiding door John van der Dussen (voorzitter ARK)<br/>
            15:15 - 15:45 uur: hoofdspreker: Frans Van den Brande (rooms-katholiek)<br/>
            15:45 - 16:05 uur: 2e spreker: prof. dr. Jelle Creemers (evangelisch)<br/>
            16:05 - 16:25 uur: 3e spreker: ds. Steven Fuite(protestants)<br/>
            16:25 - 16:40 uur: muzikaal intermezzo<br/>
            16:40 - 17:30 uur: panelgesprek met:<br/>
            <li>vertegenwoordiger rooms-katholieken: dr. Rik Hoet</li>
            <li>vertegenwoordiger orthodoxen</li>
            <li> vertegenwoordiger anglicanen: mgr. Dirk van Leeuwen </li>
            <li>vertegenwoordiger migrantenkerken: Blanche Etanda, moderator: Kelly Keasberry, journalist Tertio</li>
            <li>17:30 uur: receptie met een hapje</li>
        </p>
    </>;
    let jaarlijksGebed = <>{<>
        <TitleStyled fontSize={"1.6rem"}
                     color={color3}>{"Jaarlijkse gebedsdienst voor de eenheid onder de christenen"}</TitleStyled>
        <TitleStyled fontSize={"1rem"} color={"gray"}>{"wanneer: zondag 22 januari 15:00 tot 17:00 uur"}</TitleStyled>
        <TitleStyled fontSize={"1rem"} color={"gray"}>{"waar: Onze-Lieve-Vrouwekathedraal Antwerpen"}</TitleStyled>
        <p>Zoals ieder jaar, is er ook in 2023 op de 3e zondag van januari, de jaarlijkse gebedsdienst voor de eenheid
            onder de christenen.</p>
    </>}</>;
    let diaconaleNamiddag = <>{<>
        <TitleStyled fontSize={"1.6rem"}
                     color={color3}>{"Diaconale namiddag"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"wanneer: : zaterdag 11 maart van 15:00 tot 18:00 uur"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"waar: mogelijk in het Kerkschip"}</TitleStyled>
        <p>D.m.v. verschillende sprekers en een panel krijgt u een overzicht van wat er vanuit de diverse kerken
            allemaal wordt gedaan op het gebied van diaconie en aalmoezeniersdiensten. .</p>
    </>}</>;
    let jubileumfestival = <>{<>
        <TitleStyled fontSize={"1.6rem"}
                     color={color3}>{"Jubileumfestival"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"wanneer: zaterdag 3 juni van 13:00 tot 17:00 uur"}</TitleStyled>
        <TitleStyled fontSize={"1rem"}
                     color={"gray"}>{"waar: de Agora van de UA, de Ignatiuskapel van de UCSIA, Ontmoetingscentrum ‘Zomaar een dak’ en de protestantse kerk ‘De Brabantse Olijfberg’"}</TitleStyled>
        <p>Dit bijzonder evenement zal plaats vinden op 4 verschillende locaties in het centrum van Antwerpen: de Agora
            (centrale inkomhal) van de UA, de Ignatiuskapel van de UCSIA, Ontmoetingscentrum ‘Zomaar een dak’ en de
            protestantse kerk ‘De Brabantse Olijfberg’. <br/>
            Allemaal gelegen op een boogscheut van elkaar in de Antwerpse studentenbuurt. Er wordt een hele waaier van
            activiteiten voorzien, met diverse workshops, muziek, een ruilbeurs van boeken etc.</p>
    </>}</>;
    return <Layout>
        <SEO title="50 jaar jubileum"/>
        {/*<IntroStyled paddingDesktop={"350px 0"} padding={"200px 0"}*/}
        {/*             image={communityImage}>*/}
        {/*<ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>*/}
        {/*<ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>*/}
        {/*<TitleStyled fontSize={"3rem"} color={"white"}>ARK</TitleStyled>*/}
        {/*<TitleStyled fontSize={"1.5rem"} color={"white"}>Love, Care, Share</TitleStyled>*/}
        {/*</IntroStyled>*/}

        <PageContainer>
            <SectionTitle color={"#D4AF37"} title={"ARK 50 JAAR JUBILEUM"} subtitle={""}/>
            <p>Houd er rekening mee dat dit het voorloppige programma is. Er kunnen nog wijzigingen doorgevoerd
                worden.</p>

            {academischeZetting}
            <Subscribe/>
            {<>
                <TitleStyled fontSize={"1.6rem"} color={color3}>{"Fototentoonstelling"}</TitleStyled>

            </>}

            {jaarlijksGebed}
            {diaconaleNamiddag}
            {jubileumfestival}


        </PageContainer>
    </Layout>
}

export default OurCommunityPage
