//import React, { useState, useEffect } from "react";
//import { useSearchParams, useNavigate } from "react-router-dom";
//import "/src/App.css";
//import { X } from "lucide-react";

//const serviceList = [
//    {
//        id: 1,
//        title: "Smart Software Solutions",
//        pageId: "software-solutions",
//        bannerImage: "/software-banner.jpg",
//        pages: [
//            {
//                pageNum: 1,
//                title: "",
//                content:
//                    "Comprehensive software development services designed to meet diverse business needs. Our solutions range from desktop applications to embedded systems, all built with scalability and performance in mind.",
//                features: [
//                    "Custom Desktop Development",
//                    "Mobile Application Development",
//                    "Web Application Development",
//                    "Big Data Analytics",
//                    "Embedded Software Development"
//                ]
//            },
//            {
//                pageNum: 2,
//                title: "Customized Software Solutions",
//                content:
//                    "Tailored software applications that address specific business challenges. We develop robust solutions for Windows, Cloud, and Web platforms with industry-specific functionalities.",
//                features: ["Window App", "Cloud App", "Web Application"]
//            },
//            {
//                pageNum: 3,
//                title: "Work Flow and Traceability Solutions",
//                content:
//                    "Tailored software applications that address specific business challenges. We develop robust solutions for Windows, Cloud, and Web platforms with industry-specific functionalities.",
//                features: [
//                    "Corrective and Preventive Action",
//                    "Inventory Manaagement System",
//                    "Work in Progress Traceability System",
//                    "Barcode Labelling Printing Solutions"
//                ]
//            },
//            {
//                pageNum: 4,
//                title: "Data Acquisition Control & Solutions",
//                content:
//                    "Advanced monitoring and control systems that capture real-time data from equipment and environmental sensors, enabling informed decision-making and operational efficiency.",
//                features: [
//                    "Equipment Monitoring System",
//                    "Temperature Monitoring System",
//                    "RFID Detection System"
//                ]
//            }
//        ]
//    },
//    {
//        id: 2,
//        title: "Electronic Device Design / Product Engineering",
//        pageId: "electronic-design",
//        bannerImage:"/engineering.jpg",
//        pages: [
//            {
//                pageNum: 1,
//                title: "",
//                content: "From concept to production, we provide comprehensive electronic device design and product engineering services. Our expertise spans PCB design, microcontroller systems, and custom hardware solutions tailored to your specific requirements. We bridge the gap between innovative ideas and market-ready products.",
//                features: [
//                    "PCB Design, Drawing and Fabrication",
//                    "Microcontroller Devices, Analog / Digital Devices",
//                    "I/O Controllers",
//                    "Engineering & Fabrication works",
//                    "Automation Design & Implementation"
//                ]
//            }
//        ]
//    },
//    {
//        id: 3,
//        title: "Industrial IT Peripheral",
//        pageId: "industrial-it",
//        pages: [
//            {
//                pageNum: 1,
//                title: "Industrial IT Devices",
//                content:
//                    "Reliable industrial-grade devices designed for durability, performance, and seamless integration.",
//                items: [
//                    {
//                        name: "Barcode Scanners",
//                        image: "/barcodeScanner.jpg",
//                        subItems: [
//                            {
//                                name: "Barcode Scanner",
//                                image: "/barcodeScanner.jpg",
//                                description: "High-speed barcode scanner for industrial use.",
//                                specs: ["Scan speed: 200 scans/sec", "Rugged casing"]
//                            }
//                        ]
//                    },
//                    {
//                        name: "Network Switch & ETC",
//                        image: "/huns.jpg",
//                        subItems: [
//                            {
//                                name: "Huns & Switch",
//                                image: "/huns.jpg",
//                                description:
//                                    "High-performance workstation for industrial use.",
//                                specs: ["Powerful CPU", "Rugged metal casing"]

//                            },
//                            {
//                                name: "KUM Switch Products",
//                                image: "/kum.jpg",
//                                description:
//                                    "High-performance workstation for industrial use.",
//                                specs: ["Powerful CPU", "Rugged metal casing"]

