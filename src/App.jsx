import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Intro from './components/Intro';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
//import Project from './components/Project';
import Footer from './components/Footer';
//import Contact from './components/Contact';
import Solution from './components/Solution';
import Partner from './components/Partner';

import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
//import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import SolutionPage from "./pages/SolutionPage";


function App() {
    return (
        <>
            <Header />

            <Routes>
                {/* HOME PAGE */}
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

                {/* SERVICE PAGE */}
                <Route path="/services" element={<ServicePage />} />

                {/* Add more pages later */}
                {/* <Route path="/product" element={<ProductPage />} /> */}
                <Route path="/about" element={<AboutPage />} /> 
                <Route path="/solution" element={<SolutionPage />} /> 
                <Route path="/contact" element={<ContactPage />} /> 

            </Routes>

            <Footer/>
        </>
    );
}

export default App;
