import React from "react"
import { LinkBlockStyled, TitleStyled } from "./styled"

export const LinksContainer = ({groupTitle, links}) => (
  <LinkBlockStyled>
    <TitleStyled fontSize={"1rem"} color={"black"}>{groupTitle}</TitleStyled>
    {
      links.map(link => (
        <div>
          <a href={link.url} target="_blank">{link.title}</a>
        </div>
      ))
    }
  </LinkBlockStyled>
)
