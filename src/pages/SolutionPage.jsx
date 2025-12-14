import React, { useState } from 'react';
import '/src/App.css';

const SolutionPage = () => {
    const [selectedSolution, setSelectedSolution] = useState(null);

    const solutions = [
        {
            id: 1,
            title: 'Equipment Productivity Monitoring (OEE)',
            category: 'Automation ',
            description: 'Real-time monitoring of equipment performance, downtime, and output.',
            benefits: [
                'Improves OEE',
                'Reduces unplanned downtime',
                'Increases production efficiency'
            ]
        },
        {
            id: 2,
            icon: '⚙️',
            title: 'Manufacturing Execution System (MES)',
            category: 'Software',
            description: 'Comprehensive digital control of production scheduling, execution, and reporting.MES transforms manufacturing operations by connecting planning to production. It delivers real-time visibility, standardized processes, accurate reporting, and complete traceability—turning data into actionable insights that optimize efficiency and quality across your supply chain.',
            benefits: [
                'Enhances traceability',
                'Boosts operational accuracy',
                'Streamlines workflow'
            ]
        },
        {
            id: 3,
            icon: '🏥',
            title: 'Confinement Centre Management',
            category: 'Software',
            description: 'Integrated platform for guest registration, scheduling, billing, and services.',
            benefits: [
                'Improves day-to-day operations',
                'Enhances customer experience',
                'Streamlines service delivery'
            ]
        },
        {
            id: 4,
            icon: '🚚',
            title: 'RFID Lorry Tracking & Bay Allocation',
            category: 'IOT',
            description: 'Automated tracking of lorry arrivals and departures with optimized bay assignment.',
            benefits: [
                'Reduces congestion',
                'Accelerates loading/unloading',
                'Increases site visibility'
            ]
        },
        {
            id: 5,
            icon: '📚',
            title: 'RFID Library Data Collection',
            category: 'RFID',
            description: 'Fast and accurate RFID-based identification for inventory and circulation.',
            benefits: [
                'Saves staff time',
                'Improves data accuracy',
                'Simplifies library operations'
            ]
        },
        {
            id: 6,
            icon: '🌡️',
            title: 'Chamber Temperature & Humidity Monitoring',
            category: 'IOT',
            description: 'Precision monitoring and alerting for controlled chambers and sensitive storage.',
            benefits: [
                'Prevents product damage',
                'Ensures compliance',
                'Supports quality assurance'
            ]
        },
        {
            id: 7,
            icon: '🏭',
            title: 'Environment Monitoring System',
            category: 'IOT',
            description: 'Facility-wide environmental monitoring with historical data logging and alerts.',
            benefits: [
                'Enhances safety',
                'Ensures environmental standards',
                'Improves audit readiness'
            ]
        },
        {
            id: 8,
            icon: '📦',
            title: 'Warehouse Management System (WMS)',
            category: 'Software',
            description: 'Smart inventory, picking, receiving, and warehouse workflow management.',
            benefits: [
                'Improves inventory accuracy',
                'Reduces operating costs',
                'Speeds up fulfilment'
            ]
        },
        {
            id: 9,
            icon: '🏷️',
            title: 'GS1 Medical Export Label Printing',
            category: 'Compliance',
            description: 'Specialised software for generating compliant GS1 labels for medical exports.',
            benefits: [
                'Ensures regulatory compliance',
                'Minimizes labeling errors',
                'Streamlines export process'
            ]
        },
        {
            id: 10,
            icon: '🖨️',
            title: 'High-Volume Label Printing',
            category: 'High Volumn',
            description: 'Custom label printing solutions designed for operations printing 5,000+ labels daily.',
            benefits: [
                'Delivers high performance',
                'Consistent quality',
                'Reliable large-scale output'
            ]
        },
        {
            id: 11,
            icon: '💡',
            title: 'LED Display Notification System',
            category: 'Automation',
            description: 'Real-time messaging and alerts via industrial-grade LED display boards.',
            benefits: [
                'Improves communication',
                'Boosts operator responsiveness',
                'Enhances safety'
            ]
        },
        {
            id: 12,
            icon: '🔌',
            title: 'In-house Built I/O Devices',
            category: 'Integration',
            description: 'Custom-designed hardware interfaces for automation, data capture, and machine integration.',
            benefits: [
                'Enables seamless connectivity',
                'Enhances system interoperability',
                'Supports IoT expansion'
            ]
        }
    ];

    return (
        <section className="solutions-section">
                {/* Header */}
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

                {/* Solutions Grid */}
                <div className="solutions-grid">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="solution-card"
                            onClick={() => setSelectedSolution(solution)}
                        >
                            {/*<div className="solution-icon">{solution.icon}</div>*/}
                            <span className="solution-category">{solution.category}</span>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
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

            {/* Modal */}
            {selectedSolution && (
                <div className="solution-modal" onClick={() => setSelectedSolution(null)}>
                    <div className="solution-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedSolution(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            {/*<div className="modal-icon">{selectedSolution.icon}</div>*/}
                            <span className="modal-categories">{selectedSolution.category}</span>
                        </div>

                        <h2 className="modal-title">{selectedSolution.title}</h2>
                        <p className="modal-description">{selectedSolution.description}</p>

                        <div className="modal-benefits">
                            <h3>Key Benefits</h3>
                            <ul>
                                {selectedSolution.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#48c81f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/*<div className="modal-actions">*/}
                        {/*    <button className="modal-cta">Request Demo</button>*/}
                        {/*    <button className="modal-secondary" onClick={() => setSelectedSolution(null)}>*/}
                        {/*        Close*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            )}
            <div className="cyb-contact-section">
                <h4 className="cyb-contact-title">Interested in Our Solutions?</h4>
                <p className="cyb-contact-text">
                    Contact us to learn how we can help your business grow globally.
                </p>
                <Link to="/contact" className="cyb-contact-btn">
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default SolutionPage;