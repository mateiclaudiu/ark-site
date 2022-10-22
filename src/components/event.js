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
    let titleStyled = <ItalicTitleStyled fontSize={"1rem"} color={"gray"}>{
        <>
            Een overzicht van de deelnemende kerken kunt u vinden in onze <a href={pdfDocument}><b>brochure (klik
            hier)</b></a> of op de website <a href='https://www.topa.be/'><b>www.topa.be</b></a>
        </>
    }</ItalicTitleStyled>;

    return (
        <div>
            <SectionTitle title={"Geplande events"} subtitle={""}/>

            <TitleStyled fontSize={"2rem"} color={"black"}>Speciale events</TitleStyled>
            <p>
                Oktober 2022 <br/>
                Op 26 oktober – een week voor Allerheiligen/Allerzielen – wijden wij een OG
                aan hen van wie we het voorbije jaar afscheid namen.
                Wil u iemand vermeld zien in het gebed dan kan u dat laten weten.
                Even een seintje op anniewalscharts@hotmail.com .
                Het gaat dan vooral over mensen die overleden zijn na 15 oktober 2021 maar
                wanneer u bv. een bijzondere verjaardag van een overlijden wil gedenken dan
                is dat uiteraard ook meer dan welkom.<br/><br/>
                Graag nodigen wij u uit om met ons mee het leven van uw geliefde te
                vieren. Om u op een gepaste manier te kunnen verwelkomen weten wij graag
                met hoeveel mensen u ongeveer aanwezig zal zijn.
                Over afscheid nemen heeft ieder zo zijn eigen beeld. Liefst zouden we zelf de
                regie in handen hebben; maar dat kan nu eenmaal niet.
                Velen nemen graag eerst afscheid om dan zachtjes heen te gaan wanneer
                iedereen weer naar huis is.
                Anderen hebben nood aan iemand dicht naast hen.<br/><br/>
                Dit jaar stierf schrijver Remco Campert (1929-2022)<br/>
                Ooit verwoordde hij zijn gevoelens zo:<br/>
                Als ik doodga<br/>
                hoop ik dat je erbij bent<br/>
                dat ik je aankijk<br/>
                dat je mij aankijkt<br/>
                dat ik je hand nog voelen kan.<br/>
                Dan zal ik rustig doodgaan.<br/>
                Dan hoeft niemand verdrietig te zijn.<br/>
                Dan ben ik gelukkig<br/>
                Altijd welkom<br/><br/>
                Annie Walscharts 0474436623<br/><br/>
                Langs deze weg biedt de werkgroep OG zijn medeleven aan aan allen die
                verdriet en gemis een plaats proberen te geven.
            </p>

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
            <div>We houden een onderbreking
                van woensdag 21 dec 2022 tot en met woensdag 4 januari 2023
                en hervatten op woensdag 11 januari 2023
            </div>
            {
                activeEvents.length === 0 ? (<div>Er zijn geen evenementen gepland.</div>) : <></>
            }
        </div>
    );
}
