"use client"

import React from "react"
import Layout from "../components/layout"
import {PageContainer} from "../components/page-container"
import {SectionTitle} from "../components/section-title"
import {NewsCard} from "../components/news"
import {mutedText} from "../components/events-styled"

const NewsPage = ({articles}) => (
  <Layout>
    <PageContainer>
      <div style={{paddingBottom: "4rem"}}>
        <SectionTitle title={"Nieuws"} subtitle={""}/>
        {articles.map(article => <NewsCard key={article.slug} article={article}/>)}
        {articles.length === 0 && <p style={{color: mutedText}}>Er zijn momenteel geen artikels.</p>}
      </div>
    </PageContainer>
  </Layout>
)

export default NewsPage
