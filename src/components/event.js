import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {SectionTitle} from "./section-title"
import {color3} from "./colors";
import pdfDocument from "../../static/Nacht_van_de_Kerken_13-08-2022_brochure.pdf"
import {getMonthName} from "./month-name";

export const Event = ({dayNumber, monthName, dayName, time , title, info, place}) => (
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

    function sectionTitle() {
        return <sectionTitle title={"Geplande events"} subtitle={""}/>;
    }

    function specialeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>;
    }

    function wederkerendeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>;
    }

    return (
        <div>
            {sectionTitle()}
            {specialeEventsTitle()}
            {wederkerendeEventsTitle()}
            {activeEvents.map(({node}) => (
                <Event
                    dayNumber={new Date(node.eventDate).getDay()}
                    monthName={getMonthName(new Date(node.eventDate).getMonth())}
                    dayName={"Woensdag"}
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
