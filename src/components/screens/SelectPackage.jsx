import React, { useEffect } from "react";
import styled from "styled-components";
import { PackageData } from "../../datas/PackageData";
import PackageCard from "../includes/PackageCard";

function SelectPackage() {
    return (
        <MainContainer>
            <div className="wrapper">
                <Heading>Our featured Agents</Heading>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua iusmod tempor incididunt ut labore iusmod tempor
                    incididunt ut labore et dolore magna aliqua Lorem ipsum
                    dolor sit amet.
                </Description>
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
const Heading = styled.div`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
`;
const Description = styled.p`
    font-size: 17px;
    text-align: center;
    color: #5f5959;
    width: 65%;
    margin: 0 auto 70px;
`;
const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
`;
export default SelectPackage;
