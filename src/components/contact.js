import React from "react"
import { PageContainer } from "./page-container"
import { SectionTitleForDarkMode } from "./section-title"
import { ButtonStyled, ContactStyled, ItalicTitleStyled } from "./styled"
import Layout from "./layout"

export const Contact = () => (
  <ContactStyled>
    <PageContainer>
      <SectionTitleForDarkMode title={"Contact"} subtitle={"Hoe mooi is het wanneer mensen samen in vrede leven"}/>
      <form method="post" action="#">
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Naam</ItalicTitleStyled></label>
          <div><input type="text" name="name" id="name" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
          <div><input type="email" name="email" id="email"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Onderwerp</ItalicTitleStyled></label>
          <div><input type="text" name="subject" id="subject"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Bericht</ItalicTitleStyled></label>

          <div><textarea name="message" id="message" rows="5"/>
          </div>
        </div>
        <ButtonStyled type="submit">Stuur</ButtonStyled>
      </form>
    </PageContainer>
  </ContactStyled>
)
