"use client"

import React from "react"
import Link from "next/link"
import styled from "styled-components"
import {textColor} from "./colors"
import {getMonthName} from "./month-name"
import {PanelStyled, SmallLabelStyled, mutedText} from "./events-styled"

// "2026-10-02" → "2 oktober 2026"
export const formatDate = iso => {
  if (!iso) return ""
  const [y, m, d] = iso.split("-").map(Number)
  return `${d} ${getMonthName(m - 1)} ${y}`
}

const NewsCardStyled = styled(PanelStyled)`
  margin-bottom: 1rem;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 22px rgba(26, 58, 105, 0.1);
  }

  a {
    display: block;
    color: inherit;
  }

  @media (min-width: 768px) {
    a {
      display: grid;
      grid-template-columns: ${props => (props.$hasImage ? "12rem 1fr" : "1fr")};
    }
  }
`

const NewsThumbStyled = styled.img`
  display: block;
  width: 100%;
  height: 11rem;
  object-fit: cover;
  margin: 0;

  @media (min-width: 768px) {
    height: 100%;
    min-height: 11rem;
  }
`

const NewsTextStyled = styled.div`
  padding: 1.25rem 1.5rem 1.4rem;

  h3 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.15rem;
    line-height: 1.35;
    color: ${textColor};
    margin: 0.35rem 0 0.5rem 0;
  }

  p {
    color: ${mutedText};
    line-height: 1.6;
    margin: 0 0 0.75rem 0 !important;
  }
`

const ReadMoreStyled = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${textColor};
`

export const NewsCard = ({article}) => (
  <NewsCardStyled $hasImage={Boolean(article.image)}>
    <Link href={`/nieuws/${article.slug}/`}>
      {article.image && <NewsThumbStyled src={article.image.thumb} alt={article.image.alt || ""} loading="lazy"/>}
      <NewsTextStyled>
        <SmallLabelStyled>{formatDate(article.date)}</SmallLabelStyled>
        <h3>{article.title}</h3>
        <p>{article.lead}</p>
        <ReadMoreStyled>Lees meer →</ReadMoreStyled>
      </NewsTextStyled>
    </Link>
  </NewsCardStyled>
)
