"use client"

import React from "react"
import styled from "styled-components"
import {activeColor, textColor} from "./colors"
import {EventsHeadingStyled, PanelStyled, eventsBorder, mutedText} from "./events-styled"
import middagGretry from "../images/middagpauzegebed-gretrystraat-2026.jpg"
import middagBex from "../images/middagpauzegebed-bexstraat-2026.jpg"
import stadsgebedRecto from "../images/stadsgebed-recto-2026.jpg"
import stadsgebedVerso from "../images/stadsgebed-verso-2026.jpg"

const FACEBOOK_URL = "https://www.facebook.com/p/Antwerpse-Raad-van-Kerken-ARK-100079051255282/"

const SCHEDULE = [
    {day: "2e donderdag", time: "12u15 – 12u45", activity: "Middagpauzegebed", place: "Anglicaanse kerk, Grétrystraat 39"},
    {day: "3e donderdag", time: "20u00 – 21u00", activity: "Stadsgebed", place: "Ignatiuskapel, Prinsstraat 13 A"},
    {day: "4e donderdag", time: "12u15 – 12u45", activity: "Middagpauzegebed", place: "Protestantse kerk, Bexstraat 13"},
]

const RecurringStyled = styled.div`
  line-height: 1.7;
  color: #333;

  p {
    margin-bottom: 1.2rem;
  }

  strong {
    color: ${textColor};
  }
`

const ScheduleRowStyled = styled.div`
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid ${eventsBorder};

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 11rem 1fr;
    gap: 1.5rem;
    align-items: baseline;
  }
`

const ScheduleWhenStyled = styled.div`
  font-family: Montserrat;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.35rem;

  div:first-child {
    font-weight: 600;
    color: ${textColor};
  }

  div:last-child {
    color: ${mutedText};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const ScheduleWhatStyled = styled.div`
  line-height: 1.5;

  div:first-child {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.05rem;
    color: ${textColor};
  }

  div:last-child {
    color: ${mutedText};
  }
`

const NoteStyled = styled.p`
  font-style: italic;
  color: ${mutedText};
  font-size: 0.95rem;
  margin-top: 1.2rem;
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
    border-radius: 3px;
    border: 1px solid ${eventsBorder};
  }
`

// Op mobiel 2 per rij; vanaf tablet op één rij met gelijke hoogte: elke flyer krijgt een breedte
// evenredig met zijn beeldverhouding (flex-grow = breedte / hoogte).
const FlyerRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (min-width: 768px) {
    display: flex;
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
        style={{color: activeColor, fontWeight: 600, textDecoration: "underline"}}
    >
        Facebook-pagina van de ARK
    </a>
)

export const RecurringEvents = () => (
    <div>
        <EventsHeadingStyled>Wederkerende events</EventsHeadingStyled>
        <RecurringStyled>
            <p>
                Vanaf oktober starten er maandelijks <strong>3 nieuwe activiteiten</strong> van de ARK, telkens op donderdag:
                1x Stadsgebed en 2x Middagpauzegebed.
            </p>
            <PanelStyled>
                {SCHEDULE.map(({day, time, activity, place}) => (
                    <ScheduleRowStyled key={day}>
                        <ScheduleWhenStyled>
                            <div>Iedere {day}</div>
                            <div>{time}</div>
                        </ScheduleWhenStyled>
                        <ScheduleWhatStyled>
                            <div>{activity}</div>
                            <div>{place}</div>
                        </ScheduleWhatStyled>
                    </ScheduleRowStyled>
                ))}
            </PanelStyled>
            <NoteStyled>
                Deze activiteiten komen in de plaats van het vroegere oecumenisch gebed op woensdagvoormiddag om 11u00.
            </NoteStyled>
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
