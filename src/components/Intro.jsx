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
    return (
        <section className="tech-intro-v4">
            {/* 背景层：色彩、网格、噪声、动态点阵 */}
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
                    {/*        <span className="val">2025</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

               
                <div className="side-panel video-panel">
                    <div className="video-viewport">
                        {/* 装饰性UI元素 */}
                        <div className="ui-decoration corner-tl"></div>
                        <div className="ui-decoration corner-br"></div>
                        <div className="ui-scanner"></div>

                        {/* 核心羽化容器 */}
                        <div className="video-feather-container">
                            <video
                                autoPlay
                                muted
                                playsInline
                                className="tech-video"
                            >
                                <source src="/aboutBg.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/*<div className="bottom-action">*/}
                    {/*    <div className="scroll-hint">*/}
                    {/*        <span className="scroll-line"></span>*/}
                    {/*        SCANNING SYSTEM PARAMETERS...*/}
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

                /* 背景组合 */
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

                /* 文字样式 */
                .tag-text {  font-weight: 900; color: #10B981; font-size: 0.75rem; letter-spacing: 0.15em; }
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

                /* 视频容器与渐变处理 */
                .video-viewport {
                    position: relative;
                    padding: 25px;
                    background: rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(0,0,0,0.03);
                }

                /* 核心：四周自然渐变 */
                .video-feather-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    /* 关键：调整了渐变百分比使之更自然 */
                    -webkit-mask-image: radial-gradient(
                        ellipse at center, 
                        rgba(0,0,0,1) 65%, 
                        rgba(0,0,0,0.4) 88%, 
                        transparent 100%
                    );
                    mask-image: radial-gradient(
                        ellipse at center, 
                        rgba(0,0,0,1) 65%, 
                        rgba(0,0,0,0.4) 88%, 
                        transparent 100%
                    );
                }

                .tech-video {
                    width: 100%;
                    height: auto;
                    display: block;
                    /* 稍微增加对比度让画面不空洞 */
                    filter: contrast(1.1) saturate(1.1);
                }

                /* UI 装饰 */
                .ui-decoration {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    border: 2px solid #10B981;
                    z-index: 6;
                }
                .corner-tl { top: -5px; left: -5px; border-right: none; border-bottom: none; }
                .corner-br { bottom: -5px; right: -5px; border-left: none; border-top: none; }

                .ui-scanner {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 2px;
                    background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.4), transparent);
                    animation: scan 4s linear infinite;
                    z-index: 5;
                }

                @keyframes scan {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .bottom-action { margin-top: 40px; opacity: 0.6; }
                .scroll-hint { font-size: 0.65rem; font-weight: 900; letter-spacing: 0.2em; display: flex; align-items: center; gap: 15px; }
                .scroll-line { width: 40px; height: 1px; background: #10B981; position: relative; overflow: hidden; }
                .scroll-line::after {
                    content: "";
                    position: absolute;
                    left: -100%; width: 100%; height: 100%;
                    background: #FFFFFF;
                    animation: scrollMove 2s infinite;
                }
                @keyframes scrollMove { 100% { left: 100%; } }

                @media (max-width: 1024px) {
                    .main-wrapper { grid-template-columns: 1fr; gap: 60px; text-align: center; }
                    .meta-tag, .mission-statement { justify-content: center; border-left: none; padding-left: 0; margin: 0 auto 2.5rem; }
                    .data-points { justify-content: center; }
                    .video-viewport { width: 85%; margin: 0 auto; }
                }
            `}</style>
        </section>
    );
};

export default ModernTechIntroV4;