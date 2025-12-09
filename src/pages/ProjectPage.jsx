import React, { useState } from 'react';
import '/src/App.css';

const ProjectReference = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Metal Industry",
            category: "IoT Systems",
            image: "/metal.jpg",
            size: "tall",
            description: "Advanced RFID tracking system with LED display for warehouse management."
        },
        {
            id: 2,
            title: "Barcode Printing and Verifying",
            category: "Automation",
            image: "/barcode.png",
            size: "small",
            description: "Complete automation solution for manufacturing processes."
        },
        {
            id: 3,
            title: "Packaging Industry",
            category: "IoT Systems",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
            size: "wide",
            description: "Comprehensive IoT infrastructure for smart manufacturing."
        },
        {
            id: 4,
            title: "Chamber Temperature and Humidity Monitoring",
            category: "Software Development",
            image: "chamber.png",
            size: "tall",
            description: "Tailored enterprise resource planning system."
        },
        {
            id: 5,
            title: "RFID Lorry Bay Display System with LED Display",
            category: "Electronic Engineering",
            image: "/rfid.png",
            size: "medium",
            description: "Custom printed circuit board design and fabrication."
        }
        //{
        //    id: 6,
        //    title: "Data Analytics Dashboard",
        //    category: "Software Development",
        //    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
        //    size: "tall",
        //    description: "Real-time analytics platform for industrial operations."
        //},
        //{
        //    id: 7,
        //    title: "Barcode Integration",
        //    category: "IT Solutions",
        //    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        //    size: "small",
        //    description: "Enterprise-wide barcode scanning system."
        //},
        //{
        //    id: 8,
        //    title: "Warehouse Management",
        //    category: "IoT Systems",
        //    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        //    size: "small",
        //    description: "Automated warehouse tracking and management system."
        //}
    ];

    return (

        <div className="project-reference-wrapper">
    <div className="project-reference-page">
      
        <div className="srvc-main-content">
            <div className="service-page-container">
                <div className="service-hero-wrapper">
                    <div className="project-hero-section">
                        <div className="service-nav"></div>
                        <div className="service-hero-content">
                            <span className="service-badge">Our Projects</span>
                            <h1 className="service-hero-title">What Project We Have Done Previously</h1>
                                    <h2 className="service-hero-desc">Showcasing our successful technology implementations across IoT, industrial automation, and enterprise software solutions.</h2>

                          
                        </div>
                    </div>
                </div>
            </div>
        <div className="project-reference-page">
            {/* Header */}
           

       
            <div className="masonry-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`masonry-item ${project.size}`}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="masonry-image">
                            <img src={project.image} alt={project.title} />
                            <div className="masonry-overlay">
                                <div className="masonry-content">
                                    <h3>{project.title}</h3>
                                    {/*<p>{project.category}</p>*/}
                                </div>
                                <div className="masonry-actions">
                                    {/*<button className="icon-btn">*/}
                                    {/*    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
                                    {/*        <path d="M8 3V13M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round" />*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button className="icon-btn">*/}
                                    {/*    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
                                    {/*        <path d="M2 8L6 12L14 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                    {/*<button className="icon-btn">*/}
                                    {/*    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
                                    {/*        <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="project-modal" onClick={() => setSelectedProject(null)}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <div className="modal-info">
                            {/*<span className="modal-category">{selectedProject.category}</span>*/}
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}
            </div>
                </div>
                
                    </div>
                </div>
    );
};

export default ProjectReference;