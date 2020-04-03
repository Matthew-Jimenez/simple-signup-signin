import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#651bbe"
    },
    text: {
      primary: "#e5f3ff",
      secondary: "#e5e8ff"
    },
    background: {
      default: "#6cc4f2"
    }
  }
});

const theme = responsiveFontSizes(defaultTheme);

export default theme;
