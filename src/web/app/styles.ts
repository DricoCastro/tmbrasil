import { createGlobalStyle } from "styled-components";
import { DEFAULT_COLORS } from "../../../utils/colors";

export const GlobalStyle = createGlobalStyle`
    :root {
        ${DEFAULT_COLORS.root}
    }
`;