import { createTheme } from "@mui/material"
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  }
});
