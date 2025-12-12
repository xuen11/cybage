import React, { useState, useEffect } from 'react';
import '/src/App.css';

const ProjectReference = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const projects = [
        {
            id: 1,
            title: "Metal Industry",
            category: "IoT Systems",
            images: ["/metal.jpg", "/metal2.jpg", "/metal3.jpg"], 
            size: "tall",
            description: "Advanced RFID tracking system with LED display for warehouse management and logistics operations.",
            details: "Implemented real-time vehicle tracking, automated bay assignment, and LED display integration for improved warehouse efficiency.",
        },
        {
            id: 2,
            title: "Barcode Printing and Verifying",
            category: "Automation",
            images: ["/barcode.png", "/barcode2.jpg", "/barcode3.jpg"],
            size: "small",
            description: "Complete automation solution for manufacturing processes with PLC integration.",
            details: "Designed and deployed automated production line controls, reducing downtime by 40% and improving overall efficiency.",
        },
        {
            id: 3,
            title: "Packaging Industry",
            category: "IoT Systems",
            images: ["/packaging.png ","/packaging2.jpg", "/packaging3.jpg"],
            size: "tall",
            description: "Comprehensive IoT infrastructure for smart manufacturing with sensor networks.",
            details: "Deployed 200+ sensors across production floor with centralized monitoring, predictive maintenance, and energy optimization.",
        },
        {
            id: 4,
            title: "Chamber Temperature and Humidity Monitoring",
            category: "Software Development",
            images: ["/chamber.png", "/chamber2.jpg", "/chamber3.jpg"],
            size: "tall",
            description: "Tailored enterprise resource planning system for manufacturing industry.",
            details: "Full-stack development of custom monitoring solution with real-time temperature tracking, humidity control, and analytics dashboard.",
        },
        {
            id: 5,
            title: "RFID Lorry Bay Display System with LED Display",
            category: "Electronic Engineering",
            images: ["/rfid.png", "/rfid2.jpg", "/rfid3.jpg"],
            size: "small",
            description: "Custom printed circuit board design and prototyping for industrial control systems.",
            details: "Engineered multi-layer PCB designs for industrial controllers, completed full prototyping and production setup.",
        }
    ];

    useEffect(() => {
        if (!selectedProject || !autoSlide) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prev =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }, 3000); 

        return () => clearInterval(interval);
    }, [selectedProject, autoSlide, currentImageIndex]);

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setAutoSlide(true);
    };

    const closeProject = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex(prev =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 5000); 
    };

    const prevImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex(prev =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 5000); 
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 5000); 
    };

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
                                    <h2 className="service-hero-desc">
                                        Showcasing our successful technology implementations across IoT, industrial automation, and enterprise software solutions.
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="project-reference-page">
                            <div className="masonry-grid">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className={`masonry-item ${project.size}`}
                                        onClick={() => openProject(project)}
                                    >
                                        <div className="masonry-image">
                                            <img src={project.images[0]} alt={project.title} />
                                            <div className="masonry-overlay">
                                                <div className="masonry-content">
                                                    <h3>{project.title}</h3>
                                                    {/*<p>{project.category}</p>*/}
                                                </div>
                                                <div className="masonry-actions">
                                                    {/* Action buttons can go here */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Project Detail Modal */}
                            {selectedProject && (
                                <div className="project-modal" onClick={closeProject}>
                                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                                        <button className="modal-close" onClick={closeProject}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </button>

                                        <div className="project-modal-container">
                                            {/* Left Side - Image Carousel */}
                                            <div className="modal-left">
                                                <div className="image-carousel">
                                                    <img
                                                        src={selectedProject.images[currentImageIndex]}
                                                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                                        className="carousel-image"
                                                    />

                                                    {/* Navigation Arrows */}
                                                    {selectedProject.images.length > 1 && (
                                                        <>
                                                            <button className="carousel-btn prev-btn" onClick={prevImage}>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="carousel-btn next-btn" onClick={nextImage}>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </>
                                                    )}

                                                    {/* Image Counter */}
                                                    <div className="image-counter">
                                                        {currentImageIndex + 1} / {selectedProject.images.length}
                                                    </div>

                                                    {/* Image Dots */}
                                                    <div className="image-dots">
                                                        {selectedProject.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
                                                                onClick={() => goToImage(index)}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Side - Project Details */}
                                            <div className="modal-right">
                                                <div className="modal-info">
                                                    {/*<span className="modal-category">{selectedProject.category}</span>*/}
                                                    <h2>{selectedProject.title}</h2>
                                                    <p className="modal-description">{selectedProject.description}</p>

                                                    {/*<div className="modal-details">*/}
                                                    {/*    <h3>Project Details</h3>*/}
                                                    {/*    <p>{selectedProject.details}</p>*/}
                                                    {/*</div>*/}

                                                    {/*<div className="modal-tech">*/}
                                                    {/*    <h3>Technologies Used</h3>*/}
                                                    {/*    <div className="tech-tags">*/}
                                                    {/*        {selectedProject.tech.map((tech, index) => (*/}
                                                    {/*            <span key={index} className="tech-tag">{tech}</span>*/}
                                                    {/*        ))}*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}

                                                    {/*<div className="modal-actions">*/}
                                                    {/*    <button className="modal-btn primary-btn">*/}
                                                    {/*        Request Similar Project*/}
                                                    {/*    </button>*/}
                                                    {/*    <button className="modal-btn secondary-btn" onClick={closeProject}>*/}
                                                    {/*        Close*/}
                                                    {/*    </button>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectReference;