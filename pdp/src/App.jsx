import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import PDPContent from "./PDPContent";

const App = () => (
    <BrowserRouter>
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <div className="text-xl my-10">
                <Routes>
                    <Route path="/products/:id" element={<PDPContent />} />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
