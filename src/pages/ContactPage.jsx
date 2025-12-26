import React, { useEffect, useRef, useState } from "react";
import "/src/App.css";
import { Mail, PhoneCall, MapPin } from "lucide-react";

const ContactPage = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            className="contact-container"
            ref={sectionRef} 
        >
            <div className="contact-banner-wrapper">
                <div className="contact-banner-overlay">
                    <h1
                        className={`contact-banner-title ${isVisible ? 'cyb-anim-title-pop' : ''}`}
                        style={isVisible ? { animationDelay: '0.1s' } : {}}
                    >
                        Contact Us
                    </h1>
                    <p
                        className={`contact-banner-subtitle ${isVisible ? 'cyb-anim-container-fade' : ''}`}
                        style={isVisible ? { animationDelay: '0.3s' } : {}}
                    >
                        Reach out to us through any of these channels
                    </p>
                </div>
            </div>

            <div className="contact-page">
                {/* Section 1: Get in Touch with Image */}
                <section className="contact-intro-section">
                    <div className="contact-container">
                        <div className="contact-intro-content">
                            <span className="section-label">CONTACT</span>
                            <h2 className="intro-title">Get in Touch</h2>
                            <p className="intro-description">
                                We're here to help and answer any question you might have.
                                We look forward to hearing from you and discussing how we can
                                support your business needs.
                            </p>

                            <div className="contact-info-list">
                                <div className="contact-info-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M10 18C13 15 17 12.3137 17 8C17 4.68629 13.866 2 10 2C6.13401 2 3 4.68629 3 8C3 12.3137 7 15 10 18Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <div>
                                        <strong>21-1, Jalan SW21, Taman Sutera Wangi,</strong>
                                        <span>Batu Berendam 75350 Melaka, Malaysia</span>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2 4C2 3.44772 2.44772 3 3 3H7.28571C7.56238 3 7.80973 3.17972 7.90257 3.44427L9.43257 7.94427C9.53893 8.24711 9.41603 8.57788 9.13834 8.73984L7.08332 9.96735C8.17851 12.2074 10.1259 14.1548 12.3659 15.25L13.5934 13.195C13.7554 12.9173 14.0862 12.7944 14.389 12.9007L18.889 14.4307C19.1536 14.5236 19.3333 14.7709 19.3333 15.0476V19.3333C19.3333 19.8856 18.8856 20.3333 18.3333 20.3333H16.6667C8.38781 20.3333 1.66667 13.6122 1.66667 5.33333V3.66667C1.66667 3.11438 2.11438 2.66667 2.66667 2.66667H3Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <div>
                                        <strong>+6016-7978042</strong>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2 5L8.16492 9.16492C9.20328 9.88328 10.7967 9.88328 11.8351 9.16492L18 5M4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <div>
                                        <strong>enquiry@cybagetech.com.my</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="intro-image">
                            <img
                                src="/getInTouch.jpg"
                                alt="Modern Office"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2: Contact Form and Info */}
                <section className="contact-form-section">
                    <div className="contact-container">
                        <div className="form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="message-info">
                            <span className="section-label">CONTACT</span>
                            <h2 className="message-title">Send Us a Message</h2>
                            <p className="message-description">
                                Have a question or want to work together? Fill out the form and
                                we'll get back to you as soon as possible.
                            </p>

                            <div className="opening-hours">
                                <h3>Opening Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday & Sunday: CLOSED</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Map */}
                <section className="map-section">
                    <div className="map-container">
                        <iframe
                            title="Cybage Technologies Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.790443424177!2d102.2599708!3d2.2323049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f0590825f38f%3A0xc3f8e58987b7a5a8!2sJalan%20SW%2021%2C%20Taman%20Sutera%20Wangi%2C%2075350%20Batu%20Berendam%2C%20Melaka!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <a
                            href="https://maps.google.com/?q=Jalan+SW+21,+Taman+Sutera+Wangi,+75350+Batu+Berendam,+Melaka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-link"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;