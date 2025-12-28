import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Cpu, CircuitBoard, Settings, Home, ChevronRight,
    RefreshCw, Microscope, ClipboardCheck
} from 'lucide-react';

const ElectronicDesign = () => {
    const location = useLocation();

    // ERROR PROTECTION: Handle null state on page refresh
    const bannerImage = location?.state?.bannerImage || "/electronic-bg.jpg";
    const pageTitle = location?.state?.title || "Electronic Design & Prototyping";

    // Update this URL with your actual Graph/Diagram image link
    const lifecycleGraphImage = "/electronic.png";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolio = [
        {img: "product.jpg" },
        {img: "product1.jpg" },
        { img: "product2.jpg" },
        { img: "pt2.jpeg" }

    ];

    const features = [
        { title: "PCB Design & Fabrication", desc: "Expert schematic capture and PCB layout for Single, Double, and Multilayer boards.", icon: <CircuitBoard size={24} /> },
        { title: "Embedded Systems", desc: "Integration of hardware and firmware for intelligent, high-performance devices.", icon: <Cpu size={24} /> },
        { title: "Re-Engineering", desc: "Optimization of existing designs to correct flaws or improve performance.", icon: <RefreshCw size={24} /> },
        { title: "Automation & I/O", desc: "Custom I/O controllers and industrial automation design for smart machinery.", icon: <Settings size={24} /> },
        { title: "Custom Prototyping", desc: "Rapid prototyping of products based on your custom technical specifications.", icon: <Microscope size={24} /> },
        { title: "Consultancy", desc: "Professional electronics consultant services from concept to completion.", icon: <ClipboardCheck size={24} /> }
    ];

    return (
        <div className="edp-main-wrapper">
            <style>{`
                .edp-main-wrapper { background: #ffffff; font-family: 'Inter', sans-serif; color: #111827; min-height: 100vh; }
                
                .edp-hero-section {
                    height: 350px; 
                    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("${bannerImage}"); 
                    background-size: cover; background-position: center; 
                    display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; text-align: center;
                    padding-top: 40px;
                }
                .edp-hero-section h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; margin-bottom: 15px; }
                .edp-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9; }

                .edp-container { max-width: 1200px; margin: 60px auto; padding: 0 20px; }

                /* Graph Container - Smaller and Centered */
                .edp-graph-box { 
                    max-width: 800px; 
                    margin: 0 auto;
                    border-radius: 16px; 
                    overflow: hidden; 
                }
.edp-graph-box img {width: 50%;     max-width: 100%; height: auto;display: block;margin: 0 auto;    } 
                /* Portfolio Styling */
                .edp-portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; }
                .edp-portfolio-item { height: 280px; overflow: hidden; position: relative; }
                .edp-portfolio-item img { width: 100%; height: 100%; object-fit: contain; transition: 0.6s; }
                .edp-portfolio-item:hover img { transform: scale(1.08); }
                .edp-portfolio-overlay { position: absolute; inset: 0; background: linear-gradient(transparent, rgba(0,0,0,0.85)); display: flex; align-items: flex-end; padding: 25px; color: white; }

                /* Features Grid */
                .edp-feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
                .edp-feature-card { padding: 32px; border: 1px solid #e5e7eb; border-radius: 12px; transition: 0.3s; background: #fff; }
                .edp-feature-card:hover { border-color: #10b981; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                .edp-feature-icon { width: 48px; height: 48px; background: #111827; color: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
                
                .edp-gold-status { background: #f59e0b; color: white; padding: 20px; border-radius: 8px; text-align: center; font-weight: 700; margin-top: 20px; font-size: 0.85rem; letter-spacing: 1.5px; }
            `}</style>

            {/* HERO */}
            <section className="edp-hero-section">
                <h1>{pageTitle}</h1>
                <div className="edp-breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Electronic Design</span>
                </div>
            </section>

            {/* GRAPH SECTION */}
            <section className="edp-container">
                <div className="edp-graph-box">
                    <img
                        src={lifecycleGraphImage}
                        alt="Engineering Design Lifecycle Graph"
                    />
                </div>
               
            </section>

            {/* CORE CAPABILITIES */}
            <section className="edp-container">
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '40px' }}>Core Capabilities</h2>
                <div className="edp-feature-grid">
                    {features.map((f, i) => (
                        <div key={i} className="edp-feature-card">
                            <div className="edp-feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECT PORTFOLIO */}
            <section className="edp-container">
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Project Portfolio</h2>
                    <p style={{ color: '#64748b' }}>Custom electronics and prototyping showcase.</p>
                </div>
                <div className="edp-portfolio-grid">
                    {portfolio.map((item, i) => (
                        <div key={i} className="edp-portfolio-item">
                            <img src={item.img} alt={item.title} />
                           
                        </div>
                    ))}
                </div>
            </section>

            
        </div>
    );
};

export default ElectronicDesign;