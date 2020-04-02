import styled from "styled-components"

export const ItalicTitleStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-style: italic;
  color: ${props => props.color};
`

export const TitleStyled = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Poppins;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`

export const IntroStyled = styled.div`
  padding: 200px 0;
  text-align: center;
  background-image: url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80);
  background-size: cover;
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

export const SectionStyled = styled.div`
  text-align:center;
  padding: 10% 3%;
`

export const ColumnStyled = styled.div`
  color: gray;
  column-count: 2;
  column-gap: 30px;
  @media (max-width: 768px) {
    column-count: unset;
  }
`

export const BannerStyled = styled.div`
  background-color: #424555;
  padding: 5%;
  width:30%;
  width: 100%;
  text-align:center;
  
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
  background: #a2473e;
  color: white;
  font-family: Poppins;
  font-weight: 300;
  padding: 20px;
  
  a{
    text-decoration: none;
    color: white;
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
  text-align: center;
  margin: 1rem 5rem;
  width: 33%;
  flex-grow: 1;
  display: inline-block;
  flex: 1 0 21%;
  
  img{
    border-radius: 50%;
    width: 11rem;
    height: 11rem;
  }
`
