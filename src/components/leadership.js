import React from "react"
import { ItalicTitleStyled, LeaderShipStyled, TitleStyled } from "./styled"
import {activeColor} from "./colors";

export const Leadership = ({name, position, image}) => (
  <LeaderShipStyled>
    <img src={image} alt={name+`_`+position}/>
    <ItalicTitleStyled fontSize={"0.8rem"} color={"#707176"}>{position}</ItalicTitleStyled>
    <TitleStyled fontSize={"1rem"} color={activeColor}>{name}</TitleStyled>
  </LeaderShipStyled>
)
