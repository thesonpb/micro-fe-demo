import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import HomeContent from "./HomeContent";

const App = () => (
    <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <HomeContent />
        <Footer />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
