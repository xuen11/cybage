import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Cpu, CircuitBoard, Settings, ArrowRight,
    Home, ChevronRight, RefreshCw, Microscope, ClipboardCheck
} from 'lucide-react';

const ElectronicDesign = () => {
    const location = useLocation();

    // ERROR PROTECTION: Handle null state on page refresh
    const bannerImage = location.state?.bannerImage || "/electronic-bg.jpg";
    const pageTitle = location.state?.title || "Electronic Design & Prototyping";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: "PCB Design & Fabrication", desc: "Expert schematic capture and PCB layout for Single, Double, and Multilayer boards.", icon: <CircuitBoard size={24} /> },
        { title: "Embedded Systems", desc: "Integration of hardware and firmware for intelligent, high-performance devices.", icon: <Cpu size={24} /> },
        { title: "Re-Engineering", desc: "Optimization of existing designs to correct flaws or improve performance.", icon: <RefreshCw size={24} /> },
        { title: "Automation & I/O", desc: "Custom I/O controllers and industrial automation design for smart machinery.", icon: <Settings size={24} /> },
        { title: "Custom Prototyping", desc: "Rapid prototyping of products based on your custom technical specifications.", icon: <Microscope size={24} /> },
        { title: "Consultancy", desc: "Professional electronics consultant services from concept to completion.", icon: <ClipboardCheck size={24} /> }
    ];

    return (
        <div className="omni-wrapper">
            <style>{`
                .omni-wrapper { background: #ffffff; font-family: 'Inter', sans-serif; color: #111827; min-height: 100vh; }
                
                .ss-hero-section {
                    height: 350px; 
                    background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("${bannerImage}"); 
                    background-size: cover; 
                    background-position: center; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center; 
                    color: white; 
                    text-align: center;
                    padding-top: 40px;
                }

                .ss-hero-section h1 { font-size: 3rem; font-weight: 800; margin-bottom: 15px; }

                .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9; }

                .omni-section { max-width: 1200px; margin: 60px auto; padding: 0 20px; }
                .omni-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
                
                .omni-card { 
                    padding: 32px; border: 1px solid #e5e7eb; border-radius: 12px; 
                    transition: all 0.3s ease; background: #fff;
                }
                .omni-card:hover { border-color: #10b981; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); transform: translateY(-5px); }
                
                .omni-icon { 
                    width: 48px; height: 48px; background: #111827; color: #fff; 
                    border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
                }
                .omni-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; }
                .omni-card p { color: #6b7280; font-size: 0.95rem; line-height: 1.6; }

                .omni-cta { 
                    background: #111827; color: white; padding: 60px 20px; 
                    text-align: center; border-radius: 20px; max-width: 1160px; margin: 60px auto;
                }
                .omni-btn { 
                    display: inline-flex; align-items: center; gap: 8px; background: #10b981; 
                    color: white; padding: 14px 28px; border-radius: 8px; font-weight: 600; text-decoration: none; 
                    margin-top: 25px; transition: 0.2s;
                }
            `}</style>

            <section className="ss-hero-section">
                <h1>{pageTitle}</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Electronic Design</span>
                </div>
            </section>

            <section className="omni-section">
                <div className="omni-grid">
                    {features.map((f, i) => (
                        <div key={i} className="omni-card">
                            <div className="omni-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="omni-cta">
                <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>Ready to start your project?</h2>
                <Link to="/contact" className="omni-btn">
                    Consult an Engineer <ArrowRight size={18} />
                </Link>
            </section>
        </div>
    );
};

export default ElectronicDesign;