import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../includes/Title";
import HomeTwo from "../../images/our-home.avif";
import AboutSpotlight from "../includes/AboutSpotlight";

function AboutUs() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <MainContainer>
            <AboutSpotlight title="About Us - Who We Are ?" />
            <div className="wrapper">
                <BottomBox>
                    <LeftBox data-aos="slide-right" data-aos-offset="200">
                        <Title
                            title="Our Agency Story"
                            description="Check out our agency Story"
                        />
                        <Description className="first">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea{" "}
                        </Description>
                        <Description>
                            Excepteur sint occaecat cupidatat sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            nostrud exercitation ullamco laboris nisi ut aliquip
                        </Description>
                        <Button>More About Us</Button>
                    </LeftBox>
                    <RightBox data-aos="slide-left" data-aos-offset="200">
                        <RightBoxImg src={HomeTwo} alt="home" />
                    </RightBox>
                </BottomBox>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div``;

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 0;
`;
const LeftBox = styled.div`
    width: 48%;
`;
const Description = styled.p`
    font-size: 16px;
    color: #a7a7a7;
    line-height: 1.6;
    margin-bottom: 30px;
    &.first {
        margin-bottom: 10px;
    }
`;
const Button = styled.div`
    cursor: pointer;
    width: max-content;
    padding: 15px;
    border-radius: 8px;
    background-color: green;
    color: #fff;
    &:hover {
        transform: translateY(-2px);
    }
`;
const RightBox = styled.div`
    width: 48%;
`;
const RightBoxImg = styled.img`
    display: block;
    width: 100%;
`;
export default AboutUs;