//                            },
//                            {
//                                name: "Routers",
//                                image: "/router.jpg",
//                                description:
//                                    "High-performance workstation for industrial use.",
//                                specs: ["Powerful CPU", "Rugged metal casing"]
//                            }

//                        ]
//                    },
//                    {
//                        name: "Industrial Barcode Printer",
//                        image: "/barcode-printer.jpg",
//                        subItems: [
//                            {
//                                name: "Barcode Printer",
//                                image: "/barcode-printer.jpg"
//                            },
//                            {
//                                name: "Ribbons",
//                                image: "/ribbon.jpg"
//                            },
//                            {
//                                name: "Labels",
//                                image: "/label.jpg"
//                            }

//                        ]
//                    },
//                    {
//                        name: "Software ",
//                        image: "/computer-software.jpg",
//                        subItems: [
//                            {
//                                name: "Software (Win7 , Win 10, Adobe, Antivirus, etc)",
//                                image:"/computer-software.jpg"
//                            }
//                        ]
//                    },
//                    {
//                        name: "Storage",
//                        image: "/NAS.jpg",
//                        subItems: [
//                            {
//                                name: "Network Access Storage (NAS)",
//                                image: "/NAS.jpg"
//                            },
//                            {
//                                name: "Harddisk",
//                                image: "/harddisk.jpg"
//                            },
//                            {
//                                name: "SSD",
//                                image:"/ssd.jpg"
//                            }
//                        ]
//                    },
//                    {
//                        name: "Customized I/O Terminals",
//                        image: "/pt2.jpeg",
//                        subItems: [
//                            {
//                                name: "PT2",
//                                image:"/pt2.jpeg"
//                            },
//                            {
//                                name: "Latte ( Tablet - Windows |  Linux )",
//                                image: "/latte.jpg"
//                            },
//                            {
//                                name: "Raspberry Pi (Tablet - Windows | Linux)",
//                                image: "/raspberrypi.png"
//                            }
//                        ]
//                    },
//                    {
//                        name: "Industrial Computer/ PC/ Tablet",
//                        image: "/industrial-pc.jpg",
//                        subItems: [
//                            {
//                                name: "Industrial PC",
//                                image:"/industrial-pc.jpg"
//                            },
//                            {
//                                name: "Embedded PC",
//                                image: "/embedded-pc.jpg"
//                            },
//                            {
//                                name: "Table",
//                                image: "/tablet.jpg"
//                            }
//                        ]
//                    },
//                    {
//                        name: "UPS and Backups",
//                        image: "/battery-backup.jpg",
//                        subItems: [
//                            {
//                                name: "Battery Backup",
//                                image: "/battery-backup.jpg"
//                            },
//                            {
//                                name: "Battery Ups",
//                                image: "/battery-ups.jpg"
//                            }

//                        ]
//                    },
//                    {
//                        name: " Cloud Hosting Reseller",
//                        image: "/cloudHosting.png",


