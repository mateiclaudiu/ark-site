import { ColumnStyled, SectionStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Hello = () => (
  <div>
    <SectionTitle title={"Hallo & Welkom"} subtitle={"Samen één in de naam van Jezus"}/>
    <ColumnStyled>
      <div>Het was de tijd van terug opbloeiende oecumenische dialoog. De behoefde om elkaar beter te leren kennen, samen te discussiëren, in debat te gaan
        en
        vooral ook samen te kunnen bezinnen en bidden, groeide en vroeg om een behoudend orgaan.
        Deze interkerkelijke raad heeft zich tot doel gesteld de oecumenische contacten in de Provincie Antwerpen
        te bevorderen en de christenen onder elkaar gevoelig te maken voor het belang om samen hun geloof te
        kunnen en mogen belijden en beleven met het oog op de eenheid.

      </div>
      <div style={{ marginTop: `20px` }}>

        In zijn samenstelling is de raad een ruimte van ontmoeting en bewustwording
        – een forum voor gesprek en overleg,
        – een werkteam voor gemeenschappelijk pastoraal bekommernis
        – en voor de dienst aan de wereld
        in evangelisch getuigenis en gebed van alle kerken die het doopsel en de weg van de Heer Jezus Christus belijden.
        <br/>
        <br/>
        De Raad van Kerken is verbonden met de internationale oecumenische beweging.
      </div>
    </ColumnStyled>
  </div>
)
