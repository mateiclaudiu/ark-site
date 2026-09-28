import React from "react"
import styled from "styled-components"
import {activeColor, color4, textColor} from "./colors"
import {SectionTitle} from "./section-title"
import middagGretry from "../images/middagpauzegebed-gretrystraat-2026.jpg"
import middagBex from "../images/middagpauzegebed-bexstraat-2026.jpg"
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
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.4rem;
    color: ${color4};
    margin-bottom: 0.4rem;
  }

  span {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${activeColor};
    color: white;
    font-size: 1.1rem;
    margin-right: 0.8rem;
  }
`

const IllustrationsStyled = styled.div`
  margin: 2rem 0 1rem 0;

  a {
    display: block;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`

// Flyers staan op één rij met gelijke hoogte: elke flyer krijgt een breedte
// evenredig met zijn beeldverhouding (flex-grow = breedte / hoogte).
const FlyerRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`

const Flyer = ({src, ratio, alt}) => (
    <a href={src} target="_blank" rel="noopener noreferrer" style={{flex: `${ratio} 1 0`}}>
        <img src={src} alt={alt}/>
    </a>
)

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
            <p style={{fontSize: "1.2rem"}}>Vanaf oktober starten er maandelijks <strong>3 nieuwe activiteiten</strong> van de ARK:</p>
            <ActivityListStyled>
                <li><span>1</span>1x Stadsgebed</li>
                <li><span>2</span>2x Middagpauzegebed</li>
            </ActivityListStyled>
            <ul>
                <li>
                    iedere <strong>2e donderdagmiddag</strong> van de maand van <strong>12u15 tot 12u45</strong>:
                    Middagpauzegebed in de anglicaanse kerk in de Grétrystraat 39
                </li>
                <li>
                    iedere <strong>3e donderdagavond</strong> van de maand van <strong>20u00 tot 21u00</strong>:
                    Stadsgebed in de Ignatiuskapel in de Prinsstraat 13 A
                </li>
                <li>
                    iedere <strong>4e donderdagmiddag</strong> van de maand van <strong>12u15 tot 12u45</strong>:
                    Middagpauzegebed in de protestantse kerk in de Bexstraat 13
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
            <FlyerRowStyled>
                <Flyer src={middagGretry} ratio={2232 / 2774}
                       alt="ARK Middagpauzegebed – iedere 2e donderdag van 12u15 tot 12u45 in de anglicaanse kerk, Grétrystraat 39"/>
                <Flyer src={stadsgebedRecto} ratio={1414 / 2000}
                       alt="Flyer Antwerps stadsgebed – elke derde donderdag van de maand van 20u tot 21u in de Ignatiuskapel"/>
                <Flyer src={stadsgebedVerso} ratio={1414 / 2000}
                       alt="Flyer Antwerps stadsgebed – data 2026-2027"/>
                <Flyer src={middagBex} ratio={2237 / 2614}
                       alt="ARK Middagpauzegebed – iedere 4e donderdag van 12u15 tot 12u45 in de protestantse kerk, Bexstraat 13"/>
            </FlyerRowStyled>
        </IllustrationsStyled>
    </div>
)
