"use client"

import styled from "styled-components"
import {logoStripe, textColor} from "./colors"

// Gedeelde, ingetogen stijl voor de events-sectie op de homepage.
export const eventsBorder = "#e4e4e4"
export const mutedText = "#5b6070"

export const EventsHeadingStyled = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${textColor};
  margin: 4rem 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #d6dae1;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 4.5rem;
    height: 3px;
    background: ${logoStripe};
  }

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`

export const PanelStyled = styled.div`
  background: white;
  border: 1px solid ${eventsBorder};
  border-radius: 4px;
`

export const SmallLabelStyled = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8a8f9c;
`

// Zelfde kopstijl, voor gebruik buiten de events-sectie.
export const PageHeadingStyled = EventsHeadingStyled
