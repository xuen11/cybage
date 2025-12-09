import React, { useEffect, useRef } from "react";
import "/src/App.css";

const AboutPage = () => {
    // Refs for animated elements
    const sectionRefs = useRef({
        expertise: useRef(null),
        whyChooseUs: useRef(null),
        services: useRef(null),
        clients: useRef(null)
    });

    // Intersection Observer for sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;

                        // Trigger animations based on section
                        switch (sectionId) {
                            case 'expertise-section':
                                const illustration = document.querySelector('.about-illustration');
                                if (illustration) {
                                    illustration.classList.add('slide-in');
                                }
                                break;

                            case 'why-choose-us-section':
                                const statImages = document.querySelectorAll('.about-stat-card img');
                                statImages.forEach((img, index) => {
                                    setTimeout(() => {
                                        img.classList.add('slide-in');
                                    }, index * 200);
                                });
                                break;

                            case 'services-section':
                                const serviceImage = document.querySelector('.about-services-image img');
                                if (serviceImage) {
                                    setTimeout(() => {
                                        serviceImage.classList.add('slide-in');
                                    }, 300);
                                }
                                break;

                            case 'clients-section':
                                const clientImages = document.querySelectorAll('.about-client-card img');
                                clientImages.forEach((img, index) => {
                                    setTimeout(() => {
                                        img.classList.add('slide-in');
                                    }, index * 200);
                                });
                                break;
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe all sections
        Object.values(sectionRefs.current).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero-section">
                <div className="about-hero-content">
                    <h1>About Us</h1>
                    <p>
                        Innovator in IoT, Empowered by Innovation
                    </p>
                </div>
            </section>

            {/* Diagonal Yellow Section */}
            <section
                id="expertise-section"
                className="about-diagonal-section"
                ref={sectionRefs.current.expertise}
            >
                <div className="about-diagonal-yellow-bg"></div>
                <div className="about-content-wrapper">
                    <h2 className="about-section-title">OUR EXPERTISE</h2>
                    <p className="about-section-text">
                        At Cybage Technologies, we combine deep technical knowledge with industry insight to deliver solutions that are not only innovative but also reliable, scalable, and tailored to your business needs.
                    </p>
                    <div className="about-illustration">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop"
                            alt="Industrial illustration"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                id="why-choose-us-section"
                className="about-stats-section"
                ref={sectionRefs.current.whyChooseUs}
            >
                <h1>Why Choose Us</h1>
                <div className="about-stats-grid">
                    {[
                        { img: "/iot.jpg", title: "Boutique Expertise in IoT & Digital Innovation", desc: "State-of-the-art manufacturing facilities with advanced automation" },
                        { img: "/end.jpg", title: "End-to-End Technical Ownership", desc: "Cutting-edge research and development in industrial technology" },
                        { img: "/maintainance.jpg", title: "Industry-Specific Maintenance & Support", desc: "Rigorous testing and quality assurance processes" },
                        { img: "/consult.jpg", title: "Trusted Consultation", desc: "Environmentally conscious production methods" }
                    ].map((stat, idx) => (
                        <div className="about-stat-card" key={idx}>
                            <img src={stat.img} alt={stat.title} />
                            <h3>{stat.title}</h3>
                            <p>{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section
                id="services-section"
                className="about-services-section"
                ref={sectionRefs.current.services}
            >
                <div className="about-services-yellow-bg"></div>
                <div className="about-services-content">
                    <div className="about-services-list">
                        <h2>Our Vision & Mission</h2>
                        <h3>Mission</h3>
                        <ul>
                            <li>To satisfy client requirement by keeping ahead of the game with the latest technology knowledge and concepts</li>
                            <li>To focus on providing solutions that transforms ideas into reality in the best nad most cost effective way to all our valuable clients</li>

                        </ul>

                        <br></br>
                        <h3>Vission</h3>
                        <ul>
                            <li>To continuously strive for excellence in the quality of service and to be the leaders within the industry with honesty, reliability and trnansparency in order to achieve great client relationships</li>
                        </ul>

                        <br></br>

                        <h3>Values</h3>
                        <ul>
                            <li>Creative Ideas</li>
                            <li>Good Team Work</li>
                            <li>Continuous Improvement</li>
                            <li>Discipline</li>
                            <li>Satisfaction Priority</li>
                            <li>Experience</li>
                            <li>Trustworthy</li>

                        </ul>
                    </div>
                    <div className="about-services-image">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                            alt="Industrial services"
                        />
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section
                id="clients-section"
                className="about-clients-section"
                ref={sectionRefs.current.clients}
            >
                <div className="about-clients-yellow-bg"></div>
                <div className="about-clients-content">
                    <div className="about-clients-list">
                        <h2>CLIENTS</h2>
                        <p style={{ marginBottom: "30px", color: "#666" }}>Trusted by industry leaders worldwide</p>
                        <div className="about-client-logos">
                            {/*<div className="about-client-logo">BRAND</div>*/}
                            {/*<div className="about-client-logo">COMPANY</div>*/}
                            {/*<div className="about-client-logo">CORP</div>*/}
                            {/*<div className="about-client-logo">GROUP</div>*/}
                        </div>
                    </div>
                    <div className="about-clients-info">
                        {[
                            { img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop", title: "Manufacturing Excellence", desc: "Delivering precision and quality in every project with advanced technology" },
                            { img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop", title: "Innovation Leaders", desc: "Pioneering solutions that transform the industrial landscape" },
                            { img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop", title: "Global Reach", desc: "Serving clients across continents with excellence and dedication" }
                        ].map((client, idx) => (
                            <div className="about-client-card" key={idx}>
                                <img src={client.img} alt={client.title} />
                                <h3>{client.title}</h3>
                                <p>{client.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;