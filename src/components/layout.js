/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FooterStyled } from "./styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
         // maxWidth: 960,
         // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <FooterStyled>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.matei.be/" target="_blank">Matei</a> for ARK - last build {new Date().toDateString()} {new Date().toLocaleTimeString()}
        </FooterStyled>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
