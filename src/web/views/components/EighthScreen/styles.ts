import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const EighthScreenHolder = styled.div`
background-color:${COLORS.scooter};
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:100px;
padding-bottom:100px;
color:${COLORS.white};
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Title = styled.h2`
font-size:24px;
text-align:center;
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

export const Maps = styled.iframe`
width:100%;
height:500px;
border-radius:20px;
border:none;
margin-top:30px;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
@media (max-width: 1100px) {
    height:400px;
  }
`;

export const HolderSocials = styled.div`
margin-top:30px;
margin-bottom:50px;
display: flex;
align-items:center;
justify-content:space-evenly;
flex-direction:row;
width:40%;
color:${COLORS.white};
@media (max-width: 1100px) {
  width:80%;
  }
  @media (max-width: 699px) {
  width:100%;
  }
`;

export const SocialsRadius = styled.div`
display: flex;
align-items:center;
justify-content:center;
width:80px;
height:80px;
border-radius:50%;
background-color:var(--white);
color:${COLORS.white};
cursor:pointer;
:hover{
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    transform: translate3d(0,-2px,0);
  }
  @media (max-width: 699px) {
    width:60px;
height:60px;
  }
`;