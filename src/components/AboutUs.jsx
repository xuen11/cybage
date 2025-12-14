import React, { useEffect, useRef, useState } from "react";
import "/src/App.css";

const AboutUs = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div className="about-section" ref={aboutRef}>
            {/* Removed animation class from gradient */}
            <div className="about-top-gradient"></div>

            <div className="about-container">
                <div className="content-wrapper">
                    <div className="left-side">
                        <div className={`about-box ${isVisible ? 'cyb-anim-title-lift' : ''}`}>
                            <h2>
                                ABOUT
                                <br />
                                US
                            </h2>
                        </div>
                        <div className={`image-box image-top ${isVisible ? 'cyb-anim-img-slide-left' : ''}`}></div>
                        <div className={`image-box image-bottom ${isVisible ? 'cyb-anim-img-slide-right' : ''}`}></div>
                    </div>

                    <div className="right-side">

                    <h2 className='aboutStory'>Our Story</h2>
                        <h1 className={isVisible ? 'cyb-anim-quote-fade' : ''}>
                            "Innovator in IoT,
                            Empowered by Innovation"
                        </h1>
                        <p className={`description ${isVisible ? 'cyb-anim-text-reveal' : ''}`}>
                            Cybage Technologies Sdn Bhd is a technology innovator specializing in IoT, custom software, and industrial automation. Since 2017, we have delivered smart, reliable solutions that bridge ideas and implementation with a focus on quality and client success.
                        </p>
                        <Link
                            to="/about"
                            className={`read-more ${isVisible ? 'cyb-anim-btn-ascend' : ''}`}
                        >
                            <span>Read more</span>
                            <span className="arrow-circle"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;