import React, { useEffect } from "react";
import styled from "styled-components";
import { FeaturedAgentData } from "../../datas/FeaturedAgentData";
import FeaturedAgentCard from "../includes/FeaturedAgentCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../includes/Title";

function OurFeaturedAgents() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <MainContainer>
            <div className="wrapper">
                <Title
                    title="Our Featured Agents"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud eiusmod tempor
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud"
                />
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

const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
`;
export default OurFeaturedAgents;
