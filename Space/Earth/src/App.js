import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Portfolio from "./pages/Portfolio";
import Price from "./pages/Price";

function App() {
    const location = useLocation();
    return (
        <>
            <Header />
            <main className="container">
                <AnimatePresence initial={true} mode='wait'>
                    <Routes key={location.pathname} location={location}>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/about'} element={<About />} />
                        <Route path={'/price'} element={<Price />} />
                        <Route path={'/portfolio'} element={<Portfolio />} />
                        <Route path={'/order'} element={<Order />} />
                    </Routes>
                </AnimatePresence>

            </main>
        </>

    );
}

export default App;
