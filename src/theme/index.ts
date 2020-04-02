import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const defaultTheme = createMuiTheme({});

const theme = responsiveFontSizes(defaultTheme);

export default theme;