//                    },
//                ]
//            }
//        ]
//    },
//    {
//        id: 4,
//        title: "IT Technology Consultation & Training",
//        pageId: "it-consultation",
//        pages: [
//            {
//                pageNum: 1,
//                title: "Strategy & Planning",
//                content:
//                    "Align IT with business goals through digital transformation roadmaps and technology risk management.",
//                features: [
//                    "IT Strategy",
//                    "Digital Transformation",
//                    "Cloud Adoption",
//                    "Technology risk management"
//                ]
//            },
//            {
//                pageNum: 2,
//                title: "Infrastructure Design and Optimization",
//                content: "Design or improve the backbone of the IT environment.",
//                features: [
//                    "Network architecture design",
//                    "Server and storage optimization",
//                    "Cloud infrastructure Setup",
//                    "Hybrid IT Environments"
//                ]
//            },
//            {
//                pageNum: 3,
//                title: "Software & Application Advisory",
//                content: "Choose or develop the right software for operations.",
//                features: [
//                    "Software selection",
//                    "Custom software development planning",
//                    "Integration strategy",
//                    "Application modernization"
//                ]
//            },
//            {
//                pageNum: 4,
//                title: "IT Project Management & Implementation Support",
//                content: "Guide technology projects from planning to execution.",
//                features: [
//                    "PMO setup",
//                    "Agile/Scrum project leadership",
//                    "Risk and change management",
//                    "Vendor management"
//                ]
//            }
//        ]
//    },
//    {
//        id: 5,
//        title: "Maintenance & Support",
//        image:"/maintenance1.jpg",
//        pageId: "maintenance-support",
//        pages: [
//            {
//                pageNum: 1,
//                title: "Hardware Maintenance",
//                content:
//                    "Expert repair and maintenance for industrial label printers (Zebra, TSC, Godexx, Novexx, Cab). Certified technicians ensure minimal downtime.",
//                features: [
//                    "Industrial Barcode Printers Service & Repairs (Novexx, Zebra, Godexx, TSC, Cab)",
//                    "Troubleshooting and repair of electronic modules & system",
//                    "Supply and custom configuration of electrical, electronic, and pneumatic components",
//                    "Solar Inverter Terminals Repair",
//                    "Electrical project maintenance",
//                    "Industrial PC repair and maintenance"
//                ]
//            },
//            {
//                pageNum: 2,
//                title: "Support Services",
//                content:
//                    "Ongoing technical support, troubleshooting, and preventive maintenance for all your industrial equipment.",
//                features: ["24/7 Support", "Preventive Maintenance"]
//            }
//        ]
//    }
//];

//const ServicePage = () => {
//    const [searchParams] = useSearchParams();
//    const serviceParam = searchParams.get("service");

//    const navigate = useNavigate();

//    const [overlayOpacity, setOverlayOpacity] = useState(0);
//    const [selectedService, setSelectedService] = useState(null);
//    const [isModalVisible, setIsModalVisible] = useState(false);
//    const [isModalScrolling, setIsModalScrolling] = useState(false);
//    const [hasAutoOpened, setHasAutoOpened] = useState(false);
//    const [isFromHomepage, setIsFromHomepage] = useState(false);
//    const [fakeScroll, setFakeScroll] = useState(0);
//    const [selectedCategory, setSelectedCategory] = useState(null);
//    const [selectedItem, setSelectedItem] = useState(null);

//    useEffect(() => {
//        if (serviceParam && !hasAutoOpened) {
//            const foundService = serviceList.find(
//                (service) =>
//                    service.id.toString() === serviceParam ||
//                    service.pageId === serviceParam
//            );

//            if (foundService) {
//                setIsFromHomepage(true);
//                setOverlayOpacity(1);
//                setFakeScroll(800);

//                setTimeout(() => {
//                    setSelectedService(foundService);
//                    setIsModalVisible(true);
//                    setHasAutoOpened(true);
//                }, 300);
//            }
//        }
//    }, [serviceParam, hasAutoOpened]);

//    // Disable scroll behind page
//    useEffect(() => {
//        document.body.style.overflow = "hidden";
//        return () => {
//            document.body.style.overflow = "auto";
//        };
//    }, []);

//    // Black overlay scrolling logic
//    useEffect(() => {
//        const handleWheel = (e) => {
//            if (isModalScrolling) return;

//            const newFakeScroll = Math.max(
//                0,
//                Math.min(800, fakeScroll + e.deltaY)
//            );
//            setFakeScroll(newFakeScroll);

//            const startFade = 200;
//            const endFade = 600;

//            if (newFakeScroll < startFade) setOverlayOpacity(0);
//            else if (newFakeScroll > endFade) setOverlayOpacity(1);
//            else
//                setOverlayOpacity(
//                    (newFakeScroll - startFade) / (endFade - startFade)
//                );
//        };

//        window.addEventListener("wheel", handleWheel, { passive: false });
//        return () => window.removeEventListener("wheel", handleWheel);
//    }, [fakeScroll, isModalScrolling]);

//    // Open service modal
//    const openModal = (service) => {
//        setSelectedService(service);
//        setTimeout(() => setIsModalVisible(true), 100);
//    };

//    // Close modal
//    const closeModal = () => {
//        setIsModalVisible(false);

