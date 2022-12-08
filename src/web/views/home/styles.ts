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

export const Wpp = styled.a`
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
    display:flex;
	align-items:center;
    justify-content:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
`;

