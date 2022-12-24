import React from "react";

import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-blue-500 text-3xl p-5 font-bold">
            <div className="flex justify-between">
                <div className="flex flex-grow text-white">
                    <Link to="/">Home</Link>
                    <div className="mx-5">|</div>
                    <Link id="cart" to="/cart">
                        Cart
                    </Link>
                </div>
                <div className="flex-end relative">
                    <MiniCart />
                    <Login />
                </div>
            </div>
        </div>
    );
}