//        setTimeout(() => {
//            setSelectedService(null);
//            setSelectedCategory(null);
//            setSelectedItem(null);
//            setIsModalScrolling(false);

//            if (isFromHomepage) {
//                setOverlayOpacity(1);
//                setFakeScroll(800);
//                setIsFromHomepage(false);
//            }
//        }, 300);
//    };

//    // Detect scroll of modal content
//    const handleModalWheel = () => {
//        setIsModalScrolling(true);

//        clearTimeout(window.modalScrollTimeout);
//        window.modalScrollTimeout = setTimeout(
//            () => setIsModalScrolling(false),
//            100
//        );
//    };

//    return (
//        <div className="srvc-page-wrapper">
//            {/* HERO SECTION */}
//            <div className="srvc-main-content">
//                <div className="service-page-container">
//                    <div className="service-hero-wrapper">
//                        <div className="service-hero-section">
//                            <div className="service-hero-content">
//                                <span className="service-badge">Our Services</span>

//                                <h1 className="service-hero-title">
//                                    What Services We Offer
//                                </h1>

//                                <h2 className="service-hero-desc">
//                                    At Cybage Technologies, we transform your technological
//                                    vision into reality. Our comprehensive suite of IoT-driven
//                                    solutions and specialized services are designed to optimize
//                                    operations, enhance efficiency, and drive sustainable growth.
//                                </h2>

//                                <div className="scroll-indicator">
//                                    <p>Scroll down to explore our services</p>
//                                    <div className="scroll-arrow">↓</div>
//                                </div>
//                            </div>
//                        </div>

//                        {/* SERVICE CARDS */}
//                        <div className="service-cards-container">
//                            <div className="service-card-item">
//                                <h3 className="service-card-title">
//                                    Customized Software Development
//                                </h3>

//                                <p className="service-card-text">
//                                    Tailored software solutions—web, mobile, and embedded
//                                    systems—transforming ideas into scalable, cost-effective
//                                    digital products.
//                                </p>
//                            </div>

//                            <div className="service-card-item service-card-highlight">
//                                <h3 className="service-card-title">
//                                    Industrial Automation & IoT System
//                                </h3>

//                                <p className="service-card-text">
//                                    IoT device integration, sensor networks, and data
//                                    acquisition to automate workflows and monitor operations.
//                                </p>
//                            </div>

//                            <div className="service-card-item">
//                                <h3 className="service-card-title">
//                                    Electronic Engineering & IT Support
//                                </h3>

//                                <p className="service-card-text">
//                                    End-to-end engineering—from PCB design and fabrication
//                                    to printer repair and IT infrastructure.
//                                </p>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>

//            {/* BLACK OVERLAY WITH SERVICE LIST */}
//            <div
//                className="srvc-overlay-scroll"
//                style={{
//                    opacity: overlayOpacity,
//                    pointerEvents: overlayOpacity > 0.3 ? "auto" : "none",
//                    transform: `translateY(${Math.min(0, 800 - fakeScroll)}px)`
//                }}
//            >
//                <div className="srvc-overlay-content">
//                    <p className="srvc-overlay-subtitle">
//                        Click any service to learn more
//                    </p>

//                    <div className="srvc-overlay-grid-five">
//                        {serviceList.map((service, index) => (
//                            <div
//                                key={service.id}
//                                className="srvc-overlay-item clickable-card"
//                                onClick={() => openModal(service)}
//                                style={{ animationDelay: `${index * 0.1}s` }}
//                            >
//                                <div className="srvc-item-title">{service.title}</div>
//                            </div>
//                        ))}
//                    </div>
//                </div>
//            </div>

//            {/* SERVICE MODAL */}
//            {selectedService && (
//                <div
//                    className={`simple-unstyled-modal-overlay ${isModalVisible ? "visible" : ""
//                        }`}
//                    onClick={closeModal}
//                    onWheel={handleModalWheel}
//                >
//                    <div
//                        className="simple-unstyled-modal"
//                        onClick={(e) => e.stopPropagation()}
//                        onWheel={(e) => e.stopPropagation()}
//                    >
//                        <button
//                            className="simple-unstyled-close-btn"
//                            onClick={closeModal}
//                        >
//                            <X size={24} />
//                        </button>

//                        <h2 className="simple-unstyled-service-title">
//                            {selectedService.title}
//                        </h2>

//                        <div className="simple-unstyled-content">
//                            {/* NORMAL PAGE CONTENT */}
//                            {selectedService.pages.map((page, index) => (
//                                <div key={page.pageNum} className="simple-unstyled-page">
//                                    <h3>{page.title}</h3>
//                                    <p>{page.content}</p>

//                                    {page.features && page.features.length > 0 && (
//                                        <ul className="features-list">
//                                            {page.features.map((feature, idx) => (
//                                                <li key={idx}>{feature}</li>
//                                            ))}
//                                        </ul>
//                                    )}


//                                    {page.items &&
//                                        !selectedCategory &&
//                                        !selectedItem && (
//                                        <div className="svcfs-item-row">
//                                            {page.items.map((item, i) => (
//                                                <div
//                                                    key={i}
//                                                    className="svcfs-item-card"
//                                                    onClick={() =>
//                                                        item.subItems
//                                                            ? setSelectedCategory(item)
//                                                            : setSelectedItem(item)
//                                                    }
//                                                >
//                                                    {item.image && (
//                                                        <img src={item.image} alt={item.name} className="svcfs-item-img" />
//                                                    )}
//                                                    <h4>{item.name}</h4>
//                                                </div>
//                                            ))}
//                                        </div>

//                                        )}

//                                    {index < selectedService.pages.length - 1 && <hr />}
//                                </div>
//                            ))}

//                            {/* CATEGORY MODAL */}
//                            {selectedCategory && !selectedItem && (
//                                <div
//                                    className="svcfs-item-overlay"
//                                    onClick={() => setSelectedCategory(null)}
//                                >
//                                    <div
//                                        className="svcfs-item-modal"
//                                        onClick={(e) => e.stopPropagation()}
//                                    >
//                                        <button
//                                            className="svcfs-item-close"
//                                            onClick={() => setSelectedCategory(null)}
//                                        >
//                                            <X size={24} />
//                                        </button>

//                                        <h2>{selectedCategory.name}</h2>

//                                        <div className="svcfs-subitem-grid">
//                                            {selectedCategory.subItems.map(
//                                                (subItem, index) => (
//                                                    <div
//                                                        key={index}
//                                                        className="svcfs-subitem-card"

//                                                    >
//                                                        <img
//                                                            src={subItem.image}
//                                                            className="svcfs-subitem-img"
//                                                        />

//                                                        <h3>{subItem.name}</h3>
//                                                    </div>
//                                                )
//                                            )}
//                                        </div>
//                                    </div>
//                                </div>
//                            )}


//                            {selectedItem && (
//                                <div
//                                    className="svcfs-item-overlay"
//                                    onClick={() => setSelectedItem(null)}
//                                >
//                                    <div
//                                        className="svcfs-item-modal"
//                                        onClick={(e) => e.stopPropagation()}
//                                    >
//                                        <button
//                                            className="svcfs-item-close"
//                                            onClick={() => setSelectedItem(null)}
//                                        >
//                                            <X size={24} />
//                                        </button>

//                                        <div className="svcfs-item-content">
//                                            <img
//                                                src={selectedItem.image}
//                                                className="svcfs-item-img"
//                                            />

//                                            <h2>{selectedItem.name}</h2>

//                                            <p>{selectedItem.description}</p>

//                                            <ul className="svcfs-spec-list">
//                                                {selectedItem.specs.map((s, i) => (
//                                                    <li key={i}>{s}</li>
//                                                ))}
//                                            </ul>
//                                        </div>
//                                    </div>
//                                </div>
//                            )}
//                        </div>
//                    </div>
//                </div>
//            )}
//        </div>
//    );
//};

//export default ServicePage;


import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

