"use client"

import React from "react"
import styled from "styled-components"
import { PageContainer } from "./page-container"
import { activeColor, textColor } from "./colors"
import { PageHeadingStyled, PanelStyled, SmallLabelStyled } from "./events-styled"

// Donkerblauwe band: de kleur van vroeger, maar ingetogener dan het felle blauw.
const ContactSectionStyled = styled.div`
  background: ${textColor};
  padding: 0.5rem 0 4.5rem;
`

const ContactHeadingStyled = styled(PageHeadingStyled)`
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.25);
`

const ContactGridStyled = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 3rem;
    align-items: start;
  }
`

const ContactInfoStyled = styled.div.attrs({"data-reveal": ""})`
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.6;
  margin-bottom: 2rem;

  p {
    margin: 0 0 1.5rem 0 !important;
  }

  address {
    font-style: normal;
    margin-top: 0.4rem;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
  }
`

const FormPanelStyled = styled(PanelStyled)`
  padding: 1.5rem;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const FieldStyled = styled.div`
  margin-bottom: 1.1rem;

  label {
    display: block;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${textColor};
    margin-bottom: 0.35rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.65rem 0.75rem;
    font: inherit;
    font-size: 0.95rem;
    color: #222;
    background: white;
    border: 1px solid #cfd4dc;
    border-radius: 3px;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: ${activeColor};
    box-shadow: 0 0 0 3px rgba(27, 123, 172, 0.15);
  }

  textarea {
    resize: vertical;
  }
`

const SubmitStyled = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: white;
  background: ${textColor};
  border: none;
  border-radius: 3px;
  padding: 0.85rem 1.75rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover,
  &:focus-visible {
    background: ${activeColor};
  }
`

// Naam, velden en verborgen "form-name" ongewijzigd laten: Netlify Forms herkent
// het formulier daaraan en stuurt de inzendingen door per e-mail.
export const Contact = () => (
  <ContactSectionStyled>
    <PageContainer>
      <ContactHeadingStyled>Contact</ContactHeadingStyled>
      <ContactGridStyled>
        <ContactInfoStyled>
          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.8)" }}>Hoe mooi is het wanneer mensen samen in vrede leven</p>
          <SmallLabelStyled>Secretariaat</SmallLabelStyled>
          <address>
            ARK VZW p/a Jean-Marie Houben<br/>
            Turkooisstraat 15<br/>
            2600 Berchem<br/>
            <a href="mailto:secretariaat.ark@gmail.com">secretariaat.ark@gmail.com</a>
          </address>
        </ContactInfoStyled>
        <FormPanelStyled>
          <form name="Contact Form" method="POST" action="/bedankt/" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form"/>
            <FieldStyled>
              <label htmlFor="contact-name">Naam</label>
              <input type="text" name="name" id="contact-name" autoComplete="name"/>
            </FieldStyled>
            <FieldStyled>
              <label htmlFor="contact-email">E-mail</label>
              <input type="email" name="email" id="contact-email" autoComplete="email"/>
            </FieldStyled>
            <FieldStyled>
              <label htmlFor="contact-subject">Onderwerp</label>
              <input type="text" name="subject" id="contact-subject"/>
            </FieldStyled>
            <FieldStyled>
              <label htmlFor="contact-message">Bericht</label>
              <textarea name="message" id="contact-message" rows="6"/>
            </FieldStyled>
            <SubmitStyled type="submit">Verstuur</SubmitStyled>
          </form>
        </FormPanelStyled>
      </ContactGridStyled>
    </PageContainer>
  </ContactSectionStyled>
)
