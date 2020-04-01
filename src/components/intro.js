import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IntroStyled, ItalicTitleStyled, TitleStyled } from "./styled"

const Intro = () => (
  <IntroStyled>
    <ItalicTitleStyled fontSize={"1.1em"} color={"white"}>Laat hen allen één zijn Vader...</ItalicTitleStyled>
    <ItalicTitleStyled fontSize={"0.9em"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
    <TitleStyled fontSize={"6em"} color={"white"}>Het Orgaan</TitleStyled>
    <TitleStyled fontSize={"1.5em"} color={"white"}>Love, Care, Share</TitleStyled>
  </IntroStyled>
)

export default Intro
