import { EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled } from "./styled"
import React from "react"
import { SectionTitle } from "./section-title"
import {activeColor, color3, textColor} from "./colors";

export const Event = ({ dayNumber, monthName, dayName, time="11:00", title, info, place }) => (
  <EventStyled>
    <EventDateStyled>
      <EventDayStyled>
        <TitleStyled fontSize={"5rem"} color={"lightgray"}>{dayNumber}</TitleStyled>
      </EventDayStyled>
      <div>
        <TitleStyled fontSize={"1rem"} color={"gray"}>{monthName}</TitleStyled>
        <TitleStyled fontSize={"1rem"} color={"black"}>{dayName}</TitleStyled>
        <TitleStyled fontSize={"1rem"} color={"black"}>{time} uur</TitleStyled>
      </div>
    </EventDateStyled>
    <div>
      <TitleStyled fontSize={"1.6rem"} color={color3}>{title}</TitleStyled>
      <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{info}</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{place}</ItalicTitleStyled>
    </div>
  </EventStyled>
)

export const UpcomingEventList = ({events}) => (
  <div>
    <SectionTitle title={"Geplande events"} subtitle={"Wij hebben Zijn ster zien opkomen en wij zijn gekomen om Hem te\n" +
    "huldigen. Laten we onze ogen richten op de ster die schittert in het\n" +
    "oosten en laten ook wij ons leiden."}/>

      <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>
      <Event
      dayNumber={"23"}
      monthName={"Januari"}
      dayName={"Zondag"}
      time={"15:00"}
      title={"De week van Gebed voor de Eenheid van de Christenen 2022"}
      info={"U wordt uitgenodigd (conform de geldende coronamaatregelen) om samen met de Antwerpse Raad van Kerken, de week van Gebed voor de Eenheid van de Christenen 2022 te vieren. Voorgangers: Bisschop Johan Bonny en vertegenwoordigers van de verschillende denominatie van de Antwerpse Raad van Kerken."}
      place={"Plaats: Onze-Lieve-Vrouwekathedraal in Antwerpen."}
      key={"middaggebed"}
    />
      <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>

      {events.filter(({node})=> new Date(node.eventDate) > new Date() ).map(({ node }) => (
      <Event
        dayNumber={node.dayNumber}
        monthName={node.monthName}
        dayName={node.dayName}
        time={node.time}
        title={node.title}
        info={node.info}
        place={node.place}
        key={node.title+node.dayNumber}
      />
    ))}
    {
      events.length === 0? (<div>Er zijn geen geplande evenementen.</div>):<></>
    }
  </div>
)
