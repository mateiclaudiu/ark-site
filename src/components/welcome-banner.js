import { BannerImgStyled, BannerStyled, BannerTextStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import john from "../images/leadership/9.png"
import {activeColor, color2, color3} from "./colors";

export const WelcomeBanner = () => (
  <BannerStyled>
    <BannerImgStyled>
      <img src={john} style={{ borderRadius: `50%`, width: `9rem` }}/>
    </BannerImgStyled>
    <BannerTextStyled>
      <TitleStyled fontSize={"30px"} >John van der Dussen</TitleStyled>
      <ItalicTitleStyled fontSize={"17px"} color={color3}>Voorzitter</ItalicTitleStyled>
      <p style={{
        color: `gray`,
        marginTop: `10px`,
        fontStyle:  `italic`
      }}>Welkom op de website van de Antwerpse Raad van Kerken (ARK). In en rond de bruisende stad
        Antwerpen vindt u niet alleen veel verschillende culturen, maar ook heel wat christelijke kerken,
        wellicht meer dan u denkt. Zo’n 150 daarvan zijn aangesloten bij de ARK. Uiterlijk vaak heel
        verschillend, hebben zij elkaar toch gevonden op hun gemeenschappelijke basis: hun geloof in Jezus
        Christus.
        <br/>Kijk eens rond op onze website en ontdek de levende christengemeenschappen in
        Antwerpen. Heeft u vragen? Contacteer ons gerust!</p>
    </BannerTextStyled>
  </BannerStyled>
)
