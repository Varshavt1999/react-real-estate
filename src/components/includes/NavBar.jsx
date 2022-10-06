import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuData } from "../../datas/MenuData";
import Button from "./Button";
import { FaBars } from "react-icons/fa";

function NavBar() {
    console.log(MenuData);
    return (
        <MainContainer>
            <div className="wrapper">
                <Logo to="/">RealEstate.</Logo>
                <Hamburger />
                <NavMenu>
                    {MenuData.map((item, index) => (
                        <NavMenuLinks key={index} to={item.link}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button
                        primary="true"
                        content="Contact Us"
                        path="/contact"
                    />
                </NavBtn>
            </div>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    height: 80px;
    background-color: transparent;
    & .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
const Logo = styled(Link)`
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
`;
const Hamburger = styled(FaBars)`
    display: none;
    @media all and (max-width: 768px) {
        display: block;
    }
`;
const NavMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const NavMenuLinks = styled(Link)`
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 24px;
    background-color: aliceblue;
    text-align: center;
    &:hover {
        -webkit-box-shadow: 0px 0px 10px 0px #000000;
        box-shadow: 0px 0px 10px 0px #000000;
        transition: 0.3s;
        transform: translateY(-2px);
    }
`;
const NavBtn = styled.div`
    &:hover {
        transition: 0.3s;
        transform: translateY(-2px);
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
export default NavBar;