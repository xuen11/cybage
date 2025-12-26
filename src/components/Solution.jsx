import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import "/src/App.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
    className: "animated-marker",
});

const PanTo = ({ position }) => {
    const map = useMap();
    if (position) {
        map.flyTo(position, 4, { duration: 1 });
    }
    return null;
};

const SolutionSection = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const locations = [
        { id: 1, country: "Malaysia", coords: [3.139, 101.686] },
        { id: 2, country: "Singapore", coords: [1.3521, 103.8198] },
        { id: 3, country: "Batam", coords: [1.0456, 104.0305] },
        { id: 4, country: "Thailand", coords: [13.7563, 100.5018] },
        { id: 5, country: "China", coords: [35.8617, 104.1954] },
        { id: 6, country: "Mexico", coords: [23.6345, -102.5528] },
        { id: 7, country: "Philippines", coords: [12.8797, 121.774] },
    ];

    const hoveredLocation = locations.find(
        (loc) => loc.country === selectedCountry
    );

    return (
        <section className="cyb-global-reach">
            <div className="cyb-global-wrapper">

                {/* Header */}
                <div className="cyb-global-header">
                    <span className="cyb-global-badge">What We Offer</span>
                    <h2 className="cyb-global-title">Our Solutions</h2>
                    <p className="cyb-global-subtitle">
                        Serving clients across multiple countries with innovative technology solutions.
                    </p>
                </div>

                <div className="cyb-global-content">

                    {/* World Map */}
                    <div className="cyb-map-section">
                        <MapContainer
                            center={[20, 0]}
                            zoom={2}
                            minZoom={2}
                            scrollWheelZoom={true}
                            style={{ height: "500px", width: "100%", borderRadius: "14px" }}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                            {hoveredLocation && (
                                <PanTo position={hoveredLocation.coords} />
                            )}

                            {locations.map((loc) => (
                                <Marker
                                    key={loc.id}
                                    position={loc.coords}
                                    icon={markerIcon}
                                    className={
                                        selectedCountry === loc.country
                                            ? "marker-glow"
                                            : ""
                                    }
                                >
                                    <Popup>{loc.country}</Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    {/* Info Section */}
                    <div className="cyb-info-section">
                        <h3 className="cyb-info-title">
                            Our expertise reaches every corner of the globe.
                        </h3>

                        <p className="cyb-info-description">
                            We deliver innovative technology solutions to businesses worldwide, driving growth and success across continents.
                        </p>

                        {/* Country List */}
                        <div className="cyb-countries-list">
                            {locations.map((location) => (
                                <div
                                    key={location.id}
                                    className={`cyb-country-item ${selectedCountry === location.country ? "cyb-highlight" : ""
                                        }`}
                                    onMouseEnter={() => setSelectedCountry(location.country)}
                                    onMouseLeave={() => setSelectedCountry(null)}
                                >
                                    {location.country}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default SolutionSection;
