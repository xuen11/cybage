import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "/src/App.css";
import { X } from "lucide-react";

const serviceList = [
    {
        id: 1,
        title: "Smart Software Solutions",
        pageId: "software-solutions",
        bannerImage: "/software-banner.jpg",
        pages: [
            {
                pageNum: 1,
                title: "",
                content:
                    "Comprehensive software development services designed to meet diverse business needs. Our solutions range from desktop applications to embedded systems, all built with scalability and performance in mind.",
                features: [
                    "Custom Desktop Development",
                    "Mobile Application Development",
                    "Web Application Development",
                    "Big Data Analytics",
                    "Embedded Software Development"
                ]
            },
            {
                pageNum: 2,
                title: "Customized Software Solutions",
                content:
                    "Tailored software applications that address specific business challenges. We develop robust solutions for Windows, Cloud, and Web platforms with industry-specific functionalities.",
                features: ["Window App", "Cloud App", "Web Application"]
            },
            {
                pageNum: 3,
                title: "Work Flow and Traceability Solutions",
                content:
                    "Tailored software applications that address specific business challenges. We develop robust solutions for Windows, Cloud, and Web platforms with industry-specific functionalities.",
                features: [
                    "Corrective and Preventive Action",
                    "Inventory Manaagement System",
                    "Work in Progress Traceability System",
                    "Barcode Labelling Printing Solutions"
                ]
            },
            {
                pageNum: 4,
                title: "Data Acquisition Control & Solutions",
                content:
                    "Advanced monitoring and control systems that capture real-time data from equipment and environmental sensors, enabling informed decision-making and operational efficiency.",
                features: [
                    "Equipment Monitoring System",
                    "Temperature Monitoring System",
                    "RFID Detection System"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Electronic Device Design / Product Engineering",
        pageId: "electronic-design",
        bannerImage:"/engineering.jpg",
        pages: [
            {
                pageNum: 1,
                title: "",
                content: "From concept to production, we provide comprehensive electronic device design and product engineering services. Our expertise spans PCB design, microcontroller systems, and custom hardware solutions tailored to your specific requirements. We bridge the gap between innovative ideas and market-ready products.",
                features: [
                    "PCB Design, Drawing and Fabrication",
                    "Microcontroller Devices, Analog / Digital Devices",
                    "I/O Controllers",
                    "Engineering & Fabrication works",
                    "Automation Design & Implementation"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Industrial IT Peripheral",
        pageId: "industrial-it",
        pages: [
            {
                pageNum: 1,
                title: "Industrial IT Devices",
                content:
                    "Reliable industrial-grade devices designed for durability, performance, and seamless integration.",
                items: [
                    {
                        name: "Barcode Scanners",
                        image: "/barcodeScanner.jpg",
                        subItems: [
                            {
                                name: "Barcode Scanner",
                                image: "/barcodeScanner.jpg",
                                description: "High-speed barcode scanner for industrial use.",
                                specs: ["Scan speed: 200 scans/sec", "Rugged casing"]
                            }
                        ]
                    },
                    //{
                    //    name: "Industrial Workstations",
                    //    subItems: [
                    //        {
                    //            name: "Workstation Type A",
                    //            image: "/img/industrial/workstationA.jpg",
                    //            description: "Heavy-duty workstation with fanless design.",
                    //            specs: ["Fanless design", "Wide temp range", "IP65 options"]
                    //        },
                    //        {
                    //            name: "Workstation Type B",
                    //            image: "/img/industrial/workstationB.jpg",
                    //            description:
                    //                "High-performance workstation for industrial use.",
                    //            specs: ["Powerful CPU", "Rugged metal casing"]
                    //        }
                    //    ]
                    //},
                    {
                        name: "Network Switch & ETC",
                        image: "/huns.jpg",
                        subItems: [
                            {
                                name: "Huns & Switch",
                                image: "/huns.jpg",
                                description:
                                    "High-performance workstation for industrial use.",
                                specs: ["Powerful CPU", "Rugged metal casing"]
                               
                            },
                            {
                                name: "KUM Switch Products",
                                image: "/kum.jpg",
                                description:
                                    "High-performance workstation for industrial use.",
                                specs: ["Powerful CPU", "Rugged metal casing"]
                               
                            },
                            {
                                name: "Routers",
                                image: "/router.jpg",
                                description:
                                    "High-performance workstation for industrial use.",
                                specs: ["Powerful CPU", "Rugged metal casing"]
                            }

                        ]
                    },
                    {
                        name: "Industrial Barcode Printer",
                        image: "/barcode-printer.jpg",
                        subItems: [
                            {
                                name: "Barcode Printer",
                                image: "/barcode-printer.jpg"
                            },
                            {
                                name: "Ribbons",
                                image: "/ribbon.jpg"
                            },
                            {
                                name: "Labels",
                                image: "/label.jpg"
                            }

                        ]
                    },
                    {
                        name: "Software ",
                        image: "/computer-software.jpg",
                        subItems: [
                            { 
                                name: "Software (Win7 , Win 10, Adobe, Antivirus, etc)",
                                image:"/computer-software.jpg"
                            }
                        ]
                    },
                    {
                        name: "Storage",
                        image: "/NAS.jpg",
                        subItems: [
                            {
                                name: "Network Access Storage (NAS)",
                                image: "/NAS.jpg"
                            },
                            {
                                name: "Harddisk",
                                image: "/harddisk.jpg"
                            },
                            {
                                name: "SSD",
                                image:"/ssd.jpg"
                            }
                        ]
                    },
                    {
                        name: "Customized I/O Terminals",
                        image: "/pt2.jpeg",
                        subItems: [
                            {
                                name: "PT2",
                                image:"/pt2.jpeg"
                            },
                            {
                                name: "Latte ( Tablet - Windows |  Linux )",
                                image: "/latte.jpg"
                            },
                            {
                                name: "Raspberry Pi (Tablet - Windows | Linux)",
                                image: "/raspberrypi.png"
                            }
                        ]
                    },
                    {
                        name: "Industrial Computer/ PC/ Tablet",
                        image: "/industrial-pc.jpg",
                        subItems: [
                            {
                                name: "Industrial PC",
                                image:"/industrial-pc.jpg"
                            },
                            {
                                name: "Embedded PC",
                                image: "/embedded-pc.jpg"
                            },
                            {
                                name: "Table",
                                image: "/tablet.jpg"
                            }
                        ]
                    },
                    {
                        name: "UPS and Backups",
                        image: "/battery-backup.jpg",
                        subItems: [
                            {
                                name: "Battery Backup",
                                image: "/battery-backup.jpg"
                            },
                            {
                                name: "Battery Ups",
                                image: "/battery-ups.jpg"
                            }
                          
                        ]
                    },
                    {
                        name: " Cloud Hosting Reseller",
                        image: "/cloudHosting.png",
                        
                        
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        title: "IT Technology Consultation & Training",
        pageId: "it-consultation",
        pages: [
            {
                pageNum: 1,
                title: "Strategy & Planning",
                content:
                    "Align IT with business goals through digital transformation roadmaps and technology risk management.",
                features: [
                    "IT Strategy",
                    "Digital Transformation",
                    "Cloud Adoption",
                    "Technology risk management"
                ]
            },
            {
                pageNum: 2,
                title: "Infrastructure Design and Optimization",
                content: "Design or improve the backbone of the IT environment.",
                features: [
                    "Network architecture design",
                    "Server and storage optimization",
                    "Cloud infrastructure Setup",
                    "Hybrid IT Environments"
                ]
            },
            {
                pageNum: 3,
                title: "Software & Application Advisory",
                content: "Choose or develop the right software for operations.",
                features: [
                    "Software selection",
                    "Custom software development planning",
                    "Integration strategy",
                    "Application modernization"
                ]
            },
            {
                pageNum: 4,
                title: "IT Project Management & Implementation Support",
                content: "Guide technology projects from planning to execution.",
                features: [
                    "PMO setup",
                    "Agile/Scrum project leadership",
                    "Risk and change management",
                    "Vendor management"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Maintenance & Support",
        image:"/maintenance1.jpg",
        pageId: "maintenance-support",
        pages: [
            {
                pageNum: 1,
                title: "Hardware Maintenance",
                content:
                    "Expert repair and maintenance for industrial label printers (Zebra, TSC, Godexx, Novexx, Cab). Certified technicians ensure minimal downtime.",
                features: [
                    "Industrial Barcode Printers Service & Repairs (Novexx, Zebra, Godexx, TSC, Cab)",
                    "Troubleshooting and repair of electronic modules & system",
                    "Supply and custom configuration of electrical, electronic, and pneumatic components",
                    "Solar Inverter Terminals",
                    "Electrical project maintenance",
                    "Industrial PC repair and maintenance"
                ]
            },
            {
                pageNum: 2,
                title: "Support Services",
                content:
                    "Ongoing technical support, troubleshooting, and preventive maintenance for all your industrial equipment.",
                features: ["24/7 Support", "Preventive Maintenance"]
            }
        ]
    }
];

const ServicePage = () => {
    const [searchParams] = useSearchParams();
    const serviceParam = searchParams.get("service");

    const navigate = useNavigate();

    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalScrolling, setIsModalScrolling] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const [isFromHomepage, setIsFromHomepage] = useState(false);
    const [fakeScroll, setFakeScroll] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // Auto open when navigating from homepage
    useEffect(() => {
        if (serviceParam && !hasAutoOpened) {
            const foundService = serviceList.find(
                (service) =>
                    service.id.toString() === serviceParam ||
                    service.pageId === serviceParam
            );

            if (foundService) {
                setIsFromHomepage(true);
                setOverlayOpacity(1);
                setFakeScroll(800);

                setTimeout(() => {
                    setSelectedService(foundService);
                    setIsModalVisible(true);
                    setHasAutoOpened(true);
                }, 300);
            }
        }
    }, [serviceParam, hasAutoOpened]);

    // Disable scroll behind page
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Black overlay scrolling logic
    useEffect(() => {
        const handleWheel = (e) => {
            if (isModalScrolling) return;

            const newFakeScroll = Math.max(
                0,
                Math.min(800, fakeScroll + e.deltaY)
            );
            setFakeScroll(newFakeScroll);

            const startFade = 200;
            const endFade = 600;

            if (newFakeScroll < startFade) setOverlayOpacity(0);
            else if (newFakeScroll > endFade) setOverlayOpacity(1);
            else
                setOverlayOpacity(
                    (newFakeScroll - startFade) / (endFade - startFade)
                );
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [fakeScroll, isModalScrolling]);

    // Open service modal
    const openModal = (service) => {
        setSelectedService(service);
        setTimeout(() => setIsModalVisible(true), 100);
    };

    // Close modal
    const closeModal = () => {
        setIsModalVisible(false);

        setTimeout(() => {
            setSelectedService(null);
            setSelectedCategory(null);
            setSelectedItem(null);
            setIsModalScrolling(false);

            if (isFromHomepage) {
                setOverlayOpacity(1);
                setFakeScroll(800);
                setIsFromHomepage(false);
            }
        }, 300);
    };

    // Detect scroll of modal content
    const handleModalWheel = () => {
        setIsModalScrolling(true);

        clearTimeout(window.modalScrollTimeout);
        window.modalScrollTimeout = setTimeout(
            () => setIsModalScrolling(false),
            100
        );
    };

    return (
        <div className="srvc-page-wrapper">
            {/* HERO SECTION */}
            <div className="srvc-main-content">
                <div className="service-page-container">
                    <div className="service-hero-wrapper">
                        <div className="service-hero-section">
                            <div className="service-hero-content">
                                <span className="service-badge">Our Services</span>

                                <h1 className="service-hero-title">
                                    What Services We Offer
                                </h1>

                                <h2 className="service-hero-desc">
                                    At Cybage Technologies, we transform your technological
                                    vision into reality. Our comprehensive suite of IoT-driven
                                    solutions and specialized services are designed to optimize
                                    operations, enhance efficiency, and drive sustainable growth.
                                </h2>

                                <div className="scroll-indicator">
                                    <p>Scroll down to explore our services</p>
                                    <div className="scroll-arrow">↓</div>
                                </div>
                            </div>
                        </div>

                        {/* SERVICE CARDS */}
                        <div className="service-cards-container">
                            <div className="service-card-item">
                                <h3 className="service-card-title">
                                    Customized Software Development
                                </h3>

                                <p className="service-card-text">
                                    Tailored software solutions—web, mobile, and embedded
                                    systems—transforming ideas into scalable, cost-effective
                                    digital products.
                                </p>
                            </div>

                            <div className="service-card-item service-card-highlight">
                                <h3 className="service-card-title">
                                    Industrial Automation & IoT System
                                </h3>

                                <p className="service-card-text">
                                    IoT device integration, sensor networks, and data
                                    acquisition to automate workflows and monitor operations.
                                </p>
                            </div>

                            <div className="service-card-item">
                                <h3 className="service-card-title">
                                    Electronic Engineering & IT Support
                                </h3>

                                <p className="service-card-text">
                                    End-to-end engineering—from PCB design and fabrication
                                    to printer repair and IT infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLACK OVERLAY WITH SERVICE LIST */}
            <div
                className="srvc-overlay-scroll"
                style={{
                    opacity: overlayOpacity,
                    pointerEvents: overlayOpacity > 0.3 ? "auto" : "none",
                    transform: `translateY(${Math.min(0, 800 - fakeScroll)}px)`
                }}
            >
                <div className="srvc-overlay-content">
                    <p className="srvc-overlay-subtitle">
                        Click any service to learn more
                    </p>

                    <div className="srvc-overlay-grid-five">
                        {serviceList.map((service, index) => (
                            <div
                                key={service.id}
                                className="srvc-overlay-item clickable-card"
                                onClick={() => openModal(service)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="srvc-item-title">{service.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SERVICE MODAL */}
            {selectedService && (
                <div
                    className={`simple-unstyled-modal-overlay ${isModalVisible ? "visible" : ""
                        }`}
                    onClick={closeModal}
                    onWheel={handleModalWheel}
                >
                    <div
                        className="simple-unstyled-modal"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <button
                            className="simple-unstyled-close-btn"
                            onClick={closeModal}
                        >
                            <X size={24} />
                        </button>

                        <h2 className="simple-unstyled-service-title">
                            {selectedService.title}
                        </h2>

                        <div className="simple-unstyled-content">
                            {/* NORMAL PAGE CONTENT */}
                            {selectedService.pages.map((page, index) => (
                                <div key={page.pageNum} className="simple-unstyled-page">
                                    <h3>{page.title}</h3>
                                    <p>{page.content}</p>

                                    {page.features && page.features.length > 0 && (
                                        <ul className="features-list">
                                            {page.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    )}


                                    {page.items &&
                                        !selectedCategory &&
                                        !selectedItem && (
                                        <div className="svcfs-item-row">
                                            {page.items.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="svcfs-item-card"
                                                    onClick={() =>
                                                        item.subItems
                                                            ? setSelectedCategory(item)
                                                            : setSelectedItem(item)
                                                    }
                                                >
                                                    {item.image && (
                                                        <img src={item.image} alt={item.name} className="svcfs-item-img" />
                                                    )}
                                                    <h4>{item.name}</h4>
                                                </div>
                                            ))}
                                        </div>

                                        )}

                                    {index < selectedService.pages.length - 1 && <hr />}
                                </div>
                            ))}

                            {/* CATEGORY MODAL */}
                            {selectedCategory && !selectedItem && (
                                <div
                                    className="svcfs-item-overlay"
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    <div
                                        className="svcfs-item-modal"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="svcfs-item-close"
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            <X size={24} />
                                        </button>

                                        <h2>{selectedCategory.name}</h2>

                                        <div className="svcfs-subitem-grid">
                                            {selectedCategory.subItems.map(
                                                (subItem, index) => (
                                                    <div
                                                        key={index}
                                                        className="svcfs-subitem-card"
                                                        
                                                    >
                                                        <img
                                                            src={subItem.image}
                                                            className="svcfs-subitem-img"
                                                        />

                                                        <h3>{subItem.name}</h3>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                           
                            {selectedItem && (
                                <div
                                    className="svcfs-item-overlay"
                                    onClick={() => setSelectedItem(null)}
                                >
                                    <div
                                        className="svcfs-item-modal"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="svcfs-item-close"
                                            onClick={() => setSelectedItem(null)}
                                        >
                                            <X size={24} />
                                        </button>

                                        <div className="svcfs-item-content">
                                            <img
                                                src={selectedItem.image}
                                                className="svcfs-item-img"
                                            />

                                            <h2>{selectedItem.name}</h2>

                                            <p>{selectedItem.description}</p>

                                            <ul className="svcfs-spec-list">
                                                {selectedItem.specs.map((s, i) => (
                                                    <li key={i}>{s}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicePage;
