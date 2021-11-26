import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.div`
  background: #31333b;
  border-bottom: 1px #707176 solid;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
  }
`
const HeaderDivStyled = styled.div`
  padding: 0 1.0875rem;
  
  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    
    div:nth-child(2) {
      text-align: center;
      flex: 1 1 0px;
    }
    
    h1{
     margin: auto;
     width: 7rem;
    } 
 
  }
`

const NavStyled = styled.div`
  display: ${props => props.display};
  font-family: Montserrat;
  font-size: 0.7rem;
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
    padding: 0.5rem 0.5rem 0.5rem 0rem;
  }
  
  a{
    text-decoration: none;
    color: gray;
  }
  a:hover{
    text-decoration: none;
    cursor: pointer;
    background:#2a2c33;
    transition: 0.3s;
  }
  a:hover{
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    margin-right: 7rem;

    ul{
      display: flex;  
      justify-content: center;
    }
    
    li{
      padding: 0 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-top: none;
      border-right: 1px solid #707176;
      
      a{
        color: white;
      }
    }
     
    a:hover{
      text-decoration: none;
      cursor: pointer;
      background:inherit;
      color: gray;

    
    a{
      transition: 0.7s;
    }
  } 
    li:last-child{
      border-top: none;
      border-right: none;
    }
  } 
`

NavStyled.defaultProps = {
  display: "visible",
}

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <HeaderDivStyled
      style={{
        margin: `0 auto`,
        //maxWidth: 960,
        padding: `0 1.0875rem`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <NavStyled>
        <ul id="navigation">
          <li><Link to="/" activeStyle={{ color: "#d14f42" }}>Home</Link></li>
          <li><Link to="/bestuur/" activeStyle={{ color: "#d14f42" }}>Bestuur</Link></li>
          <li><Link to="/onze-gemeenschap/" activeStyle={{ color: "#d14f42" }}>Onze gemeenschap</Link></li>
          <li><Link to="/links/" activeStyle={{ color: "#d14f42" }}>Handige links</Link></li>
          <li><Link to="/oikumene/" activeStyle={{ color: "#d14f42" }}>Oikumene</Link></li>
          <li><Link to="/#contact" activeStyle={{ color: "#d14f42" }}>Contact</Link></li>
        </ul>
      </NavStyled>
    </HeaderDivStyled>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
