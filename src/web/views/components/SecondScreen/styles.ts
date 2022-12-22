import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";
import { PrimaryButtonContainer, PrimaryButtonText } from "../../../components/PrimaryButton/styles";

export const SecondScreenHolder = styled.div`
background-color:${COLORS.scooter};
display: flex;
align-items:center;
justify-content:space-between;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:75px;
padding-bottom:75px;
color:${COLORS.white};
@media (max-width: 1100px) {
  flex-direction:column;
    padding-left: 15px;
    padding-right: 15px;
  }
`;


export const HolderInfos = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
@media (max-width: 1100px) {
  width:100%;
  }
  ${PrimaryButtonContainer}{
    background-color:${COLORS.white};
   ${PrimaryButtonText}{
    color:${COLORS.black};
   }
  }

`;


export const HolderTexts = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
@media (max-width: 1100px) {
  text-align:justify;
  }
`;

export const TextTitle = styled.h2`
font-size:26px;
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

export const FirstParagraph = styled.p`
text-align:center;
font-size:20px;
font-weight:500;
a{
  border-bottom:1px solid ${COLORS.white};
  @media (max-width: 1100px) {
    font-size:14px;
  }
}
@media (max-width: 1100px) {
    font-size:16px;
  }
`;

export const HolderCards = styled.div`
display:flex;
align-items:stretch;
flex-direction:row;
justify-content:space-evenly;
width:100%;
margin-top:50px;
margin-bottom:50px;
@media (max-width: 1100px) {
  flex-direction:column;
  margin-top:10px;
  }
`;

export const Card = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding-top:30px;
padding-bottom:30px;
padding-left:80px;
padding-right:80px;
border-radius:10px;
height:100%;
background-color:${COLORS.white};
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media (max-width: 1100px) {
  :last-child{
    margin-top:40px;
  }
  }
  a{
    margin-top:20px;
    font-size:18px;
    font-weight:600;
    text-align:center;
    color:${COLORS.mirage};
    @media (max-width: 1100px) {
  width:100%;
  }
  }
  
  `;