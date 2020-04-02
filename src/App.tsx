import React from "react";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

import Root from "./pages/Root";

import theme from "./theme";

import "./api";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Root />
    </ThemeProvider>
  );
}

export default App;
