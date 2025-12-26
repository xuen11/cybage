import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Minus, Printer, Shield, Cpu, BarChart, Home, ChevronRight } from 'lucide-react';

const MaintenanceSupport = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const location = useLocation();

    // Banner Style logic from your snippet
    const bannerImage = location.state?.bannerImage || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070';
    const pageTitle = "Maintenance & Support";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const maintenanceData = [
        {
            icon: <Printer />,
            title: "Industrial Barcode Printers Service & Repairs",
            subtitle: "Support for Novexx, Zebra, Godex, TSC, and Cab",
            details: [
                "Troubleshooting and repair of electronic modules & systems",
                "Supply and custom configuration of electrical and pneumatic components",
                "Solar Inverter Terminal Repair",
                "Electrical project maintenance and parts supply"
            ]
        },
        {
            icon: <Cpu />,
            title: "Industrial PC Maintenance",
            subtitle: "Hardware and Software Lifecycle Management",
            details: [
                "Industrial PC repair and Maintenance",
                "Maintenance/Repair of PC Operation Systems",
                "Repair of Industrial PC Software and Hardware components",
                "System specification auditing for industrial environments"
            ]
        },
        {
            icon: <Shield />,
            title: "IT Infrastructure & Security",
            subtitle: "Deployment and Hardening of Business Systems",
            details: [
                "Setup and Installation of IT Security protocols",
                "Professional File Server Setup and management",
                "Ensuring maximum utilization of existing IT Infrastructure",
                "Deployment of 1st Tier ICT Service solutions"
            ]
        },
        {
            icon: <BarChart />,
            title: "IT Consultation & SLA Strategy",
            subtitle: "Strategic analysis for system upgrades",
            details: [
                "Systematic analysis of technological infrastructure",
                "Identification of potential problem areas and bottlenecks",
                "Custom hardware specification and proper maintenance planning",
                "Best-in-industry SLA agreements for shortest response times"
            ]
        }
    ];

    return (
        <div className="it-page-wrapper">
            <style>{`
                .it-page-wrapper { background: #f8fafc; min-height: 100vh; color: #1e293b; font-family: 'Inter', sans-serif; }
                
                /* --- BANNER STYLE FROM YOUR SNIPPET --- */
                .it-banner { 
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
                .it-banner h1 { font-size: 3rem; font-weight: 800; margin-bottom: 15px; }
                .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9; }

                /* --- ACCORDION SECTION STYLE --- */
                .exp-section { padding: 80px 10%; background: #fff; }
                .accordion-container { max-width: 1000px; margin: 0 auto; }
                .accordion-item { border-bottom: 1px solid #e5e7eb; overflow: hidden; }

                .accordion-header {
                    width: 100%; padding: 30px 0; display: flex; align-items: center;
                    justify-content: space-between; background: none; border: none;
                    cursor: pointer; text-align: left; transition: 0.3s;
                }
                .accordion-header:hover .icon-box { background: #10b981; color: #fff; }

                .content-left { display: flex; align-items: center; gap: 25px; }
                .icon-box {
                    width: 50px; height: 50px; background: #f3f4f6; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    color: #111827; transition: 0.3s;
                }

                .title-group h3 { font-size: 1.25rem; font-weight: 800; margin: 0; color: #111827; }
                .title-group p { font-size: 0.9rem; color: #6b7280; margin: 5px 0 0; }
                .toggle-icon { color: #10b981; }

                .accordion-content {
                    max-height: 0; opacity: 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    background: #f9fafb; border-radius: 16px;
                }
                .accordion-content.open { max-height: 600px; opacity: 1; padding: 30px; margin-bottom: 30px; }

                .details-list {
                    list-style: none; padding: 0; margin: 0;
                    display: grid; grid-template-columns: 1fr 1fr; gap: 15px;
                }
                .details-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #4b5563; line-height: 1.5; }
                .bullet { width: 6px; height: 6px; background: #10b981; border-radius: 50%; margin-top: 8px; flex-shrink: 0; }

                @media (max-width: 768px) {
                    .details-list { grid-template-columns: 1fr; }
                    .it-banner h1 { font-size: 2rem; }
                    .title-group h3 { font-size: 1.1rem; }
                }
            `}</style>

            {/* 1. THE BANNER (YOUR REQUESTED STYLE) */}
            <div className="it-banner">
                <h1>{pageTitle}</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Our Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Maintenance</span>
                </div>
            </div>

            {/* 2. THE ACCORDION BOXES */}
            <section className="exp-section">
                <div className="accordion-container">
                    {maintenanceData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <div className="content-left">
                                    <div className="icon-box">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <div className="title-group">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                                <div className="toggle-icon">
                                    {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </div>
                            </button>

                            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                <ul className="details-list">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx}>
                                            <div className="bullet"></div>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MaintenanceSupport;