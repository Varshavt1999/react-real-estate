import React from "react";
import styled from "styled-components";
import { PropertyType } from "../../datas/PropertyTypeData";
import PropertyTypeCard from "../includes/PropertyTypeCard";
import Title from "../includes/Title";

function PropertyTypes() {
    return (
        <OuterContainer>
            <div className="wrapper">
                <Title
                    title="Featured Property Types"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud eiusmod tempor
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud"
                />
                <MainContainer>
                    {PropertyType.map((item) => (
                        <PropertyTypeCard item={item} />
                    ))}
                </MainContainer>
            </div>
        </OuterContainer>
    );
}
const OuterContainer = styled.div`
    padding: 70px 0;
`;
const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 40px;
`;
export default PropertyTypes;
