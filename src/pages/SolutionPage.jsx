//import React, { useState } from 'react';
//import '/src/App.css';
//import { Link } from 'react-router-dom';

//const SolutionPage = () => {
//    const [selectedSolution, setSelectedSolution] = useState(null);

//    const solutions = [
//        {
//            id: 1,
//            title: 'Equipment Productivity Monitoring (OEE)',
//            category: 'Automation ',
//            shortDescription: 'Monitor equipment performance and output in real-time.',
//            description: 'Real-time monitoring of equipment performance, downtime, and output to optimize your shop floor.',
//            benefits: ['Improves OEE', 'Reduces unplanned downtime', 'Increases production efficiency']
//        },
//        {
//            id: 2,
//            title: 'Manufacturing Execution System (MES)',
//            category: 'Software',
//            shortDescription: 'Digital control for production scheduling and execution.',
//            description: 'Comprehensive digital control of production scheduling, execution, and reporting. MES transforms manufacturing operations by connecting planning to production. It delivers real-time visibility, standardized processes, accurate reporting, and complete traceability—turning data into actionable insights that optimize efficiency and quality across your supply chain.',
//            benefits: ['Enhances traceability', 'Boosts operational accuracy', 'Streamlines workflow']
//        },
//        {
//            id: 3,
//            title: 'Confinement Centre Management',
//            category: 'Software',
//            shortDescription: 'Integrated platform for guest services and billing.',
//            description: 'Integrated platform for guest registration, scheduling, billing, and services designed specifically for confinement care.',
//            benefits: ['Improves day-to-day operations', 'Enhances customer experience', 'Streamlines service delivery']
//        },
//        {
//            id: 4,
//            title: 'RFID Lorry Tracking & Bay Allocation',
//            category: 'IOT',
//            shortDescription: 'Automated tracking of lorry arrivals and departures.',
//            description: 'Automated tracking of lorry arrivals and departures with optimized bay assignment to maximize logistics efficiency.',
//            benefits: ['Reduces congestion', 'Accelerates loading/unloading', 'Increases site visibility']
//        },
//        {
//            id: 5,
//            title: 'RFID Library Data Collection',
//            category: 'RFID',
//            shortDescription: 'Fast RFID identification for inventory and circulation.',
//            description: 'Fast and accurate RFID-based identification for inventory and circulation management in modern libraries.',
//            benefits: ['Saves staff time', 'Improves data accuracy', 'Simplifies library operations']
//        },
//        {
//            id: 6,
//            title: 'Chamber Temperature & Humidity Monitoring',
//            category: 'IOT',
//            shortDescription: 'Precision monitoring for controlled chambers.',
//            description: 'Precision monitoring and alerting for controlled chambers and sensitive storage environments.',
//            benefits: ['Prevents product damage', 'Ensures compliance', 'Supports quality assurance']
//        },
//        {
//            id: 7,
//            title: 'Environment Monitoring System',
//            category: 'IOT',
//            shortDescription: 'Facility-wide monitoring and historical logging.',
//            description: 'Facility-wide environmental monitoring with historical data logging and alerts to meet industrial standards.',
//            benefits: ['Enhances safety', 'Ensures environmental standards', 'Improves audit readiness']
//        },
//        {
//            id: 8,
//            title: 'Warehouse Management System (WMS)',
//            category: 'Software',
//            shortDescription: 'Smart inventory and warehouse workflow management.',
//            description: 'Smart inventory, picking, receiving, and warehouse workflow management to reduce overhead costs.',
//            benefits: ['Improves inventory accuracy', 'Reduces operating costs', 'Speeds up fulfilment']
//        },
//        {
//            id: 9,
//            title: 'GS1 Medical Export Label Printing',
//            category: 'Compliance',
//            shortDescription: 'Compliant GS1 label generation for medical exports.',
//            description: 'Specialised software for generating compliant GS1 labels for medical exports to meet global regulations.',
//            benefits: ['Ensures regulatory compliance', 'Minimizes labeling errors', 'Streamlines export process']
//        },
//        {
//            id: 10,
//            title: 'High-Volume Label Printing',
//            category: 'High Volumn',
//            shortDescription: 'Printing solutions for 5,000+ labels daily.',
//            description: 'Custom label printing solutions designed for operations printing 5,000+ labels daily with high reliability.',
//            benefits: ['Delivers high performance', 'Consistent quality', 'Reliable large-scale output']
//        },
//        {
//            id: 11,
//            title: 'LED Display Notification System',
//            category: 'Automation',
//            shortDescription: 'Real-time alerts via industrial LED boards.',
//            description: 'Real-time messaging and alerts via industrial-grade LED display boards for instant factory floor communication.',
//            benefits: ['Improves communication', 'Boosts operator responsiveness', 'Enhances safety']
//        },
//        {
//            id: 12,
//            title: 'In-house Built I/O Devices',
//            category: 'Integration',
//            shortDescription: 'Custom hardware interfaces for machine integration.',
//            description: 'Custom-designed hardware interfaces for automation, data capture, and seamless machine integration.',
//            benefits: ['Enables seamless connectivity', 'Enhances system interoperability', 'Supports IoT expansion']
//        }
//    ];

