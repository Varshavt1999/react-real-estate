import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SliderData } from "../../datas/SliderData";
import Button from "../includes/Button";
import { css } from "styled-components";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Slider() {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const timeout = useRef(null);
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        timeout.current = setTimeout(nextSlide, 3500);
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    };
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <MainContainer>
            <SliderContainer>
                {SliderData.map((item, i) => (
                    <SliderBox key={i}>
                        {i === current && (
                            <Slide>
                                <ImageBox>
                                    <Image src={item.image} alt={item.alt} />
                                </ImageBox>
                                <Content>
                                    <Title>{item.title}</Title>
                                    <Price>{item.price}</Price>
                                    <BtnContainer>
                                        <Button
                                            to={item.path}
                                            content={item.label}
                                            primary="true"
                                            arr="true"
                                        />
                                    </BtnContainer>
                                </Content>
                            </Slide>
                        )}
                    </SliderBox>
                ))}
            </SliderContainer>
            <SliderButtons>
                <PrevArrow onClick={() => prevSlide()} />
                <NextArrow onClick={() => nextSlide()} />
            </SliderButtons>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    z-index: -1;
    /* position: absolute;
    top: 0;
    left: 0; */
`;
const SliderContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;
const SliderBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0.2) 0% rgba(0, 0, 0.2) 50% rgba(0, 0, 0.6) 100%
        );
    }
`;
const ImageBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - 80px);
`;
const Slide = styled.div``;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Content = styled.div`
    z-index: 15;
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
`;
const Title = styled.h4`
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Price = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 600;
`;
const SliderButtons = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 1fr 1fr;
    z-index: 10;
`;
const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50%;
    padding: 10px;
    transition: 0.3s;

    &:hover {
        background-color: #cd853f;
        transform: scale(1.05);
    }
`;
const PrevArrow = styled(FaAngleLeft)`
    ${ArrowButtons}
`;
const NextArrow = styled(FaAngleRight)`
    ${ArrowButtons}
`;
const BtnContainer = styled.div`
    transition: 0.3s;
    &:hover {
        transform: translateY(-2px);
    }
`;

export default Slider;
