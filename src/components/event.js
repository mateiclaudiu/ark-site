import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {color3} from "./colors";
import {getMonthName} from "./month-name";
import {SectionTitle} from "./section-title";

export const Event = ({dayNumber, monthName, dayName, time , title, info, place}) => (
    <EventStyled>
        <EventDateStyled>
            <EventDayStyled>
                <TitleStyled fontSize={"5rem"} color={"lightgray"}>{dayNumber}</TitleStyled>
            </EventDayStyled>
            <div>
                <TitleStyled fontSize={"1rem"} color={"gray"}>{monthName}</TitleStyled>
                <TitleStyled fontSize={"1rem"} color={"black"}>{dayName}</TitleStyled>
                <TitleStyled fontSize={"1rem"} color={"black"}>{time}</TitleStyled>
            </div>
        </EventDateStyled>
        <div>
            <TitleStyled fontSize={"1.6rem"} color={color3}>{title}</TitleStyled><br/>
            <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Info: {info}</ItalicTitleStyled><br/>
            <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Plaats: {place}</ItalicTitleStyled>
        </div>
    </EventStyled>
)

export const UpcomingEventList = ({events}) => {
    const activeEvents = events.filter(({node}) => new Date(node.eventDate) > new Date());

    return (
        <div>
            <SectionTitle title={"Geplande events"} subtitle={""}/>
            <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>
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
                        place={node.place}
                        key={node.title + dayNumber}
                    />
                );
            })}
            {
                activeEvents.length === 0 ? (<div>Er zijn geen evenementen gepland.</div>) : <></>
            }
        </div>
    );
}
