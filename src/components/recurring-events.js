"use client"

import React from "react"
import styled from "styled-components"
import {activeColor, textColor} from "./colors"
import {EventsHeadingStyled, PanelStyled, eventsBorder, mutedText} from "./events-styled"
import {SimplePortableText} from "./simple-portable-text"

const FACEBOOK_URL = "https://www.facebook.com/p/Antwerpse-Raad-van-Kerken-ARK-100079051255282/"

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
    <a href={src} target="_blank" rel="noopener noreferrer" style={{flex: `${ratio} 1 0`}} data-reveal="">
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

// Inhoud komt uit Sanity (of src/data/recurring.json), zie lib/content.js.
export const RecurringEvents = ({data}) => (
    <div>
        <EventsHeadingStyled>Wederkerende events</EventsHeadingStyled>
        <RecurringStyled>
            <SimplePortableText value={data.intro}/>
            {data.schedule.length > 0 && (
                <PanelStyled>
                    {data.schedule.map(({_key, day, time, activity, place}) => (
                        <ScheduleRowStyled key={_key}>
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
            )}
            {data.note && <NoteStyled>{data.note}</NoteStyled>}
            <p style={{marginBottom: 0}}>
                Volg de aankondigingen op deze website en op de <FacebookLink/>.
            </p>
        </RecurringStyled>
        {data.flyers.length > 0 && (
            <IllustrationsStyled>
                <FlyerRowStyled>
                    {data.flyers.map(({_key, src, ratio, alt}) => <Flyer key={_key} src={src} ratio={ratio} alt={alt}/>)}
                </FlyerRowStyled>
            </IllustrationsStyled>
        )}
    </div>
)
