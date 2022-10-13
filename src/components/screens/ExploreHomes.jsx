import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../includes/Button";
import styled from "styled-components";
import { InteriorData } from "../../datas/InteriorData";

function ExploreHomes() {
    const [current, setCurrent] = useState(0);
    const length = InteriorData.length;
    const timeout = useRef(null);
    useEffect(() => {
        Aos.init();
    }, []);
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        timeout.current = setTimeout(nextSlide, 2500);
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);
    if (!Array.isArray(InteriorData) || InteriorData.length <= 0) {
        return null;
    }
    return (
        <MainContainer>
            <div className="wrapper">
                <InnerContainer>
                    <Left data-aos="slide-right" data-aos-offset="200">
                        <Title>Explore our beautiful homes</Title>
                        <ParaOne>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud eiusmod tempor
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud
                        </ParaOne>
                        <ParaTwo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt sed do
                            eiusmod tempor incididunt
                        </ParaTwo>
                        <ButtonContainer>
                            <Button
                                content="View Homes"
                                path="/homes"
                                primary="true"
                                arr="true"
                            />
                        </ButtonContainer>
                    </Left>
                    <Right data-aos="slide-left" data-aos-offset="200">
                        {InteriorData.map((item, i) => (
                            <SliderContainer key={i}>
                                {i === current && (
                                    <ImageBox>
                                        <Image src={item.image} />
                                    </ImageBox>
                                )}
                            </SliderContainer>
                        ))}
                    </Right>
                </InnerContainer>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 60px 0;
`;
const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-column-gap: 60px;
    place-items: center;
`;
const Left = styled.div``;
const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const ParaOne = styled.p`
    font-size: 16px;
    color: #797575;
    margin-bottom: 10px;
`;
const ParaTwo = styled.p`
    font-size: 16px;
    color: #797575;
    margin-bottom: 50px;
`;
const ButtonContainer = styled.div`
    &:hover {
        transform: translateY(-2px);
    }
`;
const Right = styled.div`
    height: 600px;
    overflow: hidden;
`;
const SliderContainer = styled.div``;
const ImageBox = styled.div`
    overflow: hidden;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export default ExploreHomes;
