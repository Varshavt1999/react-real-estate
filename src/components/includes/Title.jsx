import React from "react";
import styled from "styled-components";

function Title({ title, description, color }) {
    return (
        <div>
            <Heading color={color}>{title}</Heading>
            <Description color={color}>{description}</Description>
        </div>
    );
}
const Heading = styled.div`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${({ color }) => (color ? "#fff" : "#000")};
`;
const Description = styled.p`
    font-size: 17px;
    text-align: center;
    color: ${({ color }) => (color ? "#fff" : "#5f5959")};
    width: 65%;
    margin: 0 auto 50px;
`;
export default Title;
