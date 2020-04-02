import { HelloContainerStyled, ItalicTitleStyled, SectionStyled, TitleStyled } from "./styled"
import React from "react"

export const SectionTitle = ({title, subtitle}) => (
  <SectionStyled>
    <TitleStyled fontSize={"3rem"} color={"black"}>{title}</TitleStyled>
    <ItalicTitleStyled fontSize={"1.1rem"} color={"#707176"}>{subtitle}</ItalicTitleStyled>
  </SectionStyled>
)
