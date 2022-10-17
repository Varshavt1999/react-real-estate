import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSpotlight from "../includes/AboutSpotlight";
import ContactForm from "../includes/ContactForm";

function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <MainContainer>
            <AboutSpotlight title="Service - All Services" contact="true" />
            <div
                className="wrapper"
                data-aos="zoom-in-up"
                data-aos-offset="200"
            >
                <ContactForm />
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div``;
export default Contact;
