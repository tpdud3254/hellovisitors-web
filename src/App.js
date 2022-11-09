import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client } from "./apollo";
import Layout from "./components/Layout";
import routes from "./routes";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound";
import { GlobalStyles } from "./styles/styles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
    const darkMode = false;
    const isLoggedIn = true;

    return (
        <ApolloProvider client={client}>
            <HelmetProvider>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    <GlobalStyles />
                    <Router>
                        <Routes>
                            <Route
                                path={routes.home}
                                element={
                                    isLoggedIn ? (
                                        <Layout>
                                            <Home />
                                        </Layout>
                                    ) : null
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </HelmetProvider>
        </ApolloProvider>
    );
}

export default App;
