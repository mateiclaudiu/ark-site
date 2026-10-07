"use client"

import React from "react"
import { HeroImageContainerStyled, ItalicTitleStyled, TitleStyled } from "./styled"

// Donkerder achter de tekst in het midden, lichter aan de randen: de foto blijft
// helder en de witte tekst leesbaar.
const HERO_OVERLAY = "radial-gradient(ellipse 70% 60% at center, rgba(10, 25, 50, 0.5) 0%, rgba(10, 25, 50, 0.28) 60%, rgba(10, 25, 50, 0.12) 100%)"

const HeroImage = ({image}) => (
  <HeroImageContainerStyled image={image} overlay={HERO_OVERLAY} backgroundPositionY={"center"}>
    <TitleStyled fontSize={"3em"} color={"white"}>De Antwerpse Raad van Kerken</TitleStyled>
    <ItalicTitleStyled fontSize={"1.1em"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
    <ItalicTitleStyled fontSize={"0.9em"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
    <TitleStyled fontSize={"1.5em"} color={"white"}>verbindt al meer dan 50 jaar de diverse kerken in Antwerpen</TitleStyled>
  </HeroImageContainerStyled>
)

export default HeroImage
