"use client"

import React from "react"
import styled from "styled-components"
import john from "../images/leadership/9.png"
import {activeColor, logoStripe, textColor} from "./colors";
import {churchStats} from "../utils/church-stats"
import {PageContainer} from "./page-container";
import {PanelStyled, SmallLabelStyled} from "./events-styled";

// Welkomstwoord van de voorzitter, als korte brief met ondertekening.
const WelcomeCardStyled = styled(PanelStyled)`
  position: relative;
  padding: 2rem 1.5rem 1.75rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${logoStripe};
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3rem 2.25rem;
  }

  p {
    color: #333;
    line-height: 1.75;
    margin: 0 0 1rem 0 !important;
  }

  p:first-child {
    font-size: 1.08rem;
  }
`

const SignatureStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ececec;

  img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #dfe2e7;
    margin: 0;
  }

  div:first-child {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.05rem;
    color: ${textColor};
    margin-bottom: 0.15rem;
  }
`

export const WelcomeBanner = () => (
  <PageContainer>
    <WelcomeCardStyled>
      <p>
        Welkom op de website van de Antwerpse Raad van Kerken (ARK). In en rond de bruisende stad Antwerpen vindt u
        niet alleen veel verschillende culturen, maar ook heel wat christelijke kerken, wellicht meer dan u denkt.
        Zo’n {churchStats.totaal} daarvan zijn aangesloten bij de ARK. Uiterlijk vaak heel verschillend, hebben zij
        elkaar toch gevonden op hun gemeenschappelijke basis: hun geloof in Jezus Christus.
      </p>
      <p>
        Kijk eens rond op onze website en ontdek de levende christengemeenschappen in Antwerpen. Heeft u vragen?{" "}
        <a href="/#contact" style={{color: activeColor, textDecoration: "underline"}}>Contacteer ons gerust!</a>
      </p>
      <SignatureStyled>
        <img src={john} alt="John van der Dussen"/>
        <div>
          <div>John van der Dussen</div>
          <SmallLabelStyled>Voorzitter</SmallLabelStyled>
        </div>
      </SignatureStyled>
    </WelcomeCardStyled>
  </PageContainer>
)
