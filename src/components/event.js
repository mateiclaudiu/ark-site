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
    const activeEvents = events;//.filter(({node}) => new Date(node.eventDate) > new Date());

    function sectionTitle() {
        return <SectionTitle title={"Geplande events"} subtitle={""}/>;
    }

    function specialeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>;
    }

    function wederkerendeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>;
    }

    function fototentoonstellinEvent() {
        return <EventStyled>
            <EventDateStyled>
                <EventDayStyled>
                    <TitleStyled fontSize={"2rem"} color={"lightgray"}>{"10 t.e.m. 24"}</TitleStyled>
                </EventDayStyled>
                <div>
                    <TitleStyled fontSize={"1rem"} color={"gray"}>{"September"}</TitleStyled>
                    {/*<TitleStyled fontSize={"1rem"} color={"black"}>{dayName}</TitleStyled>*/}
                    <TitleStyled fontSize={"1rem"}
                                 color={"black"}>{"voor en na de vieringen op zondag en woensdag"}</TitleStyled>
                </div>
            </EventDateStyled>
            <div>
                <TitleStyled fontSize={"1.6rem"}
                             color={color3}>{"Fototentoonstelling, een unieke kijk in de diversiteit van de kerk van vandaag"}</TitleStyled><br/>
                {/*<ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Info: {info}</ItalicTitleStyled><br/>*/}
                <ItalicTitleStyled fontSize={"1rem"}
                                   color={"gray"}>Plaats: {"Sint-Niklaaskerk Dessel"}</ItalicTitleStyled>
            </div>
        </EventStyled>;
    }

    return (
        <div>
            {sectionTitle()}
            {specialeEventsTitle()}
            {fototentoonstellinEvent()}
            {wederkerendeEventsTitle()}
            {activeEvents.map(({node}) => {
                let parsedDate = parseDate(node.eventDate);
                const dayNumber = new Date(parsedDate).getDate();
                let monthName = getMonthName(new Date(parsedDate).getMonth());
                return (
                    <Event
                        dayNumber={dayNumber}
                        monthName={monthName}
                        dayName={"Woensdag"}
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

function parseDate(dateString) {
    const parts = dateString.split("-");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
}
