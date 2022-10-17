import React from "react";
import styled from "styled-components";

import AboutSpotlight from "../includes/AboutSpotlight";
import SelectPackage from "../screens/SelectPackage";

function Pricing() {
    return (
        <MainContainer>
            <AboutSpotlight
                title="No Extra Fees - 30 days money back guarantee"
                pricing="true"
            />
            <SelectPackage />
        </MainContainer>
    );
}
const MainContainer = styled.div``;
export default Pricing;
