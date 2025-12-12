import React from "react";
import "/src/App.css";


const Partner = () => {

    const clients = [
        { id: 1, name: 'Infineon', logo: '/infineon.png' },
        { id: 2, name: 'Petronas', logo: '/petronas.png' },
        { id: 3, name: 'Fuson', logo: '/fusion.png' },
        { id: 4, name: 'Kyosei Seimitsu', logo: '/kyosei.png' },
        { id: 5, name: 'Trox', logo: '/trox.png' },
        { id: 6, name: 'Scientex', logo: '/scientex.png' },
        { id: 7, name: 'Resmed', logo: '/resmed.png' },
        { id: 8, name: 'Edra', logo: '/edra.png' },
        { id: 9, name: 'Amkor', logo: '/amkor.png' },
        { id: 10, name: 'Wold', logo: '/industries.png' },
        { id: 11, name: 'Matang Plastic and Metal Work Industries Sdn Bhd', logo: '/matangPlastic.png' },
        { id: 12, name: 'Kokuyo', logo: '/kokuyo.png' },
        { id: 13, name: 'Airfoil Services', logo: '/airfoil.png' },
        { id: 14, name: 'Walcomtech', logo: '/walcomtech.png' },
        { id: 15, name: 'ER Gemtrack', logo: '/erGemtrack.png' },

    ];


    return (
        <div className="clients-container">
            {/* Header */}
            <div className="clients-header">
                <span className="clients-badge">Our Clients</span>
                <h2 className="clients-title">Trusted by Leading Companies</h2>
                <div className="clients-divider"></div>
            </div>

            {/* Clients Grid */}
            <div className="clients-grid">
                {clients.map((client, index) => (
                    <div
                        key={client.id}
                        className="client-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="client-card-inner">
                            <img
                                src={client.logo}
                                alt={client.name}
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/200x100/667eea/ffffff?text=${client.name}`;
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partner;