import React from "react"
import {PageContainer} from "./page-container"
import {SectionTitleForDarkMode} from "./section-title"
import {ButtonStyled, ContactStyled, ItalicTitleStyled} from "./styled"
import Layout from "./layout"
import {activeColor, gold} from "./colors";
import {Link} from "gatsby";

let link = <Link to="/ark-50-jaar-jubileum/" activeStyle={{color: activeColor}}>Klik hier voor ons 50 jaar jubileum
    evenementen</Link>;
export const Subscribe = () => (
    <ContactStyled style={{background: gold}}>
        <PageContainer>
            <SectionTitleForDarkMode title={"De Antwerpse Raad van Kerken viert zijn 50ste jaar jubileum\n"}
                                     subtitle={link}/>
        </PageContainer>
    </ContactStyled>
)
