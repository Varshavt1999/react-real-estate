import React from "react";
import styled from "styled-components";

function RecentPropertyCard({ item, aos, aos_offset }) {
    return (
        <CardContainer data-aos={aos} data-aos-offset={aos_offset}>
            <TopBox>
                <Image src={item.image} />
            </TopBox>
            <BottomBox>
                <For>For {item.sale ? "sale" : item.rent ? "rent" : ""}</For>
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
const For = styled.div``;
const PropertyName = styled.div``;
const Location = styled.div``;
const BottomBox = styled.div`
    padding: 20px;
`;
const Price = styled.div``;
const Rating = styled.div``;

export default RecentPropertyCard;
