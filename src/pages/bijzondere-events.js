import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {SpecialEvent} from "../components/special-events";
import {PageContainer} from "../components/page-container";
import ChoralEvensong from "../images/Choral Evensong.jpeg";
import {EventDateStyled, EventDayStyled, EventStyled, TitleStyled} from "../components/styled";
import {activeColor} from "../components/colors";

const BijzondereEvents = () => (
    <Layout>
        <SEO title="Bijzondere Events"/>
        <PageContainer>
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
            <div style={{lineHeight: "1.7", maxWidth: "42rem"}}>
                <p style={{marginBottom: "1.2rem"}}>Er zijn momenteel geen bijzondere evenementen gepland.</p>
                <p style={{marginBottom: "0"}}>
                    Bekijk de agenda van het wekelijkse Oecumenisch Middaggebed op de{" "}
                    <Link to="/" style={{color: activeColor, fontWeight: "bold", textDecoration: "underline"}}>
                        homepagina
                    </Link>.
                </p>
            </div>
        </PageContainer>
    </Layout>
)

export default BijzondereEvents
