////import React, { useEffect, useRef, useState } from "react";
////import "/src/App.css";

////const AboutPage = () => {

////    const [hoveredRow, setHoveredRow] = useState(null);

////    const partnersRow1 = [
////        { id: 1, name: 'Kiddoo Soft', image: '/kiddoo-soft.png' },
////        { id: 2, name: 'CAB', image: '/cab.png' },
////        { id: 3, name: 'Jowin Technology', image: '/jowin.png' },
////        { id: 4, name: 'Vistrian', image: '/vistrian.png' },
////        { id: 5, name: 'Radiant Global', image: '/radiant.png' },
////        { id: 6, name: 'Novexx Solutions', image: '/novexx.png' },
////        { id: 7, name: 'Innovare', image: '/innovare.png' },
////        { id: 8, name: 'Info-Tech', image: '/infotech.png' },
////        { id: 9, name: 'Emdoor', image: '/emdoor.png' },
////        { id: 10, name: 'Advantech', image: '/advantech.png' },
////        { id: 12, name: 'Xyreon', image: '/xyreon.png' },
////        { id: 13, name: 'Yeahhost', image: '/yeahhost.png' },
////        { id: 14, name: 'Walcomtech', logo: '/walcomtech.png' },
////        { id: 15, name: 'ER Gemtrack', logo: '/erGemtrack.png' },
////    ];

////    const row1Items = [...partnersRow1, ...partnersRow1, ...partnersRow1];
////    const sectionRefs = useRef({
////        expertise: useRef(null),
////        whyChooseUs: useRef(null),
////        services: useRef(null),
////        clients: useRef(null)
////    });


////    useEffect(() => {
////        const observer = new IntersectionObserver(
////            (entries) => {
////                entries.forEach((entry) => {
////                    if (entry.isIntersecting) {
////                        const sectionId = entry.target.id;

////                        switch (sectionId) {
////                            case 'expertise-section':
////                                const illustration = document.querySelector('.about-illustration');
////                                if (illustration) {
////                                    illustration.classList.add('slide-in');
////                                }
////                                break;

////                            case 'why-choose-us-section':
////                                const statImages = document.querySelectorAll('.about-stat-card img');
////                                statImages.forEach((img, index) => {
////                                    setTimeout(() => {
////                                        img.classList.add('slide-in');
////                                    }, index * 200);
////                                });
////                                break;

////                            case 'services-section':
////                                const serviceImage = document.querySelector('.about-services-image img');
////                                if (serviceImage) {
////                                    setTimeout(() => {
////                                        serviceImage.classList.add('slide-in');
////                                    }, 300);
////                                }
////                                break;

////                            case 'clients-section':
////                                const clientImages = document.querySelectorAll('.about-client-card img');
////                                clientImages.forEach((img, index) => {
////                                    setTimeout(() => {
////                                        img.classList.add('slide-in');
////                                    }, index * 200);
////                                });
////                                break;
////                        }
////                    }
////                });
////            },
////            {
////                threshold: 0.3,
////                rootMargin: '0px 0px -100px 0px'
////            }
////        );

////        Object.values(sectionRefs.current).forEach(ref => {
////            if (ref.current) {
////                observer.observe(ref.current);
////            }
////        });

////        return () => {
////            observer.disconnect();
////        };
////    }, []);

////    return (
////        <div className="about-page">
////            <section className="about-hero-section">
////                <div className="about-hero-content">
////                    <h1>About Us</h1>
////                    <p>
////                        Innovator in IoT, Empowered by Innovation
////                    </p>
////                </div>
////            </section>

////            <section
////                id="expertise-section"
////                className="about-diagonal-section"
////                ref={sectionRefs.current.expertise}
////            >
////                <div className="about-diagonal-yellow-bg"></div>
////                <div className="about-content-wrapper">
////                    <h2 className="about-section-title">OUR STORY</h2>

////                    <div className="about-expertise-content">
////                        <p className="about-section-text">
////                            Cybage Technologies Sdn Bhd is a boutique technology solution provider specializing in forward-thinking digital solutions. We combine deep technical knowledge with industry insight to deliver innovative, reliable, and scalable solutions tailored to your business needs.
////                        </p>

////                        <div className="about-specializations">
////                            <h3>Our Core Specializations:</h3>
////                            <ul>
////                                <li><strong>IoT Systems</strong> - Smart connectivity and data acquisition solutions</li>
////                                <li><strong>Customized Software Development</strong> - Web, mobile, and desktop applications</li>
////                                <li><strong>Electronic Engineering & Fabrication</strong> - PCB design and prototyping</li>
////                                <li><strong>ICT Peripheral Solutions</strong> - Industrial printers and scanners</li>
////                                <li><strong>Industrial Automation</strong> - Data acquisition and control systems</li>
////                                <li><strong>Maintenance & Repair</strong> - Industrial label printers (Zebra, Godexx, TSC, Novexx, Cab)</li>
////                                <li><strong>Barcode scanners, Industrial PCs supply and repair</strong></li>
////                                <li><strong>After-Sales Support</strong> - Comprehensive support services</li>
////                            </ul>
////                        </div>

