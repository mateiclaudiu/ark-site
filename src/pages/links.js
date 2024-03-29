import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {LinksContainer} from "../components/links"

const LinksPage = () => {
  const { websites } = useStaticQuery(graphql`
    {    
      websites: allLinksJson {
        edges {
          node {
            id
            links {
              title
              url
            }
            groupTitle
          }
        }
      }
    }
  `)

  return <Layout>
    <SEO title="Handige Links"/>
    <PageContainer>
      <SectionTitle title={"Handige links"} subtitle={"\"Trek heel de wereld rond en maak aan ieder schepsel het goede nieuws bekend\""}/>
      {websites.edges.map(({ node }) => (
        <LinksContainer groupTitle={node.groupTitle} links={node.links}/>
      ))}
      <div style={{ fontStyle:"italic"}}>
        Had u graag uw website hier vermeld gezien? Of juist liever niet? Of zag u een fout?
        Neem dan gerust contact met ons en wij zullen het nodige doen.
        <br/>
        <br/>
        De ARK kan niet verantwoordelijk gesteld worden voor foutieve links, noch voor de inhoud van de vermelde links.
        Dat wij de links hier vermelden wil niet zeggen dat wij altijd met de inhoud instemmen.
      </div>
    </PageContainer>
  </Layout>
}

export default LinksPage
