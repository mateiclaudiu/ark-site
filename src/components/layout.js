/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FooterStyled } from "./styled"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      },
      currentBuildDate {
        currentDate
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <FooterStyled>
          <div>
            <div style={{fontWeight: `600`}}>ARK VZW</div>
            <div>Sint-Pieterstraat 1</div>
            <div>2000 ANTWERPEN</div>
            <div>ondernemingsnummer 865.324.528</div>
            <div>gerechtelijk arrondissement Antwerpen</div>
          </div>
          <div style={{marginTop: `1rem`}}>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.matei.be/" target="_blank">Matei</a> for ARK - last update {data.currentBuildDate.currentDate}
          </div>
        </FooterStyled>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
