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
            ref={sectionRef} // Add ref here
        >
            {/* Banner Section */}
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

            {/* Contact Cards */}
            {/*<section className="contact-section">*/}
            {/*    <div*/}
            {/*        className={`contact-card ${isVisible ? 'cyb-anim-container-slide' : ''}`}*/}
            {/*        style={isVisible ? { animationDelay: '0.5s' } : {}}*/}
            {/*    >*/}
            {/*        <Mail className="contact-icon" size={60} />*/}
            {/*        <p className="contact-title">enquiry@cybagetech.com.my</p>*/}
            {/*        <a href="mailto:chirpybirdmusic@gmail.com" className="contact-link">*/}
            {/*            Drop us an email*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    */}{/* WhatsApp Card */}
            {/*    <div*/}
            {/*        className={`contact-card ${isVisible ? 'cyb-anim-container-slide' : ''}`}*/}
            {/*        style={isVisible ? { animationDelay: '0.6s' } : {}}*/}
            {/*    >*/}
            {/*        <PhoneCall className="contact-icon" size={60} />*/}
            {/*        <p className="contact-title">+6016-7978042</p>*/}
            {/*        <a href="https://wa.me/60126944190" className="contact-link">*/}
            {/*            Drop us a message*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    */}{/* Location Card */}
            {/*    <div*/}
            {/*        className={`contact-card ${isVisible ? 'cyb-anim-container-slide' : ''}`}*/}
            {/*        style={isVisible ? { animationDelay: '0.7s' } : {}}*/}
            {/*    >*/}
            {/*        <MapPin className="contact-icon" size={60} />*/}
            {/*        <p className="contact-title">*/}
            {/*            21-1, Jalan SW21, Taman Sutera Wangi, <br />*/}
            {/*            Batu Berendam 75350 Melaka, Malaysia*/}
            {/*        </p>*/}
            {/*        <a*/}
            {/*            href="https://maps.app.goo.gl/Fq3m8m6u5h8vQDENA"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*            className="contact-link"*/}
            {/*        >*/}
            {/*            Get direction*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</section>*/}

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

                            {/*<div className="social-links">*/}
                            {/*    <a href="#" className="social-icon">*/}
                            {/*        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className="social-icon">*/}
                            {/*        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path d="M19.59 3.29c-.72.32-1.5.54-2.32.64a4.08 4.08 0 001.78-2.25 8.16 8.16 0 01-2.58.99 4.07 4.07 0 00-6.93 3.71 11.55 11.55 0 01-8.4-4.26 4.07 4.07 0 001.26 5.43 4.05 4.05 0 01-1.84-.51v.05a4.07 4.07 0 003.26 3.99 4.09 4.09 0 01-1.83.07 4.07 4.07 0 003.8 2.83 8.16 8.16 0 01-5.05 1.74c-.33 0-.65-.02-.97-.06a11.53 11.53 0 006.25 1.83c7.5 0 11.6-6.21 11.6-11.6 0-.18 0-.35-.01-.53a8.28 8.28 0 002.03-2.11z" />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className="social-icon">*/}
                            {/*        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*    <a href="#" className="social-icon">*/}
                            {/*        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>

                {/* Section 3: Map */}
                <section className="map-section">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.234!2d102.234!3d2.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTQnMDIuNCJOIDEwMsKwMTQnMDIuNCJF!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=21-1+Jalan+SW21+Taman+Sutera+Wangi+Batu+Berendam+Melaka"
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