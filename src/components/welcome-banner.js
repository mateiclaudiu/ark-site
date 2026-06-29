import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import john from "../images/leadership/9.png"
import {activeColor, color3, textColor} from "./colors";

export const WelcomeBanner = () => (
  <BannerStyled style={{
    backgroundColor: `#eef4f8`,
    borderLeft: `4px solid ${activeColor}`,
    borderRadius: `12px`,
    boxShadow: `0 2px 10px rgba(0,0,0,0.07)`,
    maxWidth: `960px`,
    margin: `0 auto 3rem`,
    padding: `2rem 2.5rem`,
  }}>
    <BannerImgStyled>
      <img src={john} alt="John van der Dussen" style={{ borderRadius: `50%`, width: `9rem` }}/>
    </BannerImgStyled>
    <BannerTextStyled>
      <TitleStyled fontSize={"30px"} color={textColor}>John van der Dussen</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={color3}>Voorzitter</ItalicTitleStyled>
      <p style={{
        color: `#333`,
        marginTop: `12px`,
        lineHeight: 1.7,
      }}>Welkom op de website van de Antwerpse Raad van Kerken (ARK). In en rond de bruisende stad
        Antwerpen vindt u niet alleen veel verschillende culturen, maar ook heel wat christelijke kerken,
        wellicht meer dan u denkt. Zo’n 150 daarvan zijn aangesloten bij de ARK. Uiterlijk vaak heel
        verschillend, hebben zij elkaar toch gevonden op hun gemeenschappelijke basis: hun geloof in Jezus
        Christus.</p>
      <p style={{
        color: `#333`,
        marginTop: `12px`,
        lineHeight: 1.7,
      }}>Kijk eens rond op onze website en ontdek de levende christengemeenschappen in
        Antwerpen. Heeft u vragen? Contacteer ons gerust!</p>
    </BannerTextStyled>
  </BannerStyled>
)
