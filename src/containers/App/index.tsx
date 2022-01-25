import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import Layout from "../Layout";
import AppRoutes from "../AppRoutes";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
