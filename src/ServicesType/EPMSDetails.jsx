import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronLeft, ChevronDown, ChevronUp,
    Cpu, Globe, Factory, Zap, Target, TrendingUp, Settings, Download,
    Award, BarChart3, Users, Lightbulb, CheckCircle2, PieChart, Layout, Activity, AlertTriangle, Calculator, Handshake, Info, ShieldCheck, Briefcase
} from 'lucide-react';


const EPMSDetails = () => {
    // Single state to ensure only one box can be open at a time
    const [openSection, setOpenSection] = useState(0);

    // Reference for scrolling logic
    const sectionRefs = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll Logic: Triggers when openSection changes
    useEffect(() => {
        if (openSection !== null && sectionRefs.current[openSection]) {
            const yOffset = -100; // Large offset to clear the sticky header
            const element = sectionRefs.current[openSection];
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [openSection]);

    const toggleSection = (index) => {
        setOpenSection(prev => (prev === index ? null : index));
    };

    const sections = [
        {
            title: "1. Introduction: Lean Manufacturing & EPMS Overview",
            icon: <Cpu size={20} />,
            content: (
                <div className="content-inner">
                    <p className="lead-text">
                        Shop Floor Systems based on the lean manufacturing model help the modern factory to optimize production output, fight wastages and lower production costs.
                    </p>
                    <div className="info-block">
                        <p>Manufacturers today must have the ability to accurately and consistently <strong>MEASURE THE EFFICIENCY</strong> of the equipment, the machine operator and process deployed. No lasting improvement is possible without meticulous measurement!</p>
                        <p>Increasing overtime, adding shifts or purchasing new equipment are reactive stop gap measures factories took in the past, much to the detriment of the bottom line. Nowadays, with a properly configured Shop Floor System, factories are able to better plan, track, improve and optimize the performances of their human resources, machines and plant assets.</p>
                    </div>
                    <div className="solution-highlight">
                        <p>Mexter's shop floor solution provides a powerful yet easy to implement interface to manufacturing equipment. Our <strong>Equipment Performance Monitoring System (EPMS)</strong> is an indispensable measurement tool to benchmark, analyse, reduce losses, improve and innovate production processes and drive profits.</p>
                    </div>
                    <h4 className="sub-header"><Target size={18} /> EPMS helps you in your quest to:</h4>
                    <div className="feature-grid">
                        <ul>
                            <li>Reduce bottlenecks and increase throughput in the process</li>
                            <li>Better train and monitor my machine operators</li>
                            <li>Reduce machine setup time</li>
                            <li>Improve machine reliability by tracking preventive maintenance</li>
                            <li>Optimize run rates in current factory capacities</li>
                            <li>Eliminate down time by recording stoppage reasons</li>
                            <li>Expose hidden problems and tackle them quickly</li>
                        </ul>
                    </div>
                    <div className="realtime-info">
                        <p>EPMS provides managers, engineers, maintenance staffs, operators and planners data collected in <strong>real-time</strong> and collated into useful information. This helps machine operators and engineers to quickly make decisions and take immediate actions on abnormalities <strong>before issues turn into crises!</strong></p>
                    </div>
                    <div className="dual-grid">
                        <div className="analysis-box competitive">
                            <h4 className="box-title"><Globe size={16} /> Our Competitive</h4>
                            <ul>
                                <li>What are my competitors doing for shop floor data?</li>
                                <li>Do they have OEE tracking?</li>
                                <li>Are they more profitable as a result?</li>
                            </ul>
                        </div>
                        <div className="analysis-box floor">
                            <h4 className="box-title"><Factory size={16} /> Our Production Floor</h4>
                            <ul>
                                <li>What is the status of each piece of equipment now?</li>
                                <li>Is equipment performance meeting planned output?</li>
                                <li>What are the bottlenecks in process?</li>
                                <li>What are my equipment utilization rates?</li>
                                <li>What is the efficiency of the machine?</li>
                                <li>Why are there frequent stoppages?</li>
                                <li>Who are the operators in charge?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="oee-result-card">
                        <div className="oee-header"><TrendingUp size={20} /><span>OEE Performance Impact</span></div>
                        <p>EPMS uses the <strong>Overall Equipment Efficiency (OEE)</strong> formula to analyze machine utilization. Companies implementing EPMS have reported achievements of <strong>more than 10% in OEE</strong>.</p>
                    </div>
                </div>
            )
        },
        {
            title: "2. Value Proposition & Concept",
            icon: <Award size={20} />,
            content: (
                <div className="content-inner">
                    <h4 className="sub-header"><Award size={18} /> Value Proposition</h4>
                    <p className="lead-text">EPMS enables real time responses in order to obtain the following</p>
                    <div className="value-cards-grid">
                        <div className="value-card"><BarChart3 className="value-icon" /><h5>Improved productivity</h5></div>
                        <div className="value-card"><Zap className="value-icon" /><h5>Improved profitability</h5></div>
                        <div className="value-card"><Users className="value-icon" /><h5>Improved employee morale / empowerment / teamwork</h5></div>
                    </div>
                    <div className="concept-section">
                        <h4 className="sub-header"><Lightbulb size={18} /> The Concept</h4>
                        <p className="lead-text">EPMS achieves the above by using the concept below</p>
                        <div className="clean-image-area">
                            <img src="/path-to-concept-image.jpg" alt="EPMS Concept" className="content-img" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "3. Benefits",
            icon: <PieChart size={20} />,
            content: (
                <div className="content-inner">
                    <div className="benefits-grid">
                        {[
                            "Easy analysis of data", "Enhance monitoring of workflow", "Easy access to operational metrics",
                            "Easy trend analysis", "Increase profitability", "Improved productivity",
                            "Fast problem identification", "Labour productivity tracking", "Production reporting",
                            "Lower cost of production", "Improved return on capital"
                        ].map((benefit, i) => (
                            <div key={i} className="benefit-item">
                                <CheckCircle2 size={18} className="benefit-check" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "4. Features",
            icon: <Layout size={20} />,
            content: (
                <div className="content-inner">
                    <div className="features-list">
                        {["Real Time Information Monitoring", "Overall Equipment Efficiency", "Comprehensive Data / Charting Reporting Of Measured Data", "Individual Cell Controller for Equipment/Operator State", "Data Processing Module"].map((feature, i) => (
                            <div key={i} className="feature-item-row">
                                <div className="feature-number">{i + 1}</div>
                                <div className="feature-text">{feature}</div>
                            </div>
                        ))}
                    </div>
                    <div className="clean-image-area">
                        <img src="/path-to-features-image.jpg" alt="EPMS Features" className="content-img" />
                    </div>
                </div>
            )
        },
        {
            title: "5. What is OEE",
            icon: <Activity size={20} />,
            content: (
                <div className="content-inner">
                    <p className="lead-text">OEE stands for Overall Equipment Efficiency and is a key measurement in a lean manufacturing implementation.</p>
                    <div className="info-block">
                        <p>It was developed by Seiichi Nakajima in the 1960's as a hierarchy of metrics based on Harrington Emerson's philosophy on labour efficiency. It evaluates and indicates the efficiency of the manufacturing floor. Today OEE is the Standard Measurement Index used by leading manufacturers worldwide.</p>
                        <p>Measuring and Tracking the Overall Equipment Effectiveness is crucial in your efforts to reduce equipment and process related wastages.</p>
                    </div>
                    <div className="oee-formula-box">
                        <h4 className="sub-header" style={{ color: 'white' }}>The High Level formula for OEE is:</h4>
                        <div className="formula-display">OEE = Availability x Performance x Quality</div>
                    </div>

                    <div className="oee-breakdown-grid">
                        <div className="oee-factor">
                            <div className="factor-tag availability">Availability</div>
                            <p className="factor-subtitle">Actual vs Planned Production Time</p>
                            <ul className="factor-list"><li>Equipment Setup</li><li>Major Equipment breakdowns</li></ul>
                        </div>
                        <div className="oee-factor">
                            <div className="factor-tag performance">Performance</div>
                            <p className="factor-subtitle">Represents the speed loss</p>
                            <ul className="factor-list"><li>Operator inefficiency</li><li>Machine failure or material quality</li></ul>
                        </div>
                        <div className="oee-factor">
                            <div className="factor-tag quality">Quality</div>
                            <p className="factor-subtitle">Quality Loss for produced pieces</p>
                            <ul className="factor-list"><li>Non-standard quality</li><li>Required Reworks</li></ul>
                        </div>
                    </div>
                    <div className="clean-image-area"><img src="/path-to-oee-image.jpg" alt="OEE Calculation Diagram" className="content-img" /></div>
                </div>
            )
        },
        {
            title: "6.Six Big Losses",
            icon: <AlertTriangle size={20} />,
            content: (
                <div className="content-inner">
                    <p className="lead-text">To achieve higher plant productivity and efficiency it is important to conduct measurements of disturbances in the manufacturing process.</p>
                    <div className="info-block">
                        <p>Disturbances can be divided into 2 categories, chronic and sporadic depending on how they occur.</p>
                        <p><strong>Chronic disturbance</strong> are usually small, hidden and complicated. Identification of chronic disturbances is only possible through comparison of performance with the theoretical capacity of the equipment.</p>
                        <p>Meanwhile <strong>sporadic disturbance</strong> are more obvious since they occur quickly and as large deviations from the normal state.</p>
                    </div>
                    <div className="clean-image-area"><img src="/path-to-big-losses-image.jpg" alt="The Six Big Losses" className="content-img" /></div>
                </div>
            )
        },
        {
            title: "7. OEE Savings Calculator",
            icon: <Calculator size={20} />,
            content: (
                <div className="content-inner">
                    <p className="lead-text">This calculator aims to give you a rough idea of what EPMS OEE can do for your organization.</p>
                    <div className="feature-grid">
                        <ul>
                            <li>Current OEE score calculation based on your plant's measurements.</li>
                            <li>How OEE incremental improvements translate into cumulative savings.</li>
                            <li>Reduce machine setup time.</li>
                            <li>Accuracy providing clear visibility for productivity.</li>
                        </ul>
                    </div>
                    <div className="clean-image-area"><img src="/path-to-calculator-image.jpg" alt="OEE Savings Calculator Interface" className="content-img" /></div>
                </div>
            )
        },
      
        
    ];

    return (
        <div className="epms-clean-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                .epms-clean-page { font-family: 'Plus Jakarta Sans', sans-serif; background: #f9fafb; color: #334155; padding-bottom: 80px; }
                .hero-banner { background: white; padding: 80px 20px; text-align: center; border-bottom: 1px solid #e5e7eb; }
                .hero-banner h1 { font-size: 2.5rem; font-weight: 800; color: #111827; margin: 0; }
                .details-container { max-width: 1240px; margin: 40px auto; padding: 0 24px; }
                .nav-btn { display: inline-flex; align-items: center; gap: 8px; color: #10b981; text-decoration: none; font-weight: 700; margin-bottom: 24px; font-size: 0.9rem; }
                .page-layout-grid { display: flex; gap: 30px; align-items: flex-start; }
                .accordion-side { flex: 1; }
                .sticky-download-side { width: 320px; position: sticky; top: 40px; }
                .acc-wrapper { background: white; border-radius: 20px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); overflow: hidden; }
                .acc-row { border-bottom: 1px solid #f3f4f6; }
                .acc-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 24px 30px; background: none; border: none; cursor: pointer; transition: 0.2s; }
                .acc-trigger:hover { background: #f0fdfa; }
                .acc-label { display: flex; align-items: center; gap: 12px; font-size: 1.1rem; font-weight: 700; color: #111827; }
                .icon-holder { color: #10b981; background: #ecfdf5; padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
                .acc-content { padding: 10px 30px 40px 72px; }
                .lead-text { font-size: 1.1rem; color: #111827; font-weight: 600; line-height: 1.6; margin-bottom: 20px; }
                .info-block p { margin-bottom: 15px; line-height: 1.8; color: #4b5563; }
                .solution-highlight { background: #f0fdfa; padding: 20px; border-radius: 12px; border-left: 5px solid #10b981; margin: 25px 0; font-style: italic; }
                .sub-header { display: flex; align-items: center; gap: 10px; color: #111827; margin: 30px 0 15px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800; }
                .feature-grid ul { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; list-style: none; padding: 0; }
                .feature-grid li { font-size: 0.95rem; padding: 12px 12px 12px 35px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; position: relative; }
                .feature-grid li::before { content: "-"; color: #10b981; position: absolute; left: 15px; font-weight: 900; }
                .realtime-info { background: #fffbeb; border: 1px solid #fef3c7; padding: 20px; border-radius: 12px; margin: 30px 0; color: #92400e; }
                .dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
                .analysis-box { padding: 25px; border-radius: 16px; border: 1px solid #e5e7eb; }
                .box-title { margin: 0 0 15px; font-size: 1rem; display: flex; align-items: center; gap: 8px; font-weight: 800; }
                .competitive { background: #f8fafc; } .floor { background: #fef2f2; }
                .analysis-box ul { padding-left: 18px; margin: 0; font-size: 0.9rem; line-height: 1.7; }
                .oee-result-card { background: #064e3b; color: #ecfdf5; padding: 30px; border-radius: 20px; margin-top: 30px; }
                .oee-header { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; color: #34d399; font-weight: 800; text-transform: uppercase; font-size: 0.85rem; }
                .value-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0; }
                .value-card { background: #f8fafc; border: 1px solid #e5e7eb; padding: 20px; border-radius: 16px; text-align: center; }
                .value-icon { color: #10b981; margin-bottom: 12px; }
                .benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                .benefit-item { display: flex; align-items: center; gap: 12px; background: white; padding: 14px; border-radius: 12px; border: 1px solid #e5e7eb; }
                .feature-item-row { display: flex; align-items: center; gap: 15px; background: white; border: 1px solid #e5e7eb; padding: 16px; border-radius: 12px; margin-bottom: 10px; }
                .feature-number { background: #10b981; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; }
                .oee-formula-box { background: #111827; color: white; padding: 30px; border-radius: 16px; margin: 25px 0; text-align: center; }
                .formula-display { font-size: 1.4rem; font-weight: 800; color: #10b981; margin-top: 10px; }
                .oee-breakdown-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 25px 0; }
                .oee-factor { background: white; border: 1px solid #e5e7eb; padding: 20px; border-radius: 12px; }
                .factor-tag { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; }
                .factor-subtitle { font-size: 0.85rem; font-weight: 700; color: #111827; margin-bottom: 8px; }
                .factor-list { padding-left: 18px; font-size: 0.8rem; color: #64748b; margin: 0; }
                .availability { background: #dcfce7; color: #166534; } .performance { background: #dbeafe; color: #1e40af; } .quality { background: #fef2f2; color: #991b1b; }
                .ecosystem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
                .ecosystem-card { background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 16px; transition: 0.3s; }
                .ecosystem-card h4 { font-size: 1rem; font-weight: 800; margin-bottom: 10px; }
                .ecosystem-card p { font-size: 0.85rem; color: #4b5563; line-height: 1.5; }
                .partner-logo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 15px; }
                .partner-logo-placeholder { background: #f9fafb; border: 1px solid #e5e7eb; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 12px; color: #9ca3af; font-weight: 700; }
                .content-img { max-width: 100%; border-radius: 12px; }
                .download-card { background: white; padding: 30px; border-radius: 20px; border: 1px solid #e5e7eb; text-align: center; }
                .download-circle { width: 65px; height: 65px; border: 3px solid #0056b3; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; color: #0056b3; }
                .divider { height: 1px; background: #f3f4f6; margin: 25px 0; }
                @media (max-width: 1000px) {
                    .page-layout-grid { flex-direction: column; }
                    .sticky-download-side { width: 100%; position: static; }
                    .ecosystem-grid, .partner-logo-grid, .oee-breakdown-grid, .feature-grid ul, .benefits-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div className="hero-banner"><h1>EPMS System Details</h1></div>
            <div className="details-container">
                <Link to="/softwareSolution" className="nav-btn"><ChevronLeft size={18} /> BACK TO SOLUTIONS</Link>
                <div className="page-layout-grid">
                    <div className="accordion-side">
                        <div className="acc-wrapper">
                            {sections.map((section, index) => (
                                <div key={index} className="acc-row" ref={el => sectionRefs.current[index] = el}>
                                    <button className="acc-trigger" onClick={() => toggleSection(index)}>
                                        <div className="acc-label"><div className="icon-holder">{section.icon}</div>{section.title}</div>
                                        {openSection === index ? <ChevronUp size={20} color="#9ca3af" /> : <ChevronDown size={20} color="#9ca3af" />}
                                    </button>
                                    {openSection === index && <div className="acc-content">{section.content}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sticky-download-side">
                        <div className="download-card">
                            <a href="/EPMS-brochure.pdf" download style={{ textDecoration: 'none' }}>
                                <div className="download-circle"><Download size={30} /></div>
                                <div style={{ color: '#111827', fontWeight: 700 }}>Download Brochure</div>
                            </a>
                            <div className="divider"></div>
                            <a href="/EST-PT2.zip" download style={{ textDecoration: 'none' }}>
                                <div className="download-circle"><Download size={30} /></div>
                                <div style={{ color: '#111827', fontWeight: 700 }}>Download EST-PT2 Tool</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EPMSDetails;