////                        <div className="about-brand-identity">
////                            <p>
////                                <strong>The Cybage Identity:</strong> Derived from "Cyberage", representing innovation, digital transformation, and future-ready solutions. Though not a traditional dictionary word, Cybage symbolizes a forward-looking identity rooted in intuitive intelligence and technological excellence.
////                            </p>

////                        </div>
////                    </div>

////                    <div className="about-illustration">
////                        <img
////                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop"
////                            alt="Industrial illustration"
////                        />
////                    </div>
////                </div>
////            </section>

////            <section
////                id="why-choose-us-section"
////                className="about-stats-section"
////                ref={sectionRefs.current.whyChooseUs}
////            >
////                <h1>Why Choose Us</h1>
////                <div className="about-stats-grid">
////                    {[
////                        { img: "/iot.jpg", title: "Boutique Expertise in IoT & Digital Innovation", desc: "State-of-the-art manufacturing facilities with advanced automation" },
////                        { img: "/end.jpg", title: "End-to-End Technical Ownership", desc: "Cutting-edge research and development in industrial technology" },
////                        { img: "/maintainance.jpg", title: "Industry-Specific Maintenance & Support", desc: "Rigorous testing and quality assurance processes" },
////                        { img: "/consult.jpg", title: "Trusted Consultation", desc: "Environmentally conscious production methods" }
////                    ].map((stat, idx) => (
////                        <div className="about-stat-card" key={idx}>
////                            <img src={stat.img} alt={stat.title} />
////                            <h3>{stat.title}</h3>
////                            <p>{stat.desc}</p>
////                        </div>
////                    ))}
////                </div>
////            </section>

////            <section
////                id="services-section"
////                className="about-services-section"
////                ref={sectionRefs.current.services}
////            >
////                <div className="about-services-yellow-bg"></div>
////                <div className="about-services-content">
////                    <div className="about-services-list">
////                        <h2>Our Vision & Mission</h2>
////                        <h3>Mission</h3>
////                        <ul>
////                            <li>To satisfy client requirement by keeping ahead of the game with the latest technology knowledge and concepts</li>
////                            <li>To focus on providing solutions that transforms ideas into reality in the best nad most cost effective way to all our valuable clients</li>

////                        </ul>

////                        <br></br>
////                        <h3>Vission</h3>
////                        <ul>
////                            <li>To continuously strive for excellence in the quality of service and to be the leaders within the industry with honesty, reliability and trnansparency in order to achieve great client relationships</li>
////                        </ul>

////                        <br></br>

////                        <h3>Values</h3>
////                        <ul>
////                            <li>Creative Ideas</li>
////                            <li>Good Team Work</li>
////                            <li>Continuous Improvement</li>
////                            <li>Discipline</li>
////                            <li>Satisfaction Priority</li>
////                            <li>Experience</li>
////                            <li>Trustworthy</li>

////                        </ul>
////                    </div>
////                    <div className="about-services-image">
////                        <img
////                            src="https://images.pexels.com/photos/9040482/pexels-photo-9040482.jpeg"
////                            alt="Industrial services"
////                        />
////                    </div>
////                </div>
////            </section>


////            <section className="partners-section">
////                {/* Header */}
////                <div className="partners-header">
////                    <span className="partners-badge">Trusted Partnerships</span>
////                    <h2 className="partners-title">Business Partners</h2>

////                </div>

////                <div className="partners-row-container">
////                    <div
////                        className={`partners-row scroll-right ${hoveredRow === 1 ? 'paused' : ''}`}
////                        onMouseEnter={() => setHoveredRow(1)}
////                        onMouseLeave={() => setHoveredRow(null)}
////                    >
////                        {row1Items.map((partner, index) => (
////                            <div
////                                key={`row1-${index}`}
////                                className="partner-card"
////                            >
////                                <img
////                                    src={partner.image}
////                                    alt={partner.name}
////                                    onError={(e) => {
////                                        e.target.src = `https://via.placeholder.com/300x150/667eea/ffffff?text=${partner.name}`;
////                                    }}
////                                />
////                            </div>
////                        ))}
////                    </div>
////                </div>
////            </section>
////                </div>

////    );
////};

////export default AboutPage;

//import React from 'react';

//export default function AboutPage() {
//    const partnersRow1 = [
//        { id: 1, name: 'Kiddoo Soft', image: '/kiddoo-soft.png' },
//        { id: 2, name: 'CAB', image: '/cab.png' },
//        { id: 3, name: 'Jowin Technology', image: '/jowin.png' },
//        { id: 4, name: 'Vistrian', image: '/vistrian.png' },
//        { id: 5, name: 'Radiant Global', image: '/radiant.png' },
//        { id: 6, name: 'Novexx Solutions', image: '/novexx.png' },
//        { id: 7, name: 'Innovare', image: '/innovare.png' },
//        { id: 8, name: 'Info-Tech', image: '/infotech.png' },
//        { id: 9, name: 'Emdoor', image: '/emdoor.png' },
//        { id: 10, name: 'Advantech', image: '/advantech.png' },
//        { id: 12, name: 'Xyreon', image: '/xyreon.png' },
//        { id: 13, name: 'Yeahhost', image: '/yeahhost.png' },
//        { id: 14, name: 'ER Gemtrack', image: '/erGemtrack.png' },
//        { id: 15, name: 'Walcomtech', image: '/walcomtech.png' },
//    ];

