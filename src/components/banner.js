import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"

export const Banner = () => (
  <BannerStyled>
    <BannerImgStyled>
      <img src={"https://antwerpseraadvankerken.be/wp-content/uploads/2018/08/P1060743-150x150.jpg"} style={{ borderRadius: `50%` }}/>
    </BannerImgStyled>
    <BannerTextStyled>
      <TitleStyled fontSize={"30px"} color={"white"}>John Van Der Dussen</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={"#d14f42"}>Voorzitter</ItalicTitleStyled>
      <p style={{
        color: `darkgray`,
        marginTop: `10px`,
      }}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
    </BannerTextStyled>
  </BannerStyled>
)
