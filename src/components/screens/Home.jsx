import React, { useEffect } from "react";
import NavBar from "../includes/NavBar";
import PackageCard from "../includes/PackageCard";
import Question from "../includes/Question";
import ExploreHomes from "./ExploreHomes";
import OurFeaturedAgents from "./OurFeaturedAgents";
import RecentProperties from "./RecentProperties";
import SelectPackage from "./SelectPackage";
import Slider from "./Slider";

function Home() {
    return (
        <div>
            {/* <NavBar /> */}
            <Slider />
            <ExploreHomes />
            <OurFeaturedAgents />
            <SelectPackage />
            <Question />
        </div>
    );
}

export default Home;
