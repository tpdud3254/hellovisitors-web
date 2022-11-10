import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import { GlobalStyles } from "./styles/styles";
import { darkTheme, lightTheme } from "./styles/theme";
import { app, auth } from "./firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIsLoggedIn(true);
            } else {
                // User is signed out
                setIsLoggedIn(false);
            }
            setLoading(false);
        });
    }, []);

    const darkMode = false;
    return (
        <HelmetProvider>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Router>
                    <Routes>
                        <Route
                            path={routes.home}
                            element={
                                loading ? null : isLoggedIn ? (
                                    <Layout>
                                        <Home />
                                    </Layout>
                                ) : (
                                    <Layout headerShown={false}>
                                        <Login />
                                    </Layout>
                                )
                            }
                        />
                        <Route
                            path={routes.signUp}
                            element={
                                <Layout headerShown={false}>
                                    <SignUp />
                                </Layout>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
