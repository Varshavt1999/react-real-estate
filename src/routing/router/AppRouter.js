import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/screens/Home";
import Index from "../../components/screens/Index";
import RecentProperties from "../../components/screens/RecentProperties";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route path="/" element={<Home />} />
                <Route path="/homes" element={<RecentProperties />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
