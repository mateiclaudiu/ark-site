import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "styled-components"

import communityImage from "../images/community_q_10.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ButtonStyled,
  HeroImageContainerStyled,
  ItalicTitleStyled,
  LinkBlockStyled,
  TitleStyled,
} from "../components/styled"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"

const SmallContactFormStyled = styled.form`
  margin-top: 2rem;

  input {
    width: 100%;
    border: 1px solid #eaebec;
  }

  textarea {
    width: 100%;
    border: 1px solid #eaebec;
  }
`

const JoinUsBannerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`

const JoinUsTextStyled = styled.div`
  color: white;
  background: #f7a145;
  padding: 3rem;
  height: 36rem;
  @media (min-width: 768px) {
    padding: 4rem;
    width: 50%;
  }
`

const JoinUsImageStyled = styled.div`
  background: url("https://my-religion.cmsmasters.net/wp-content/uploads/2016/05/Depositphotos_76136149_original-1.jpg");
  height: 36rem;
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
  @media (min-width: 768px) {
    width: 50%;
    background-position-y: inherit;
  }
`
const groupBy = key => array => {
  const newArray = []

  array.map(({ node }) => {
    return newArray.push(node)
  })

  return newArray.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
}

const OurCommunityPage = () => {

  const { churches } = useStaticQuery(graphql`
    {    
      churches: allKerkJson(sort: {fields: kerk, order: ASC}) {
        edges {
          node {
            kerk
            kerken {
              adres
              hoofdkerk
              naam
              plaats
            }
          }
        }
      }
    }
  `)

  return <Layout>
    <SEO title="Onze gemeenschap"/>
    <HeroImageContainerStyled paddingDesktop={"150px 0"} padding={"50px 0"}
                              image={communityImage}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>ARK</TitleStyled>
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Love, Care, Share</TitleStyled>
    </HeroImageContainerStyled>
    <PageContainer>
      <SectionTitle title={"Onze gemeenschap"} subtitle={"\"Trek heel de wereld rond en maak aan ieder schepsel het goede nieuws bekend\""}/>
      <p>Onze gemeenschap bestaat uit een totaal van 79 rooms-katholieke, 46 evangelische, 5 orthodoxe, 3 VPKB, 1 anglicaanse, 1 lutherse en 1 DEGPA lidkerk/parochie. In totaal 136 lidkerken en parochies.</p>
      {
        churches.edges.map(({ node }) => (
          <div key={node.kerk}>
            {node.url ? <TitleStyled fontSize={"1rem"}><a href={node.url}>{node.kerk}</a></TitleStyled> : <TitleStyled fontSize={"1rem"}>{node.kerk}</TitleStyled>}
            {
              node.kerken.map((kerk) => (
                  <LinkBlockStyled>

                     - {kerk.naam}, {kerk.adres}, {kerk.plaats}

                  </LinkBlockStyled>
                ),
              )
            }
          </div>
        ))
      }
    </PageContainer>
    <JoinUsBannerStyled>
      <JoinUsImageStyled></JoinUsImageStyled>
      <JoinUsTextStyled id="contact">
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Wenst u meer info over de ARK?</TitleStyled>
        <TitleStyled fontSize={"1.5rem"} color={"white"}>Contacteer ons!</TitleStyled>
        <div>Wij nodigen u graag uit voor een nadere kennismaking.</div>
        <SmallContactFormStyled method="post" action="#">
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Naam</ItalicTitleStyled></label>
            <div><input type="text" name="name" id="name" width="30rem"/>
            </div>
          </div>
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
            <div><input type="email" name="email" id="email"/>
            </div>
          </div>
          {/*<div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Onderwerp</ItalicTitleStyled></label>
            <div><input type="text" name="subject" id="subject"/>
            </div>
          </div>*/}
          <div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Bericht</ItalicTitleStyled></label>

            <div><textarea name="message" id="message" rows="5"/>
            </div>
          </div>
          <ButtonStyled type="submit">Stuur</ButtonStyled>
        </SmallContactFormStyled>

      </JoinUsTextStyled>
    </JoinUsBannerStyled>
  </Layout>
}

export default OurCommunityPage
