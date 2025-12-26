import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "/src/App.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // DELETE THIS LINE:
    // const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const location = useLocation();
    const navigate = useNavigate();

    // 1. Handle Scroll Effect
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

    // 2. Check Auth Status on Page Load/Navigation
    useEffect(() => {
        const authStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(authStatus === "true");
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // 3. Logout Logic
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn"); // Clear storage
        setIsLoggedIn(false); // Update local state
        setIsMobileMenuOpen(false); // Close menu if open
        navigate("/login"); // Redirect to login page
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services & Product", path: "/services" },
        { name: "Solution", path: "/solution" },
        { name: "About", path: "/about" },
    ];

    const handleNavItemClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo-section">
                    <Link to="/" onClick={() => handleNavItemClick("/")}>
                        <img src="/logo.jpg" alt="Logo" className="logo-icon" />
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? "active-link" : ""}`}
                                    onClick={() => handleNavItemClick(item.path)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Mobile-only Actions (Optional: helps UI on small screens) */}
                        {/*<li className="mobile-only-actions">*/}
                        {/*    {isLoggedIn ? (*/}
                        {/*        <button className="logout-btn-mobile" onClick={handleLogout}>Logout</button>*/}
                        {/*    ) : (*/}
                        {/*        <Link to="/login" className="login-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>*/}
                        {/*    )}*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="header-actions">
                    {isLoggedIn ? (
                        <button
                            className="login-btn logout-mode"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="login-btn"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Login
                        </Link>
                    )}

                    <Link
                        to="/contact"
                        className="contact-btn"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
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