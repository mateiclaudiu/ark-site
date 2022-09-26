import React from "react"
import { PageContainer } from "./page-container"
import { SectionTitleForDarkMode } from "./section-title"
import { ButtonStyled, ContactStyled, ItalicTitleStyled } from "./styled"
import Layout from "./layout"
import {activeColor} from "./colors";

export const SubscribePhotoExhibition = () => (
  <ContactStyled style={{background: activeColor}}>
    <PageContainer>
      <SectionTitleForDarkMode title={"Aanvraag groepsrondleiding fototentoonstelling 24-28 oktober 2022"} subtitle={"" +
          "U ontvangt een bevestiging van ons wanneer we een dag en uur voor u hebben gereserveerd.\n" +
          "Bijkomende vragen graag per e-mail aan: secretariaat.ark@gmail.com\n" +
          "De rondleidingen beginnen aan de kathedraal tenzij anders door u aangevraagd.\n" +
          "De rondleiding op zich is gratis, maar er is wel een inkom te betalen aan de Sint-Pauluskerk (€3,00), en\n" +
          "voor mensen van buiten de provincie Antwerpen, ook aan de kathedraal (€12,00)." +
          ""}/>
      <form name="Form fototentoonstelling" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Form fototentoonstelling"/>
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
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Verwacht aantal deelnemers (minimum 5)*</ItalicTitleStyled></label>
          <div><input type="number" name="aantalpersonen" id="aantalpersonen" width="30rem" required={true} min={5}/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Type deelnemers (leerlingen godsdienstonderwijs, catechisanten, volwassenen...)*</ItalicTitleStyled></label>
          <div><input type="text" name="typeDeelnemers" id="typeDeelnemers" width="30rem" required={true}/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Gewenste dag en uur 1ste keus*</ItalicTitleStyled></label>
          <div><input type="text" name="gewensteDagEnUur1steKeus" id="gewensteDagEnUur1steKeus" width="30rem" required={true}/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Gewenste dag en uur 2de keus*</ItalicTitleStyled></label>
          <div><input type="text" name="gewensteDagEnUur2deKeus" id="gewensteDagEnUur2deKeus" width="30rem" required={true}/>
          </div>
        </div>
          <br/>
        <ButtonStyled type="submit">Verstuur aanvraag</ButtonStyled>
      </form>
    </PageContainer>
  </ContactStyled>
)
