import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled"
import React from "react"
import {color3} from "./colors";
import {getMonthName} from "./month-name";
import {SectionTitle} from "./section-title";
import {Link} from "gatsby";

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

export const SpecialEvents = () => {


}

export const UpcomingEventList = ({events}) => {
    const activeEvents = events.filter(({node}) => new Date(node.eventDate) > new Date());
    function sectionTitle() {
        return <SectionTitle title={"Geplande events"} subtitle={""}/>;
    }

    function specialeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>;
    }

    function wederkerendeEventsTitle() {
        return <TitleStyled fontSize={"2rem"} color={"black"}>Wederkerende events</TitleStyled>;
    }

    function weekVanDeEenheid() {
        return <EventStyled>
            <EventDateStyled>
                <EventDayStyled>
                    <TitleStyled fontSize={"2rem"} color={"lightgray"}>{"21"}</TitleStyled>
                </EventDayStyled>
                <div>
                    <TitleStyled fontSize={"1rem"} color={"gray"}>{"Januari"}</TitleStyled>
                    {/*<TitleStyled fontSize={"1rem"} color={"black"}>{dayName}</TitleStyled>*/}
                    <TitleStyled fontSize={"1rem"}
                                 color={"black"}>{"voor en na de vieringen op zondag en woensdag"}</TitleStyled>
                </div>
            </EventDateStyled>
            <div>
                <TitleStyled fontSize={"1.6rem"} color={color3}>{"Week van de Eenheid"}</TitleStyled><br/>
                {/*<ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Info: {info}</ItalicTitleStyled><br/>*/}
                <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>Plaats: {"De liturgische dienst heeft plaats op 21 januari 2024 in de Roemeens-\n" +
                    "Orthodoxe kerk in Wilrijk (voorheen Rozenkransparochie).\n" +
                    "Het is een oecumenische dienst dus alle denominaties worden\n" +
                    "uitgenodigd om mee te vieren."}</ItalicTitleStyled>
                {/*<Link to="/bijzondere-events">Klik hier voor meer</Link>*/}

            </div>
        </EventStyled>;
    }

    return (
        <div>
            {sectionTitle()}
            {specialeEventsTitle()}
            {/*{weekVanDeEenheid()}*/}
            {wederkerendeEventsTitle()}
          {/*<EventStyled>*/}
          {/*  <EventDateStyled>*/}
          {/*    <EventDayStyled>*/}
          {/*      <TitleStyled fontSize={"2rem"} color={"lightgray"}>{"18"}</TitleStyled>*/}
          {/*    </EventDayStyled>*/}
          {/*    <div>*/}
          {/*      <TitleStyled fontSize={"1rem"} color={"gray"}>{"Januari"}</TitleStyled>*/}
          {/*      <TitleStyled fontSize={"1rem"} color={"black"}>{"Zondag"}</TitleStyled>*/}
          {/*      <TitleStyled fontSize={"1rem"}*/}
          {/*                   color={"black"}>{"Week van de eenheid"}</TitleStyled>*/}
          {/*    </div>*/}
          {/*  </EventDateStyled>*/}
          {/*</EventStyled>*/}
            {activeEvents.map(({node}) => {
                const dayNumber = new Date(node.eventDate).getDate();
                let monthNumber = new Date(node.eventDate).getMonth();
                console.log(monthNumber);
                let monthName = getMonthName(monthNumber);
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
