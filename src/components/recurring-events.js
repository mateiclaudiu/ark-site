import React from "react"
import styled from "styled-components"
import {activeColor, textColor} from "./colors"
import {SectionTitle} from "./section-title"
import aankondiging from "../images/ark-aankondiging-gebed-2026.jpg"
import stadsgebedRecto from "../images/stadsgebed-recto-2026.jpg"
import stadsgebedVerso from "../images/stadsgebed-verso-2026.jpg"

const FACEBOOK_URL = "https://www.facebook.com/p/Antwerpse-Raad-van-Kerken-ARK-100079051255282/"

const RecurringStyled = styled.div`
  line-height: 1.7;
  max-width: 42rem;

  p {
    margin-bottom: 1.2rem;
  }

  ul {
    margin: 0 0 1.2rem 1.4rem;
  }

  li {
    margin-bottom: 0.8rem;
  }

  strong {
    color: ${textColor};
  }
`

const ActivityListStyled = styled.ul`
  list-style: none;
  margin: 0 0 1.5rem 0 !important;
  padding: 0;

  li {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.4rem;
    color: ${activeColor};
    margin-bottom: 0.3rem;
  }

  li::before {
    content: "➜ ";
  }
`

const IllustrationsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0 1rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }

  a {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`

const FacebookLink = () => (
    <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{color: activeColor, fontWeight: "bold", textDecoration: "underline"}}
    >
        Facebook-pagina van de ARK
    </a>
)

export const RecurringEvents = () => (
    <div>
        <SectionTitle title={"Wederkerende events"} subtitle={""}/>
        <RecurringStyled>
            <p style={{fontSize: "1.2rem"}}>Vanaf half september starten er <strong>2 nieuwe activiteiten</strong> van de ARK:</p>
            <ActivityListStyled>
                <li>Stadsgebed</li>
                <li>Middagpauzegebed</li>
            </ActivityListStyled>
            <ul>
                <li>
                    iedere <strong>3e donderdagavond</strong> van de maand van <strong>20u00 tot 21u00</strong>:
                    Stadsgebed in de Ignatiuskapel in de Prinsstraat 13 B
                </li>
                <li>
                    iedere <strong>4e donderdagmiddag</strong> van de maand van <strong>12u15 tot 12u45</strong>:
                    Middagpauzegebed in de protestantse kerk in de Bexstraat 13
                </li>
                <li>
                    vanaf oktober: ook iedere <strong>2e donderdagmiddag</strong> van de maand van <strong>12u15 tot 12u45</strong>:
                    Middagpauzegebed; locatie nog in bespreking.
                </li>
            </ul>
            <p style={{fontStyle: "italic", color: "#555"}}>
                (Deze activiteiten komen in de plaats van het vroegere oecumenisch gebed op woensdagvoormiddag om 11u00.)
            </p>
            <p style={{marginBottom: 0}}>
                Volg de aankondigingen op deze website en op de <FacebookLink/>.
            </p>
        </RecurringStyled>
        <IllustrationsStyled>
            <a href={aankondiging} target="_blank" rel="noopener noreferrer">
                <img src={aankondiging} alt="Aankondiging: vanaf half september 2 nieuwe activiteiten van de ARK – Stadsgebed en Middagpauzegebed"/>
            </a>
            <a href={stadsgebedRecto} target="_blank" rel="noopener noreferrer">
                <img src={stadsgebedRecto} alt="Flyer Antwerps stadsgebed – elke derde donderdag van de maand van 20u tot 21u in de Ignatiuskapel"/>
            </a>
            <a href={stadsgebedVerso} target="_blank" rel="noopener noreferrer">
                <img src={stadsgebedVerso} alt="Flyer Antwerps stadsgebed – data 2026-2027"/>
            </a>
        </IllustrationsStyled>
    </div>
)
