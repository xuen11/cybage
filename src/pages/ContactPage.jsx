import React, { useState } from 'react';
import '/src/App.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Show success message
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-us-container">
            <div className="contact-us-wrapper">
                <div className="contact-grid">

                    {/* Left Side - Creative Design */}
                    <div className="contact-left-side">

                        {/* Top Card with Image */}
                        <div className="top-card">
                            <div className="card-decoration"></div>
                            <div className="contact-card">
                                <div className="card-badge">
                                    <span>+</span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                                    alt="Professional"
                                    className="card-image"
                                />
                                <div className="card-content">
                                    <p className="card-title">CONNECT WITH</p>
                                    <p className="card-subtitle">Technology Experts</p>
                                </div>
                            </div>
                        </div>

                        {/* Center Circle Element */}
                        <div className="center-circle">
                            <div className="circle-outer">
                                <div className="circle-inner">
                                    <svg className="email-icon" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="circle-text">
                                <p className="circle-title">Reach Out As</p>
                                <p className="circle-subtitle">Partner / Client</p>
                            </div>
                        </div>

                        {/* Bottom Pattern */}
                        <div className="bottom-pattern">
                            <div className="pattern-bg"></div>
                            <svg className="wave-pattern" viewBox="0 0 200 200">
                                <defs>
                                    <pattern id="wave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0 20 Q10 10 20 20 T40 20" fill="none" strokeWidth="2" />
                                    </pattern>
                                </defs>
                                <rect width="200" height="200" fill="url(#wave)" />
                            </svg>
                        </div>

                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-right-side">
                        <div className="contact-header">
                            <h1 className="contact-title">
                                GET IN TOUCH<br />
                                WITH US
                            </h1>
                            <button className="contact-button">
                                CONTACT NOW
                                <svg className="button-arrow" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Form */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {isSubmitted && (
                                <div className="success-message">
                                    Message sent successfully! We'll contact you soon.
                                </div>
                            )}

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                SEND MESSAGE
                            </button>
                        </form>

                        {/* Contact Info Items */}
                        <div className="contact-features">
                            <div className="feature-item">
                                <div className="feature-number">
                                    <span>01</span>
                                </div>
                                <div className="feature-content">
                                    <div className="feature-icon-text">
                                        <div className="feature-icon teal"></div>
                                        <div>
                                            <p className="feature-text">Innovative IoT solutions</p>
                                            <p className="feature-year">/2025</p>
                                        </div>
                                    </div>
                                </div>
                                <svg className="feature-arrow" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </div>

                            <div className="feature-item">
                                <div className="feature-number">
                                    <span>02</span>
                                </div>
                                <div className="feature-content">
                                    <div className="feature-icon-text">
                                        <div className="feature-icon gray"></div>
                                        <div>
                                            <p className="feature-text">Trusted technology partner</p>
                                            <p className="feature-year">/2017</p>
                                        </div>
                                    </div>
                                </div>
                                <svg className="feature-arrow" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>

                            <div className="feature-item">
                                <div className="feature-number">
                                    <span>03</span>
                                </div>
                                <div className="feature-content">
                                    <div className="feature-icon-text">
                                        <div className="feature-icon purple"></div>
                                        <div>
                                            <p className="feature-text">Expert engineering support</p>
                                            <p className="feature-year">/24/7</p>
                                        </div>
                                    </div>
                                </div>
                                <svg className="feature-arrow" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="contact-details">
                            <div className="detail-item">
                                <svg className="detail-icon" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="detail-text">enquiry@cybagetech.com.my</span>
                            </div>
                            <div className="detail-item">
                                <svg className="detail-icon" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="detail-text">+6016-7978042</span>
                            </div>
                            <div className="detail-item">
                                <svg className="detail-icon" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="detail-text">21-1, Jalan SW21, Taman Sutera Wangi, Batu Berendam 75350 Melaka, Malaysia</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}