import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import Layout from "../Layout";
import AppRoutes from "../AppRoutes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../commons/queryClient";
import { AuthProvider } from "../../store/contexts/Auth/AuthContext";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AuthProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
