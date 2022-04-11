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

export const UpcomingEventList = ({events}) => {
    const activeEvents = events.filter(({node}) => new Date(node.eventDate) > new Date());
    return (
        <div>
            <SectionTitle title={"Geplande events"} subtitle={""}/>

            <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>
            <Event
                dayNumber={"17"}
                monthName={"April"}
                dayName={"Zondag"}
                time={"08:00"}
                title={"Paaszondag"}
                info={"De Antwerpse Raad van Kerken houdt dit jaar weer zijn traditionele Paasgroet!Voorgangers van verscheidene denominaties zullen paaswensen uitspreken.\nIedereen van harte uitgenodigd."}
                place={"Op het plein voor de St. Carolus Borromeuskerk in Antwerpen."}
                key={"middaggebed"}
            />
            <Event
                dayNumber={"10"}
                monthName={"April"}
                dayName={"Zondag"}
                time={"11:00"}
                title={"Palmzondag"}
                info={"Voorganger katholieke kerk priester prof. dr. Eddy van Waelderen, voorganger Duitstalige prot. kerk ds. Christoph Holstein. \nAchteraf is er gelegenheid om mits een financiële bijdrage eten, gebak en dranken te nuttigen."}
                place={"Oekumenische palmzondagviering in de  St. Bartholomeuskerk te Merksem Bredabaan 310, hoek Bartholomeusstraat"}
                key={"middaggebed"}
            />

            <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>

            {activeEvents.map(({node}) => (
                <Event
                    dayNumber={node.dayNumber}
                    monthName={node.monthName}
                    dayName={node.dayName}
                    time={node.time}
                    title={node.title}
                    info={node.info}
                    place={node.place}
                    key={node.title + node.dayNumber}
                />
            ))}
            {
                activeEvents.length === 0 ? (<div>Er zijn geen evenementen gepland.</div>) : <></>
            }
        </div>
    );
}
