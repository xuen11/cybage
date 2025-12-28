import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    useEffect(() => {
        const authStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(authStatus === "true");
        window.scrollTo(0, 0);
    }, [location.pathname, setIsLoggedIn]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        setIsMobileMenuOpen(false);
        navigate("/login");
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services & Product", path: "/services" },
        { name: "Solution", path: "/solution" },
        { name: "Grant", path: "/grant" },
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
                <div className="logo-section">
                    <Link to="/" onClick={() => handleNavItemClick("/")}>
                        <img src="/logo.jpg" alt="Logo" className="logo-icon" />
                    </Link>
                </div>

                {/* The wrapper gets the 'active' class */}
                <nav className={`nav-wrapper ${isMobileMenuOpen ? "active" : ""}`}>
                    <div className="nav-content">
                        <ul className="nav-menu">
                            {navItems.map((item, index) => (
                                <li key={item.name} style={{ transitionDelay: `${index * 0.05}s` }}>
                                    <Link
                                        to={item.path}
                                        className={location.pathname === item.path ? "active-link" : ""}
                                        onClick={() => handleNavItemClick(item.path)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile-only action buttons */}
                        <div className="mobile-only-action">
                            {isLoggedIn ? (
                                <button className="login-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" className="login-btn" onClick={() => setIsMobileMenuOpen(false)}>
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
                    </div>
                </nav>


                <div className="header-actions">
                    {isLoggedIn ? (
                        <button className="login-btn" onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login" className="login-btn">Login</Link>
                    )}
                    <Link to="/contact" className="contact-btn">Contact</Link>
                </div>

                <button
                    className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
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