import styled from "styled-components"

export const SeventhScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
padding-top:30px;
padding-bottom:100px;
@media (max-width: 1100px) {
  }
`;

export const SeventhScreenTitle = styled.h2`
font-size:24px;
@media (max-width: 1100px) {
    font-size:20px;
  }
  @media (max-width: 699px) {
    text-align:center;
  }
`;
