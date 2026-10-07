"use client"

import React from "react"

import eventsJson from "../data/events.json"
import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import Bloks from "../components/feature"
import {Hello} from "../components/hello"
import {WelcomeBanner} from "../components/welcome-banner"
import {SectionTitle} from "../components/section-title"
import {PageContainer} from "../components/page-container"
import {UpcomingEventList} from "../components/event"
import introImage from "../images/ark-groepsfoto.jpg"
import {Contact} from "../components/contact"


const IndexPage = () => {
    const events = {edges: [...eventsJson].sort((a, b) => (a.eventDate > b.eventDate ? 1 : a.eventDate < b.eventDate ? -1 : 0)).map(node => ({node}))}

    return <Layout>
        <HeroImage image={introImage}/>
        <Bloks/>
        <SectionTitle title={"Hallo & Welkom"} subtitle={"Samen één in de naam van Jezus"}/>
        <WelcomeBanner/>
        <PageContainer>
            <Hello/>
        </PageContainer>
        <div id="events">
            <PageContainer>
                <UpcomingEventList events={events.edges}/>
            </PageContainer>
        </div>
        <div id="contact">
            <Contact/>
        </div>
    </Layout>
}

export default IndexPage
