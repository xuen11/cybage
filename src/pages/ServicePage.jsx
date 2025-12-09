import React, { useState, useEffect, useRef } from "react";
import "/src/App.css";

// Import your images
import softwareIcon from "/bg1.jpg";
import electronicIcon from "/bg.jpg";
import itIcon from "/bg.jpg";
import consultIcon from "/bg.jpg";
import supportIcon from "/bg.jpg";

const serviceList = [
    {
        id: 1,
        img:softwareIcon,
        title: "Smart Software Solution",
        pages: [
            {
                pageNum: 1,
                title: "Overview",
                content: "Advanced IoT solutions for smart connectivity and real-time monitoring. We integrate sensors, cloud platforms, and data analytics for industrial and commercial applications.",
                features: ["IoT Integration", "Cloud Platforms", "Real-time Monitoring"]
            },
            {
                pageNum: 2,
                title: "Capabilities",
                content: "Custom software development for web, mobile, and embedded systems. We specialize in scalable architectures and enterprise-grade solutions.",
                features: ["Web Applications", "Mobile Apps", "Embedded Systems", "API Development"]
            },
            {
                pageNum: 3,
                title: "Technologies",
                content: "Utilizing modern tech stacks including React, Node.js, Python, .NET, and cloud services (AWS, Azure, Google Cloud).",
                features: ["React/Node.js", "Python/Django", ".NET Core", "Cloud Services"]
            }
        ]
    },
    {
        id: 2,
        icon: electronicIcon,
        title: "Electronic Device Design",
        pages: [
            {
                pageNum: 1,
                title: "Product Engineering",
                content: "Streamline your operations with our smart automation solutions. PLC programming, SCADA systems, and process optimization for maximum efficiency.",
                features: ["PCB Design", "Microcontrollers", "Analog/Digital Devices"]
            },
            {
                pageNum: 2,
                title: "Engineering Services",
                content: "Complete electronic engineering services including prototyping, testing, and manufacturing support.",
                features: ["Prototyping", "Testing", "Fabrication", "Quality Control"]
            },
            {
                pageNum: 3,
                title: "Automation Design",
                content: "Design and implementation of industrial automation systems for manufacturing and production lines.",
                features: ["PLC Programming", "SCADA Systems", "I/O Controllers"]
            }
        ]
    },
    {
        id: 3,
        icon: itIcon,
        title: "Industrial IT Peripheral",
        pages: [
            {
                pageNum: 1,
                title: "Hardware Solutions",
                content: "Rugged, durable, high-performance peripheral devices designed for industrial environments.",
                features: ["Barcode Scanners", "Industrial Printers", "Data Loggers"]
            },
            {
                pageNum: 2,
                title: "Infrastructure",
                content: "Complete industrial IT infrastructure setup including workstations, network switches, and backup systems.",
                features: ["Industrial PCs", "Network Switches", "UPS Systems"]
            }
        ]
    },
    {
        id: 4,
        icon: consultIcon,
        title: "IT Consultations",
        pages: [
            {
                pageNum: 1,
                title: "Strategy & Planning",
                content: "Align IT with business goals through digital transformation roadmaps and technology risk management.",
                features: ["IT Strategy", "Digital Transformation", "Cloud Adoption"]
            },
            {
                pageNum: 2,
                title: "Implementation",
                content: "Project management and implementation support from planning to execution with Agile/Scrum methodologies.",
                features: ["Project Management", "Agile Leadership", "Vendor Management"]
            }
        ]
    },
    {
        id: 5,
        icon: supportIcon,
        title: "Maintenance & Support",
        pages: [
            {
                pageNum: 1,
                title: "Hardware Maintenance",
                content: "Expert repair and maintenance for industrial label printers (Zebra, TSC, Godexx, Novexx, Cab). Certified technicians ensure minimal downtime.",
                features: ["Printer Repair", "Electronic Modules", "Industrial PCs"]
            },
            {
                pageNum: 2,
                title: "Support Services",
                content: "Ongoing technical support, troubleshooting, and preventive maintenance for all your industrial equipment.",
                features: ["24/7 Support", "Preventive Maintenance", "Spare Parts Supply"]
            }
        ]
    },
];

