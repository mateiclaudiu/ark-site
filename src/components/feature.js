import { FeatureBlockStyled, FeatureContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import Layout from "./layout"
import React from "react"
import { Link } from "gatsby"
import {activeColor, background, textColor, color2, color3, color5} from "./colors";


const FeatureBlock = ({title, subtitle, color, link,  buttonText = <>ONTDEK MEER</>}) =>(
  <FeatureBlockStyled backgroundColor={color}>
      <TitleStyled fontSize={"30px"} color={"white"}>{title}</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={"white"}>{subtitle}</ItalicTitleStyled>
      <Link to={link}><TitleStyled style={{lineHeight: `50px`}} fontSize={"12px"}
                                   color={"white"}>{buttonText}</TitleStyled></Link>
  </FeatureBlockStyled>
)

const Feature = () => (
  <FeatureContainerStyled>
    <FeatureBlock color={textColor} title={"Onze gemeenschap"} subtitle={""} link={"/onze-gemeenschap"}/>
    <FeatureBlock color={color3} title={"Onze missie"} subtitle={""}/>
    <FeatureBlock color={color2} title={"ARK's 50 jaar jubileum"} buttonText={"ONTDEK ALLE EVENTS"} link={"/ark-50-jaar-jubileum"}/>
    <FeatureBlock color={color5} title={"Nog vragen?"} subtitle={""} link={"/onze-gemeenschap#contact"}/>
  </FeatureContainerStyled>
)

export default Feature
