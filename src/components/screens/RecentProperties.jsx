import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { RecentPropertyData } from "../../datas/RecentPropertyData";
import RecentPropertyCard from "../includes/RecentPropertyCard";
function RecentProperties() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <MainContainer>
            <div className="wrapper">
                {" "}
                <Heading>Recent Properties Listed</Heading>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Description>
                <ListContainer>
                    {RecentPropertyData.map((item) => (
                        <RecentPropertyCard
                            item={item}
                            aos="zoom-in-up"
                            aos_offset="50"
                        />
                    ))}
                </ListContainer>
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
    width: 75%;
    margin: 0 auto 50px;
`;
const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default RecentProperties;
