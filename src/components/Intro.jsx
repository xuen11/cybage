import React, { useState, useEffect } from "react";
import "/src/App.css";
import bgVideo from "/bg.mp4";

export default function Intro() {
    const [currentWord, setCurrentWord] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const words = [
        'Smart Software Solutions',
        'Electronic Device Design',
        'IT Technology Consultations',
        'Industrial IT Peripheral',
        'Maintenance & Support'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsExiting(true);

            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setIsExiting(false);
            }, 800);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
                rel="stylesheet"
            />
            <section className="intro-section">
                <video className="intro-video" autoPlay loop muted playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>

                <div className="bg-gradient"></div>

                <div className="cybage-container">
                    <div className="logo-name">Cybage Technologies</div>
                    <div className="pre-text">We specialize in</div>

                    <div className="rotating-container">
                        <div className="word-wrapper">
                            <div className={`word ${isExiting ? 'exit' : 'active'}`}>
                                {words[currentWord]}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-text">
                        Precision Engineering <span className="divider">•</span>
                        Smart Solutions <span className="divider">•</span>
                        Future-Ready Technology
                    </div>

                   
                </div>
               
            </section>
        </>
    );
}