"use client"

import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Layout from "../components/layout"
import {PageContainer} from "../components/page-container"
import {RichText} from "../components/rich-text"
import {formatDate} from "../components/news"
import {SmallLabelStyled, mutedText} from "../components/events-styled"
import {activeColor, textColor} from "../components/colors"

const ArticleStyled = styled.article`
  max-width: 44rem;
  margin: 0 auto;
  padding: 3rem 0 4rem;

  h1 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: clamp(1.6rem, 5vw, 2.3rem);
    line-height: 1.25;
    color: ${textColor};
    margin: 0.75rem 0 1rem 0;
  }
`

const BackLinkStyled = styled(Link)`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${activeColor};
`

const LeadStyled = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 600;
  color: #2b2f38;
  margin: 1.5rem 0 2rem 0 !important;
`

const FigureStyled = styled.figure`
  margin: 1.5rem 0 0 0;

  img {
    display: block;
    width: 100%;
    max-height: 32rem;
    object-fit: contain;
    background: #eceef1;
    border-radius: 3px;
    margin: 0;
  }
`

const ArticlePage = ({article}) => (
  <Layout>
    <PageContainer>
      <ArticleStyled>
        <BackLinkStyled href="/nieuws/">← Alle nieuws</BackLinkStyled>
        <h1>{article.title}</h1>
        <SmallLabelStyled>
          {formatDate(article.date)}{article.author ? ` · ${article.author}` : ""}
        </SmallLabelStyled>
        {article.image && (
          <FigureStyled>
            <img src={article.image.src} alt={article.image.alt || ""}/>
          </FigureStyled>
        )}
        <LeadStyled>{article.lead}</LeadStyled>
        <RichText value={article.body}/>
        <p style={{marginTop: "3rem", color: mutedText}}>
          <BackLinkStyled href="/nieuws/">← Alle nieuws</BackLinkStyled>
        </p>
      </ArticleStyled>
    </PageContainer>
  </Layout>
)

export default ArticlePage
