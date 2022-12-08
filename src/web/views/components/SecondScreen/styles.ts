import styled from "styled-components"

export const SecondScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
@media (max-width: 1100px) {
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
  display:none;
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
font-size:16px;
font-weight:500;
@media (max-width: 1100px) {
    font-size:14px;
  }
`;

export const SecondParagraph = styled.p`
font-size:16px;
font-weight:500;
@media (max-width: 1100px) {
    font-size:14px;
  }
`;

export const BenefictsList = styled.ul`
list-style-type: circle;
width:100%;
`;

export const BenefictsListItems = styled.li`
margin-top:5px;
font-size:16px;
font-weight:500;
@media (max-width: 1100px) {
    font-size:14px;
  }
`;