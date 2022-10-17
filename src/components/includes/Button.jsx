import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

function Button({ content, path, primary, arr }) {
    return (
        <BtnContainer to={path} primary={primary}>
            {content}
            {arr ? <ArrowContainer /> : null}
        </BtnContainer>
    );
}

const BtnContainer = styled(Link)`
    display: inline-block;
    background: ${(primary) => (primary ? "#000d1a" : "#cd853f")};
    color: ${(primary) => (primary ? "#fff" : "#000d1a")};
    min-width: 100px;
    max-width: 170px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.3s;
    padding: ${(big) => (big ? "12px" : "10px ")};
    font-size: ${(big) => (big ? "15px" : "13px")};
    display: flex;
    justify-content: center;
    text-align: center;
`;
const ArrowContainer = styled(FaArrowRight)`
    margin-left: 10px;
`;
export default Button;
