import React, { useEffect } from "react";
import styled from "styled-components";
import { PackageData } from "../../datas/PackageData";
import PackageCard from "../includes/PackageCard";
import Title from "../includes/Title";

function SelectPackage() {
    return (
        <MainContainer>
            <div className="wrapper">
                <Title
                    title="Select Your Package"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud eiusmod tempor
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud"
                />
                <ListBox>
                    {PackageData.map((item) => (
                        <PackageCard item={item} />
                    ))}
                </ListBox>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 60px 0;
`;
const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    padding: 40px 0;
`;
export default SelectPackage;
