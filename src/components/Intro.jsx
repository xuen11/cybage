//import React, { useState, useEffect } from "react";
//import "/src/App.css";
//import bgVideo from "/bg.mp4";

//export default function Intro() {
//    const [currentWord, setCurrentWord] = useState(0);
//    const [isExiting, setIsExiting] = useState(false);

//    const words = [
//        'Smart Software Solutions',
//        'Electronic Device Design',
//        'IT Technology Consultations',
//        'Industrial IT Peripheral',
//        'Maintenance & Support'
//    ];

//    useEffect(() => {
//        const interval = setInterval(() => {
//            setIsExiting(true);

//            setTimeout(() => {
//                setCurrentWord((prev) => (prev + 1) % words.length);
//                setIsExiting(false);
//            }, 800);
//        }, 3000);

//        return () => clearInterval(interval);
//    }, []);

//    return (
//        <>
//            <link
//                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
//                rel="stylesheet"
//            />
//            <section className="intro-section">
//                <video className="intro-video" autoPlay loop muted playsInline>
//                    <source src={bgVideo} type="video/mp4" />
//                </video>

//                <div className="bg-gradient"></div>

//                <div className="cybage-container">
//                    <div className="logo-name">Cybage Technologies</div>
//                    <div className="pre-text">We specialize in</div>

//                    <div className="rotating-container">
//                        <div className="word-wrapper">
//                            <div className={`word ${isExiting ? 'exit' : 'active'}`}>
//                                {words[currentWord]}
//                            </div>
//                        </div>
//                    </div>

//                    <div className="bottom-text">
//                        Precision Engineering <span className="divider">•</span>
//                        Smart Solutions <span className="divider">•</span>
//                        Future-Ready Technology
//                    </div>


//                </div>

//            </section>
//        </>
//    );
//}
import React from 'react';

