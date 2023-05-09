import React from "react"
import {PageContainer} from "../components/page-container"
import {SectionTitleForDarkMode} from "../components/section-title"
import {ButtonStyled, ContactStyled, ItalicTitleStyled} from "../components/styled"
import {Link} from "gatsby";
import festival from "../images/A5-BROCHURE-ARK-festival-210x148-spread-01.jpg"
import SecondPage from "./bestuur";

export const JubileumFestival = () => (
    <ContactStyled>
        {/*<PageContainer>*/}
        {/*    <SectionTitleForDarkMode title={"De Antwerpse Raad van Kerken viert zijn 50ste jaar jubileum\n Klik hier voor meer"}*/}
        {/*                             subtitle={link}/>*/}
        {/*</PageContainer>*/}
        <img src={festival} alt="jubileum festival"/>
    </ContactStyled>
)
export default JubileumFestival
