import React from "react";
import styled from "styled-components";
import HomeLeft from "../../images/bg-left.avif";
import HomeMiddle from "../../images/bg-middle.avif";
import HomeRight from "../../images/bg-right.avif";
import ServLeft from "../../images/serv-1.avif";
import ServMiddle from "../../images/serv-2.avif";
import ServRight from "../../images/serv-3.avif";
import PricingLeft from "../../images/pric-1.avif";
import PricingMiddle from "../../images/pric-2.avif";
import PricingRight from "../../images/pric-3.avif";
import ContLeft from "../../images/cont-1.avif";
import ContMiddle from "../../images/cont-2.avif";
import ContRight from "../../images/cont-3.avif";

function AboutSpotlight({ title, service, pricing, contact }) {
    return (
        <TopBox>
            <ImgBox>
                <Image
                    src={
                        service
                            ? ServLeft
                            : pricing
                            ? PricingLeft
                            : contact
                            ? ContLeft
                            : HomeLeft
                    }
                    alt="home"
                />
            </ImgBox>
            <ImgBox>
                <Image
                    src={
                        service
                            ? ServMiddle
                            : pricing
                            ? PricingMiddle
                            : contact
                            ? ContMiddle
                            : HomeMiddle
                    }
                    alt="home"
                />
            </ImgBox>
            <ImgBox>
                <Image
                    src={
                        service
                            ? ServRight
                            : pricing
                            ? PricingRight
                            : contact
                            ? ContRight
                            : HomeRight
                    }
                    alt="home"
                />
            </ImgBox>
            <Heading>{title}</Heading>
        </TopBox>
    );
}
const TopBox = styled.div`
    position: relative;
    height: calc(100vh - 140px);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    margin-bottom: 60px;
`;
const ImgBox = styled.div``;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Heading = styled.h3`
    font-size: 38px;
    font-weight: bold;
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translatey(-50%);
    padding: 10px 20px;
    background-color: rgba(136, 156, 200, 0.5);
    border-radius: 8px;
`;
export default AboutSpotlight;
