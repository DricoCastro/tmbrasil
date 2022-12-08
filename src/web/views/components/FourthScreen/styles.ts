import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const FourthScreenHolder = styled.div`
background-color:${COLORS.scooter};
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:60px;
padding-bottom:60px;
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const HolderTop = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
width:100%;
color:${COLORS.white};
@media (max-width: 1100px) {
  }
`;

export const HolderLeftSide = styled.div`
display: flex;
align-items:center;
justify-content:center;
width:60%;
@media (max-width: 699px) {
  width:100%;
  }
`;

export const Title = styled.h2`
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
  }
  @media (max-width: 699px) {
  text-align:center;
  }
`;

export const HolderRightSide = styled.div`
display: flex;
align-items:flex-start;
justify-content:flex-start;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
width:30%;
@media (max-width: 699px) {
  display:none;
  }
`;

export const HolderCards = styled.div`
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
border-radius:10px;
border-top-right-radius:0;
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:stretch;
margin-bottom:30px;
background-color:${COLORS.white};
@media (max-width: 699px) {
  flex-direction:column;
  padding-top:30px;
  border-radius:15px;
  margin-top:50px;
  border-top-right-radius:15px;
  }


`;

export const Card1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
padding-top:50px;
padding-bottom:50px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
  box-shadow: none;
  }
`;

export const Card2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
padding-top:50px;
padding-bottom:50px;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
  }
`;

export const Card3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
padding-top:50px;
padding-bottom:50px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
  box-shadow: none;
  }
`;

export const Card4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
padding-top:50px;
padding-bottom:50px;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
  }
`;

export const Card5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
padding-top:50px;
padding-bottom:50px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
  box-shadow: none;
  }
`;

export const CardDescription = styled.a`
font-size:18px;
font-weight:600;
margin-top:40px;
text-align:center;
@media (max-width: 699px) {
  margin-top:25px;
  margin-bottom:40px;
  }
`;

export const HolderDivider = styled.div`
display:none;
@media (max-width: 699px) {
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  }
`;


