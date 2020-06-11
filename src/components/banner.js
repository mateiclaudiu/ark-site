import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"

export const Banner = () => (
  <BannerStyled>
    <BannerImgStyled>
      <img src={"https://antwerpseraadvankerken.be/wp-content/uploads/2018/08/P1060743-150x150.jpg"} style={{ borderRadius: `50%` }}/>
    </BannerImgStyled>
    <BannerTextStyled>
      <TitleStyled fontSize={"30px"} color={"white"}>John van der Dussen</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={"#d14f42"}>Voorzitter</ItalicTitleStyled>
      <p style={{
        color: `darkgray`,
        marginTop: `10px`,
      }}>Welkom op de website van de Antwerpse Raad van Kerken (ARK). In en rond de bruisende stad
        Antwerpen vindt u niet alleen veel verschillende culturen, maar ook heel wat christelijke kerken,
        wellicht meer dan u denkt. Zo’n 150 daarvan zijn aangesloten bij de ARK. Uiterlijk vaak heel
        verschillend, hebben elkaar toch gevonden op hun gemeenschappelijke basis: hun geloof in Jezus
        Christus.
        <br/>Kijk eens rond op onze website en ontdek de levende christengemeenschappen in
        Antwerpen. Heeft u vragen? Contacteer ons gerust!</p>
    </BannerTextStyled>
  </BannerStyled>
)
