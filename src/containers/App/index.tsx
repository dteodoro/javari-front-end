import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

import Layout from "../Layout";
import AppRoutes from "../AppRoutes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../commons/queryClient";
import { AuthProvider } from "../../store/contexts/Auth/AuthContext";
import { BettorProvider } from "../../store/contexts/Auth/BettorContext";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AuthProvider>
          <BettorProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </BettorProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
