import styled from "styled-components"

export const PageHolder = styled.div`
margin-top:50px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-self: center;
    justify-content: center;
`;

export const HolderCarousel = styled.div`
    display: flex;
    cursor: grab;
    width: 100%;
    height: auto;
    margin: auto;
    flex-direction: column;
    &:active{
    cursor: grabbing;
        };
`;

export const HolderCard = styled.div`
   margin: auto;
`;


