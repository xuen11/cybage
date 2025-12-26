import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight } from 'lucide-react';

const SmartSolutions = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const bannerImage = location.state?.bannerImage || "/solution.jpg";
    const pageTitle = location.state?.title || "Smart Software Solutions";

    useEffect(() => {
        const authStatus = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(authStatus === "true");
        window.scrollTo(0, 0);
    }, []);

    const solutionData = [
        {
            title: "Responsive Web Development",
            id: "web-dev",
            videoIcon: "/responsive-design.mp4",
            color: "#3b82f6",
            points: [
                "Customer Requirement Analysis",
                "Specification Design",
                "Agile Development Methodology",
                "Monitoring and Maintenance",
                "Custom Web Application (ASP.net / PHP)",
                "Wordpress Content Management",
                "Cloud Computing"
            ]
        },
        {
            title: "Mobile App Development",
            id: "mobile-dev",
            videoIcon: "/mobile-app.mp4",
            color: "#8b5cf6",
            points: [
                "Customer Requirement Analysis",
                "Design Specification",
                "Cloud Computing",
                "Native Application (Android / iOS)",
                "Hybrid Platform"
            ]
        },
        {
            title: "Embedded Software Development",
            id: "embedded-dev",
            videoIcon: "/circuit.mp4",
            color: "#f59e0b",
            tagline: "Looking to develop your product or device?",
            points: [
                "High quality embedded software development",
                "Superior service with project management level",
                "Monitoring and Maintenance",
                "Extensive Embedded experience",
                "Customised hardware & software development"
            ]
        },
        {
            title: "Equipment Productivity Monitoring System",
            id: "productivity-monitoring",
            videoIcon: "/productivity.mp4",
            color: "#10b981",
            tagline: "Drive efficiency through real-time industrial data.",
            learnMoreLink: "/epms-details",
            points: [
                "Real-time Downtime Tracking Tool",
                "Identifies Process Bottlenecks",
                "Monitor Machine Operator Efficiency",
                "Shorten Machine Setup and Product Changeover Times",
                "Preventive Maintenance Tracking",
                "Optimization of Production Throughput"
            ]
        },
        {
            title: "Print and Apply Solution",
            id: "print-apply",
            videoIcon: "/printer.mp4",
            color: "#ef4444",
            tagline: "Precision automated labeling ecosystems.",
            points: [
                "Customer Requirement Analysis",
                "Specification Design",
                "Agile Development Methodology",
                "Monitoring and Maintenance",
                "Custom Web Application (ASP.net / PHP / etc)",
                "Wordpress Content Management",
                "Cloud Computing"
            ]
        }
    ];

    // Inner Component to handle individual video playback logic
    const SolutionCard = ({ item }) => {
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(error => console.log("Playback failed", error));
            }
        };

        const handleMouseLeave = () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Optional: Reset icon to start frame
            }
        };

        return (
            <div
                className="ss-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="ss-icon-box">
                    <video
                        ref={videoRef}
                        muted
                        loop
                        playsInline
                        className="animated-icon"
                    >
                        <source src={item.videoIcon} type="video/mp4" />
                    </video>
                </div>

                <h2>{item.title}</h2>
                {item.tagline && <span className="ss-tagline">{item.tagline}</span>}

                <ul className="ss-feature-list">
                    {item.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>

                {item.learnMoreLink && (
                    <Link to={item.learnMoreLink} className="ss-secondary-btn">
                        Learn More <ArrowRight size={14} style={{ marginLeft: '5px' }} />
                    </Link>
                )}
            </div>
        );
    };

    return (
        <div className="ss-page-wrapper">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

                .ss-page-wrapper {
                    background: #f8fafc;
                    color: #1a1a1a;
                    font-family: 'Inter', sans-serif;
                    padding-bottom: 80px;
                    min-height: 100vh;
                }

                .ss-hero-section {
                    height: 350px; 
                    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('${bannerImage}'); 
                    background-size: cover; 
                    background-position: center; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center; 
                    color: white; 
                    text-align: center;
                    padding-top: 60px;
                }

                .ss-hero-section h1 {
                    font-size: 3rem; 
                    font-weight: 800; 
                    margin-bottom: 15px;
                }

                .breadcrumb { 
                    display: flex; 
                    align-items: center; 
                    gap: 8px; 
                    font-size: 14px; 
                    opacity: 0.9; 
                }

                .ss-content-container {
                    max-width: 1240px;
                    margin: -60px auto 80px;
                    padding: 0 20px;
                    position: relative;
                    z-index: 10;
                }

                .ss-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }

                .ss-card {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    cursor: default;
                }

                .ss-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    border-color: #10b981;
                }

                .ss-icon-box {
                    width: 70px;
                    height: 70px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    background: #f8fafc;
                    overflow: hidden;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .ss-card:hover .ss-icon-box {
                    transform: scale(1.1);
                }

                .ss-icon-box video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    mix-blend-mode: multiply; 
                }

                .ss-card h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0 0 10px;
                    color: #0f172a;
                    line-height: 1.3;
                }

                .ss-tagline {
                    font-size: 0.75rem;
                    color: #10b981;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 15px;
                    display: block;
                }

                .ss-feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 25px 0;
                    flex-grow: 1;
                }

                .ss-feature-list li {
                    font-size: 0.9rem;
                    color: #4b5563;
                    padding: 8px 0;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .ss-feature-list li::before {
                    content: "-";
                    color: #10b981;
                    font-weight: bold;
                }

                .ss-secondary-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    background: #f1f5f9;
                    color: #0f3d2e;
                    text-decoration: none;
                    font-weight: 700;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    transition: 0.2s;
                }

                .ss-secondary-btn:hover {
                    background: #e2e8f0;
                }

                @media (max-width: 1024px) {
                    .ss-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .ss-grid { grid-template-columns: 1fr; }
                    .ss-hero-section h1 { font-size: 2rem; }
                }
            `}</style>

            <section className="ss-hero-section">
                <h1>{pageTitle}</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Software Solutions</span>
                </div>
            </section>

            <div className="ss-content-container">
                <div className="ss-grid">
                    {solutionData.map((item) => (
                        <SolutionCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmartSolutions;