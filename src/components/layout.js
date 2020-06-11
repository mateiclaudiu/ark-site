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

const FooterBlockStyled = styled.div`
  margin-bottom:1rem;
`

const FooterBlockTitleStyled = styled.div`
  font-weight: 600;
  color:white;
 `

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
          <FooterBlockStyled>
            <FooterBlockTitleStyled >Secretariaat (correspondentie)</FooterBlockTitleStyled>
            <div>ARK VZW p/a Jean-Marie Houben</div>
            <div>Turkooisstraat 15</div>
            <div>2600 Berchem</div>
          </FooterBlockStyled>
          <FooterBlockStyled>
            <FooterBlockTitleStyled>Zetel</FooterBlockTitleStyled>
            <div>ARK VZW</div>
            <div>Sint-Pieterstraat 1</div>
            <div>2000 ANTWERPEN</div>
            <div>ondernemingsnummer 865.324.528</div>
            <div>gerechtelijk arrondissement Antwerpen</div>
          </FooterBlockStyled>
          <FooterBlockStyled>
            <FooterBlockTitleStyled>Bankrekening:</FooterBlockTitleStyled>
            <div>IBAN: BE92 7895 0926 0223</div>
            <div>BIC: GKCCBEBB</div>
            <div>ARK VZW</div>
            <div>Clementinastraat 20</div>
            <div>2018 ANTWERPEN</div>
          </FooterBlockStyled>
          <FooterBlockStyled>
            De Antwerpse Raad van Kerken is verbonden met de internationale oecumenische beweging.
          </FooterBlockStyled>
          <div style={{ marginTop: `2rem`, color: `white` }}>
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
