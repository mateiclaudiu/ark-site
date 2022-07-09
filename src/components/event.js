import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {SectionTitle} from "./section-title"
import {color3} from "./colors";
import pdfDocument from "../../static/Nacht_van_de_Kerken_13-08-2022_brochure.pdf"

export const Event = ({dayNumber, monthName, dayName, time = "11:00", title, info, place}) => (
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
    let titleStyled =  <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{
        <>
            Een overzicht van de deelnemende kerken kunt u vinden in onze <a href={pdfDocument}><b>brochure (klik hier)</b></a> of op de website <a href='https://www.topa.be/'><b>www.topa.be</b></a>
        </>
    }</ItalicTitleStyled>;

    return (
        <div>
            <SectionTitle title={"Geplande events"} subtitle={""}/>

            <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>
            <Event
                dayNumber={"13"}
                monthName={"Augustus"}
                dayName={"Zaterdag"}
                time={"19:00-23.00"}
                title={"‘OECUMENE: SAMEN KERK’"}
                info={titleStyled}
                place={""}
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
            {/*<div>Na 29 juni gaan wij er even tussenuit. Wij wensen iedereen een fijne*/}
            {/*    zomer toe.*/}
            {/*    Wij heten jullie opnieuw welkom op 31 augustus in de Prinsstraat 13a.*/}
            {/*    DANK aan al onze voorgangers.</div>*/}
            {
                activeEvents.length === 0 ? (<div>Er zijn geen evenementen gepland.</div>) : <></>
            }
        </div>
    );
}
