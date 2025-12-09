import React from "react";
import "/src/App.css";

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="about-top-gradient"></div>

            <div className="about-container">
                <div className="content-wrapper">
                    <div className="left-side">
                        <div className="about-box">
                            <h2>
                                ABOUT
                                <br />
                                US
                            </h2>
                        </div>
                        <div className="image-box image-top"></div>
                        <div className="image-box image-bottom"></div>
                    </div>

                    <div className="right-side">
                        <h1>
                            “Innovator in IoT,
                            Empowered by Innovation”
                        </h1>
                        <p className="description">
                            Cybage Technologies Sdn Bhd is a technology innovator specializing in IoT, custom software, and industrial automation. Since 2017, we have delivered smart, reliable solutions that bridge ideas and implementation with a focus on quality and client success.

                        </p>
                        <a href="/about" className="read-more">
                            <span>Read more</span>
                            <span className="arrow-circle"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;