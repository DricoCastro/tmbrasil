import styled from "styled-components"

export const FifthScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:80px;
padding-bottom:100px;
@media (max-width: 1100px) {
  }
`;

export const FifthScreenTitle = styled.h2`
cursor:pointer;
font-size:26px;
:hover{
  border-bottom:1px solid var(--scooter);
}
@media (max-width: 1100px) {
    font-size:20px;
  }
  @media (max-width: 699px) {
    text-align:center;
  }
`;

export const FifthScreenSubTitle = styled.h3`
font-size:22px;
@media (max-width: 1100px) {
    font-size:18px;
  }
  @media (max-width: 699px) {
    text-align:center;
  }
`;