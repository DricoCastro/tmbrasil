import createTheme from "@mui/material/styles/createTheme";
import { ptBR } from "@mui/material/locale";
import { COLORS } from "../../../utils/colors";

export const UniversoJardinagemColorsTheme = createTheme(
	{
		palette: {
			primary: {
				main: COLORS.scooter,
				contrastText: COLORS.white,
			},
			secondary: {
				main: COLORS.white,
				contrastText: COLORS.black,
			},
			text: {
				primary: COLORS.mirage,
			},
			action: {
				active: COLORS.scooter,
			},
		},
	},
	ptBR
);

export const MuiTheme = createTheme({
	...UniversoJardinagemColorsTheme,
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					outline: "none",
					border: "none",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: "contained",
				size: "large",
			},
			variants: [
				{
					props: { color: "primary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.primary.main,
						color: UniversoJardinagemColorsTheme.palette.primary.contrastText,
						textTransform: "none",
					},
				},
				{
					props: { color: "secondary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.secondary.main,
						color: UniversoJardinagemColorsTheme.palette.secondary.contrastText,
						textTransform: "none",
					},
				},
			],
			styleOverrides: {
				root: {
					background: UniversoJardinagemColorsTheme.palette.primary.main,
					color: UniversoJardinagemColorsTheme.palette.primary.contrastText,
					boxShadow: "none",
					height: "56px",
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				color: "secondary",
				fullWidth: true,
			},
			variants: [
				{
					props: { color: "primary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.primary.main,
						color: UniversoJardinagemColorsTheme.palette.primary.contrastText,
						textTransform: "none",
					},
				},
				{
					props: { color: "secondary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.secondary.main,
						color: UniversoJardinagemColorsTheme.palette.secondary.contrastText,
						textTransform: "none",
					},
				},
			],
		},
		MuiSelect: {
			defaultProps: {
				color: "primary",
				fullWidth: true,
			},
			variants: [
				{
					props: { color: "primary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.primary.main,
						color: UniversoJardinagemColorsTheme.palette.primary.contrastText,
						textTransform: "none",
					},
				},
				{
					props: { color: "secondary" },
					style: {
						background: UniversoJardinagemColorsTheme.palette.secondary.main,
						color: UniversoJardinagemColorsTheme.palette.secondary.contrastText,
						textTransform: "none",
					},
				},
			],
		},
	},
});
