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
        <img src={ChoralEvensong}/>

    </Layout>
)

export default BijzondereEvents
