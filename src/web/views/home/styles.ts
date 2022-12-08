import styled from "styled-components";
import { COLORS } from "../../../../utils/colors";

export const HomeHolder = styled.div`
    background-color:${COLORS.white};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-width:100%;
`;

export const HomeHolderWaveBottom = styled.div`
width:100%;
img{
    transform: rotate(180deg);
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 112px;
    @media (max-width: 599px) {
        height: 60px;
  }
}
`;

export const HomeHolderWaveTop = styled.div`
width:100%;
img{
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 112px;
    @media (max-width: 599px) {
        height: 60px;
  }
}
`;

