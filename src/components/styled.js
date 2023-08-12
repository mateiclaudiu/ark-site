import styled from "styled-components"
import {color4, activeColor} from "./colors";

export const ItalicTitleStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-style: italic;
  color: ${props => props.color};
`

export const TitleStyled = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Montserrat;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

export const HeroImageContainerStyled = styled.div`
  padding: ${props => props.padding};
  text-align: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
   @media (min-width: 1200px) {
    padding: ${props => props.paddingDesktop};
  }
`

HeroImageContainerStyled.defaultProps = {
  padding: "200px 0",
  paddingDesktop: "350px 0"
}

export const FeatureBlockStyled = styled.div`
  background-color: ${props => props.backgroundColor};
  text-align:center;
  padding: 7%;
  width:100%;
  @media (min-width: 768px) {
    padding: 7%;
    width:50%;
  }  
  @media (min-width: 1200px) {
    width: 25%;
    padding: 3%;
  }
`

export const FeatureContainerStyled = styled.div`
 display: flex;
 width:100%;
 flex-direction: column;
 
 @media (min-width: 768px) {
  flex-direction: unset;
  flex-wrap: wrap;
 } 
 @media (min-width: 1200px) {
  flex-direction: unset;
  flex-wrap: nowrap;
 }
`

export const SectionStyled = styled.div`
  text-align:center;
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

export const ColumnStyled = styled.div`
  color: gray;
  column-count: unset;
  @media (min-width: 768px) {  
     column-count: 2;
     column-gap: 30px;
  }
`

export const BannerStyled = styled.div`
  background-color: #f1f1f1;
  padding: 2%;
  width:30%;
  width: 100%;
  text-align:center;
  font-size: 1rem;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;
  }  
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;

  }
`

export const BannerImgStyled = styled.div`
  border-radius: 50%;
  //width: 30%;
  padding: 30px;
`

export const BannerTextStyled = styled.div`
  //width: 70%;
   @media (min-width: 768px) {
      width: 100%;
    }  
  @media (min-width: 1200px) {
    width: 100%;
  }
`

export const FooterStyled = styled.footer`
  background: ${color4};
  color: #71717f;
  font-family: Montserrat;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 3rem;
  
  a{
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`

export const LeaderShipContainerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
      flex-wrap: wrap;

  }
`

export const LeaderShipStyled = styled.div`
    margin: 5rem auto 0 auto;
    width: 50%;
    text-align: center;

  
  img{
    border-radius: 50%;
    min-width: 11rem;
    min-height: 11rem;
    margin-bottom: 1rem;
  }
  
    @media (min-width: 768px) {
      margin: 1rem 5rem 4rem 5rem;
      width: 33%;
      flex-grow: 1;
      display: inline-block;
      flex: 1 0 21%;
  }
`


export const EventStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  #border-bottom: 1px darkgray solid;
  padding-bottom: 1rem; 
  @media (min-width: 768px) {
    flex-direction: row;
  } 
  &:last-child {
     border-bottom: none;
  }

`

export const EventDayStyled = styled.div`
  width: 7.5rem;
  @media (min-width: 768px) {
    text-align: right;
    margin-right: 0.5rem;
  } 
`

export const EventDateStyled = styled.div`
  display: flex;
  min-width: 16rem;

`
export const AStyledContainer = styled.div`
  a{
      text-transform: capitalize;
      color: ${activeColor};
      text-decoration: none;
      transition: 0.1s;
    }
  a:hover{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const LinkBlockStyled = styled.div`
  padding-bottom: 1rem;
  font-family: Montserrat;
  font-size: 0.8rem;
`

export const ContactStyled = styled.div`
  background-color: ${activeColor};
//  padding: 2%;
  padding-bottom: 3rem;
  input{
    width: 100%;
    border: 1px solid #eaebec;
  } 
  textarea{
    width: 100%;
    border: 1px solid #eaebec;
  }
`

export const ButtonStyled = styled.button`
  padding: 1rem;
  border-radius: 5%;
  border: 1px solid #eaebec;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
  color:#707176;


`

export const ContactLabelStyled = styled.div
