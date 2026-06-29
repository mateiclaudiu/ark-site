import React from "react"
import { AStyled, AStyledContainer, LinkBlockStyled, TitleStyled } from "./styled"

export const LinksContainer = ({groupTitle, links}) => (
  <LinkBlockStyled>
    <TitleStyled fontSize={"1rem"} color={"black"}>{groupTitle}</TitleStyled>
    {
      links.map(link => (
        <AStyledContainer key={link.url} style={{marginBottom: "0.35rem"}}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={{
            textTransform: "none",
            fontSize: "0.95rem",
            color: "#15607f",
            textDecoration: "underline",
          }}>{link.title}</a>
        </AStyledContainer>
      ))
    }
  </LinkBlockStyled>
)
