import React from "react"
import { AStyled, AStyledContainer, LinkBlockStyled, TitleStyled } from "./styled"

export const LinksContainer = ({groupTitle, links}) => (
  <LinkBlockStyled>
    <TitleStyled fontSize={"1rem"} color={"black"}>{groupTitle}</TitleStyled>
    {
      links.map(link => (
        <AStyledContainer>
          <a href={link.url} target="_blank">{link.title}</a>
        </AStyledContainer>
      ))
    }
  </LinkBlockStyled>
)
