"use client"

import React from "react"
import styled from "styled-components"
import {textColor} from "./colors";
import {PanelStyled, mutedText} from "./events-styled";

export const LeaderShipGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
`

const LeaderShipCardStyled = styled(PanelStyled)`
  text-align: center;

  &:hover img {
    transform: scale(1.04);
  }
  padding: 1.5rem 0.75rem 1.25rem;

  @media (min-width: 768px) {
    padding: 2rem 1.25rem 1.5rem;
  }

  img {
    display: block;
    width: 6.5rem;
    height: 6.5rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #dfe2e7;
    transition: transform 0.3s ease;
    margin: 0 auto 1rem auto;

    @media (min-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
  }
`

const LeaderShipNameStyled = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${textColor};
  line-height: 1.3;
`

const LeaderShipPositionStyled = styled.div`
  font-size: 0.85rem;
  line-height: 1.4;
  color: ${mutedText};
  margin-top: 0.3rem;
`

export const Leadership = ({name, position, image}) => (
  <LeaderShipCardStyled>
    <img src={image} alt={position ? `${name}, ${position}` : name}/>
    <LeaderShipNameStyled>{name}</LeaderShipNameStyled>
    {position && <LeaderShipPositionStyled>{position}</LeaderShipPositionStyled>}
  </LeaderShipCardStyled>
)
