import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

export default function MainLayout() {
    return (
        <BrowserRouter>
            <div className="text-3xl mx-auto max-w-6xl">
                <Header />
                <div className="text-xl my-10">
                    <Routes>
                        <Route path="/products/:id" element={<PDPContent />} />
                        <Route path="/" element={<HomeContent />} />
                        <Route path="/cart" element={<CartContent />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
