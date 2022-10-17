import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../../components/screens/AboutUs";
import Contact from "../../components/screens/Contact";
import Home from "../../components/screens/Home";
import Index from "../../components/screens/Index";
import Pricing from "../../components/screens/Pricing";
import RecentProperties from "../../components/screens/RecentProperties";
import Services from "../../components/screens/Services";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route path="/" element={<Home />} />
                <Route path="/homes" element={<RecentProperties />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/Contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
