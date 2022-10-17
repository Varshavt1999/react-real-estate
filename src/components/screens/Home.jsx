import React, { useEffect } from "react";
import { PropertyType } from "../../datas/PropertyTypeData";
import NavBar from "../includes/NavBar";
import PackageCard from "../includes/PackageCard";
import Question from "../includes/Question";
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
