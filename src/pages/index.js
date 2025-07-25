import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/hero-image"
import Bloks from "../components/feature"
import {Hello} from "../components/hello"
import {WelcomeBanner} from "../components/welcome-banner"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {UpcomingEventList} from "../components/event"
import introImage from "../images/together_q_50.jpeg"
import {Contact} from "../components/contact"
import ChoralEvensong from "../images/Choral Evensong.jpeg"


const IndexPage = () => {
    const {events, websites} = useStaticQuery(graphql`
    {    
      events: allEventsJson(sort: {fields: eventDate, order: ASC}) {
        edges {
          node {
            eventDate
            title
            dayName
            info
            time
            place
          }
        }
      }
    }
  `)
    console.log(websites)

    return <Layout>
        <SEO title="Home"/>
        <HeroImage image={introImage}/>
        <Bloks/>
        <SectionTitle title={"Hallo & Welkom"} subtitle={"Samen één in de naam van Jezus"}/>
        <WelcomeBanner/>
        <PageContainer>
            <Hello/>
        </PageContainer>
        <div id="events">
            <PageContainer>
                <Link to={"/bijzondere-events"}>
                    <SectionTitle title={"Bijzondere events"} subtitle={""}/>
                    <img src={ChoralEvensong} alt={"ChoralEvensong"}/>

                    <br/>
                    <p><b>Info:</b>Het middaggebed wordt gedurende de zomerperiode niet gehouden en zal in september weer aanvangen</p>
                </Link>
                {/*<UpcomingEventList events={events.edges}/>*/}
            </PageContainer>
        </div>
        <div id="contact">
            <Contact/>
        </div>
    </Layout>
}

export default IndexPage