const ModernTechIntroV4 = () => {
    // Replace this with your actual image path
    const heroImage = "/about2.png";

    return (
        <section className="tech-intro-v4">
            {/* Background Layers: Gradients, Noise, and Blueprint Grid */}
            <div className="bg-layers">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
                <div className="blueprint-grid"></div>
            </div>

            <div className="main-wrapper">
                {/* Left Side: Brand & Mission */}
                <div className="side-panel brand-panel">
                    <div className="meta-tag">
                        <span className="accent-line"></span>
                        <span className="tag-text">CYBAGE TECHNOLOGIES</span>
                    </div>

                    <h1 className="main-title">
                        Architecting <br />
                        The <span className="hollow-text">Cyber</span>age<span className="dot">.</span>
                    </h1>

                    <div className="mission-statement">
                        <p>
                            We bridge the gap between industrial complexity and digital
                            simplicity through high-precision IoT and Automation ecosystems.
                        </p>
                    </div>

                    {/*<div className="data-points">*/}
                    {/*    <div className="point">*/}
                    {/*        <span className="label">SYSTEM STATUS</span>*/}
                    {/*        <span className="val pulse">OPTIMAL</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="point">*/}
                    {/*        <span className="label">EST. FOUNDATION</span>*/}
                    {/*        <span className="val">2017</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                {/* Right Side: Image Display with UI Decorations */}
                <div className="side-panel image-panel">
                    <div className="image-viewport">
                        {/* Decorative UI Elements */}
                        <div className="ui-decoration corner-tl"></div>
                        <div className="ui-decoration corner-br"></div>
                        <div className="ui-scanner"></div>

                        {/* Image Container with Radial Feathering */}
                        <div className="image-feather-container">
                            <img
                                src={heroImage}
                                alt="Cybage Industrial Technology"
                                className="tech-hero-image"
                            />
                        </div>
                    </div>

                    {/*<div className="bottom-action">*/}
                    {/*    <div className="scroll-hint">*/}
                    {/*        <span className="scroll-line"></span>*/}
                    {/*        SYSTEMS ARCHITECTURE V4.0*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <style jsx>{`
                .tech-intro-v4 {
                    height: 100vh;
                    width: 100%;
                    background: #F8F9FB;
                    color: #1A1A1A;
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                /* Background Layers */
                .bg-layers { position: absolute; inset: 0; z-index: 0; }
                
                .mesh-gradient {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        radial-gradient(at 15% 15%, rgba(16, 185, 129, 0.08) 0px, transparent 45%),
                        radial-gradient(at 85% 85%, rgba(59, 130, 246, 0.07) 0px, transparent 45%);
                }

                .noise-overlay {
                    position: absolute;
                    inset: 0;
                    opacity: 0.3;
                    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
                }

                .blueprint-grid {
                    position: absolute;
                    inset: 0;
                    background-size: 60px 60px;
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
                }

                .main-wrapper {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 5%;
                    z-index: 10;
                    gap: 80px;
                    align-items: center;
                }

                /* Typography */
                .tag-text { font-weight: 900; color: #10B981; font-size: 0.75rem; letter-spacing: 0.15em; }
                .main-title {
                    font-size: clamp(3rem, 6vw, 5.5rem);
                    font-weight: 900;
                    line-height: 0.95;
                    letter-spacing: -0.05em;
                    margin-bottom: 2.5rem;
                }
                .hollow-text { 
                    color: transparent; 
                    -webkit-text-stroke: 1.5px #1A1A1A;
                    opacity: 0.8;
                }
                .dot { color: #10B981; }
                
                .mission-statement {
                    max-width: 440px;
                    padding: 20px 0 20px 30px;
                    border-left: 2px solid #10B981;
                    margin-bottom: 3.5rem;
                    background: linear-gradient(to right, rgba(16, 185, 129, 0.03), transparent);
                }
                .mission-statement p { font-size: 1.1rem; line-height: 1.8; color: #4A5568; }

                .data-points { display: flex; gap: 60px; }
                .label { font-size: 0.7rem; font-weight: 800; color: #A0AEC0; letter-spacing: 0.1em; }
                .val { font-size: 1.1rem; font-weight: 800; color: #2D3748; }
                .pulse { color: #10B981; animation: blink 2s infinite; }

                /* Image Container - REMOVED WHITE BACKGROUND */
                .image-viewport {
                    position: relative;
                    padding: 20px;
                    background: transparent; /* Changed from rgba(255,255,255,0.4) */
                    border: none; /* Removed border to keep it clean */
                }

                .image-feather-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    -webkit-mask-image: radial-gradient(
                        ellipse at center, 
                        rgba(0,0,0,1) 60%, 
                        rgba(0,0,0,0.3) 85%, 
                        transparent 100%
                    );
                    mask-image: radial-gradient(
                        ellipse at center, 
                        rgba(0,0,0,1) 60%, 
                        rgba(0,0,0,0.3) 85%, 
                        transparent 100%
                    );
                }

                .tech-hero-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    filter: contrast(1.05) brightness(1.02);
                }

                /* UI Decorations */
                .ui-decoration {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #10B981;
                    z-index: 6;
                }
                .corner-tl { top: 0px; left: 0px; border-right: none; border-bottom: none; }
                .corner-br { bottom: 0px; right: 0px; border-left: none; border-top: none; }

                .ui-scanner {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 3px;
                    background: linear-gradient(to right, transparent, #10B981, transparent);
                    box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
                    animation: scan 5s linear infinite;
                    z-index: 5;
                    opacity: 0.7;
                }

                @keyframes scan {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .bottom-action { margin-top: 40px; opacity: 0.5; }
                .scroll-hint { font-size: 0.65rem; font-weight: 900; letter-spacing: 0.2em; display: flex; align-items: center; gap: 15px; }
                .scroll-line { width: 40px; height: 1px; background: #10B981; position: relative; overflow: hidden; }

                @media (max-width: 1024px) {
                    .main-wrapper { grid-template-columns: 1fr; gap: 60px; text-align: center; }
                    .meta-tag, .mission-statement { justify-content: center; border-left: none; padding-left: 0; margin: 0 auto 2.5rem; }
                    .data-points { justify-content: center; }
                    .image-viewport { width: 90%; margin: 0 auto; }
                }

                /* Replace your existing @media (max-width: 1024px) block with this */

@media (max-width: 1024px) {
    .tech-intro-v4 {
        height: auto;
        min-height: 100vh;
        padding: 120px 20px 60px; /* Space for fixed headers */
        display: block; /* Switch from flex for better scroll behavior */
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left; /* Left align looks more 'technical' than center on mobile */
        gap: 40px;
        padding: 0;
    }

    /* 1. Header Area */
    .brand-panel {
        order: 1;
    }

    .main-title {
        font-size: clamp(2.5rem, 12vw, 4rem);
        margin-bottom: 1.5rem;
        line-height: 1.1;
    }

    /* 2. Mission Statement - Simplified */
    .mission-statement {
        margin: 0 0 2rem 0;
        padding: 15px 0 15px 20px;
        border-left: 3px solid #10B981;
        background: transparent;
        max-width: 100%;
    }

    .mission-statement p {
        font-size: 1rem;
        line-height: 1.6;
    }

    /* 3. Image Section - The "Cyber" Focus */
    .image-panel {
        order: 2;
        width: 100%;
        margin: 20px 0;
    }

    .image-viewport {
        width: 100%;
        padding: 10px;
        /* Add a subtle glow to the image container */
        filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.1));
    }

    .image-feather-container {
        -webkit-mask-image: radial-gradient(
            circle at center, 
            black 50%, 
            rgba(0,0,0,0.4) 80%, 
            transparent 100%
        );
    }

    /* 4. Data Points - Grid for Mobile */
    .data-points {
        order: 3;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        padding: 20px;
        border-radius: 12px;
        border: 1px solid rgba(0,0,0,0.05);
    }

    .point {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    /* 5. Bottom Label */
    .bottom-action {
        order: 4;
        margin-top: 20px;
        justify-content: center;
        width: 100%;
    }

    /* Blueprint grid adjustment for mobile density */
    .blueprint-grid {
        background-size: 30px 30px;
    }
}

/* Extra Small Screens (Phones) */
@media (max-width: 480px) {
    .main-title {
        font-size: 3.2rem;
    }
    
    .data-points {
        grid-template-columns: 1fr; /* Stack data points on very small screens */
    }
}

/* Update the base image-viewport */
.image-viewport {
    position: relative;
    width: 100%;
    /* This ensures the container never gets taller than a portion of the screen */
    max-height: 60vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
}

.image-feather-container {
    /* This makes the image container responsive */
    width: 100%;
    max-width: 500px; /* Limits size on desktop so it doesn't get huge */
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

.tech-hero-image {
    width: 100%;
    height: auto; /* Maintains aspect ratio */
    object-fit: contain;
    display: block;
}

/* Mobile Specific Scaling */
@media (max-width: 768px) {
    .image-viewport {
        /* On small screens, give it more room but keep it smaller than text */
        width: 85%; 
        max-height: 40vh; 
        margin: 10px auto;
    }

    .image-feather-container {
        /* Gradually shrink the image as screen gets narrower */
        width: clamp(250px, 70vw, 400px); 
    }

    /* Adjust the scanning animation for a smaller area */
    .ui-scanner {
        height: 2px;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
    }
}

@media (max-width: 480px) {
    .image-viewport {
        width: 70%; /* Smaller image for very small phones */
    }
    
    .ui-decoration {
        width: 12px;
        height: 12px;
        border-width: 1px;
    }
}
            `}</style>
        </section>
    );
};

export default ModernTechIntroV4;