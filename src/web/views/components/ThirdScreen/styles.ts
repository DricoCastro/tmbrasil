import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const ThirdScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:30px;
padding-bottom:30px;
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const HolderTexts = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
@media (max-width: 699px) {
text-align:center;
  }
`;

export const TextTitle = styled.h2`
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
  }

`;

export const TextSubTitle = styled.h3`

`;

export const HolderCards = styled.div`
display: flex;
align-items:stretch;
justify-content:space-between;
flex-direction:row;
width:100%;
padding-top:15px;
padding-bottom:15px;
@media (max-width: 830px) {
    flex-direction:column;
  }
`;

export const Card = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:290px;
height:350px;
padding-left:15px;
padding-right:15px;
padding-top:5px;
padding-bottom:5px;
border:3px solid ${COLORS.scooter};
border-radius:8px;
box-shadow: 0 0 .2rem black,
              0 0 .2rem black,
              0 0 1.5rem ${COLORS.scooter} ,
              0 0 0.0rem ${COLORS.scooter},
              0 0 1.0rem ${COLORS.scooter},
              inset 0 0 0.5rem ${COLORS.scooter};
@media (max-width: 1400px) {
    height:300px;
    width:240px;
    margin-top:15px;
  }
@media (max-width: 1200px) {
   width:200px;
   height:330px;
  }
  @media (max-width: 830px) {
    width:100%;
  }

`;


export const CardTitle = styled.h1`
font-size:18px;
font-weight:700;
text-align:center;
`;

export const CardDescription = styled.h2`
font-size:16px;
font-weight:500;
text-align:center;
`;

export const Information = styled.a`
margin-top:10px;
font-size:10px;
font-weight:500;
text-align:center;
@media (max-width: 800px) {
    width:100%;
  }
`;