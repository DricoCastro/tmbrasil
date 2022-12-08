import styled from "styled-components"
import { COLORS } from "../../../../../utils/colors";

export const FourthScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
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
width:30%;
@media (max-width: 699px) {
  display:none;
  }
`;

export const HolderCards = styled.div`
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
border-radius:10px;
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding-left:10px;
padding-right: 10px;
padding-top:50px;
padding-bottom:50px;
@media (max-width: 699px) {
  flex-direction:column;
  padding-top:30px;
  border-radius:15px;
  }


`;

export const Card = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:20%;
height:100%;
@media (max-width: 699px) {
  width:100%;
  margin-top:40px;
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


