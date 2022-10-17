import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import Title from "../includes/Title";
import { BiAward } from "react-icons/bi";
import { BiTrophy } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";

function OurAwards() {
    return (
        <MainContainer>
            <div className="wrapper">
                <Title
                    title="Our Awards"
                    description="Over 1,24,000+ Happy User Being With us . Still They Love Our Services "
                    color="true"
                />
                <ListBox>
                    <Award>
                        <Icon>
                            <BiTrophy />
                        </Icon>
                        <Number>
                            <CountUp enableScrollSpy duration={2} end={31} /> M
                        </Number>
                        <AwardName>Blue Burmin Award</AwardName>
                    </Award>
                    <Award>
                        <Icon>
                            <BiAward />
                        </Icon>
                        <Number>
                            <CountUp enableScrollSpy duration={2} end={29} /> M
                        </Number>
                        <AwardName>Mimo XII Award</AwardName>
                    </Award>
                    <Award>
                        <Icon>
                            <BsTrophy />
                        </Icon>
                        <Number>
                            <CountUp enableScrollSpy duration={2} end={36} /> M
                        </Number>
                        <AwardName>Australian UGC Award</AwardName>
                    </Award>
                    <Award>
                        <Icon>
                            <FaMedal />
                        </Icon>
                        <Number>
                            <CountUp enableScrollSpy duration={2} end={42} /> M
                        </Number>
                        <AwardName>IITCA Award</AwardName>
                    </Award>
                </ListBox>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 70px;
    background-color: #0b0b45;
`;
const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 50px;
`;
const Award = styled.div``;
const Icon = styled.div`
    background-color: rgba(4, 59, 92, 0.4);
    color: #fff;
    padding: 25px;
    width: max-content;
    margin: 0 auto 10px;
    font-size: 20px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
`;
const Number = styled.div`
    color: #fff;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
`;
const AwardName = styled.div`
    color: #fff;
    font-size: 16px;
    text-align: center;
`;
export default OurAwards;
