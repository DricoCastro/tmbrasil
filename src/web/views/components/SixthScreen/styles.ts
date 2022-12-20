import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";
import { PrimaryButtonContainer, PrimaryButtonText } from "../../../components/PrimaryButton/styles";

export const FourthScreenHolder = styled.div`
background-color:${COLORS.scooter};
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:100px;
padding-bottom:100px;
@media (max-width: 1100px) {
  flex-direction:column-reverse;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const HolderLeftSide = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
width:45%;
@media (max-width: 1100px) {
  width:85%;
  margin-bottom:30px;
  }
`;

export const HolderCar = styled.div`
display:none;
@media (max-width: 1100px) {
  display:block;
  margin-bottom:30px;
  margin-top:30px;
  }
`;


export const HolderRightSide = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
width:50%;
@media (max-width: 1100px) {
  width:100%;
  align-items:center;
  }
  ${PrimaryButtonContainer}{
    margin-top:20px;
    background-color:${COLORS.white};
   ${PrimaryButtonText}{
    color:${COLORS.black};
   }
  }
`;


export const HolderTexts = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
text-align:start;
width:100%;
color:${COLORS.white};
@media (max-width: 1100px) {
  text-align:center;
  justify-content:center;
  align-items:center;
  }
`;

export const TextTitle = styled.h2`
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
    text-align:center;
  }
`;