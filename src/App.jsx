import React, { useState } from 'react'; // Added useState
import { Routes, Route } from "react-router-dom";

// Home page 
import Header from './components/Header';
import Intro from './components/Intro';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Footer from './components/Footer';
import Solution from './components/Solution';
import Partner from './components/Partner';

// Individual pages
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SolutionPage from "./pages/SolutionPage";
import LoginPage from "./pages/LoginPage";
import GrantPage from "./pages/GrantPage";

// services
import SmartSolutions from './ServicesType/softwareSolution';
import IndustrialIT from './ServicesType/industrialITPeripherals';
import Electronic from './ServicesType/electronic';
import Consultation from './ServicesType/consult';
import Maintenance from './ServicesType/maintenance';
import EPMSDetails from './ServicesType/EPMSDetails';

function App() {
    // 1. Initialize state based on localStorage so it survives page refreshes
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );
    return (
        <>
            {/* 2. Pass state to Header if you want to show 'Logout' button there */}
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Intro />
                            <AboutUs />
                            <Service />
                            <Solution />
                            <Partner />
                        </>
                    }
                />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* 3. Pass the state to SolutionPage to trigger Admin View */}
                <Route path="/solution" element={<SolutionPage isLoggedIn={isLoggedIn} />} />
                <Route path="/grant" element={<GrantPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="/softwareSolution" element={<SmartSolutions />} />
                <Route path="/industrial-it" element={<IndustrialIT />} />
                <Route path="/electronic" element={<Electronic />} />
                <Route path="/consult" element={<Consultation />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/epms-details" element={<EPMSDetails />} />

                {/* 4. Pass setIsLoggedIn so the login page can update the state */}
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;