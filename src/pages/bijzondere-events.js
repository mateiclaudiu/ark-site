import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {SectionTitle} from "../components/section-title"
import {SpecialEvent} from "../components/special-events";
import {PageContainer} from "../components/page-container";
import DagDiaconieFolder from "../images/Folder ARK DagDiaconie 210x297mm 29-03-25.jpg";

const BijzondereEvents = () => (
    <Layout>
        <SEO title="Bijzondere Events"/>

        <SectionTitle title={"Bijzondere Events"} subtitle={""}/>
        {/*<SpecialEvent></SpecialEvent>*/}
        <img src={DagDiaconieFolder}/>

    </Layout>
)

export default BijzondereEvents
