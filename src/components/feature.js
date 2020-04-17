import { FeatureBlockStyled, FeatureContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import Layout from "./layout"
import React from "react"
import { Link } from "gatsby"


const FeatureBlock = ({title, subtitle, color, link})=>(
  <FeatureBlockStyled backgroundColor={color}>
    <TitleStyled fontSize={"30px"} color={"white"}>{title}</TitleStyled>
    <ItalicTitleStyled fontSize={"17px"} color={"white"}>{subtitle}</ItalicTitleStyled>
    <Link to={link}><TitleStyled style={{ lineHeight: `50px` }} fontSize={"12px"} color={"white"}>ONTDEK MEER</TitleStyled></Link>
  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={"#424555"} title={"Onze gemeenschap"} subtitle={"Donec facilisis fermentum sem viverra"} link={"/onze-gemeenschap"}/>
    <FeatureBlock color={"#a2473e"} title={"Onze missie"} subtitle={"Donec facilisis fermentum sem viverra"}/>
    <FeatureBlock color={"#d14f42"} title={"Doe met ons mee!"} subtitle={"Donec facilisis fermentum sem viverra"} link={"/onze-gemeenschap#doe-met-ons-mee"}/>
    <FeatureBlock color={"#f7a145"} title={"ARK's overtuigingen"} subtitle={"Donec facilisis fermentum sem viverra"}/>
  </FeatureContainerStyled>
)

export default Feature
