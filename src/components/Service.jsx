import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "/src/App.css";

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const services = [
        { number: "01", title: "Software Solutions", link: "/softwareSolution" },
        { number: "02", title: "Electronic Device Design / Product Engineering", link: "/electronic" },
        { number: "03", title: "Industrial IT Peripheral", link: "/industrial-it" },
        { number: "04", title: "IT Technology Consultation / Training", link: "/consult" },
        { number: "05", title: "Maintenance & Support", link: "/maintenance" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
        );

        sectionRef.current && observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    const handleServiceClick = () => {
        if (location.pathname === "/services") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section ref={sectionRef} id="services-section">

            <div className="wave-wrapper">
                <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path className="wave wave1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320H0Z"></path>
                    <path className="wave wave2" d="M0,150L48,140C96,130,192,110,288,105C384,100,480,110,576,120C672,130,768,140,864,135C960,130,1056,110,1152,100C1248,90,1344,90,1392,90L1440,90L1440,320H0Z"></path>
                    <path className="wave wave3" d="M0,220L48,210C96,200,192,180,288,170C384,160,480,160,576,170C672,180,768,200,864,210C960,220,1056,220,1152,210C1248,200,1344,180,1392,170L1440,160L1440,320H0Z"></path>
                </svg>
            </div>

            <div className="cybage-services-section">
                <div className="cybage-services-container">
                    <div className="cybage-services-content">
                        <div className="cybage-services-left">
                            <h2 className={`cybage-services-heading ${isVisible ? "cyb-anim-title-pop" : ""}`}>
                                Our <span className="cybage-highlight">Services</span>
                            </h2>

                            <p className={`cybage-services-subtitle ${isVisible ? "cyb-anim-subtitle-fade" : ""}`}>
                                We offer innovative and digital technology solutions to help your business grow.
                            </p>

                            <div className="cybage-services-list">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        to={service.link}
                                        onClick={handleServiceClick}
                                        className={`cybage-service-item ${isVisible ? "cyb-anim-service-item" : ""}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <span className="cybage-service-number">{service.number}</span>
                                        <span className="cybage-service-title">{service.title}</span>
                                        <span className="cybage-service-arrow">→</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="cybage-services-image">
                            <img
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700"
                                alt="Professional at work"
                                className={`cybage-main-image ${isVisible ? "cyb-anim-image-reveal" : ""}`}
                            />
                        </div>

                        <div className="cybage-services-right">
                            <div className={`cybage-cta-card cybage-cta-transparent ${isVisible ? "cyb-anim-card-slide" : ""}`}>
                                <p className="cybage-cta-question">Learn more about services we offer?</p>
                                <Link to="/services" className="cybage-cta-link" onClick={handleServiceClick}>
                                    Learn More <span className="cybage-cta-arrow">↗</span>
                                </Link>
                            </div>

                            <div className={`cybage-cta-card cybage-cta-green ${isVisible ? "cyb-anim-card-pop" : ""}`}>
                                <p className="cybage-cta-text">
                                    Looking for technology experts who can turn your vision into reality?
                                </p>
                                <Link
                                    to="/contact"
                                    className="cybage-cta-button"
                                    onClick={() =>
                                        location.pathname === "/contact" &&
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }
                                >
                                    Meet our expert <span className="cybage-cta-button-arrow">↗</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