//    const floatingServices = [
//        { title: 'IoT Systems', desc: 'Smart connectivity & real-time data acquisition.' },
//        { title: 'Industrial Automation', desc: 'Data acquisition and advanced control systems.' },
//        { title: 'Custom Software', desc: 'Web, mobile, and desktop business applications.' },
//        { title: 'Maintenance', desc: 'Industrial printer & barcode scanner support.' },
//    ];

//    const features = [
//        { title: 'Boutique Expertise', desc: 'Specialized digital innovation for industrial scaling.' },
//        { title: 'End-to-End Ownership', desc: 'From technical research to long-term maintenance.' },
//        { title: "Maintenance & Support", desc: "Rigorous testing and quality assurance processes." },
//        { title: 'Trusted Consultation', desc: 'Honesty, reliability, and technical transparency.' },
//    ];

//    return (
//        <div className="about-page-container">
//            {/* 1. HERO SECTION (NO CHANGES) */}
//            <section className="hero-section-dark">
//                <div className="hero-overlay"></div>
//                <img
//                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=900&fit=crop"
//                    alt="IoT Industrial"
//                    className="hero-bg-image"
//                />
//                <div className="hero-content-center">
//                    <h1 className="hero-title-white">ABOUT CYBAGE TECHNOLOGIES</h1>
//                    <h1 className="hero-btn-green">Discover Our Identity</h1>
//                </div>

//                <div className="floating-cards">
//                    {floatingServices.map((service, idx) => (
//                        <div key={idx} className={`service-card ${idx === 1 ? 'service-card-green' : ''}`}>
//                            <h3>{service.title}</h3>
//                            <p>{service.desc}</p>
//                        </div>
//                    ))}
//                </div>
//            </section>

//            {/* 2. WHY CHOOSE US SECTION (NO CHANGES) */}
//            <section className="why-section">
//                <div className="why-container">
//                    <h2 className="section-title-center">Why Choose Cybage?</h2>
//                    <div className="why-features">
//                        {features.map((feature, idx) => (
//                            <div key={idx} className="why-feature">
//                                <div className="feature-circle"></div>
//                                <h4>{feature.title}</h4>
//                                <p>{feature.desc}</p>
//                            </div>
//                        ))}
//                    </div>
//                </div>
//            </section>

//            {/* 3. REDESIGNED STORY SECTION */}
//            <section className="modern-story-section">
//                <div className="story-container">
//                    <div className="story-grid">
//                        <div className="story-visuals">
//                            <div className="main-img-wrapper">
//                                <img
//                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
//                                    alt="Industrial Innovation"
//                                    className="story-main-img"
//                                />
//                                <div className="experience-badge">
//                                    <span className="years">7+</span>
//                                    <span className="label">Years of<br />Excellence</span>
//                                </div>
//                            </div>
//                            <div className="accent-box"></div>
//                        </div>

//                        <div className="story-content">
//                            <div className="header-stack">
//                                <span className="pre-title">ESTABLISHED 2017</span>
//                                <h2 className="display-h2">Architecting the <span className="text-gradient">Cyberage</span></h2>
//                            </div>

//                            <p className="story-lead">
//                                Cybage Technologies Sdn Bhd is a boutique technology solution provider specializing in forward-thinking digital ecosystems.
//                            </p>

//                            <p className="story-body">
//                                We pride ourselves on our ability to bridge the gap between heavy industrial requirements and elegant digital execution. Our journey began with a mission to simplify complexity, ensuring that every solution we build is as intuitive as it is powerful.
//                            </p>

//                            <div className="identity-card-modern">
//                                <div className="identity-icon">
//                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//                                    </svg>
//                                </div>
//                                <div className="identity-text">
//                                    <h4>The Cybage Identity</h4>
//                                    <p>Derived from "Cyberage", we represent the intersection of technical innovation and digital transformation.</p>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </section>

//            {/* 4. REDESIGNED MISSION, VISION & VALUES */}
//            <section className="philosophy-section-modern">
//                <div className="philosophy-container">
//                    <div className="philosophy-header">
//                        <h2 className="section-title-white">Our Strategic Foundation</h2>
//                        <p className="philosophy-subtitle">Driven by Purpose, Guided by Industrial Precision</p>
//                    </div>

//                    <div className="philosophy-layout">
//                        {/* Mission */}
//                        <div className="p-card mission-card">
//                            <div className="card-top">
//                                <div className="p-icon-wrap">01</div>
//                                <h3>Our Mission</h3>
//                            </div>
//                            <p>To satisfy client requirements by staying ahead of the curve with the latest technological concepts, transforming complex needs into cost-effective reality.</p>
//                        </div>

//                        {/* Vision */}
//                        <div className="p-card vision-card active-card">
//                            <div className="card-top">
//                                <div className="p-icon-wrap">02</div>
//                                <h3>Our Vision</h3>
//                            </div>
//                            <p>To continuously strive for excellence and maintain our position as trusted leaders within the industry through reliability and technical mastery.</p>
//                        </div>

//                        {/* Values */}
//                        <div className="p-card values-card">
//                            <div className="card-top">
//                                <div className="p-icon-wrap">03</div>
//                                <h3>Core Values</h3>
//                            </div>
//                            <ul className="modern-values-list">
//                                <li><span>Creative Concepts</span></li>
//                                <li><span>Continuous Improvement</span></li>
//                                <li><span>Trust & Reliability</span></li>
//                                <li><span>Team Discipline</span></li>
//                            </ul>
//                        </div>
//                    </div>
//                </div>
//            </section>

