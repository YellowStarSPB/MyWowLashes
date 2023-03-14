import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";

import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price/Price";

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
