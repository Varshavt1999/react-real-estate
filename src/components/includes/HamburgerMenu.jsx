import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "../../datas/MenuData";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import Button from "./Button";

function HamburgerMenu({ isOpen, toggle }) {
    return (
        <MainContainer isOpen={isOpen}>
            <TopBox>
                <Close onClick={toggle} />
            </TopBox>
            <MenuBox>
                {MenuData.map((item, index) => (
                    <NavLinks key={index} to={item.link}>
                        {item.title}
                    </NavLinks>
                ))}
            </MenuBox>
            <BtnBox>
                <Button primary="true" content="Contact Us" path="/contact" />
            </BtnBox>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 20px;
    width: 100%;
    background-color: antiquewhite;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: all ease-in 0.4s;
`;
const TopBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Close = styled(FaTimes)`
    font-size: 25px;
`;
const MenuBox = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
`;
const NavLinks = styled(Link)`
    display: block;
    text-align: center;
    &:last-child {
        margin-bottom: 0;
    }
`;
const BtnBox = styled.div`
    width: max-content;
    margin: 0 auto;
    &:hover {
        transition: 0.3s;
        transform: translateY(-2px);
    }
`;
export default HamburgerMenu;
