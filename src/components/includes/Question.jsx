import React from "react";
import styled from "styled-components";

function Question() {
    return (
        <MainContainer>
            <div className="wrapper">
                <Left>
                    <Title>Do You Have any Questions ?</Title>
                    <SubTitle>
                        We will help you to grow your career and growth.
                    </SubTitle>
                </Left>
                <Right>
                    <Button>Contact us Today</Button>
                </Right>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 60px 0;

    background-color: green;
    & .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Left = styled.div``;
const Title = styled.div`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 15px;
`;
const SubTitle = styled.div`
    font-size: 16px;
    color: #fff;
`;
const Right = styled.div``;
const Button = styled.div`
    color: green;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    width: max-content;
    cursor: pointer;
`;

export default Question;
