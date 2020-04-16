import { EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"

export const Event = ({ dayNumber, monthName, dayName, title, info, place }) => (
  <EventStyled>
    <EventDateStyled>
      <EventDayStyled>
        <TitleStyled fontSize={"5rem"} color={"lightgray"}>{dayNumber}</TitleStyled>
      </EventDayStyled>
      <div><TitleStyled fontSize={"1rem"} color={"gray"}>{monthName}</TitleStyled><TitleStyled fontSize={"1rem"} color={"black"}>{dayName}</TitleStyled></div>
    </EventDateStyled>
    <div>
      <TitleStyled fontSize={"1.6rem"} color={"#d14f42"}>{title}</TitleStyled>
      <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{info}</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{place}</ItalicTitleStyled>
    </div>
  </EventStyled>
)

export const UpcomingEventList = ({events}) => (
  <div>
    <SectionTitle title={"Geplande events"} subtitle={"Hoe mooi is het wanneer mensen samen in vrede leven"}/>
    {events.filter(({node})=> new Date(node.eventDate) > new Date() ).map(({ node }) => (
      <Event
        dayNumber={node.dayNumber}
        monthName={node.monthName}
        dayName={node.dayName}
        title={node.title}
        info={node.info}
        place={node.place}
        key={node.title+node.dayNumber}
      />
    ))}
  </div>
)