//    return (
//        <>
//            <section className="solutions-section">
//                <div className="solutions-header">
//                    <div className="solution-banner">
//                        <div className="solution-banner-content">
//                            <span className="solutions-badge">What We Offer</span>
//                            <h2 className="solutions-title">Our Solutions</h2>
//                            <div className="solutions-divider"></div>
//                            <p className="solutions-subtitle">
//                                Comprehensive technology solutions designed to transform your operations
//                            </p>
//                        </div>
//                    </div>
//                </div>
//                <div className="solutions-gradient-overlay"></div>
//                <div className="solutions-container">
//                    <div className="solutions-grid">
//                        {solutions.map((solution) => (
//                            <div
//                                key={solution.id}
//                                className="solution-card"
//                                onClick={() => setSelectedSolution(solution)}
//                            >
//                                <span className="solution-category">{solution.category}</span>
//                                <h3 className="solution-title">{solution.title}</h3>
//                                {/* DIFFERENT TEXT: SHOWING SHORTER DESCRIPTION HERE */}
//                                <p className="solution-description">{solution.shortDescription}</p>
//                                <button className="solution-btn">
//                                    Learn More
//                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                    </svg>
//                                </button>
//                            </div>
//                        ))}
//                    </div>
//                </div>

//                {selectedSolution && (
//                    <div className="solution-modal" onClick={() => setSelectedSolution(null)}>
//                        <div className="solution-modal-content" onClick={(e) => e.stopPropagation()}>
//                            <button className="modal-close" onClick={() => setSelectedSolution(null)}>
//                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                                </svg>
//                            </button>
//                            <div className="modal-header">
//                                <span className="modal-categories">{selectedSolution.category}</span>
//                            </div>
//                            <h2 className="modal-title">{selectedSolution.title}</h2>
//                            {/* DIFFERENT TEXT: SHOWING FULL DETAILED DESCRIPTION HERE */}
//                            <p className="modal-description">{selectedSolution.description}</p>
//                            <div className="modal-benefits">
//                                <h3>Key Benefits</h3>
//                                <ul>
//                                    {selectedSolution.benefits.map((benefit, index) => (
//                                        <li key={index}>
//                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#48c81f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                            </svg>
//                                            {benefit}
//                                        </li>
//                                    ))}
//                                </ul>
//                            </div>
//                        </div>
//                    </div>
//                )}
//            </section>

//            <div className="cyb-contact-container">
//                <div className="cyb-contact-section">
//                    <h4 className="cyb-contact-title">Interested in Our Solutions?</h4>
//                    <p className="cyb-contact-text">
//                        Contact us to learn how we can help your business grow globally.
//                    </p>
//                    <Link to="/contact" className="cyb-contact-btn">
//                        Contact Us
//                    </Link>
//                </div>
//            </div>
//        </>
//    );
//};

//export default SolutionPage;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000/api/solutions';

