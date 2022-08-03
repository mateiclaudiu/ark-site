import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/Logo ARK nieuw 19-10-21 klein.jpg"
import {activeColor, background, textColor} from "./colors";

const HeaderStyled = styled.div`
  background: ${background};

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

const NavStyled = styled.div `
  display: ${props => props.display};
  font-family: Montserrat;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color:${textColor};
  background:${background};

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
      
      a{
        color: ${textColor};
      }
    }
     
    a:hover{
      text-decoration: none;
      cursor: pointer;
      background:inherit;
      color: ${activeColor};

    
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
const Header = ({siteTitle}) => {

    return (
        <HeaderStyled>
            <HeaderDivStyled
                style={{
                    margin: `0 auto`,
                    //maxWidth: 960,
                    padding: `0 1.0875rem`,
                }}
            >
                <img src={logo} alt="logo ark" style={{width: "4rem", margin: 0}}/>
                <NavStyled>
                    <ul id="navigation">
                        <li><Link to="/" activeStyle={{color: activeColor}}>Home</Link></li>
                        <li><Link to="/evenementen" activeStyle={{color: activeColor}} style={{ color: "#D4AF37" }}>50 jaar jubileum</Link></li>
                        <li><Link to="/#events" activeStyle={{color: activeColor}}>Events</Link></li>
                        <li><Link to="/bestuur/" activeStyle={{color: activeColor}}>Bestuur</Link></li>
                        <li><Link to="/onze-gemeenschap/" activeStyle={{color: activeColor}}>Onze gemeenschap</Link></li>
                        <li><Link to="/links/" activeStyle={{color: activeColor}}>Handige links</Link></li>
                        {/*<li><Link to="/oikumene/" activeStyle={{ color: "#d14f42" }}>Oikumene</Link></li>*/}
                        <li><Link to="/#contact" activeStyle={{color: activeColor}}>Contact</Link></li>
                    </ul>
                </NavStyled>
            </HeaderDivStyled>
        </HeaderStyled>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
