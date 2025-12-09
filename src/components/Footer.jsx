import React from "react";
import "/src/App.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Diagonal top edge */}
            <div className="footer-diagonal"></div>

            <div className="footer-content">
                <div className="footer-inner">

                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img className="footer-logo-icon" src="/logo.jpg"></img>
                        </div>

                        <p className="footer-description">
                            “Innovator in IoT, Empowered by Innovation” 

                        </p>

                        <div className="footer-info-list">
                            <div className="footer-info-item">
                                {/*<span className="footer-info-icon">📍</span>*/}
                                <span>
                                    21-1, Jalan SW21, Taman Sutera Wangi,<br />
                                    Batu Berendam 75350 Melaka, Malaysia
                                </span>
                            </div>

                            <div className="footer-info-item">
                                {/*<span className="footer-info-icon">📞</span>*/}
                                <span>+6016-7978042</span>
                            </div>

                            <div className="footer-info-item">
                                {/*<span className="footer-info-icon">📧</span>*/}
                                <span>enquiry@cybagetech.com.my</span>
                            </div>

                            <div className="footer-info-item">
                                {/*<span className="footer-info-icon">🌐</span>*/}
                                <span>www.cybagetech.com.my</span>
                            </div>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">Explore</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#iot">IoT Systems</a></li>
                            <li><a href="#automation">Industrial Automation</a></li>
                            <li><a href="#software">Custom Software</a></li>
                            <li><a href="#engineering">Electronic Engineering</a></li>
                            <li><a href="#consulting">IT Consulting</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Cybage Technologies Sdn Bhd. All rights reserved. | Since 2017
                    </p>
                </div>
            </div>
        </footer>
    );
}
