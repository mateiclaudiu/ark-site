import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {SpecialEvent} from "../components/special-events";
import {PageContainer} from "../components/page-container";
import ChoralEvensong from "../images/Choral Evensong.jpeg";
import {EventDateStyled, EventDayStyled, EventStyled, TitleStyled} from "../components/styled";

const BijzondereEvents = () => (
    <Layout>
        <SEO title="Bijzondere Events"/>

        <SectionTitle title={"Bijzondere Events"} subtitle={""}/>
        {/*<SpecialEvent></SpecialEvent>*/}
        {/*<>*/}
        {/*    <EventStyled>*/}
        {/*        <EventDateStyled>*/}
        {/*            <EventDayStyled>*/}
        {/*                <TitleStyled fontSize={"2rem"} color={"lightgray"}>{"18"}</TitleStyled>*/}
        {/*            </EventDayStyled>*/}
        {/*            <div>*/}
        {/*                <TitleStyled fontSize={"1rem"} color={"gray"}>{"Januari"}</TitleStyled>*/}
        {/*                <TitleStyled fontSize={"1rem"} color={"black"}>{"Zondag"}</TitleStyled>*/}
        {/*                <TitleStyled fontSize={"1rem"}*/}
        {/*                             color={"black"}>{"Week van de eenheid"}</TitleStyled>*/}
        {/*            </div>*/}
        {/*        </EventDateStyled>*/}
        {/*    </EventStyled>*/}
        {/*</>*/}
        {/*<img src={ChoralEvensong}/>*/}
        Er zijn momenteel geen bijzondere evenementen gepland. Zie home pagina voor de wekelijkse Oecumenisch Gebed agenda.
    </Layout>
)

export default BijzondereEvents
