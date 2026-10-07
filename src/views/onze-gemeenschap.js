"use client"

import React from "react"
import styled from "styled-components"

import communityImage from "../images/community_q_10.jpg"

import kerkJson from "../data/kerk.json"
import Layout from "../components/layout"
import {HeroImageContainerStyled, ItalicTitleStyled, TitleStyled} from "../components/styled"
import {PageContainer} from "../components/page-container"
import {PageHeadingStyled, PanelStyled, SmallLabelStyled, eventsBorder, mutedText} from "../components/events-styled"
import {activeColor, color2, color3, color5, textColor} from "../components/colors"
import {churchStats} from "../utils/church-stats"

// Lidorganisaties staan (nog) niet in kerk.json.
const LIDORGANISATIES = [
  {naam: "Gemeenschap Chemin Neuf", adres: "De Merodelei 12-14", plaats: "2600 Antwerpen-Berchem"},
  {naam: "Brug van de Hoop vzw", adres: "Bisschoppenhoflaan 383", plaats: "2100 Antwerpen-Deurne"},
]

// Eén logokleur per groep, als klein bolletje.
const GROUP_COLORS = {"rooms-katholiek": color3, "evangelisch": color2, "overig": textColor, "lidorganisatie": color5}

// "Orthodoxe kerk (8 parochies)" → { name: "Orthodoxe kerk", count: "8 parochies" }
const splitCount = title => {
  const match = title.match(/^(.*?)\s*\(([^()]*\d[^()]*)\)$/)
  return match ? {name: match[1], count: match[2]} : {name: title, count: ""}
}

const normalize = text => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")

const groups = [
  ...[...kerkJson]
    .sort((a, b) => (a.kerk > b.kerk ? 1 : a.kerk < b.kerk ? -1 : 0))
    .map(g => ({...splitCount(g.kerk), groep: g.groep, kerken: g.kerken})),
  {name: "Lidorganisaties", count: `${LIDORGANISATIES.length} organisaties`, groep: "lidorganisatie", kerken: LIDORGANISATIES},
]

const IntroStyled = styled.p`
  color: #333;
  line-height: 1.7;
  margin: 0 0 2rem 0 !important;
`

const StatsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }
`

const StatStyled = styled(PanelStyled)`
  padding: 1.1rem 0.4rem;
  text-align: center;
  border-top: 3px solid ${props => props.$accent};

  span {
    display: block;
    font-size: 0.58rem;
    letter-spacing: 0.04em;
    overflow-wrap: anywhere;

    @media (min-width: 768px) {
      font-size: 0.68rem;
      letter-spacing: 0.08em;
    }
  }

  div {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.9rem;
    line-height: 1.1;
    color: ${textColor};
    margin-bottom: 0.3rem;

    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
  }
`

const SearchStyled = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.4rem;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.75rem 0.9rem;
    font: inherit;
    font-size: 1rem;
    color: #222;
    background: white;
    border: 1px solid #cfd4dc;
    border-radius: 3px;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  input:focus {
    outline: none;
    border-color: ${activeColor};
    box-shadow: 0 0 0 3px rgba(27, 123, 172, 0.15);
  }
`

const GroupStyled = styled.details`
  background: white;
  border: 1px solid ${eventsBorder};
  border-radius: 4px;
  margin-bottom: 0.6rem;

  summary {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "";
    flex-shrink: 0;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.5rem;
    border-right: 2px solid #8a8f9c;
    border-bottom: 2px solid #8a8f9c;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 0.2s;
  }

  &[open] summary::after {
    transform: rotate(-135deg) translateY(-2px);
  }

  summary:hover {
    background: #f7f8fa;
  }
`

const DotStyled = styled.span`
  flex-shrink: 0;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: ${props => props.$color};
`

const GroupNameStyled = styled.span`
  flex: 1;
  min-width: 0;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 1.35;
  color: ${textColor};
`

const GroupCountStyled = styled.span`
  flex: 0 1 auto;
  max-width: 38%;
  font-size: 0.8rem;
  line-height: 1.3;
  color: ${mutedText};
  text-align: right;
`

const ChurchListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.25rem 0.5rem;
  border-top: 1px solid ${eventsBorder};

  li {
    margin: 0;
    padding: 0.7rem 0;
    border-bottom: 1px solid #f0f1f3;
    line-height: 1.45;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  }

  li:last-child {
    border-bottom: none;
  }

  li > span:first-child {
    color: #222;
  }

  li > span:last-child {
    display: block;
    color: ${mutedText};
    font-size: 0.92rem;
  }
`

const LegendStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin: 0 0 1rem 0;
  font-size: 0.85rem;
  color: ${mutedText};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
`

const EmptyStyled = styled.p`
  color: ${mutedText};
  font-style: italic;
`

const CallToActionStyled = styled.div`
  background: ${textColor};
  color: rgba(255, 255, 255, 0.9);
  padding: 3.5rem 0;
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.6rem;
    color: white;
    margin: 0 0 0.6rem 0;
  }

  p {
    margin: 0 0 1.75rem 0 !important;
  }

  a {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${textColor};
    background: white;
    border-radius: 3px;
    padding: 0.85rem 1.75rem;
    transition: background-color 0.2s;
  }

  a:hover {
    background: #e8eef5;
  }
`

