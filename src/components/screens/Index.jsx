import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../includes/NavBar";
import Question from "../includes/Question";

function Index() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Question />
        </div>
    );
}

export default Index;
