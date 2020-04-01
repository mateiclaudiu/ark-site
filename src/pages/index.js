import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { IntroStyled, ItalicTitleStyled, TitleStyled } from "../components/styled"
import { Hello } from "../components/hello"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Intro/>
    <Feature/>
    <div style={{ maxWidth: 960, margin: `auto` }}>
      <Hello/>
    </div>

    {/*    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
