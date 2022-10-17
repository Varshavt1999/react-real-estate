import React from "react";
import styled from "styled-components";

function ContactForm() {
    return (
        <MainContainer>
            <Title>Fill up the form</Title>
            <Form>
                <Input type="text" placeholder="Name" className="one" />
                <Input type="text" placeholder="Email" className="two" />
                <Input type="text" placeholder="Subject" className="three" />
                <Input
                    type="text"
                    placeholder="Type Something..."
                    className="four"
                />
                <Button>Submit Request</Button>
            </Form>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    width: 70%;
    margin: 0 auto 60px;
    padding: 40px;
    background-color: rgba(11, 11, 69, 0.7);
    border-radius: 4px;
`;
const Title = styled.h3`
    color: #fff;
    font-size: 16px;
    margin-bottom: 15px;
`;
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Input = styled.input`
    display: inline-block;
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
    margin-bottom: 30px;
    &.one {
        width: 47%;
    }
    &.two {
        width: 47%;
    }
`;
const Button = styled.button`
    padding: 10px;
    border-radius: 4px;
    background-color: #000;
    color: #fff;
    text-align: center;
`;
export default ContactForm;
