import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../includes/NavBar";

function Index() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Index;
