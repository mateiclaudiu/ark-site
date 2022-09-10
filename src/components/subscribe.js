import React from "react"
import { PageContainer } from "./page-container"
import { SectionTitleForDarkMode } from "./section-title"
import { ButtonStyled, ContactStyled, ItalicTitleStyled } from "./styled"
import Layout from "./layout"
import {gold} from "./colors";

export const Subscribe = () => (
  <ContactStyled style={{background: gold}}>
    <PageContainer>
      <SectionTitleForDarkMode title={"Inschrijven voor academische zitting"} subtitle={"Het aantal plaatsen in het auditorium is beperkt. U ontvangt een bevestiging van ons wanneer we\n" +
          "een plaats voor u hebben gereserveerd. Indien u achteraf verhinderd zou zijn, gelieve u af te melden,\n" +
          "zodat wij uw plaats aan iemand anders op de wachtlijst kunnen doorgeven. Graag per e-mail aan:\n" +
          "secretariaat.ark@gmail.com"}/>
      <form name="Inschrijven Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form"/>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Voor- en achternaam*</ItalicTitleStyled></label>
          <div><input type="text" name="name" id="name" width="30rem" required={true}/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email*</ItalicTitleStyled></label>
          <div><input type="email" name="email" id="email" required={true}/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Straat en huisnummer</ItalicTitleStyled></label>
          <div><input type="text" name="straatenhuisnummer" id="straatenhuisnummer" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Postcode en plaats</ItalicTitleStyled></label>
          <div><input type="text" name="postcodeenplaats" id="postcodeenplaats" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Telefoon</ItalicTitleStyled></label>
          <div><input type="text" name="telefoon" id="telefoon" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Aantal personen</ItalicTitleStyled></label>
          <div><input type="number" name="aantalpersonen" id="aantalpersonen" width="30rem" required={true}/>
          </div>
        </div>
          <br/>
        <ButtonStyled type="submit">Verstuur inschrijving</ButtonStyled>
      </form>
    </PageContainer>
  </ContactStyled>
)
