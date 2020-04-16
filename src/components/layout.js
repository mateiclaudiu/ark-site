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

const NavStyled = styled.div`
  display: ${props => props.display};
  font-family: Poppins;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  color:white;
  background:#31333b;

  ul{
    margin: 0;
  }
  
  li{
    border-top: 1px solid #707176;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
  
  a{
    text-decoration: none;
    color: gray;
  }
  li:hover{
    text-decoration: none;
    cursor: pointer;
    background:#2a2c33;
    transition: 0.3s;
  }
  
  @media (min-width: 768px) {
    display:none;
  } 
`

NavStyled.defaultProps = {
  display: "visible",
}

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
         // maxWidth: 960,
         // padding: `0 1.0875rem 1.45rem`,
        }}
      ><NavStyled>
        <ul id="navigation">
          <li><Link to="/wieiswie/">Wie is wie?</Link></li>
          <li><Link to="/links/">Handige links</Link></li>
        </ul>
      </NavStyled>
        <main>{children}</main>
        <FooterStyled>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.matei.be/" target="_blank">Matei</a> for ARK - last update {data.currentBuildDate.currentDate}
        </FooterStyled>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
