import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
    padding: 0.5rem 0.5rem 0.5rem 0rem;
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
     
    li:hover{
      text-decoration: none;
      cursor: pointer;
      background:inherit;
    
    a{
      color: gray;
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
  <header
    style={{
      background: `#31333b`,
      // marginBottom: `1.45rem`,
    }}
  >
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wieiswie/">Wie is wie?</Link></li>
          <li><Link to="/links/">Handige links</Link></li>
        </ul>
      </NavStyled>
    </HeaderDivStyled>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