const partnersRow1 = [
    { id: 1, name: "Kiddoo Soft", image: "/kiddoo-soft.png" },
    { id: 2, name: "CAB", image: "/cab.png" },
    { id: 3, name: "Jowin Technology", image: "/jowin.png" },
    { id: 4, name: "Vistrian", image: "/vistrian.png" },
    { id: 5, name: "Radiant Global", image: "/radiant.png" },
    { id: 6, name: "Novexx Solutions", image: "/novexx.png" },
    { id: 7, name: "Innovare", image: "/innovare.png" },
    { id: 8, name: "Info-Tech", image: "/infotech.png" },
    { id: 9, name: "Emdoor", image: "/emdoor.png" },
    { id: 10, name: "Advantech", image: "/advantech.png" },
    { id: 11, name: "Xyreon", image: "/xyreon.png" },
    { id: 12, name: "Yeahhost", image: "/yeahhost.png" },
    { id: 13, name: "ER Gemtrack", image: "/erGemtrack.png" },
    { id: 14, name: "Walcomtech", image: "/walcomtech.png" },
];


const serviceList = [
    {
        id: 1,
        title: "Smart Software Solutions",
        pageId: "software-solutions",
        bannerImage: "/solution.jpg",
        pages: [{ pageNum: 1, content: "Comprehensive software development services.", features: ["Custom Desktop", "Mobile App", "Web App"] }]
    },
    {
        id: 2,
        title: "Electronic Device Design",
        pageId: "electronic-design",
        bannerImage: "/engineering.jpg",
        pages: [{ pageNum: 1, content: "PCB design and product engineering.", features: ["PCB Design", "Microcontrollers", "Automation"] }]
    },
    {
        id: 3,
        title: "Industrial IT Peripherals",
        pageId: "industrial-it",
        bannerImage: "/peripheral.jpg",
        pages: [{ pageNum: 1, content: "Reliable industrial-grade devices.", features: ["Scanners", "Switches", "Industrial PC"] }]
    },
    {
        id: 4,
        title: "IT Technology Consultation & Training",
        pageId: "it-consultation",
        bannerImage: "/consult.jpg",
        pages: [{ pageNum: 1, content: "Digital transformation roadmaps.", features: ["IT Strategy", "Cloud Adoption"] }]
    },
    {
        id: 5,
        title: "Maintenance & Support",
        pageId: "maintenance-support",
        bannerImage: "/maintenance1.jpg",
        pages: [{ pageNum: 1, content: "Expert repair and maintenance.", features: ["Printer Repairs", "24/7 Support"] }]
    }
];

