import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/portfolio'} element={<Portfolio />}/>
                </Routes>
            </main>
        </>

    );
}

export default App;