//            {/* 5. PARTNERS SECTION (NO CHANGES) */}
//            {/*<section className="partners-section-new">*/}
//            {/*    <div className="partners-header-new">*/}
//            {/*        <span className="partners-badge-new">Trusted Partnerships</span>*/}
//            {/*        <h2 className="partners-title-new">Business Partners</h2>*/}
//            {/*    </div>*/}
//            {/*    <div className="partners-static-container">*/}
//            {/*        <div className="partners-grid-new">*/}
//            {/*            {partnersRow1.map((partner) => (*/}
//            {/*                <div key={partner.id} className="partner-card-new">*/}
//            {/*                    <img*/}
//            {/*                        src={partner.image}*/}
//            {/*                        alt={partner.name}*/}
//            {/*                        onError={(e) => {*/}
//            {/*                            e.target.src = `https://via.placeholder.com/300x150/0f3d2e/ffffff?text=${partner.name}`;*/}
//            {/*                        }}*/}
//            {/*                    />*/}
//            {/*                </div>*/}
//            {/*            ))}*/}
//            {/*        </div>*/}
//            {/*    </div>*/}
//            {/*</section>*/}

//            <style jsx>{`
//                .about-page-container { font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.6; }

//                /* Hero Original */
//                .hero-section-dark { position: relative; height: 80vh; display: flex; align-items: center; justify-content: center; background: #0b1a14; overflow: visible; margin-bottom: 100px; }
//                .hero-bg-image { position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
//                .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(11, 26, 20, 0.95) 0%, rgba(16, 185, 129, 0.3) 100%); }
//                .hero-content-center { position: relative; z-index: 2; text-align: center; padding: 0 2rem; margin-top: -100px; }
//                .hero-title-white { font-size: 3.2rem; font-weight: 800; color: white; margin-bottom: 2rem; line-height: 1.1; margin-top:100px;}
//                .hero-btn-green {  color: #10b981; padding: 1.25rem 3.5rem; border: none; border-radius: 50px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: 0.3s; }
//                .floating-cards { position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%); display: flex; gap: 1.5rem; z-index: 10; max-width: 1200px; width: 100%; padding: 0 2rem; }
//                .service-card { flex: 1; background: white; padding: 2.5rem 2rem; border-radius: 16px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1); text-align: left; }
//                .service-card-green { background: #0f3d2e; color: white; }
//                .service-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #0f3d2e; }
//                .service-card-green h3 { color: #10b981; }

//                /* Why Section Original */
//                .why-section { padding: 160px 2rem 80px; background: white; }
//                .section-title-center { font-size: 3rem; font-weight: 800; text-align: center; margin-bottom: 4rem; color: #0f3d2e; }
//                .why-features { display: flex; justify-content: center; gap: 5rem;position:relative }
//                .why-features::before {
//    content: "";
//    position: absolute;
//    top: 6px; /* Half of your 12px circle height to center it perfectly */
//    left: 11%; /* Adjust based on your preferred line length */
//    right: 11%;
//    height: 2px;
//    background: rgba(16, 185, 129, 0.2); /* Soft green line */
//    z-index: 0;
//}
//                .feature-circle { width: 12px; height: 12px; background: #10b981; border-radius: 50%; margin: 0 auto 1.5rem; outline: 8px solid rgba(16, 185, 129, 0.1); }
//                .why-feature { text-align: center; max-width: 300px; }

//                /* NEW Story Styles */
//                .modern-story-section { padding: 120px 2rem; background: #fff; }
//                .story-container { max-width: 1200px; margin: 0 auto; }
//                .story-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 6rem; align-items: center; }
//                .story-visuals { position: relative; }
//                .main-img-wrapper { position: relative; z-index: 2; }
//                .story-main-img { width: 100%; border-radius: 20px; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.15); }
//                .experience-badge { position: absolute; bottom: -30px; right: -30px; background: #10b981; color: white; padding: 2rem; border-radius: 20px; text-align: center; box-shadow: 0 20px 40px rgba(16,185,129,0.3); }
//                .experience-badge .years { display: block; font-size: 2.5rem; font-weight: 900; line-height: 1; }
//                .experience-badge .label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
//                .accent-box { position: absolute; top: -40px; left: -40px; width: 200px; height: 200px; border: 15px solid #f0fdf4; border-radius: 20px; z-index: 1; }
//                .pre-title { color: #10b981; font-weight: 800; font-size: 0.85rem; letter-spacing: 3px; }
//                .display-h2 { font-size: 3.5rem; font-weight: 800; color: #0f3d2e; margin: 1rem 0 2rem; line-height: 1.1; }
//                .text-gradient { color: #10b981; }
//                .story-lead { font-size: 1.25rem; font-weight: 500; color: #334155; margin-bottom: 1.5rem; }
//                .story-body { color: #64748b; margin-bottom: 2.5rem; }
//                .identity-card-modern { display: flex; gap: 1.5rem; background: #f8fafc; padding: 2rem; border-radius: 16px; border: 1px solid #e2e8f0; }
//                .identity-icon { background: #10b981; color: white; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
//                .identity-text h4 { margin: 0 0 0.5rem; color: #0f3d2e; }
//                .identity-text p { margin: 0; font-size: 0.9rem; color: #64748b; }

//                /* NEW Philosophy Styles */
//                .philosophy-section-modern { padding: 120px 2rem; background: #0b1a14; overflow: hidden; }
//                .philosophy-container { max-width: 1200px; margin: 0 auto; }
//                .philosophy-header { text-align: center; margin-bottom: 80px; }
//                .section-title-white { color: white; font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
//                .philosophy-subtitle { color: #94a3b8; font-size: 1.1rem; }
//                .philosophy-layout { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
//                .p-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 3.5rem 2.5rem; border-radius: 30px; color: white; transition: 0.4s; }
//                .p-card:hover { background: rgba(255,255,255,0.05); transform: translateY(-10px); }
//                .active-card { border-color: #10b981; background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, transparent 100%); }
//                .card-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
//                .p-icon-wrap { font-family: 'Mono', monospace; color: #10b981; font-weight: 700; font-size: 1.2rem; border-bottom: 2px solid #10b981; }
//                .p-card h3 { font-size: 1.5rem; margin: 0; }
//                .p-card p { color: #94a3b8; font-size: 1rem; line-height: 1.7; }
//                .modern-values-list { list-style: none; padding: 0; margin: 0; }
//                .modern-values-list li { margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; }
//                .modern-values-list li::before { content: ""; width: 8px; height: 8px; background: #10b981; border-radius: 2px; transform: rotate(45deg); }
//                .modern-values-list span { color: #cbd5e1; font-weight: 500; }

//                /* Partners Original */
//                .partners-section-new { padding: 80px 2rem; text-align: center; background: white; }
//                .partners-badge-new { color: #059669; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
//                .partners-title-new { font-size: 2.5rem; font-weight: 800; margin-bottom: 40px; color: #0f3d2e; }
//                .partners-grid-new { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; }
//                .partner-card-new { height: 100px; display: flex; align-items: center; justify-content: center; padding: 15px; }
//                .partner-card-new img { max-width: 100%; max-height: 100%; object-fit: contain; }

//                @media (max-width: 1024px) {
//                    .story-grid, .philosophy-layout { grid-template-columns: 1fr; }
//                    .display-h2 { font-size: 2.5rem; }
//                    .experience-badge { right: 20px; }
//                    .hero-section-dark { height: auto; padding-bottom: 120px; }
//                    .floating-cards { position: relative; bottom: 0; transform: none; left: 0; flex-direction: column; }
//                    .why-features { flex-direction: column; gap: 3rem; }
//                }
//            `}</style>
//        </div>
//    );
//}
//import React, { useState, useEffect, useRef } from 'react';

//export default function AboutPage() {
//    // Mouse tracking state for the Glow Orb
//    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//    const bannerRef = useRef(null);

//    const handleMouseMove = (e) => {
//        if (bannerRef.current) {
//            const rect = bannerRef.current.getBoundingClientRect();
//            setMousePos({
//                x: e.clientX - rect.left,
//                y: e.clientY - rect.top,
//            });
//        }
//    };

//    const partnersRow1 = [
//        { id: 1, name: 'Kiddoo Soft', image: '/kiddoo-soft.png' },
//        { id: 2, name: 'CAB', image: '/cab.png' },
//        { id: 3, name: 'Jowin Technology', image: '/jowin.png' },
//        { id: 4, name: 'Vistrian', image: '/vistrian.png' },
//        { id: 5, name: 'Radiant Global', image: '/radiant.png' },
//        { id: 6, name: 'Novexx Solutions', image: '/novexx.png' },
//        { id: 7, name: 'Innovare', image: '/innovare.png' },
//        { id: 8, name: 'Info-Tech', image: '/infotech.png' },
//        { id: 9, name: 'Emdoor', image: '/emdoor.png' },
//        { id: 10, name: 'Advantech', image: '/advantech.png' },
//        { id: 12, name: 'Xyreon', image: '/xyreon.png' },
//        { id: 13, name: 'Yeahhost', image: '/yeahhost.png' },
//        { id: 14, name: 'ER Gemtrack', image: '/erGemtrack.png' },
//        { id: 15, name: 'Walcomtech', image: '/walcomtech.png' },
//    ];

//    const floatingServices = [
//        { title: 'IoT Systems', desc: 'Smart connectivity & real-time data acquisition.' },
//        { title: 'Industrial Automation', desc: 'Data acquisition and advanced control systems.' },
//        { title: 'Custom Software', desc: 'Web, mobile, and desktop business applications.' },
//        { title: 'Maintenance', desc: 'Industrial printer & barcode scanner support.' },
//    ];

//    const features = [
//        { title: 'Boutique Expertise', desc: 'Specialized digital innovation for industrial scaling.' },
//        { title: 'End-to-End Ownership', desc: 'From technical research to long-term maintenance.' },
//        { title: "Maintenance & Support", desc: "Rigorous testing and quality assurance processes." },
//        { title: 'Trusted Consultation', desc: 'Honesty, reliability, and technical transparency.' },
//    ];

//    return (
//        <div className="bold-tech-light">
//            <style jsx>{`
//                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;800&display=swap');

//                .bold-tech-light {
//                    background: #F9FAFB;
//                    color: #111827;
//                    font-family: 'Plus Jakarta Sans', sans-serif;
//                    overflow-x: hidden;
//                }

//                /* 1. NEW BLACK HERO WITH GLOW */
//                .hero-mega {
//                    position: relative;
//                    height: 70vh;
//                    display: flex;
//                    flex-direction: column;
//                    justify-content: center;
//                    align-items: center;
//                    padding: 0 10%;
//                    background: #000; /* Pure Black Background */
//                    overflow: hidden;
//                    text-align: center;
//                }

//                .glow-orb {
//                    position: absolute;
//                    width: 400px;
//                    height: 600px;
//                    background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%);
//                    border-radius: 50%;
//                    pointer-events: none;
//                    z-index: 1;
//                    /* Smooth follow transition */
//                    transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
//                    transform: translate(-50%, -50%);
//                }

//                .hero-content-top {
//                    position: relative;
//                    z-index: 2;
//                    max-width: 900px;
//                }

//                .hero-tag {
//                    color: #10b981;
//                    font-weight: 800;
//                    letter-spacing: 4px;
//                    text-transform: uppercase;
//                    display: block;
//                    margin-bottom: 20px;
//                }

//                .hero-main-title {
//                    font-size: 4.5rem;
//                    color: #fff; /* White Text for Black Background */
//                    font-weight: 800;
//                    margin-bottom: 20px;
//                    letter-spacing: -2px;
//                }

//                .hero-main-title span {
//                    color: #10b981;
//                }

//                /* 2. SERVICES STRIP */
//                .services-strip {
//                    display: grid;
//                    grid-template-columns: repeat(4, 1fr);
//                    gap: 1px;
//                    background: #E5E7EB;
//                }

//                .s-card {
//                    background: #fff;
//                    padding: 60px 40px;
//                    transition: all 0.5s ease;
//                }

//                .s-card:hover {
//                    background: #10b981;
//                    color: #fff;
//                }

//                /* 3. STORY SPLIT */
//                .story-split {
//                    display: flex;
//                    min-height: 100vh;
//                    background: #fff;
//                }

//                .story-left {
//                    width: 45%;
//                    padding: 100px 5% 100px 10%;
//                }

//                .story-right {
//                    width: 55%;
//                    background: #F3F4F6;
//                    display: flex;
//                    align-items: center;
//                    justify-content: center;
//                }

//                .image-stack {
//                    width: 80%;
//                    height: 70%;
//                    background: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80') center/cover;
//                    border-radius: 4px;
//                    box-shadow: 50px 50px 0px #10b981;
//                }

//                /* 4. PHILOSOPHY GRID */
//                .philo-grid {
//                    display: grid;
//                    grid-template-columns: repeat(3, 1fr);
//                    background: #111827;
//                    color: #fff;
//                }

//                .p-box {
//                    padding: 100px 60px;
//                    border-right: 1px solid #374151;
//                }

//                @media (max-width: 1024px) {
//                    .services-strip, .feature-row, .philo-grid, .story-split {
//                        grid-template-columns: 1fr;
//                        flex-direction: column;
//                    }
//                    .hero-main-title { font-size: 3rem; }
//                }
//            `}</style>

//            {/* 1. HERO WITH MOUSE TRACKING GLOW */}
//            <section
//                className="hero-mega"
//                ref={bannerRef}
//                onMouseMove={handleMouseMove}
//            >
//                {/* Circular Light (Orb) */}
//                <div
//                    className="glow-orb"
//                    style={{
//                        left: `${mousePos.x}px`,
//                        top: `${mousePos.y}px`
//                    }}
//                />

//                <div className="hero-content-top">
//                    {/*<span className="hero-tag">Digital Evolution</span>*/}
//                    <h2 className="hero-main-title">
//                        About Us
//                    {/*    <span>Future.</span>*/}
//                    </h2>
//                    <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>
//                        Boutique technology solutions for forward-thinking industrial digital ecosystems.
//                    </p>
//                </div>
//            </section>

//            {/* 2. SERVICES */}
//            <section className="services-strip">
//                {floatingServices.map((s, i) => (
//                    <div className="s-card" key={i}>
//                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{s.title}</h3>
//                        <p>{s.desc}</p>
//                    </div>
//                ))}
//            </section>

//            {/* 3. STORY */}
//            <section className="story-split">
//                <div className="story-left">
//                    <span className="hero-tag">Our Story</span>
//                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '30px' }}>Cybage Technologies</h2>
//                    <p style={{ lineHeight: 2, color: '#4B5563' }}>
//                        Cybage Technologies Sdn Bhd specializing in forward-thinking digital solutions. We combine deep technical knowledge with industry insight.
//                    </p>
//                </div>
//                <div className="story-right">
//                    <div className="image-stack"></div>
//                </div>
//            </section>

