import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ArrowRight, ShieldCheck,
    Users, GraduationCap, ChevronRight, Home, CheckCircle2
} from 'lucide-react';

// Inner Component to handle individual video playback logic for the top grid
const ServiceCard = ({ s }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => console.log("Playback interrupted", err));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to first frame
        }
    };

    return (
        <div
            className="service-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-header">
                <div className="icon-box" style={{ background: `${s.color}15`, overflow: 'hidden' }}>
                    <video
                        ref={videoRef}
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                        <source src={s.videoIcon} type="video/mp4" />
                    </video>
                </div>
                <span className="id-tag">{s.id}</span>
            </div>
            <h3>{s.title}</h3>
            <div className="obj-pill">{s.objective}</div>

            <div className="activity-list">
                {s.activities.map((act, idx) => (
                    <div key={idx} className="activity-item">
                        <CheckCircle2 size={16} style={{ color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                        <span>{act}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ITConsultation = () => {
    const location = useLocation();
    const bannerImage = location.state?.bannerImage || "/consultation.jpg";
    const pageTitle = location.state?.title || "IT Consultation & Training";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: "01",
            title: "IT Strategy & Planning",
            objective: "Business-Tech Alignment",
            videoIcon: "/strategic-planning.mp4", 
            color: "#10b981",
            activities: ["Digital transformation roadmaps", "IT budget & cost optimization", "Cloud adoption strategy", "Risk management planning"]
        },
        {
            id: "02",
            title: "Infrastructure Design",
            objective: "Scalable Systems Backbone",
            videoIcon: "/brain-network.mp4",
            color: "#3b82f6",
            activities: ["Network architecture design", "Server & storage optimization", "Cloud (AWS, Azure) setup", "Hybrid IT environments"]
        },
        {
            id: "03",
            title: "Software Advisory",
            objective: "Operational Efficiency",
            videoIcon: "/advisory.mp4",
            color: "#f59e0b",
            activities: ["Software selection (ERP, CRM)", "Custom development planning", "Integration strategy", "App modernization"]
        },
        {
            id: "04",
            title: "Project Management",
            objective: "Flawless Execution",
            videoIcon: "/project-management.mp4",
            color: "#8b5cf6",
            activities: ["PMO setup & leadership", "Agile/Scrum management", "Change management", "Vendor governance"]
        }
    ];

    return (
        <div className="it-consult-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap');

                .it-consult-page { background: #fdfdfd; color: #0f172a; font-family: 'Outfit', sans-serif; }
                
                .it-hero { 
                    height: 350px; 
                    background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('${bannerImage}'); 
                    background-size: cover; background-position: center; 
                    display: flex; flex-direction: column; justify-content: center; align-items: center; 
                    color: white; text-align: center; padding-top: 60px;
                }

                .it-hero h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; letter-spacing: -0.04em; color: #ffffff; }
                .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9; }

                .content-section { max-width: 1200px; margin: -50px auto 100px; padding: 0 20px; position: relative; z-index: 10; }
                .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

                .service-card {
                    background: #ffffff; border-radius: 30px; padding: 40px; border: 1px solid #e2e8f0;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.04);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    display: flex; flex-direction: column;
                }

                .service-card:hover { transform: translateY(-12px); border-color: #10b981; box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.12); }
                .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px; }

                .icon-box { width: 54px; height: 54px; border-radius: 16px; display: flex; align-items: center; justify-content: center; }
                .id-tag { font-size: 12px; font-weight: 800; color: #cbd5e1; letter-spacing: 0.1em; }

                .service-card h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 10px; color: #0f172a; letter-spacing: -0.02em; }
                .obj-pill { font-size: 12px; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 4px 12px; border-radius: 100px; display: inline-block; margin-bottom: 25px; }

                .activity-list { margin-top: auto; border-top: 1px dashed #e2e8f0; padding-top: 20px; }
                .activity-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14.5px; color: #475569; margin-bottom: 12px; line-height: 1.4; }

                .knowledge-hub { background: #020617; padding: 120px 20px; border-radius: 60px 60px 0 0; color: white; text-align: center; }
                .hub-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; margin: 60px auto 0; }

                .hub-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 50px 30px; border-radius: 30px; transition: 0.3s; }
                .hub-card:hover { background: rgba(255, 255, 255, 0.06); border-color: #10b981; }

                .cta-btn { background: #10b981; color: white; padding: 20px 45px; border-radius: 20px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 12px; margin-top: 60px; transition: 0.3s; box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.4); }
                .cta-btn:hover { transform: scale(1.05); background: #059669; }

                @media (max-width: 768px) { .it-hero h1 { font-size: 2.5rem; } .content-section { margin-top: 20px; } }
            `}</style>

            <section className="it-hero">
                <h1>{pageTitle}</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>IT Consultation</span>
                </div>
            </section>

            <div className="content-section">
                <div className="services-grid">
                    {services.map((s, i) => (
                        <ServiceCard key={i} s={s} />
                    ))}
                </div>
            </div>

            <section className="knowledge-hub">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                        Knowledge <span style={{ color: '#10b981' }}>Empowerment</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginTop: '20px' }}>
                        Empowering your workforce to master the digital landscape we build together.
                    </p>
                </div>

                <div className="hub-grid">
                    {/* Applying the same hover logic can be done here if you have videos for these too */}
                    <div className="hub-card">
                        <Users size={42} color="#10b981" />
                        <h4 style={{ fontSize: '1.5rem', margin: '20px 0 12px' }}>Corporate Workshops</h4>
                        <p style={{ color: '#94a3b8', fontSize: '15px' }}>Strategic alignment sessions for stakeholders and leadership teams.</p>
                    </div>
                    <div className="hub-card">
                        <ShieldCheck size={42} color="#10b981" />
                        <h4 style={{ fontSize: '1.5rem', margin: '20px 0 12px' }}>Risk Culture</h4>
                        <p style={{ color: '#94a3b8', fontSize: '15px' }}>Developing a security-first mindset across all organizational levels.</p>
                    </div>
                    <div className="hub-cap hub-card">
                        <GraduationCap size={42} color="#10b981" />
                        <h4 style={{ fontSize: '1.5rem', margin: '20px 0 12px' }}>Technical Training</h4>
                        <p style={{ color: '#94a3b8', fontSize: '15px' }}>Hands-on upskilling in Agile, Cloud management, and software tools.</p>
                    </div>
                </div>

                <Link to="/contact" className="cta-btn">
                    Start Your Consultation <ArrowRight size={20} />
                </Link>
            </section>
        </div>
    );
};

export default ITConsultation;