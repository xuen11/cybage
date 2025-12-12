import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import if using React Router
import '/src/App.css';

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        {
            number: '01',
            title: 'Software Solutions',
            link: '/services?service=software-solutions' // Updated
        },
        {
            number: '02',
            title: 'Electronic Device Design / Product Engineering',
            link: '/services?service=electronic-design' // Updated
        },
        {
            number: '03',
            title: 'Industrial IT Peripheral',
            link: '/services?service=industrial-it' // Updated
        },
        {
            number: '04',
            title: 'IT Technology Consultation/Training',
            link: '/services?service=it-consultation' // Updated
        },
        {
            number: '05',
            title: 'Maintenance & Support',
            link: '/services?service=maintenance-support' // Updated
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
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
        <section ref={sectionRef} id="services-section"> {/* Added ID for direct linking */}

            <div className="wave-wrapper">
                <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        className="wave-1"
                        fill="black"
                        fillOpacity="0.8"
                        d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z"
                    >
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="
                M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z;
                M0,80L48,90C96,100,192,120,288,130C384,140,480,140,576,130C672,120,768,100,864,95C960,90,1056,100,1152,110C1248,120,1344,140,1392,150L1440,160L1440,320L0,320Z;
                M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z
              "
                        />
                    </path>

                    <path
                        className="wave-2"
                        fill="#333"
                        fillOpacity="0.7"
                        d="M0,150L48,140C96,130,192,110,288,105C384,100,480,110,576,120C672,130,768,140,864,135C960,130,1056,110,1152,100C1248,90,1344,90,1392,90L1440,90L1440,320H0Z"
                    />

                    <path
                        className="wave-3"
                        fill="#111"
                        fillOpacity="0.9"
                        d="M0,220L48,210C96,200,192,180,288,170C384,160,480,160,576,170C672,180,768,200,864,210C960,220,1056,220,1152,210C1248,200,1344,180,1392,170L1440,160L1440,320H0Z"
                    />
                </svg>
            </div>
            {/* ✅ WAVE END */}

            <div className="cybage-services-section">
                <div className="cybage-services-container">
                    <div className="cybage-services-content">
                        <div className="cybage-services-left">
                            <h2 className={`cybage-services-heading ${isVisible ? 'cyb-anim-title-pop' : ''}`}>
                                Our <span className="cybage-highlight">Services</span>
                            </h2>
                            <p className={`cybage-services-subtitle ${isVisible ? 'cyb-anim-subtitle-fade' : ''}`}>
                                We offer a range of innovative and digital technology solutions designed to help your business stand out.
                            </p>

                            <div className="cybage-services-list">
                                {services.map((service, index) => (
                                    // If using React Router, use Link component:
                                    // <Link
                                    //     to={service.link}
                                    //     key={index}
                                    //     className={`cybage-service-item ${isVisible ? 'cyb-anim-service-item' : ''}`}
                                    //     style={{ animationDelay: `${index * 0.1}s` }}
                                    // >
                                    //     <span className="cybage-service-number">{service.number}</span>
                                    //     <span className="cybage-service-title">{service.title}</span>
                                    //     <span className="cybage-service-arrow">→</span>
                                    // </Link>

                                    // If not using React Router, use regular anchor tag:
                                    <a
                                        href={service.link}
                                        key={index}
                                        className={`cybage-service-item ${isVisible ? 'cyb-anim-service-item' : ''}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <span className="cybage-service-number">{service.number}</span>
                                        <span className="cybage-service-title">{service.title}</span>
                                        <span className="cybage-service-arrow">→</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="cybage-services-image">
                            <img
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700"
                                alt="Professional at work"
                                className={`cybage-main-image ${isVisible ? 'cyb-anim-image-reveal' : ''}`}
                            />

                            <div className={`cybage-blue-sketch ${isVisible ? 'cyb-anim-sketch-draw' : ''}`}>
                                <svg viewBox="0 0 200 200" className="cybage-sketch-svg">
                                    <path
                                        d="M50,100 Q100,50 150,100 T250,100"
                                        stroke="#c8f4b9"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="5,5"
                                    />
                                    <circle cx="100" cy="80" r="30" stroke="#5ddf31" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                                    <path
                                        d="M30,150 Q80,120 130,150"
                                        stroke="#5ddf31"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="cybage-services-right">
                            <div className={`cybage-cta-card cybage-cta-transparent ${isVisible ? 'cyb-anim-card-slide' : ''}`}>
                                <p className="cybage-cta-question">Learn more about services we offer?</p>
                                <a href="/services" className="cybage-cta-link">
                                    Learn More <span className="cybage-cta-arrow">↗</span>
                                </a>
                            </div>

                            <div className={`cybage-cta-card cybage-cta-green ${isVisible ? 'cyb-anim-card-pop' : ''}`}>
                                <p className="cybage-cta-text">
                                    Looking for technology experts who can turn your vision to life?
                                </p>
                                <a href="/contact" className="cybage-cta-button">
                                    Meet our expert <span className="cybage-cta-button-arrow">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServicesSection;