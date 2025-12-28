import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, X, ChevronRight, Home } from 'lucide-react';

const IndustrialIT = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();

    const bannerImage = location.state?.bannerImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop';
    const pageTitle = location.state?.title || "Industrial IT Peripherals";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const industrialData = [
        {
            id: 1,
            name: "Barcode Scanners",
            image: "/barcodeScanner.jpg",
            category: "Data Capture",
            subItems: [
                {
                    name: "Industrial Scanner",
                    image: "/barcodeScanner.jpg",
                }
            ]
        },
        //{
        //    id: 2,
        //    name: "Network & Connectivity",
        //    image: "/huns.jpg",
        //    category: "Infrastructure",
        //    subItems: [
        //        { name: "Huns & Switch", image: "/huns.jpg" },
        //        { name: "KUM Switch Products", image: "/kum.jpg" },
        //        { name: "Routers", image: "/router.jpg" }
        //    ]
        //},
        {
            id: 3,
            name: "Barcode Printing",
            image: "/barcode-printer.jpg",
            category: "Logistics",
            subItems: [
                { name: "Barcode Printer", image: "/barcode-printer.jpg" },
                { name: "Ribbons", image: "/ribbon.jpg" },
                { name: "Labels", image: "/label.jpg" }
            ]
        },
        {
            id: 4,
            name: "Industrial Computing",
            image: "/industrial-pc.jpg",
            category: "Computing",
            subItems: [
                { name: "Industrial PC", image: "/industrial-pc.jpg" },
                { name: "Embedded PC", image: "/embedded-pc.jpg" },
                { name: "Industrial Tablet", image: "/tablet.jpg" }
            ]
        },
        {
            id: 5,
            name: "Software",
            image: "/computer-software.jpg",
            category: "Systems",
            subItems: [
                { name: "Software (WIN 7, WIN 10, Adobe Antivirus)", image: "/computer-software.jpg" },
            ]
        },
        {
            id: 6,
            name: "Storage Solutions",
            image: "/NAS.jpg",
            category: "Data Management",
            subItems: [
                { name: "Network Access Storage (NAS)", image: "/NAS.jpg" },
                { name: "SSD", image: "/ssd.jpg" },
                { name: "Harddisk", image: "/harddisk.jpg" }
            ]
        },
        {
            id: 7,
            name: "Power & Backup",
            image: "/battery-backup.jpg",
            category: "Infrastructure",
            subItems: [
                { name: "Battery Backup", image: "/battery-backup.jpg" },
                { name: "Battery UPS", image: "/battery-ups.jpg" }
            ]
        },
        {
            id: 8,
            name: "Cloud & Hosting",
            image: "/cloudHosting.png",
            category: "Services",
            subItems: [
                { name: "Cloud Reseller", image: "/cloudHosting.png" }
            ]
        },
        {
            id: 9,
            name: "Custom I/O Terminals",
            image: "/pt2.jpeg",
            category: "Interfaces",
            subItems: [
                { name: "PT2 Terminal", image: "/pt2.jpeg" },
                { name: "Raspberry Pi Industrial", image: "/raspberrypi.png" }
            ]
        }
    ];

    const renderImage = (src, alt, isLarge = false) => (
        <div className={isLarge ? "img-container-large" : "img-container-card"}>
            <img
                src={src}
                alt={alt}
                className="contain-img"
                onError={(e) => { e.target.src = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${alt}`; }}
            />
        </div>
    );

    return (
        <div className="it-page-wrapper">
            <style>{`
                .it-page-wrapper { background: #f8fafc; min-height: 100vh; color: #1e293b; font-family: 'Inter', sans-serif; }
                
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

                .it-content { max-width: 1240px; margin: -60px auto 80px; padding: 0 20px; position: relative; z-index: 10; }
                .it-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }

                .it-card { 
                    background: white; border-radius: 12px; overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease; cursor: pointer; border: 1px solid #e2e8f0;
                }
                .it-card:hover { transform: translateY(-10px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border-color: #10b981; }

                .img-container-card { width: 100%; height: 200px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; padding: 20px; }
                .img-container-large { width: 100%; height: 160px; background: #f8fafc; display: flex; align-items: center; justify-content: center; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0; }
                .contain-img { max-width: 100%; max-height: 100%; object-fit: contain; }

                .card-body { padding: 20px; }
                .cat-badge { background: #ecfdf5; color: #059669; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; display: inline-block; }
                .card-title { font-size: 1.25rem; font-weight: 700; margin: 0 0 15px; color: #0f172a; }
                .view-btn { display: flex; align-items: center; gap: 5px; color: #10b981; font-weight: 600; font-size: 14px; }

                .it-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.9); z-index: 2000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 20px; }
                .it-expanded { background: white; width: 100%; max-width: 1000px; max-height: 85vh; border-radius: 20px; position: relative; overflow-y: auto; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
                .close-btn { position: absolute; top: 20px; right: 20px; background: #f1f5f9; color: #64748b; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }

                .subitem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; }
                .subitem-card { background: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; text-align: center;}
                .spec-tag { background: white; border: 1px solid #e2e8f0; color: #64748b; padding: 3px 8px; border-radius: 4px; font-size: 11px; margin: 3px; display: inline-block; }

                @media (max-width: 1024px) { .it-grid, .subitem-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 640px) { .it-grid, .subitem-grid { grid-template-columns: 1fr; } .it-banner h1 { font-size: 2rem; } }
            `}</style>

            <div className="it-banner">
                <h1>{pageTitle}</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'white' }}><Home size={16} /></Link>
                    <ChevronRight size={14} />
                    <span>Services</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Industrial IT</span>
                </div>
            </div>

            <main className="it-content">
                <div className="it-grid">
                    {industrialData.map((item) => (
                        <div key={item.id} className="it-card" onClick={() => setSelectedItem(item)}>
                            {renderImage(item.image, item.name)}
                            <div className="card-body">
                                <span className="cat-badge">{item.category}</span>
                                <h3 className="card-title">{item.name}</h3>
                                <div className="view-btn">
                                    View Products <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {selectedItem && (
                <div className="it-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="it-expanded" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedItem(null)}><X size={24} /></button>

                        <span className="cat-badge">{selectedItem.category}</span>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: '10px 0' }}>{selectedItem.name}</h2>
                        <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

                        <div className="subitem-grid">
                            {selectedItem.subItems.map((sub, idx) => (
                                <div key={idx} className="subitem-card">
                                    {renderImage(sub.image, sub.name, true)}
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '15px 0 8px', color: '#0f172a' }}>{sub.name}</h4>
                                    {sub.specs && (
                                        <div style={{ marginTop: '10px' }}>
                                            {sub.specs.map((s, si) => <span key={si} className="spec-tag">{s}</span>)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndustrialIT;