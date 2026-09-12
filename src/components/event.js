import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {color3, activeColor} from "./colors";
import {getMonthName} from "./month-name";
import {SectionTitle} from "./section-title";
import {RecurringEvents} from "./recurring-events";

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
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const activeEvents = events.filter(({node}) => new Date(node.eventDate) >= today);

    return (
        <div>
            <RecurringEvents/>
            <SectionTitle title={"Geplande events"} subtitle={""}/>
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
                                style={{color: activeColor, fontWeight: "bold", textDecoration: "underline"}}
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
