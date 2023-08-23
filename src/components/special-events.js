import {EventDateStyled, EventDayStyled, EventStyled, ItalicTitleStyled, TitleStyled} from "./styled";
import {color3} from "./colors";
import React from "react";
import fototentoonstelling from "../images/2023 ark tentoonstelling affiche.jpg"

export const SpecialEvent = () => (<>
    <div style={{textAlign: "center", background: "#bdd7ee"}}>
        <img src={fototentoonstelling}/>
    </div>
    <PageContainer>
        <h1>Fototentoonstelling, een unieke kijk in de diversiteit van de kerk van vandaag</h1>
        <ItalicTitleStyled>
            In het kader van het 50-jarig jubileum van de Antwerpse Raad van Kerken werd in oktober en
            november 2022 een grote fototentoonstelling georganiseerd. Deze vond plaats op diverse locaties in
            het centrum van Antwerpen. We mochten hiervoor meer dan 1000 bezoekers verwelkomen.
            Uit honderden foto’s werden er 130 geselecteerd. Die gaven een overzicht van de gebruiken en
            rituelen in de 11 lidkerken de ARK. <br/>
            Het zou zonde zijn om dit prachtig materiaal nu in een kast in de kelder te steken. Daarom hebben
            we besloten om delen van deze collectie op diverse plaatsen tentoon te stellen. Nadat we reeds
            gebruik mochten maken van de gastvrijheid van het Sint-Anneke Centrum op Linkeroever, geven we
            hieronder een overzicht van de volgende geplande exposities:<br/>
            Dessel:<br/>
            Sint – Niklaaskerk Turnhoutsebaan Dessel-centrum<br/>
            Zondagen 10, 17 en 24 september 2023 voor en na de misviering (9.30 uur).<br/>
            <br/>
            Merksem:<br/>
            O. L. V. van Smarten Pastoor Bampsstraat 1, Merksem<br/>
            Zondagen 8, 15 en 22 oktober 2023 voor en na de misviering (10.30 uur).<br/>
            <br/>
            Wijnegem:<br/>
            O. L. V. van de Bloeiende Wijngaardkerk Wommelgemsesteenweg 34 Wijnegem<br/>
            Januari 2024 (details volgen).
        </ItalicTitleStyled>
    </PageContainer>
</>);