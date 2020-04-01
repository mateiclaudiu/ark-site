import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Feature from "../components/feature"
import { FeatureBlockStyled, IntroStyled, ItalicTitleStyled, TitleStyled } from "../components/styled"
import { Hello } from "../components/hello"

const BannerStyled = styled.div`
  background-color: #424555;
  padding: 5%;
  width:30%;
  width: 100%;
  text-align:center;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;
  }  
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;

  }
`

const BannerImgStyled = styled.div`
  border-radius: 50%;
  //width: 30%;
  padding: 30px;
`


const BannerTextStyled = styled.div`
  //width: 70%;
   @media (min-width: 768px) {
      width: 100%;
    }  
  @media (min-width: 1200px) {
    width: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Intro/>
    <Feature/>
    <div style={{ maxWidth: 960, margin: `auto` }}>
      <Hello/>
    </div>
    <BannerStyled>
      <BannerImgStyled>
        <img src={"https://antwerpseraadvankerken.be/wp-content/uploads/2018/08/P1060743-150x150.jpg"} style={{ borderRadius: `50%`}}/>
      </BannerImgStyled>
      <BannerTextStyled>
        <TitleStyled fontSize={"30px"} color={"white"}>John Van Der Dussen</TitleStyled>
        <ItalicTitleStyled fontSize={"17px"} color={"#d14f42"}>Voorzitter</ItalicTitleStyled>
        <p style={{
          color: `darkgray`,
          marginTop: `10px`,
        }}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </BannerTextStyled>
    </BannerStyled>

    {/*    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
