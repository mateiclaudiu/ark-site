import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {SpecialEvent} from "../components/special-events";
import {PageContainer} from "../components/page-container";
import ChoralEvensong from "../images/Choral Evensong.jpeg";

const BijzondereEvents = () => (
    <Layout>
        <SEO title="Bijzondere Events"/>

        <SectionTitle title={"Bijzondere Events"} subtitle={""}/>
        {/*<SpecialEvent></SpecialEvent>*/}
        <>
            <EventStyled>
                <EventDateStyled>
                    <EventDayStyled>
                        <TitleStyled fontSize={"2rem"} color={"lightgray"}>{"8"}</TitleStyled>
                    </EventDayStyled>
                    <div>
                        <TitleStyled fontSize={"1rem"} color={"gray"}>{"Juli"}</TitleStyled>
                        <TitleStyled fontSize={"1rem"} color={"black"}>{"Dinsdag"}</TitleStyled>
                        <TitleStyled fontSize={"1rem"}
                                     color={"black"}>{"voor en na de vieringen op zondag en woensdag"}</TitleStyled>
                    </div>
                </EventDateStyled>
            </EventStyled>
        </>
        <img src={ChoralEvensong}/>

    </Layout>
)

export default BijzondereEvents
