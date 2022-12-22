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
padding-top:30px;
padding-bottom:30px;
color:${COLORS.white};
@media (max-width: 1100px) {
  flex-direction:column;
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

export const HolderImg = styled.div`
`;


export const HolderRightSide = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:54%;
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
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

export const FirstParagraph = styled.p`
text-align:justify;
font-size:16px;
font-weight:500;
@media (max-width: 1100px) {
    font-size:14px;
  }
`;
