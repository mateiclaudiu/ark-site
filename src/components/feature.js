import { FeatureBlockStyled, FeatureContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import Layout from "./layout"
import React from "react"
import { Link } from "gatsby"


const FeatureBlock = ({title, subtitle, color, link})=>(
  <FeatureBlockStyled backgroundColor={color}>
    <TitleStyled fontSize={"30px"} color={"white"}>{title}</TitleStyled>
    <ItalicTitleStyled fontSize={"17px"} color={"white"}>{subtitle}</ItalicTitleStyled>
    <Link to={link} ><TitleStyled style={{ lineHeight: `50px` }} fontSize={"12px"} color={"white"}>ONTDEK MEER</TitleStyled></Link>
  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={"#424555"} title={"Onze gemeenschap"} subtitle={""} link={"/onze-gemeenschap"}/>
    <FeatureBlock color={"#a2473e"} title={"Onze missie"} subtitle={""}/>
    <FeatureBlock color={"#d14f42"} title={"ARK's overtuigingen"} subtitle={""}/>
    <FeatureBlock color={"#f7a145"} title={"Nog vragen?"} subtitle={""} link={"/onze-gemeenschap#contact"}/>
  </FeatureContainerStyled>
)

export default Feature
