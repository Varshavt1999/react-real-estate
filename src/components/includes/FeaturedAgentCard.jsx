import React from "react";
import styled from "styled-components";
import { BiMessageDetail } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

function FeaturedAgentCard({ item, aos, aos_duration }) {
    return (
        <CardContainer
            key={item.id}
            data-aos={aos}
            data-aos-duration={aos_duration}
        >
            <ProfileBox>
                <ProfileImg src={item.image} alt="profile-img" />
            </ProfileBox>
            <Name>{item.name}</Name>
            <Location>
                <LocationIcon>
                    <BiMap />
                </LocationIcon>
                <span>{item.location}</span>
            </Location>
            <Contact>
                <SocialMedia>
                    <FaFacebookF />
                </SocialMedia>
                <SocialMedia>
                    <FaInstagram />
                </SocialMedia>
                <SocialMedia>
                    <FaLinkedinIn />
                </SocialMedia>
                <SocialMedia>
                    <FaTwitter />
                </SocialMedia>
            </Contact>
            <BottomBox>
                <Message>
                    <BiMessageDetail />
                    <span>Message</span>
                </Message>
                <Call>
                    <BiPhone />
                </Call>
            </BottomBox>
        </CardContainer>
    );
}
const CardContainer = styled.div`
    border-radius: 4px;
    padding: 20px 10px;
    box-shadow: 0px 3px 6px 0 rgb(0 0 0 / 10%), 0 0 10px rgb(0 0 0 / 10%);
`;
const ProfileBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    padding: 3px;
    border: 2px solid #dad6d6;
`;
const ProfileImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;
const Name = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    text-align: center;
`;
const Location = styled.h4`
    font-size: 14px;
    margin-bottom: 15px;
    text-align: center;
    color: #5f5c5c;
    display: flex;
    align-items: center;
    justify-content: center;
    & span {
        margin-left: 5px;
    }
`;
const LocationIcon = styled.div`
    font-size: 15px;
`;
const Contact = styled.div`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;
const SocialMedia = styled.div`
    width: 35px;
    height: 35px;
    padding: 5px;
    border-radius: 50%;
    background-color: rgb(105, 105, 105, 0.4);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
`;
const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Message = styled.div`
    background-color: green;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    & span {
        font-size: 12px;
        margin-left: 5px;
    }
`;
const Call = styled.div`
    color: #fff;
    font-size: 17px;
    background-color: #000;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
`;
export default FeaturedAgentCard;
