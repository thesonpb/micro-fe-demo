import React from "react";

import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

export default function Header() {
    return (
        <div className="bg-blue-500 text-3xl p-5 font-bold">
            <div className="flex justify-between">
                <div className="flex-grow text-white">Home</div>
                <div className="flex-end relative">
                    <MiniCart />
                    <Login />
                </div>
            </div>
        </div>
    );
}
