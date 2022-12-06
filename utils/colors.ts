import { css } from "styled-components";

export const COLORS = {
  white: "#FFFFFF",
  whiteOpacity35: "#FFFFFF35",
  black: "#000000",
  red: "#FF0000",
  gallery: "#ECECEC",
  alabaster: "#FCFCFC",
  alabasterDark: "#F5F5F5",
  mirage: "#181924",
  gray: "#8E8E8E",
  celtic: "#132A13",
  killarney: "#31572C",
  crete: "#4F772D",
  chelsea: "#90A955",
  sandwisp: "#ECF39E",
  apple: "#32CD30",
  parsley: "#2C5E1A",
  carafe: "#6B3A2C",
  codGray: "#0B0B0B",
};

export const DEFAULT_COLORS = {
  root: css`
    --white: ${COLORS["white"]};
    --whiteOpacity35: ${COLORS["whiteOpacity35"]};
    --black: ${COLORS["black"]};
    --red: ${COLORS["red"]};
    --gallery: ${COLORS["gallery"]};
    --alabaster: ${COLORS["alabaster"]};
    --alabasterDark: ${COLORS["alabasterDark"]};
    --mirage: ${COLORS["mirage"]};
    --gray: ${COLORS["gray"]};
    --celtic: ${COLORS["celtic"]};
    --killarney: ${COLORS["killarney"]};
    --crete: ${COLORS["crete"]};
    --chelsea: ${COLORS["chelsea"]};
    --sandwisp: ${COLORS["sandwisp"]};
    --apple: ${COLORS["apple"]};
    --parsley: ${COLORS["parsley"]};
    --carafe: ${COLORS["carafe"]};
    --codGray: ${COLORS["codGray"]};
    
  `,
};