const SolutionPage = ({ isLoggedIn }) => {
    const [solutions, setSolutions] = useState([]);
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        loadSolutions();
    }, []);

    const loadSolutions = async () => {
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setSolutions(data);
        } catch (err) {
            console.error("Error fetching solutions:", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this service?")) {
            await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
            loadSolutions();
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const method = selectedSolution.id ? 'PUT' : 'POST';
        const url = selectedSolution.id ? `${API_BASE_URL}/${selectedSolution.id}` : API_BASE_URL;

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedSolution)
        });

        setIsEditModalOpen(false);
        setSelectedSolution(null);
        loadSolutions();
    };

    const updateBenefit = (index, value) => {
        const newBenefits = [...selectedSolution.benefits];
        newBenefits[index] = value;
        setSelectedSolution({ ...selectedSolution, benefits: newBenefits });
    };

    // Admin Styles (Internal for clean separation)
    const adminStyles = {
        adminWrapper: { padding: '140px 5% 60px', background: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' },
        headerFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
        title: { fontSize: '28px', color: '#1e293b', margin: 0, fontWeight: '700' },
        addBtn: { background: '#10b981', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },
        tableCard: { background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' },
        table: { width: '100%', borderCollapse: 'collapse' },
        th: { background: '#f1f5f9', padding: '16px', textAlign: 'left', color: '#475569', fontSize: '13px', textTransform: 'uppercase' },
        td: { padding: '16px', borderBottom: '1px solid #f1f5f9' },
        tag: { fontSize: '11px', background: '#e0e7ff', color: '#4338ca', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' },
        actionBtn: { padding: '6px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: '13px', marginLeft: '5px', background: '#fff' },
        overlay: { position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
        modal: { background: '#fff', padding: '30px', borderRadius: '16px', width: '90%', maxWidth: '650px', maxHeight: '90vh', overflowY: 'auto' },
        input: { width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', marginTop: '6px', marginBottom: '15px' },
        label: { fontWeight: '600', color: '#475569', fontSize: '14px' }
    };

    // --- VIEW 1: CUSTOMER VIEW (Your preferred layout) ---
    if (!isLoggedIn) {
        return (
            <>
                <section className="solutions-section">
                    <div className="solutions-header">
                        <div className="solution-banner">
                            <div className="solution-banner-content">
                                <span className="solutions-badge">What We Offer</span>
                                <h2 className="solutions-title">Our Solutions</h2>
                                <div className="solutions-divider"></div>
                                <p className="solutions-subtitle">
                                    Comprehensive technology solutions designed to transform your operations
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="solutions-gradient-overlay"></div>

                    <div className="solutions-container">
                        <div className="solutions-grid">
                            {solutions.map((solution) => (
                                <div
                                    key={solution.id}
                                    className="solution-card"
                                    onClick={() => setSelectedSolution(solution)}
                                >
                                    <span className="solution-category">{solution.category}</span>
                                    <h3 className="solution-title">{solution.title}</h3>
                                    <p className="solution-description">{solution.shortDescription}</p>
                                    <button className="solution-btn">
                                        Learn More
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedSolution && (
                        <div className="solution-modal" onClick={() => setSelectedSolution(null)}>
                            <div className="solution-modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={() => setSelectedSolution(null)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className="modal-header">
                                    <span className="modal-categories">{selectedSolution.category}</span>
                                </div>
                                <h2 className="modal-title">{selectedSolution.title}</h2>
                                <p className="modal-description">{selectedSolution.description}</p>
                                <div className="modal-benefits">
                                    <h3>Key Benefits</h3>
                                    <ul>
                                        {selectedSolution.benefits && selectedSolution.benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#48c81f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <div className="cyb-contact-container">
                    <div className="cyb-contact-section">
                        <h4 className="cyb-contact-title">Interested in Our Solutions?</h4>
                        <p className="cyb-contact-text">
                            Contact us to learn how we can help your business grow globally.
                        </p>
                        <Link to="/contact" className="cyb-contact-btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // --- VIEW 2: ADMIN VIEW ---
    return (
        <section style={adminStyles.adminWrapper}>
            <div style={adminStyles.headerFlex}>
                <div>
                    <h2 style={adminStyles.title}>Solution Console</h2>
                    <p style={{ color: '#64748b', margin: '5px 0 0' }}>Manage your technology catalog</p>
                </div>
                <button style={adminStyles.addBtn} onClick={() => {
                    setSelectedSolution({ title: '', category: '', shortDescription: '', description: '', benefits: [''] });
                    setIsEditModalOpen(true);
                }}>
                    + Add New Solution
                </button>
            </div>

            <div style={adminStyles.tableCard}>
                <table style={adminStyles.table}>
                    <thead>
                        <tr>
                            <th style={adminStyles.th}>Title & Category</th>
                            <th style={adminStyles.th}>Summary</th>
                            <th style={{ ...adminStyles.th, textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solutions.map(sol => (
                            <tr key={sol.id}>
                                <td style={adminStyles.td}>
                                    <div style={{ fontWeight: '700', color: '#334155' }}>{sol.title}</div>
                                    <span style={adminStyles.tag}>{sol.category || 'Uncategorized'}</span>
                                </td>
                                <td style={adminStyles.td}>
                                    <div style={{ maxWidth: '350px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#64748b', fontSize: '14px' }}>
                                        {sol.shortDescription}
                                    </div>
                                </td>
                                <td style={{ ...adminStyles.td, textAlign: 'right' }}>
                                    <button
                                        style={{ ...adminStyles.actionBtn, color: '#2563eb' }}
                                        onClick={() => { setSelectedSolution(sol); setIsEditModalOpen(true); }}
                                    >Modify</button>
                                    <button
                                        style={{ ...adminStyles.actionBtn, color: '#ef4444' }}
                                        onClick={() => handleDelete(sol.id)}
                                    >Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isEditModalOpen && (
                <div style={adminStyles.overlay}>
                    <div style={adminStyles.modal}>
                        <h3 style={{ marginBottom: '20px' }}>{selectedSolution.id ? '🛠 Update Solution' : '📄 Create New Entry'}</h3>
                        <form onSubmit={handleSave}>
                            <label style={adminStyles.label}>Solution Name</label>
                            <input style={adminStyles.input} value={selectedSolution.title} onChange={e => setSelectedSolution({ ...selectedSolution, title: e.target.value })} required />

                            <label style={adminStyles.label}>Category</label>
                            <input style={adminStyles.input} value={selectedSolution.category} onChange={e => setSelectedSolution({ ...selectedSolution, category: e.target.value })} />

                            <label style={adminStyles.label}>Short Description (Grid Card)</label>
                            <textarea style={{ ...adminStyles.input, height: '60px' }} value={selectedSolution.shortDescription} onChange={e => setSelectedSolution({ ...selectedSolution, shortDescription: e.target.value })} />

                            <label style={adminStyles.label}>Full Technical Description</label>
                            <textarea style={{ ...adminStyles.input, height: '100px' }} value={selectedSolution.description} onChange={e => setSelectedSolution({ ...selectedSolution, description: e.target.value })} />

                            <label style={adminStyles.label}>Benefit Points</label>
                            {selectedSolution.benefits.map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                                    <input style={{ ...adminStyles.input, margin: 0 }} value={b} onChange={(e) => updateBenefit(i, e.target.value)} />
                                    <button type="button" onClick={() => {
                                        const filtered = selectedSolution.benefits.filter((_, idx) => idx !== i);
                                        setSelectedSolution({ ...selectedSolution, benefits: filtered });
                                    }} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '0 15px', borderRadius: '8px' }}>×</button>
                                </div>
                            ))}
                            <button type="button" onClick={() => setSelectedSolution({ ...selectedSolution, benefits: [...selectedSolution.benefits, ''] })} style={{ background: '#f1f5f9', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>+ Add Bullet Point</button>

                            <div style={{ marginTop: '30px', display: 'flex', gap: '12px' }}>
                                <button type="submit" style={{ ...adminStyles.addBtn, flex: 2 }}>Update Database</button>
                                <button type="button" onClick={() => setIsEditModalOpen(false)} style={{ ...adminStyles.addBtn, background: '#cbd5e1', color: '#334155', flex: 1 }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SolutionPage;