import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Portfolio from "./pages/Portfolio";
import Price from "./pages/Price";
import Layout from "./components/Layout";
import AdminPage from "./Admin/AdminPage";

import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

function App() {
    /* const location = useLocation(); */

    return (
        <AuthProvider>
            <Header />

            <AnimatePresence initial={true} mode='wait'>
                <Routes >
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={'about'} element={<About />} />
                        <Route path={'price'} element={<Price />} />
                        <Route path={'portfolio'} element={<Portfolio />} />
                        <Route path={'order'} element={<Order />} />
                        <Route path={'login'} element={<Login />} />
                    </Route>
                    <Route path="/admin" element={
                        <RequireAuth>
                            <AdminPage />
                        </RequireAuth>}>
                    </Route>


                </Routes>
            </AnimatePresence>
        </AuthProvider>

    );
}

export default App;
