import styled from "styled-components"

export const FirstScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:center;
width:100%;
padding-top: 40px;
margin-bottom:-62px;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom:-68px;
  }
  @media (max-width: 899px) {
    margin-bottom:-70px;
  }
  @media (max-width: 599px) {
    margin-bottom:0px;
  }
`;

export const HolderLeftSide = styled.div`
width:70%;
margin-bottom:10px;
@media (max-width: 699px) {
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    text-align:center;
  }
`;

export const HolderTexts = styled.div`
display:flex;
flex-direction:column;
@media (max-width: 699px) {
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
  }
`;

export const TextTitle = styled.h1`
@media (max-width: 1100px) {
    font-size:24px;
  }
`;

export const TextSubtitle = styled.h2`
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

export const HolderRightSide = styled.div`
width:30%;
display:flex;
align-items:center;
justify-content:center;
@media (max-width: 699px) {
    display:none;
  }
`;