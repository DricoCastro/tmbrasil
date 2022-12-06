import styled from "styled-components"
import { COLORS } from "../../../../utils/colors";

export const PrimaryButtonContainer = styled.button`
    border:none;
    outline:none;
    cursor:pointer;
    padding-left:25px;
    padding-right:25px;
    padding-top:12px;
    padding-bottom:12px;
    background-color:${COLORS.crete};
    border-radius:5px;
    transition: 0.05s ease-out;
  :hover{
    box-shadow: 0 3px 10px ${COLORS.celtic};
    transform: translate3d(0,-5px,0);
  }
    @media (max-width: 599px) {
    transition: none;
    :hover{
    box-shadow: none;
    transform: none;
  }
  }
`;

export const PrimaryButtonText = styled.a`
    font-size:16px;
    font-weight:500;
    color:${COLORS.white};
    @media (max-width: 599px) {
    font-size:14px;
  }
`;