"use client"

import React from "react"
import styled from "styled-components"
import {color3, activeColor, textColor} from "./colors";
import {getMonthName} from "./month-name";
import {RecurringEvents} from "./recurring-events";
import {EventsHeadingStyled, PanelStyled, SmallLabelStyled, eventsBorder, mutedText} from "./events-styled";

const EventCardStyled = styled(PanelStyled)`
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1.25rem;
  padding: 1.5rem 1.25rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 6.5rem 1fr;
    gap: 2rem;
    padding: 1.75rem 2rem;
  }
`

const EventDateStyled = styled.div`
  text-align: center;
  padding-right: 1.25rem;
  border-right: 1px solid ${eventsBorder};
  font-family: Montserrat;
  line-height: 1.2;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`

const EventMonthStyled = styled.div`
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color3};
`

const EventDayNumberStyled = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.15;
  color: ${textColor};
`

const EventTitleStyled = styled.h3`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${textColor};
  margin: 0 0 0.2rem 0;
`

const EventTimeStyled = styled.div`
  font-family: Montserrat;
  font-size: 0.9rem;
  color: ${mutedText};
  margin-bottom: 1rem;
`

const EventDetailsStyled = styled.dl`
  margin: 0;

  div {
    margin-bottom: 0.6rem;
    line-height: 1.5;
  }

  dt {
    margin-bottom: 0.1rem;
  }

  dd {
    margin: 0;
    color: #333;
  }

  @media (min-width: 768px) {
    div {
      display: grid;
      grid-template-columns: 8rem 1fr;
      gap: 1rem;
      align-items: baseline;
      margin-bottom: 0.4rem;
    }
  }
`

// "MIDDAGPAUZEGEBED" → "Middagpauzegebed"
const sentenceCase = text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

const EventDetail = ({label, children}) => (
    <div>
        <dt><SmallLabelStyled>{label}</SmallLabelStyled></dt>
        <dd>{children}</dd>
    </div>
)

export const Event = ({dayNumber, monthName, dayName, time, title, info, note, place}) => (
    <EventCardStyled>
        <EventDateStyled>
            <EventMonthStyled>{monthName.slice(0, 3)}</EventMonthStyled>
            <EventDayNumberStyled>{dayNumber}</EventDayNumberStyled>
        </EventDateStyled>
        <div>
            <EventTitleStyled>{sentenceCase(title)}</EventTitleStyled>
            {time && <EventTimeStyled>{dayName} {dayNumber} {monthName} · {time}</EventTimeStyled>}
            <EventDetailsStyled>
                {info && <EventDetail label={title === "GEEN VIERING" ? "Info" : "Voorganger(s)"}>{info}</EventDetail>}
                {place && <EventDetail label="Plaats">{place}</EventDetail>}
                {note && <EventDetail label="Nadien">{note}</EventDetail>}
            </EventDetailsStyled>
        </div>
    </EventCardStyled>
)

const startOfToday = (iso) => {
    const today = iso ? new Date(iso) : new Date();
    today.setHours(0, 0, 0, 0);
    return today;
}

export const UpcomingEventList = ({events, recurring}) => {
    // Eerst filteren op de builddatum (statische HTML), na het laden opnieuw op de
    // datum van de bezoeker, zodat voorbije events ook zonder nieuwe build verdwijnen.
    const [today, setToday] = React.useState(() => startOfToday(process.env.BUILD_DATE_ISO));
    React.useEffect(() => setToday(startOfToday()), []);
    const activeEvents = events.filter(({node}) => new Date(node.eventDate) >= today);

    return (
        <div>
            <RecurringEvents data={recurring}/>
            <EventsHeadingStyled>Geplande events</EventsHeadingStyled>
            {activeEvents.map(({node}) => {
                const dayNumber = new Date(node.eventDate).getDate();
                const monthName = getMonthName(new Date(node.eventDate).getMonth());
                return (
                    <Event
                        dayNumber={dayNumber}
                        monthName={monthName}
                        dayName={node.dayName}
                        time={node.time}
                        title={node.title}
                        info={node.info}
                        note={node.note}
                        place={node.place}
                        key={node.title + node.eventDate}
                    />
                );
            })}
            {
                activeEvents.length === 0 ? (
                    <div style={{lineHeight: "1.7", maxWidth: "42rem"}}>
                        <p style={{marginBottom: "0"}}>
                            Er zijn momenteel geen concrete data gepland. Volg de aankondigingen op deze website en op de{" "}
                            <a
                                href="https://www.facebook.com/p/Antwerpse-Raad-van-Kerken-ARK-100079051255282/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{color: activeColor, fontWeight: 600, textDecoration: "underline"}}
                            >
                                Facebook-pagina van de ARK
                            </a>.
                        </p>
                    </div>
                ) : <></>
            }
        </div>
    );
}
