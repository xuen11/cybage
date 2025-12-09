import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "/src/App.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Header shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top whenever location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Product", path: "/product" },
        { name: "Project", path: "/project" },
        { name: "About", path: "/about" },
    ];

    // Simple handler to close mobile menu
    const handleNavigate = () => {
        setIsMobileMenuOpen(false);
    };

    // Force immediate scroll to top when clicking current page link
    const handleCurrentPageClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <div className="logo-section">
                    <Link
                        to="/"
                        onClick={() => {
                            handleNavigate();
                            if (location.pathname === "/") {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }
                        }}
                    >
                        <img src="/logo.jpg" alt="Logo" className="logo-icon" />
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? "active-link" : ""
                                        }`}
                                    onClick={() => handleCurrentPageClick(item.path)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className="contact-btn-container">
                    <Link
                        to="/contact"
                        className="contact-btn"
                        onClick={() => {
                            handleNavigate();
                            if (location.pathname === "/contact") {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }
                        }}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;