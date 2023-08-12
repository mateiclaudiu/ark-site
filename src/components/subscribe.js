import React from "react"
import {PageContainer} from "./page-container"
import {SectionTitleForDarkMode} from "./section-title"
import {ButtonStyled, ContactStyled, ItalicTitleStyled} from "./styled"
import Layout from "./layout"
import {activeColor, gold} from "./colors";
import {Link} from "gatsby";
import festival from "../images/A3-POSTER-Festival-01.jpg"

let link = <Link to="/ark-50-jaar-jubileum/" activeStyle={{color: activeColor}}>Klik hier voor ons 50 jaar jubileum
    evenementen</Link>;
export const Subscribe = () => (
    <ContactStyled style={{background: gold}}>
        <PageContainer>
            {/*<SectionTitleForDarkMode title={"De Antwerpse Raad van Kerken viert zijn 50ste jaar jubileum\n Meer info binnenkort beschikbaar"}*/}
            {/*                         subtitle={link}/>*/}
        </PageContainer>
        {/*<Link to="/jubileum-festival">*/}
            <img src={festival} alt="jubileum festival"/>
        {/*</Link>*/}
    </ContactStyled>
)
