"use client"

import React from "react"

import linksJson from "../data/links.json"
import Layout from "../components/layout"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {LinksContainer} from "../components/links"

const LinksPage = () => {
  const websites = {edges: linksJson.map((node, i) => ({node: {...node, id: String(i)}}))}

  return <Layout>
    <PageContainer>
      <SectionTitle title={"Handige links"} subtitle={"\"Ga uit in de hele wereld en maak aan ieder schepsel het goede nieuws bekend\""}/>
      {websites.edges.map(({ node }) => (
        <LinksContainer key={node.id} groupTitle={node.groupTitle} links={node.links}/>
      ))}
      <div style={{ fontStyle:"italic"}} data-reveal="">
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