const ServicePage = () => {
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [isBookVisible, setIsBookVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [clickAnimation, setClickAnimation] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isTurningPage, setIsTurningPage] = useState(false);
    const [pageDirection, setPageDirection] = useState('next'); // 'next' or 'prev'
    const bookRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const startFade = 200;
            const endFade = 600;

            if (scrollPosition < startFade) {
                setOverlayOpacity(0);
            } else if (scrollPosition > endFade) {
                setOverlayOpacity(1);
            } else {
                const opacity = (scrollPosition - startFade) / (endFade - startFade);
                setOverlayOpacity(opacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        let fakeScroll = 0;

        const handleWheel = (e) => {
            fakeScroll += e.deltaY;
            if (fakeScroll < 0) fakeScroll = 0;
            if (fakeScroll > 800) fakeScroll = 800;

            const startFade = 200;
            const endFade = 600;

            if (fakeScroll < startFade) {
                setOverlayOpacity(0);
            } else if (fakeScroll > endFade) {
                setOverlayOpacity(1);
            } else {
                const opacity = (fakeScroll - startFade) / (endFade - startFade);
                setOverlayOpacity(opacity);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    const playClickAnimation = () => {
        setClickAnimation(true);
        setTimeout(() => {
            setClickAnimation(false);
        }, 300);
    };

    const openBook = (service) => {
        if (isAnimating) return;

        playClickAnimation();

        const clickedElement = document.querySelector(`[data-service-id="${service.id}"]`);
        let clickX = window.innerWidth / 2;
        let clickY = window.innerHeight / 2;

        if (clickedElement) {
            const rect = clickedElement.getBoundingClientRect();
            clickX = rect.left + rect.width / 2;
            clickY = rect.top + rect.height / 2;
        }

        setIsAnimating(true);
        setSelectedService(service);
        setCurrentPage(0); // Reset to first page

        document.documentElement.style.setProperty('--click-x', `${clickX}px`);
        document.documentElement.style.setProperty('--click-y', `${clickY}px`);

        setTimeout(() => {
            setIsBookVisible(true);

            setTimeout(() => {
                setIsAnimating(false);
            }, 1000);
        }, 500);
    };

    const closeBook = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        playClickAnimation();

        setTimeout(() => {
            setIsBookVisible(false);

            setTimeout(() => {
                setSelectedService(null);
                setCurrentPage(0);
                setIsAnimating(false);
            }, 500);
        }, 100);
    };

    const turnPage = (direction) => {
        if (!selectedService || isTurningPage) return;

        setIsTurningPage(true);
        setPageDirection(direction);

        setTimeout(() => {
            if (direction === 'next') {
                setCurrentPage(prev => Math.min(prev + 1, selectedService.pages.length - 1));
            } else {
                setCurrentPage(prev => Math.max(prev - 1, 0));
            }

            setTimeout(() => {
                setIsTurningPage(false);
            }, 500);
        }, 300);
    };

    const canGoNext = selectedService && currentPage < selectedService.pages.length - 1;
    const canGoPrev = currentPage > 0;

    return (
        <div className="srvc-page-wrapper">
            {/* Click Ripple Animation */}
            {clickAnimation && <div className="click-ripple"></div>}

            {/* Main Content */}
            <div className="srvc-main-content">
                <div className="service-page-container">
                    <div className="service-hero-wrapper">
                        <div className="service-hero-section">
                            <div className="service-nav"></div>
                            <div className="service-hero-content">
                                <span className="service-badge">Our Services</span>
                                <h1 className="service-hero-title">What Services We Offer</h1>
                                <h2 className="service-hero-desc">At Cybage Technologies, we transform your technological vision into reality. Our comprehensive suite of IoT-driven solutions and specialized services are designed to optimize operations, enhance efficiency, and drive sustainable growth for businesses across industries.</h2>

                                <div className="scroll-indicator">
                                    <p>Scroll down to explore our services</p>
                                    <div className="scroll-arrow">↓</div>
                                </div>
                            </div>
                        </div>

                        <div className="service-cards-container">
                            <div className="service-card-item">
                                <h3 className="service-card-title">Customized Software Development</h3>
                                <p className="service-card-text">Tailored software solutions—web, mobile, and embedded systems—transforming ideas into scalable, cost-effective digital products.</p>
                            </div>

                            <div className="service-card-item service-card-highlight">
                                <h3 className="service-card-title">Industrial Automation & IoT System</h3>
                                <p className="service-card-text">IoT device integration, sensor networks, and data acquisition to automate workflows and monitor operations across manufacturing and logistics.</p>
                            </div>

                            <div className="service-card-item">
                                <h3 className="service-card-title">Electronic Engineering & IT Support</h3>
                                <p className="service-card-text">End-to-end engineering—from PCB design and fabrication to printer repair and IT infrastructure—keeping industrial systems running reliably.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "800px" }}></div>
            </div>

            {/* Black Overlay with Services */}
            <div
                className="srvc-overlay-scroll"
                style={{
                    opacity: overlayOpacity,
                    pointerEvents: overlayOpacity > 0.3 ? 'auto' : 'none'
                }}
            >
                <div className="srvc-overlay-content">
                    <p className="srvc-overlay-subtitle">Click any service to learn more</p>

                    <div className="srvc-overlay-grid-five">
                        {serviceList.map((service, index) => (
                            <div
                                key={service.id}
                                data-service-id={service.id}
                                className="srvc-overlay-item clickable-card"
                                onClick={() => openBook(service)}
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="srvc-item-icon-wrapper">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="srvc-item-icon-img"
                                    />
                                </div>
                                <div className="srvc-item-title">{service.title}</div>
                                <div className="page-count-badge">
                                    {service.pages.length} {service.pages.length === 1 ? 'page' : 'pages'}
                                </div>
                                <div className="click-indicator">Click to open</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Book Animation Overlay */}
            <div
                className={`book-overlay ${isBookVisible ? 'visible' : ''}`}
                onClick={closeBook}
                ref={bookRef}
            >
                {/* Book Animation Overlay */}
                {/* Book Animation Overlay */}
                {selectedService && (
                    <div
                        className={`book-overlay ${isBookVisible ? "visible" : ""}`}
                        onClick={closeBook}
                    >
                        <div
                            className={`flippable-book-container-wrapper ${isBookVisible ? "visible" : ""}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flippable-book-container">

                                {/* Page Turn Flash */}
                                <div className="flippable-page-turn-effect"></div>

                                {/* LEFT PAGE */}
                                <div
                                    className={`flippable-book-page flippable-book-left 
                    ${isTurningPage ? "turning" : ""} ${pageDirection}`}
                                >
                                    <div className="flippable-book-content-wrapper">
                                        <div className="flippable-page-content">
                                            <div className="flippable-page-header">
                                                <div className="flippable-page-number">
                                                    Page {selectedService.pages[currentPage].pageNum} of{" "}
                                                    {selectedService.pages.length}
                                                </div>
                                                <h2 className="flippable-page-title">
                                                    {selectedService.pages[currentPage].title}
                                                </h2>
                                            </div>

                                            <div className="flippable-page-body">
                                                <p>{selectedService.pages[currentPage].content}</p>

                                                {selectedService.pages[currentPage].features && (
                                                    <div className="flippable-page-features">
                                                        <h4>Key Features:</h4>
                                                        <ul>
                                                            {selectedService.pages[currentPage].features.map((f, i) => (
                                                                <li key={i}>{f}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flippable-page-footer">
                                                <div className="flippable-page-nav">

                                                    {/* PREV */}
                                                    <button
                                                        className={`flippable-page-nav-btn flippable-page-nav-prev ${currentPage === 0 ? "disabled" : ""
                                                            }`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (currentPage > 0) turnPage("prev");
                                                        }}
                                                        disabled={currentPage === 0}
                                                    >
                                                        ← Previous
                                                    </button>

                                                    {/* DOTS */}
                                                    <div className="flippable-page-dots">
                                                        {selectedService.pages.map((_, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`flippable-page-dot ${idx === currentPage ? "active" : ""
                                                                    }`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    if (idx !== currentPage) {
                                                                        const dir = idx > currentPage ? "next" : "prev";
                                                                        setPageDirection(dir);
                                                                        setIsTurningPage(true);
                                                                        setTimeout(() => {
                                                                            setCurrentPage(idx);
                                                                            setTimeout(() => setIsTurningPage(false), 500);
                                                                        }, 300);
                                                                    }
                                                                }}
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* NEXT */}
                                                    <button
                                                        className={`flippable-page-nav-btn ${currentPage === selectedService.pages.length - 1 ? "disabled" : ""
                                                            }`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (currentPage < selectedService.pages.length - 1)
                                                                turnPage("next");
                                                        }}
                                                        disabled={currentPage === selectedService.pages.length - 1}
                                                    >
                                                        Next →
                                                    </button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* CORNER FLIP */}
                                    {currentPage < selectedService.pages.length - 1 && (
                                        <div
                                            className="flippable-page-corner flippable"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                turnPage("next");
                                            }}
                                        >
                                            <div className="flippable-corner-hint">
                                                <span>Next Page</span>
                                                <div className="flippable-corner-arrow">↖</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT PAGE */}
                                <div
                                    className={`flippable-book-page flippable-book-right 
                    ${isTurningPage ? "turning" : ""} ${pageDirection}`}
                                >
                                    <div className="flippable-book-content-wrapper flippable-next-page-preview">
                                        {currentPage < selectedService.pages.length - 1 ? (
                                            <div className="flippable-next-page-content">
                                                <h3>Next: {selectedService.pages[currentPage + 1].title}</h3>
                                                <p>{selectedService.pages[currentPage + 1].content.substring(0, 150)}...</p>
                                                <div className="flippable-next-page-hint">Click corner to turn →</div>
                                            </div>
                                        ) : (
                                            <div className="flippable-book-cover-content">
                                                <img src={selectedService.icon} alt={selectedService.title} />
                                                <h2>{selectedService.title}</h2>
                                                <p>Service Details</p>
                                                <div>Total Pages: {selectedService.pages.length}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flippable-book-spine"></div>
                                <div className="flippable-book-glow"></div>
                            </div>
                        </div>
                    </div>
                )}


                <style jsx>{`
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(10px); }
    }
    .scroll-arrow { animation: bounce 2s infinite; }
`}</style>


            <style jsx>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(10px); }
                }
                .scroll-indicator {
                    text-align: center;
                    padding: 60px 0;
                    color: white;
                }
                .scroll-indicator p {
                    font-size: 18px;
                    margin-bottom: 20px;
                    opacity: 0.8;
                }
                .scroll-arrow {
                    font-size: 30px;
                    animation: bounce 2s infinite;
                }
            `}</style>
        </div>
        </div>
    );
};

export default ServicePage;