import styled from "styled-components"
import { COLORS } from "../../../../utils/colors";

export const HomeFooterHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${COLORS.codGray};
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);

    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 499px) {
        padding-bottom:80px;
        padding-top:80px;
    }
`;


export const PanelFooterContainer = styled.div`
    width:100%;
    padding-top: clamp(2.60vw, 2.60vw, 3.13rem);
`;



export const PanelFooterTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
        span {
            font-size:16px;
            margin-top:30px;
            font-weight: 300;
            color: var(--gray);
                @media (max-width: 1049px) {
                    text-align:center;
                    font-size:14px;
            }
        }
`; 

export const HolderLogo = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding:10px 20px;
    border-radius:5px;
    background-color:${COLORS.alabaster};
`; 

export const PanelFooterBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--mineShaft);
    margin-top: clamp(2.69rem, 2.03vw, 2.44rem);
    padding-top: clamp(2.69rem, 2.03vw, 2.44rem);
    @media (max-width: 1049px) {
        margin-top: 15px;
        flex-direction: column;
        row-gap:50px;
        align-items: center;
        text-align: center;
    }
`;

export const PanelFooterBottomLinksUlContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        font-size:14px;
        color: var(--gray);
        display: inline;
	    transition: 0.3s all ease-out;
        &:not(:first-child) {
            margin-left: clamp(2.5vw, 2.5vw, 2rem);
        }
        &:hover {
			filter: brightness(1.5);
			text-decoration: underline;
		}
    }
`;

export const PanelFooterBottomSocialMediaContainerHolder = styled.div`
    font-size:14px;
    color: var(--gray);
    display: flex;
    align-items:center;
    flex-direction: column;
`;

export const PanelFooterBottomSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: clamp(1.04vw, 1.04vw, 1.25rem);
    margin-bottom: clamp(2.8vw, 2.8vw, 2.63rem);
    @media (max-width: 1049px) {
        margin-top:20px;
    }
   
`;

export const PanelFooterBottomSocialMediaButtonContainer = styled.div`
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(0.34rem, 0.34vw, 0.41rem);
    border-radius: 50%;
    width: clamp(2rem, 2vw, 3.5rem);
    height: clamp(2rem, 2vw, 3.5rem);
    &:not(:first-child) {
        margin-left: clamp(1.46vw, 1.46vw, 1.75rem);
    }
`;