import React from "react";
import styled from "styled-components";

function RecentPropertyCard({ item, aos, aos_offset }) {
    return (
        <CardContainer data-aos={aos} data-aos-offset={aos_offset}>
            <TopBox>
                <Image src={item.image} />
            </TopBox>
            <BottomBox>
                <For className={item.sale ? "active" : ""}>
                    For {item.sale ? "sale" : item.rent ? "rent" : ""}
                </For>
                <PropertyName>{item.title}</PropertyName>
                <Location>{item.location}</Location>
                <Price>{item.price}</Price>
                <Rating>{item.Rating}</Rating>
            </BottomBox>
        </CardContainer>
    );
}
const CardContainer = styled.div`
    box-shadow: 5px 5px 5px #c8c8c8;
    border-radius: 12px;
    overflow: hidden;
`;
const TopBox = styled.div`
    height: 200px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const For = styled.div`
    padding: 5px;
    font-size: 12px;
    background-color: rgb(128, 128, 0, 0.4);
    margin-bottom: 10px;
    width: max-content;
    &.active {
        background-color: rgb(0, 0, 128, 0.4);
    }
`;
const PropertyName = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: green;
    margin-bottom: 5px;
`;
const Location = styled.div`
    font-size: 14px;
    color: #797575;
    margin-bottom: 5px;
`;
const BottomBox = styled.div`
    padding: 20px;
`;
const Price = styled.div`
    font-size: 16px;
    font-weight: 600;
`;
const Rating = styled.div``;

export default RecentPropertyCard;
