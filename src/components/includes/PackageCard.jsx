import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

function PackageCard({ item }) {
    return (
        <CardContainer>
            <PackageName>{item.plan}</PackageName>
            <Price>${item.Price}</Price>
            <Usage>per user , per month</Usage>
            <List>
                {item.list.map((val) => {
                    const { text, availability } = val;
                    return (
                        <ListItem>
                            <Icon availability={availability}>
                                {availability ? <Tick /> : <Cancel />}
                            </Icon>
                            <span>{text}</span>
                        </ListItem>
                    );
                })}
            </List>
        </CardContainer>
    );
}
const CardContainer = styled.div`
    padding: 30px 20px;
    border-radius: 8px;
    box-shadow: 0px 3px 6px 0 rgb(0 0 0 / 10%), 0 0 10px rgb(0 0 0 / 10%);
    &:nth-child(2) {
        transform: scale(1.1);
    }
`;
const PackageName = styled.div`
    font-size: 28px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
`;
const Price = styled.div`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    color: green;
    margin-bottom: 10px;
`;
const Usage = styled.div`
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
`;
const List = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    & span {
        font-size: 15px;
    }
`;
const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
    padding: 5px;
    background-color: ${({ availability }) =>
        availability ? "rgb(0, 128, 0, 0.4)" : "rgb(128, 0, 0, 0.4)"};
`;
const Tick = styled(BiCheck)`
    font-size: 18px;
    color: green;
    font-weight: bold;
`;
const Cancel = styled(GrFormClose)`
    font-size: 18px;
    color: red !important;
    font-weight: bold;
`;
export default PackageCard;
