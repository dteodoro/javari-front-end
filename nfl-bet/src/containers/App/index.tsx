import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import BetCardContainer from "../../components/BetCard/BetCardContainer";
import Layout from "../Layout";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <BetCardContainer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
