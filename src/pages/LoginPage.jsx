import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate here

const LoginPage = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate(); // Now properly imported and called

    // MISSING FUNCTION: This handles the typing in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple hardcoded check
        if (formData.username === "cybage" && formData.password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            alert("Login successful");
            navigate("/solution");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login-wrapper">
            {/* Side Image / Branding */}
            <div className="login-side-image">
                <div className="overlay-text">
                    <h2>Welcome Back</h2>
                    <p>Enter your credentials to access the Cybage Industrial Dashboard.</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        <img src="/logo.jpg" alt="Cybage Logo" className="login-logo" />
                        <h1>Login</h1>
                        <p>Access your digital ecosystem</p>
                    </div>

                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange} // Now defined
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange} // Now defined
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        Sign In
                    </button>

                    <p className="signup-prompt">
                        Don't have an account? <Link to="/contact">Contact Admin</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;