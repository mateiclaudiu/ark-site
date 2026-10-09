"use client"

import React from "react"
import NextLink from "next/link"
import styled from "styled-components"
import {textColor, color2, color3, color5} from "./colors";
import {churchStats} from "../utils/church-stats";

const FeatureContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  border-bottom: 1px solid #e4e4e4;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

// Het hele blok is de link; de kleur zit enkel nog in de lijn bovenaan en in de linktekst.
const FeatureBlockStyled = styled(NextLink)`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2rem 2rem;
  border-top: 4px solid ${props => props.$accent};
  border-bottom: 1px solid #e4e4e4;
  color: ${textColor};
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7f8fa;
  }

  @media (min-width: 768px) {
    &:nth-child(odd) {
      border-right: 1px solid #e4e4e4;
    }
  }
  @media (min-width: 1200px) {
    border-bottom: none;
    border-right: 1px solid #e4e4e4;
    padding: 2.5rem 2.25rem 2.25rem;

    &:last-child {
      border-right: none;
    }
  }
`

const FeatureTitleStyled = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.35rem;
  line-height: 1.25;
  color: ${textColor};
  margin: 0 0 0.6rem 0;
`

const FeatureTextStyled = styled.p`
  color: #5b6070;
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0 0 1.5rem 0 !important;
  flex: 1;
`

const FeatureActionStyled = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${textColor};

  span {
    color: ${props => props.$accent};
    display: inline-block;
    margin-left: 0.4rem;
    transition: transform 0.2s;
  }

  a:hover & span {
    transform: translateX(3px);
  }
`

// Gatsby lost "#events" op tegen de huidige pagina ("/#events").
const FeatureBlock = ({title, text, color, link, buttonText = "Ontdek meer"}) => (
  <FeatureBlockStyled href={link.startsWith("#") ? "/" + link : link} $accent={color}>
    <FeatureTitleStyled>{title}</FeatureTitleStyled>
    <FeatureTextStyled>{text}</FeatureTextStyled>
    <FeatureActionStyled $accent={color}>{buttonText}<span aria-hidden="true">→</span></FeatureActionStyled>
  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={textColor} title={"Onze gemeenschap"}
                  text={`${churchStats.genootschappen} lidkerken met samen ${churchStats.totaal} plaatselijke kerken en parochies.`}
                  link={"/onze-gemeenschap"}/>
    <FeatureBlock color={color3} title={"Bijzondere events"}
                  text={"Vieringen en activiteiten buiten het vaste ritme."}
                  link={"/bijzondere-events"}/>
    <FeatureBlock color={color2} title={"ARK's events"}
                  text={"Stadsgebed, middagpauzegebed en de geplande data."}
                  buttonText={"Ontdek alle events"} link={"#events"}/>
    <FeatureBlock color={color5} title={"Nog vragen?"}
                  text={"Contacteer ons, we helpen u graag verder."}
                  buttonText={"Contacteer ons"} link={"/#contact"}/>
  </FeatureContainerStyled>
)

export default Feature