const LEGEND = [
  {label: "Rooms-katholiek", color: GROUP_COLORS["rooms-katholiek"]},
  {label: "Evangelisch", color: GROUP_COLORS["evangelisch"]},
  {label: "Overige lidkerken", color: GROUP_COLORS["overig"]},
  {label: "Lidorganisaties", color: GROUP_COLORS["lidorganisatie"]},
]

const OurCommunityPage = () => {
  const [query, setQuery] = React.useState("")
  const q = normalize(query.trim())

  const visibleGroups = groups
    .map(group => {
      if (!q) return group
      if (normalize(group.name).includes(q)) return group
      const kerken = group.kerken.filter(k => normalize(`${k.naam} ${k.adres} ${k.plaats}`).includes(q))
      return kerken.length ? {...group, kerken} : null
    })
    .filter(Boolean)

  return <Layout>
    <HeroImageContainerStyled paddingDesktop={"150px 0"} padding={"50px 0"}
                              image={communityImage}>
      <ItalicTitleStyled fontSize={"1.1rem"} color={"white"}>Laat hen allen één zijn, Vader...</ItalicTitleStyled>
      <ItalicTitleStyled fontSize={"0.9rem"} color={"white"}> - Johannes 17:21 - </ItalicTitleStyled>
      <TitleStyled fontSize={"3rem"} color={"white"}>ARK</TitleStyled>
    </HeroImageContainerStyled>
    <PageContainer>
      <PageHeadingStyled>Onze gemeenschap</PageHeadingStyled>
      <p style={{fontStyle: "italic", color: mutedText, margin: "0 0 1.5rem 0"}}>
        "Ga uit in de hele wereld en maak aan ieder schepsel het goede nieuws bekend"
      </p>
      <IntroStyled>
        Onze gemeenschap bestaat momenteel uit {churchStats.genootschappen} lidkerken (of ‘kerkgenootschappen’), die
        samen {churchStats.totaal} plaatselijke kerken of parochies omvatten. Ruim de helft hiervan
        ({churchStats.roomsKatholiek}) zijn rooms-katholieke parochies en gemeenschappen, één derde
        ({churchStats.evangelisch}) bestaat uit evangelische kerken, en de rest ({churchStats.overig}) uit de overige
        lidkerken van de ARK. Daarnaast telt de ARK ook {LIDORGANISATIES.length} lidorganisaties.
      </IntroStyled>

      <StatsStyled>
        <StatStyled $accent={color3}><div>{churchStats.genootschappen}</div><SmallLabelStyled>Lidkerken</SmallLabelStyled></StatStyled>
        <StatStyled $accent={color2}><div>{churchStats.totaal}</div><SmallLabelStyled>Plaatselijke kerken</SmallLabelStyled></StatStyled>
        <StatStyled $accent={color5}><div>{LIDORGANISATIES.length}</div><SmallLabelStyled>Lidorganisaties</SmallLabelStyled></StatStyled>
      </StatsStyled>

      <SearchStyled>
        <label htmlFor="kerk-zoeken"><SmallLabelStyled>Zoek een kerk, straat of gemeente</SmallLabelStyled></label>
        <input id="kerk-zoeken" type="search" value={query} onChange={e => setQuery(e.target.value)}
               placeholder="bv. Berchem, Sint-Jacob, Pinkster…" autoComplete="off"/>
      </SearchStyled>

      <LegendStyled aria-hidden="true">
        {LEGEND.map(({label, color}) => <span key={label}><DotStyled $color={color}/>{label}</span>)}
      </LegendStyled>

      {visibleGroups.map(group => (
        <GroupStyled key={group.name + (q ? "-zoek" : "")} open={Boolean(q)}>
          <summary>
            <DotStyled $color={GROUP_COLORS[group.groep]}/>
            <GroupNameStyled>{group.name}</GroupNameStyled>
            <GroupCountStyled>{q ? `${group.kerken.length} gevonden` : group.count}</GroupCountStyled>
          </summary>
          <ChurchListStyled>
            {group.kerken.map(k => (
              <li key={`${k.naam}-${k.adres}`}>
                <span>{k.naam}</span>
                <span>{k.adres}, {k.plaats}</span>
              </li>
            ))}
          </ChurchListStyled>
        </GroupStyled>
      ))}
      {visibleGroups.length === 0 && <EmptyStyled>Geen kerken gevonden voor “{query}”.</EmptyStyled>}
    </PageContainer>

    <CallToActionStyled id="contact">
      <PageContainer>
        <h2>Wenst u meer info over de ARK?</h2>
        <p>Wij nodigen u graag uit voor een nadere kennismaking.</p>
        <a href="/#contact">Contacteer ons</a>
      </PageContainer>
    </CallToActionStyled>
  </Layout>
}

export default OurCommunityPage
