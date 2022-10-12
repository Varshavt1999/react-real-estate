import React from "react";
import NavBar from "../includes/NavBar";
import RecentProperties from "./RecentProperties";
import Slider from "./Slider";

function Home() {
    return (
        <div>
            <NavBar />
            <Slider />
            <RecentProperties />
        </div>
    );
}

export default Home;
