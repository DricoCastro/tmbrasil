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
align-items:center;
justify-content:space-between;
flex-direction:row;
width:100%;
padding-top:15px;
padding-bottom:15px;
@media (max-width: 800px) {
    flex-direction:column;
  }
`;

export const Card = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:24%;
height:350px;
padding-left:15px;
padding-right:15px;
padding-top:5px;
padding-bottom:5px;
border:3px solid ${COLORS.scooter};
border-radius:8px;
@media (max-width: 800px) {
    height:auto;
    width:50%;
    margin-top:15px;
  }
  @media (max-width: 499px) {
    width:80%;
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