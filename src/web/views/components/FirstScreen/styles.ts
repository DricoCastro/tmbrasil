import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const FirstScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:-110px;
color:${COLORS.white};
@media (max-width: 1100px) {
    margin-bottom:-110px;
  }
  @media (max-width: 599px) {
    margin-bottom:-60px;
  }
`;

export const HolderLeftSide = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  padding-top:80px;
  padding-bottom:200px;
  padding-left: clamp(1rem, 10.42vw, 12.5rem);
  padding-right: clamp(1rem, 10.42vw, 12.5rem);
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom:-68px;
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
text-shadow: 2px 2px gray;
a{
  border-bottom:1px solid ${COLORS.scooter};
  text-shadow: 2px 2px gray;
}
@media (max-width: 1100px) {
    font-size:24px;
  }
`;

export const TextSubtitle = styled.h2`
text-align:center;
font-size:22px;
text-shadow: 2px 2px gray;
a{
  text-shadow: 2px 2px gray;
  border-bottom:1px solid ${COLORS.scooter};
}
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

interface BackgroundProps {
  url?: string | null;
}

export const Background = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:auto;
  overflow: hidden;
  background-image: url("https://i.postimg.cc/HLzSMrJk/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

export const BackgroundContainerSobBlur = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
`;