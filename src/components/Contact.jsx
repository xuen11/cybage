import React from "react";
import "/src/App.css";

const Contact = () => {
    return (

        <div className="contact-banner">
            <div className="contact-banner-overlay"></div>

            <div className="contact-banner-content">
                <h2>Interested in Working With Us?</h2>
                <p>Get in touch and let's discuss how we can support your next project.</p>

                <a href="/contact" className="contact-banner-btn">
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Contact;