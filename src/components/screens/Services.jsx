import React from "react";
import styled from "styled-components";
import AboutSpotlight from "../includes/AboutSpotlight";
import PropertyTypes from "../screens/PropertyTypes";

function Services() {
    return (
        <MainContainer>
            <AboutSpotlight title="Service - All Services" service="true" />
            <PropertyTypes />
        </MainContainer>
    );
}
const MainContainer = styled.div``;
export default Services;
