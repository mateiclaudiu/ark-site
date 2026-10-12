"use client"

import NextLink from "next/link"
import {usePathname} from "next/navigation"
import React from "react"
import styled from "styled-components"
import logo from "../images/Logo ARK nieuw 19-10-21 klein.jpg"
import {activeColor, background, logoStripe, textColor} from "./colors";

const HeaderStyled = styled.div`
  background: ${background};
  border-bottom: 3px solid transparent;
  border-image: ${logoStripe} 1;
  position: sticky;
  top: 0;
  z-index: 999;

  @media (min-width: 768px) {
    position: fixed;
    width: 100%;
  }
`

// Mobiel: logo links, menuknop rechts, menu klapt eronder open (pure CSS, via een checkbox).
// Desktop: logo links, menu-items in één rij.
const HeaderDivStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 0.5rem 1.0875rem;

  img {
    display: block;
    width: 3rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 0 1.0875rem;
    margin: 0 auto;

    img {
      width: 4rem;
    }

    & > nav {
      text-align: center;
      flex: 1 1 0px;
    }
  }
`

const MenuToggleStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;

  @media (min-width: 768px) {
    display: none;
  }
`

const MenuButtonStyled = styled.label`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.8rem;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${textColor};
  border: 1px solid #dfe2e7;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;

  /* Drie streepjes die bij openen een kruisje worden. */
  span {
    position: relative;
    width: 1.1rem;
    height: 2px;
    background: currentColor;
    transition: background 0.2s;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transition: transform 0.2s;
  }

  span::before {
    transform: translateY(-6px);
  }

  span::after {
    transform: translateY(6px);
  }

  input:checked + & span {
    background: transparent;
  }

  input:checked + & span::before {
    transform: rotate(45deg);
  }

  input:checked + & span::after {
    transform: rotate(-45deg);
  }

  input:focus-visible + & {
    outline: 2px solid ${activeColor};
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const NavStyled = styled.nav`
  grid-column: 1 / -1;
  display: none;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
  color: ${textColor};
  background: ${background};

  input:checked ~ & {
    display: block;
  }

  ul {
    margin: 0.5rem 0 0 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    border-top: 1px solid #ececec;
  }

  a {
    display: block;
    padding: 0.85rem 0;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: ${textColor};
  }

  @media (min-width: 768px) {
    display: block;
    margin-right: 7rem;
    font-size: 0.76rem;

    ul {
      display: flex;
      justify-content: center;
      margin: 0;
    }

    li {
      padding: 0 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-top: none;
    }

    a {
      display: inline;
      padding: 0;
      font-size: inherit;
      letter-spacing: normal;
      transition: color 0.3s;
    }

    a:hover {
      color: ${activeColor};
    }
  }
`

// Gatsby's Link met activeStyle: enkel actief bij exact dezelfde URL (Gatsby-pagina's
// eindigen op "/", dus "/bijzondere-events" en "/#contact" zijn nooit actief).
const Link = ({to, activeStyle, children}) => {
    const pathname = usePathname() || "/"
    const current = pathname.endsWith("/") ? pathname : pathname + "/"
    const isCurrent = current === to
    return (
        <NextLink href={to} aria-current={isCurrent ? "page" : undefined}
                  className={isCurrent ? "" : undefined} style={isCurrent ? activeStyle : undefined}>
            {children}
        </NextLink>
    )
}

const Header = () => (
    <HeaderStyled>
        <HeaderDivStyled>
            <NextLink href="/" aria-label="Naar de homepagina">
                <img src={logo} alt="logo ark"/>
            </NextLink>
            <MenuToggleStyled type="checkbox" id="menu-toggle" aria-label="Menu openen of sluiten"/>
            <MenuButtonStyled htmlFor="menu-toggle" aria-hidden="true">
                <span/>Menu
            </MenuButtonStyled>
            <NavStyled>
                <ul id="navigation">
                    <li><Link to="/" activeStyle={{color: activeColor}}>Home</Link></li>
                    <li><Link to="/bijzondere-events" activeStyle={{color: activeColor}}>Bijzondere events</Link></li>
                    <li><Link to="/bestuur/" activeStyle={{color: activeColor}}>Bestuur</Link></li>
                    <li><Link to="/onze-gemeenschap/" activeStyle={{color: activeColor}}>Onze gemeenschap</Link></li>
                    <li><Link to="/links/" activeStyle={{color: activeColor}}>Handige links</Link></li>
                    <li><Link to="/#contact" activeStyle={{color: activeColor}}>Contact</Link></li>
                </ul>
            </NavStyled>
        </HeaderDivStyled>
    </HeaderStyled>
)

export default Header
