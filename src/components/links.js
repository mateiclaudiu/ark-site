import React from "react"
import { AStyled, AStyledContainer, LinkBlockStyled, TitleStyled } from "./styled"

export const LinksContainer = ({groupTitle, links}) => (
  <LinkBlockStyled>
    <TitleStyled fontSize={"1rem"} color={"black"}>{groupTitle}</TitleStyled>
    {
      links.map(link => (
        <AStyledContainer key={link.url}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={{textTransform: "none"}}>{link.title}</a>
        </AStyledContainer>
      ))
    }
  </LinkBlockStyled>
)
