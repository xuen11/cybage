import React from "react";
import { Link, useLocation } from "react-router-dom";
import "/src/App.css";

export default function Footer() {
    const location = useLocation();

    const handleCurrentPageClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="footer-container">

            <div className="footer-content">
                <div className="footer-inner">

                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <Link
                                to="/"
                                onClick={() => handleCurrentPageClick("/")}
                            >
                                <img
                                    className="footer-logo-icon"
                                    src="/logo.jpg"
                                    alt="Cybage Technologies Logo"
                                />
                            </Link>
                        </div>

                        <p className="footer-description">
                            “Innovator in IoT, Empowered by Innovation”
                        </p>

                        <div className="footer-info-list">
                            <div className="footer-info-item">
                                21-1, Jalan SW21, Taman Sutera Wangi,<br />
                                Batu Berendam 75350 Melaka, Malaysia
                            </div>
                            <div className="footer-info-item">+6016-7978042</div>
                            <div className="footer-info-item">enquiry@cybagetech.com.my</div>
                            <div className="footer-info-item">www.cybagetech.com.my</div>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">Explore</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/" onClick={() => handleCurrentPageClick("/")}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => handleCurrentPageClick("/about")}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" onClick={() => handleCurrentPageClick("/services")}>
                                    Services & Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/solution" onClick={() => handleCurrentPageClick("/solution")}>
                                    Solution
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => handleCurrentPageClick("/contact")}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links (service anchors) */}
                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/softwareSolution">
                                    Smart Software Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to="/electronic">
                                    Electronic Device Design / Product Engineering
                                </Link>
                            </li>
                            <li>
                                <Link to="/industrial-it">
                                    Industrial IT Peripheral
                                </Link>
                            </li>
                            <li>
                                <Link to="/consult">
                                    IT Technology Consultation & Training
                                </Link>
                            </li>
                            <li>
                                <Link to="/maintenance">
                                    Maintenance & Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Cybage Technologies Sdn Bhd.
                        All rights reserved. | Since 2017
                    </p>
                </div>
            </div>
        </footer>
    );
}
