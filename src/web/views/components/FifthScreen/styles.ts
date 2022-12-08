import styled from "styled-components"

export const FifthScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
@media (max-width: 1100px) {
  }
`;

export const FifthScreenTitle = styled.h2`
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
  }
`;

export const FifthScreenSubTitle = styled.h3`
font-size:20px;
@media (max-width: 1100px) {
    font-size:18px;
  }
`;