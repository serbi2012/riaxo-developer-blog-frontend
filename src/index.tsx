import "./styles/colorRoot.css";

import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@mui/material";

import App from "./App";
import { Layout } from "./layout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { globalTheme } from "./styles/theme.styles";

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
