import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IntroStyled, ItalicTitleStyled, TitleStyled } from "./styled"

const Intro = ({image}) => (
  <IntroStyled image={image}>
    <TitleStyled fontSize={"3em"} color={"white"}>De Antwerpse Raad van Kerken</TitleStyled>
    <ItalicTitleStyled fontSize={"1.1em"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
    <ItalicTitleStyled fontSize={"0.9em"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
    <TitleStyled fontSize={"1.5em"} color={"white"}>de Antwerpse Raad van Kerken viert zijn 50ste jaar jubileum</TitleStyled>
  </IntroStyled>
)

export default Intro
