import styled from "styled-components";

interface IconContainerProps {
    size: string;
}

export const PrimaryIconContainer = styled.div<IconContainerProps>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: flex;
`;