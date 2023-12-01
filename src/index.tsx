import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { RecoilRoot } from "recoil";
import Layout from "./layout";
import { globalTheme } from "./styles/theme.styles";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <RecoilRoot>
                <ThemeProvider theme={globalTheme}>
                    <GlobalStyle />
                    <Layout>
                        <App />
                    </Layout>
                </ThemeProvider>
            </RecoilRoot>
        </BrowserRouter>
    </QueryClientProvider>,
);
