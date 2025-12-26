import React from "react";
import "/src/App.css";
import { Link } from "react-router-dom";

const Partner = () => {

    const partnersRow1 = [
        { id: 1, name: 'Kiddoo Soft', image: '/kiddoo-soft.png' },
        { id: 2, name: 'CAB', image: '/cab.png' },
        { id: 3, name: 'Jowin Technology', image: '/jowin.png' },
        { id: 4, name: 'Vistrian', image: '/vistrian.png' },
        { id: 5, name: 'Radiant Global', image: '/radiant.png' },
        { id: 6, name: 'Novexx Solutions', image: '/novexx.png' },
        { id: 7, name: 'Innovare', image: '/innovare.png' },
        { id: 8, name: 'Info-Tech', image: '/infotech.png' },
        { id: 9, name: 'Emdoor', image: '/emdoor.png' },
        { id: 10, name: 'Advantech', image: '/advantech.png' },
        { id: 12, name: 'Xyreon', image: '/xyreon.png' },
        { id: 13, name: 'Yeahhost', image: '/yeahhost.png' },
        { id: 14, name: 'ER Gemtrack', image: '/erGemtrack.png' },
        { id: 15, name: 'Walcomtech', image: '/walcomtech.png' },
    ];

    return (
        <>
            <section className="partners-section-new">
                <div className="partners-header-new">
                    <span className="partners-badge-new">Trusted Partnerships</span>
                    <h2 className="partners-title-new">Business Partners</h2>
                </div>

                <div className="partners-static-container">
                    <div className="partners-grid-new">
                        {partnersRow1.map((partner) => (
                            <div key={partner.id} className="partner-card-new">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/300x150/0f3d2e/ffffff?text=${partner.name}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partner;