export default function ServicePage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); // Initialize navigate hook

 
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (service) => {
        // We pass the title and bannerImage to the next page via state
        const navigationConfig = {
            state: {
                bannerImage: service.bannerImage,
                title: service.title
            }
        };

        if (service.pageId === "software-solutions") {
            navigate("/softwareSolution", navigationConfig);
        }
        else if (service.pageId === "industrial-it") {
            navigate("/industrial-it", navigationConfig);
        }
        else if (service.pageId === "electronic-design") {
            navigate("/electronic", navigationConfig);
        }
        else if (service.pageId === "it-consultation") {
            navigate("/consult", navigationConfig);
        }
        else if (service.pageId === "maintenance-support") {
            navigate("/maintenance", navigationConfig);
        }
        else {
            setSelectedService(service);
        }
    };
    // Main Banner Image Link
    const mainBannerUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475";

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            const found = serviceList.find(s => s.pageId === serviceParam || s.id.toString() === serviceParam);
            if (found) setSelectedService(found);
        }
    }, [searchParams]);

    return (
        <div className="srv-page-wrapper">
            <style>{`
                .srv-page-wrapper { 
                    background: #ffffff; 
                    padding-bottom: 100px;
                    font-family: 'Inter', sans-serif;
                    margin: 0;
                }

                /* HERO BANNER */
                .services-hero-banner {
                    width: 100%;
                    height: 350px; 
                    background-image: url('${mainBannerUrl}');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 60px;
                }

                .services-hero-banner::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 61, 46, 0.6); /* Tinted dark green overlay */
                }

                .services-hero-banner h1 {
                    position: relative;
                    z-index: 2;
                    color: #ffffff;
                    font-size: 52px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin: 0;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }

                /* CENTERED CONTAINER */
                .catalog-container {
                    max-width: 1100px; 
                    margin: 0 auto;    
                    padding: 0 20px;
                }

                .srv-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }

                .srv-card {
                    position: relative;
                    height: 280px; 
                    background: #111;
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 0; 
                }

                .srv-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.7;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .srv-card:hover img {
                    transform: scale(1.1);
                    opacity: 0.9;
                }

                .srv-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);
                    display: flex;
                    align-items: flex-end;
                    padding: 30px;
                    z-index: 2;
                }

                .srv-card-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    color: #fff;
                }

                .srv-card-info h3 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                }

                /* ARROW ANIMATION */
                .srv-arrow {
                    color: #fff;
                    transition: all 0.4s ease;
                    transform: rotate(-45deg); /* Starts at Up-Right angle */
                }

                .srv-card:hover .srv-arrow {
                    color: #b8e620;
                    transform: rotate(0deg); /* Points strictly RIGHT on hover */
                }

                /* MODAL */
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.85);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    backdrop-filter: blur(8px);
                }

                .modal-content {
                    background: #fff;
                    width: 90%;
                    max-width: 650px;
                    padding: 50px;
                    border-radius: 0;
                    position: relative;
                }

                .modal-close-btn {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    border: none;
                    background: #f0f0f0;
                    cursor: pointer;
                    padding: 10px;
                    transition: background 0.2s;
                }
                .modal-close-btn:hover { background: #e0e0e0; }

                @media (max-width: 992px) {
                    .srv-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 650px) {
                    .srv-grid { grid-template-columns: 1fr; }
                    .services-hero-banner h1 { font-size: 34px; }
                }
            `}</style>

            <div className="solutions-header">
                <div className="service-banner">
                    <div className="solution-banner-content">
                        <span className="solutions-badge">What We Offer</span>
                        <h2 className="solutions-title">Our Services</h2>
                        <div className="solutions-divider"></div>
                        <p className="cyb-contact-text"> Services that we provided</p>
                    </div>
                </div>
            </div>

            <div className="catalog-container">
                <div className="srv-grid">
                    {serviceList.map((service) => (
                        <div
                            key={service.id}
                            className="srv-card"
                            onClick={() => handleServiceClick(service)} // Updated this line
                        >
                            <img src={service.bannerImage} alt={service.title} />
                            <div className="srv-card-overlay">
                                <div className="srv-card-info">
                                    <h3>{service.title}</h3>
                                    <div className="srv-arrow">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <div className="modal-overlay" onClick={() => setSelectedService(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
                            <X size={24} />
                        </button>
                        <h2 style={{marginTop: 0, color: '#0f3d2e', fontSize: '32px'}}>{selectedService.title}</h2>
                        {selectedService.pages.map((p, idx) => (
                            <div key={idx} style={{marginBottom: '25px'}}>
                                <p style={{lineHeight: '1.7', color: '#333', fontSize: '16px'}}>{p.content}</p>
                                {p.features && (
                                    <ul style={{paddingLeft: '20px', color: '#555'}}>
                                        {p.features.map((f, i) => <li key={i} style={{marginBottom: '8px'}}>{f}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/*<section className="partners-section-new">*/}
            {/*    <div className="partners-header-new">*/}
            {/*        <span className="partners-badge-new">Trusted Partnerships</span>*/}
            {/*        <h2 className="partners-title-new">Business Partners</h2>*/}
            {/*    </div>*/}

            {/*    <div className="partners-static-container">*/}
            {/*        <div className="partners-grid-new">*/}
            {/*            {partnersRow1.map((partner) => (*/}
            {/*                <div key={partner.id} className="partner-card-new">*/}
            {/*                    <img*/}
            {/*                        src={partner.image}*/}
            {/*                        alt={partner.name}*/}
            {/*                        onError={(e) => {*/}
            {/*                            e.target.src = `https://via.placeholder.com/300x150/0f3d2e/ffffff?text=${partner.name}`;*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    );
}