//import React, { useEffect, useRef, useState } from "react";
//import "/src/App.css";

//const Contact = () => {
//    // Create a ref to track the contact section
//    const contactRef = useRef(null);

//    // State to track if section is visible
//    const [isVisible, setIsVisible] = useState(false);

//    useEffect(() => {
//        // Create an Intersection Observer
//        const observer = new IntersectionObserver(
//            ([entry]) => {
//                // When the section enters the viewport
//                if (entry.isIntersecting) {
//                    setIsVisible(true);
//                }
//            },
//            {
//                threshold: 0.3, // Trigger when 30% of element is visible
//                rootMargin: '0px 0px -50px 0px' // Adjust trigger point
//            }
//        );

//        // Start observing the contact section
//        if (contactRef.current) {
//            observer.observe(contactRef.current);
//        }

//        // Clean up observer when component unmounts
//        return () => {
//            if (contactRef.current) {
//                observer.unobserve(contactRef.current);
//            }
//        };
//    }, []); // Empty dependency array = runs once on mount

//    return (
//        // Add the ref to the container div
//        <div className="contact-banner" ref={contactRef}>
//            {/* Animation class only applied when isVisible is true */}
//            <div className={`contact-banner-overlay ${isVisible ? 'cyb-anim-overlay-grow' : ''}`}></div>

//            <div className="contact-banner-content">
//                {/* Animation class only applied when isVisible is true */}
//                <h2 className={isVisible ? 'cyb-anim-title-slide' : ''}>
//                    Interested in Working With Us?
//                </h2>

//                {/* Animation class only applied when isVisible is true */}
//                <p className={isVisible ? 'cyb-anim-text-glide' : ''}>
//                    Get in touch and let's discuss how we can support your next project.
//                </p>

//                {/* Animation class only applied when isVisible is true */}
//                <a
//                    href="/contact"
//                    className={`contact-banner-btn ${isVisible ? 'cyb-anim-btn-pulse' : ''}`}
//                >
//                    Contact Us
//                </a>
//            </div>
//        </div>
//    );
//};

//export default Contact;