//            {/* 4. PHILOSOPHY */}
//            <section className="philo-grid">
//                <div className="p-box">
//                    <h2 style={{ color: '#10b981', fontSize: '0.8rem', letterSpacing: '3px' }}>MISSION</h2>
//                    <h3 style={{ fontSize: '2rem' }}>Innovation</h3>
//                    <p>To satisfy client requirements by keeping ahead with the latest technology concepts.</p>
//                </div>
//                <div className="p-box">
//                    <h2 style={{ color: '#10b981', fontSize: '0.8rem', letterSpacing: '3px' }}>VISION</h2>
//                    <h3 style={{ fontSize: '2rem' }}>Leadership</h3>
//                    <p>To be leaders with honesty, reliability and transparency in every solution.</p>
//                </div>
//                <div className="p-box">
//                    <h2 style={{ color: '#10b981', fontSize: '0.8rem', letterSpacing: '3px' }}>VALUES</h2>
//                    <p>Creative Ideas, Discipline, and Satisfaction Priority define our core.</p>
//                </div>
//            </section>

//            {/* 5. PARTNERS */}
//            {/*<section style={{ padding: '100px 10%', textAlign: 'center' }}>*/}
//            {/*    <span className="hero-tag">Our Ecosystem</span>*/}
//            {/*    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '60px' }}>Business Partners</h2>*/}
//            {/*    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px' }}>*/}
//            {/*        {partnersRow1.map((p) => (*/}
//            {/*            <img key={p.id} src={p.image} alt={p.name} style={{ width: '100%', filter: 'grayscale(100%)', opacity: 0.5 }} />*/}
//            {/*        ))}*/}
//            {/*    </div>*/}
//            {/*</section>*/}
//        </div>
//    );
//}



