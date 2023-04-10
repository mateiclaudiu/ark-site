import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {SectionTitle} from "./section-title"
import {color3} from "./colors";
import pdfDocument from "../../static/Nacht_van_de_Kerken_13-08-2022_brochure.pdf"

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
    let titleStyled = <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{
        <>
            In samenwerking met koorleidster Hanna Rijken – musicus en theoloog, verbonden
            aan de Protestantse Theologische Universiteit in Nederland – organiseert de
            jubilerende Antwerpse Raad van Kerken een concert.
        </>
    }</ItalicTitleStyled>;

    return (
        <div>
            <SectionTitle title={"Geplande events"} subtitle={""}/>

            <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>
            <Event
                dayNumber={"22"}
                monthName={"April"}
                dayName={"Zaterdag"}
                time={"16.00"}
                title={"Jubelconcert ARK 50"}
                info={" In samenwerking met koorleidster Hanna Rijken – musicus en theoloog, verbonden\n" +
                    "            aan de Protestantse Theologische Universiteit in Nederland – organiseert de\n" +
                    "            jubilerende Antwerpse Raad van Kerken een concert."}
                place={"Anglicaanse St. Boniface kerk, Grétrystraat 39, Antwerpen."}
                key={"Jubelconcert_ARK_50"}
            />
            <TitleStyled fontSize={"1.6rem"} color={color3}>Fototentoonstelling ARK 50</TitleStyled>

            Nadat men in de herfst van vorig jaar de uitgebreide fototentoonstelling kon
            bezoeken, verspreid over 5 plaatsen in het centrum van de stad, gaan onze foto’s nu
            op reis langs verschillende locaties.
            Vanaf 1 april 2023 tot en met 28 juni 2023 vindt u 30 foto’s in de
            ontmoetingsruimten St. Anna ten Drieën Hanegraefstraat 5, Antwerpen
            Linkeroever.
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
