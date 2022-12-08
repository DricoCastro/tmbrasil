import styled from "styled-components"

export const FifthScreenHolder = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
width:100%;
padding-left: clamp(1rem, 10.42vw, 12.5rem);
padding-right: clamp(1rem, 10.42vw, 12.5rem);
@media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;