import React, { useState, useRef } from 'react';
import { ShieldCheck, Cpu, Globe, Settings, Wrench, BarChart3, Microscope, Zap, ArrowUpRight, Target, Activity, Award, Users, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const bannerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (bannerRef.current) {
            const rect = bannerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const coreSpecializations = [
        { title: 'IoT Systems', icon: <Globe />, desc: 'Smart connectivity & real-time data acquisition.' },
        { title: 'Custom Software', icon: <Cpu />, desc: 'Web, mobile, and desktop business applications.' },
        { title: 'Electronic Engineering', icon: <Microscope />, desc: 'PCB design and rapid prototyping fabrication.' },
        { title: 'Industrial Automation', icon: <Settings />, desc: 'Control systems and automated data acquisition.' },
        { title: 'Maintenance & Repair', icon: <Wrench />, desc: 'Expert support for Zebra, Godexx, TSC, & Novexx.' },
        { title: 'ICT Peripherals', icon: <BarChart3 />, desc: 'Industrial printers, scanners, and PC supply.' },
    ];

    const whyChooseUs = [
        {
            title: 'Unmatched Integrity',
            icon: <ShieldCheck size={32} />,
            desc: 'We believe in absolute transparency. No hidden costs, no over-promising—just reliable engineering.'
        },
        {
            title: 'Bespoke Innovation',
            icon: <Lightbulb size={32} />,
            desc: 'We don’t believe in one-size-fits-all. Every solution is custom-tailored to your specific industrial workflow.'
        },
        {
            title: 'End-to-End Support',
            icon: <Users size={32} />,
            desc: 'From initial PCB design to long-term hardware maintenance, we are your long-term technology partner.'
        }
    ];

    return (
        <div className="cyber-root">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');

                :root {
                    --brand-green: #189D4A;
                    --brand-red: #EA1D24;
                    --bg-light: #ffffff;
                    --bg-soft: #f8fafc;
                    --text-main: #1e293b;
                    --text-muted: #64748b;
                }

                .cyber-root { 
                    background: var(--bg-light); 
                    color: var(--text-main); 
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    overflow-x: hidden;
                }

                /* 1. HERO */
                .hero-visual {
                    position: relative; height: 80vh; width: 100%;
                    background: linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%); 
                    display: flex; align-items: center; padding: 0 8%;
                    overflow: hidden; border-bottom: 1px solid #e2e8f0;
                }
                .glow-orb {
                    position: absolute; width: 800px; height: 800px;
                    background: radial-gradient(circle, rgba(24, 157, 74, 0.08) 0%, transparent 70%);
                    border-radius: 50%; pointer-events: none; z-index: 1;
                    transform: translate(-50%, -50%); transition: transform 0.2s cubic-bezier(0.1, 1, 0.1, 1);
                }
                .hero-content { position: relative; z-index: 2; width: 100%; }
                .hero-title { 
                    font-family: 'Space Grotesk', sans-serif; font-size: clamp(3rem, 8vw, 6.5rem); 
                    color: var(--text-main); font-weight: 700; line-height: 0.95; letter-spacing: -3px;
                }
                .hero-title span { color: var(--brand-green); }

                /* 2. IDENTITY SECTION */
                .identity-section { 
                    display: grid; grid-template-columns: 1fr 1fr; min-height: 70vh;
                    width: 100%; background: #fff;
                }
                .identity-visual {
                    background: url('about.jpg') center/cover;
                    position: relative;
                    height:450px;
                    width:450px;
                    align-items:center;
                    margin-left:190px;
                }
                .identity-text { padding: 10% 10%; display: flex; flex-direction: column; justify-content: center; }
                .tag-line { color: var(--brand-red); font-weight: 800; text-transform: uppercase; letter-spacing: 4px; font-size: 0.8rem; margin-bottom: 20px; }

                /* 3. CORE SPECIALIZATION */
                .grid-section { padding: 100px 8%; background: var(--bg-soft); }
                .tile-container { 
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
                    gap: 1px; background: #e2e8f0; border: 1px solid #e2e8f0;
                }
                .tile-card {
                    background: #fff; padding: 50px 40px; transition: 0.4s;
                    display: flex; flex-direction: column; gap: 20px;
                }
                .tile-card:hover { background: #f1f5f9; }
                .tile-card:hover .icon-box { color: var(--brand-green); transform: translateY(-5px); }
                .icon-box { color: var(--text-main); transition: 0.4s; }

                /* 4. WHY CHOOSE US - NEW SECTION */
                .why-section { padding: 100px 8%; background: #fff; }
                .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; }
                .why-item { text-align: left; }
                .why-icon { color: var(--brand-green); margin-bottom: 20px; }

                /* 5. MISSION/VISION */
                .split-box { display: flex; width: 100%; height: 500px; color: white; }
                .box-half { flex: 1; padding: 60px 8%; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; }
                .box-half.mission { background: var(--brand-green); }
                .box-half.vision { background: #1e293b; }
                .box-icon { position: absolute; top: -20px; right: -20px; font-size: 180px; opacity: 0.1; color: #fff; }

                /* 6. VALUES SCROLL */
                .values-banner { 
                    padding: 80px 0; background: #f1f5f9; overflow: hidden; white-space: nowrap;
                    border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;
                }
                .value-track { display: inline-block; animation: scroll 35s linear infinite; }
                .value-item { 
                    display: inline-block; color: transparent; -webkit-text-stroke: 1px #cbd5e1;
                    font-size: 4.5rem; font-weight: 800; margin-right: 50px; text-transform: uppercase;
                }
                .value-item:hover { color: var(--brand-green); -webkit-text-stroke: 1px var(--brand-green); }

                @keyframes scroll { 
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @media (max-width: 1024px) {
                    .identity-section, .split-box { flex-direction: column; grid-template-columns: 1fr; }
                    .identity-visual { height: 300px; }
                    .split-box { height: auto; }
                    .box-half { height: 350px; }
                }
            `}</style>

            {/* 1. HERO */}
            <section className="hero-visual" ref={bannerRef} onMouseMove={handleMouseMove}>
                <div className="glow-orb" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
                <div className="hero-content">
                    <span className="tag-line" style={{ color: 'var(--brand-green)', opacity: 0.8 }}>Established 2017</span>
                    <h1 className="hero-title">ABOUT<br /><span>CYBERAGE</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '550px', marginTop: '30px' }}>
                        Transforming complex industrial ideas into intuitive digital realities through boutique hardware and software engineering.
                    </p>
                </div>
            </section>

            {/* 2. THE STORY */}
            <section className="identity-section">
                <div className="identity-visual" />
                <div className="identity-text">
                    <span className="tag-line">The Identity</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px' }}>More Than<br />A Name.</h2>
                    <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.8 }}>
                        Derived from <strong>"Cyberage"</strong>, Cybage symbolizes a forward-looking identity rooted in digital transformation.
                        We focus on providing bespoke technology solutions that make industrial growth cost-effective, scalable, and future-proof.
                    </p>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="why-section">
                <span className="tag-line">Value Proposition</span>
                <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Why Choose Cybage?</h2>
                <div className="why-grid">
                    {whyChooseUs.map((item, i) => (
                        <div className="why-item" key={i}>
                            <div className="why-icon">{item.icon}</div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. SPECIALIZATIONS */}
            <section className="grid-section">
                <div style={{ marginBottom: '60px' }}>
                    <span className="tag-line">What We Do</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>Core Expertise</h2>
                </div>
                <div className="tile-container">
                    {coreSpecializations.map((spec, i) => (
                        <div className="tile-card" key={i}>
                            <div className="icon-box">{React.cloneElement(spec.icon, { size: 40 })}</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>{spec.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{spec.desc}</p>
                            </div>
                            <ArrowUpRight size={20} style={{ marginTop: 'auto', alignSelf: 'flex-end', opacity: 0.3 }} />
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. MISSION & VISION */}
            <section className="split-box">
                <div className="box-half mission">
                    <Zap className="box-icon" />
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: 4, fontSize: '0.9rem', marginBottom: '10px' }}>Mission</h4>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1 }}>To keep ahead with technology knowledge to deliver cost-effective reality.</h3>
                </div>
                <div className="box-half vision">
                    <Activity className="box-icon" />
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: 4, fontSize: '0.9rem', marginBottom: '10px' }}>Vision</h4>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1 }}>To lead the industry through reliability, honesty, and transparency.</h3>
                </div>
            </section>

            {/* 6. VALUES SCROLL */}
            <section className="values-banner">
                <div className="value-track">
                    {['Creative Ideas', 'Team Work', 'Continuous Improvement', 'Discipline', 'Satisfaction', 'Trustworthy'].map((v, i) => (
                        <span key={i} className="value-item">{v}</span>
                    ))}
                    {['Creative Ideas', 'Team Work', 'Continuous Improvement', 'Discipline', 'Satisfaction', 'Trustworthy'].map((v, i) => (
                        <span key={`dup-${i}`} className="value-item">{v}</span>
                    ))}
                </div>
            </section>
        </div>
    );
}