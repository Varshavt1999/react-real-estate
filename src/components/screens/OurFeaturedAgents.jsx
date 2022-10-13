import React, { useEffect } from "react";
import styled from "styled-components";
import { FeaturedAgentData } from "../../datas/FeaturedAgentData";
import FeaturedAgentCard from "../includes/FeaturedAgentCard";
import AOS from "aos";
import "aos/dist/aos.css";

function OurFeaturedAgents() {
    useEffect(() => {
        AOS.init();
    }, []);

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
                    {FeaturedAgentData.map((item) => (
                        <FeaturedAgentCard
                            item={item}
                            aos="zoom-in-up"
                            aos_duration="4000"
                        />
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
    margin: 0 auto 50px;
`;
const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
`;
export default OurFeaturedAgents;
