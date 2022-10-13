import React, { useEffect } from "react";
import NavBar from "../includes/NavBar";
import ExploreHomes from "./ExploreHomes";
import RecentProperties from "./RecentProperties";
import Slider from "./Slider";

function Home() {
    return (
        <div>
            <NavBar />
            <Slider />
            <RecentProperties />
            <ExploreHomes />
        </div>
    );
}

export default Home;
