import React from "react";
import ExploreHomes from "./ExploreHomes";
import OurAwards from "./OurAwards";
import OurFeaturedAgents from "./OurFeaturedAgents";
import PropertyTypes from "./PropertyTypes";
import SelectPackage from "./SelectPackage";
import Slider from "./Slider";

function Home() {
    return (
        <div>
            {/* <NavBar /> */}
            <Slider />
            <PropertyTypes />
            <ExploreHomes />
            <OurFeaturedAgents />
            <OurAwards />
            <SelectPackage />
        </div>
    );
}

export default Home;
