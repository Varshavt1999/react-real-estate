import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function PropertyTypeCard({ item }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <MainContainer data-aos="zoom-in-left">
            <Icon>
                <IconImg src={item.icon} alt="property-icon" />
            </Icon>
            <Title>{item.title}</Title>
            <Description>{item.count} property</Description>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 20px;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%), 0 0 10px rgb(0 0 0 / 10%);
    border-radius: 8px;
`;
const Icon = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
    padding: 10px;
    background-color: rgba(124, 176, 265, 0.6);
    border: 2px solid rgba(124, 176, 265, 0.6);
    margin: 0 auto 10px;
`;
const IconImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Title = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
`;
const Description = styled.div`
    font-size: 16px;
    color: #a7a7a7;
    text-align: center;
`;

export default PropertyTypeCard;
