import { HelloContainerStyled, ItalicTitleStyled, SectionStyled, TitleStyled } from "./styled"
import React from "react"

export const SectionTitle = ({title, subtitle}) => (
  <SectionStyled>
    <TitleStyled fontSize={"2.5em"} color={"black"}>{title}</TitleStyled>
    <ItalicTitleStyled fontSize={"1.1em"} color={"#707176"}>{subtitle}</ItalicTitleStyled>
  </SectionStyled>
)
