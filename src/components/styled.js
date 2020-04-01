import styled from "styled-components"

export const ItalicTitleStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-style: italic;
  color: ${props => props.color};
`

export const TitleStyled = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  line-height: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 1.2em;
`

export const IntroStyled = styled.div`
  padding: 200px 0;
  text-align: center;
  background-image: url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80);
  background-size: cover;
  transform-origin: 0% 11% 5px;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
   @media (min-width: 1200px) {
    padding: 350px 0;
  }
`

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


export const HelloContainerStyled = styled.div`
  padding: 10% 3%;
`

export const HelloStyled = styled.div`
  text-align:center;
  padding-bottom: 10%;
`

export const ColumnStyled = styled.div`
  color: gray;
  column-count: 2;
  column-gap: 30px;
  @media (max-width: 768px) {
    column-count: unset;
  }
`
