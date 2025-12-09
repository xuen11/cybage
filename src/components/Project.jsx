import React, { useState, useEffect, useRef } from 'react';
import '/src/App.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with "Packaging Industry"
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cardsRef = useRef([]);
    const carouselRef = useRef(null);
    const sectionRef = useRef(null);
    const marqueeRef = useRef(null);
    const contentRef = useRef(null);

    // Marquee animation effect
    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        const contentElement = contentRef.current;

        if (!marqueeElement || !contentElement) return;

        // Clone content for seamless loop
        const cloneContent = () => {
            contentElement.innerHTML += contentElement.innerHTML;
        };

        // Start animation
        const startMarquee = () => {
            const contentWidth = contentElement.scrollWidth / 2;
            const duration = contentWidth / 50;

            marqueeElement.style.animationDuration = `${duration}s`;
            marqueeElement.classList.add('marquee-animate');
        };

        cloneContent();
        startMarquee();

        // Reset animation for infinite loop
        const handleAnimationIteration = () => {
            marqueeElement.style.animation = 'none';
            void marqueeElement.offsetWidth;
            marqueeElement.style.animation = null;
        };

        marqueeElement.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            marqueeElement.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const slideData = [
        {
            title: "Metal Industry",
            subtitle: "Automation & Process Control Solutions",
            image: "/metal.jpg"
        },
        {
            title: "Barcode Printing and Verifying",
            subtitle: "Industrial Labeling & Tracking Systems",
            image: "/barcode.png"
        },
        {
            title: "Packaging Industry",
            subtitle: "Automated Packaging & Quality Control",
            image: "/packaging.png"
        },
        {
            title: "Chamber Temperature and Humidity Monitoring",
            subtitle: "Environmental Control & Monitoring Systems",
            image: "/chamber.png"
        },
        {
            title: "RFID Lorry Bay Display System With LED Display",
            subtitle: "Smart Logistics & Real-time Tracking",
            image: "/rfid.png"
        }
    ];

    const infiniteSlideData = [...slideData, ...slideData, ...slideData];

    const handlePrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);

        const firstCloneIndex = slideData.length;

        if (currentIndex === firstCloneIndex) {
            setTimeout(() => {
                carouselRef.current.classList.add("no-transition");
                setCurrentIndex(infiniteSlideData.length - slideData.length * 2);
                setTimeout(() => {
                    carouselRef.current.classList.remove("no-transition");
                    setIsTransitioning(false);
                }, 20);
            }, 600);
        } else {
            setTimeout(() => setIsTransitioning(false), 600);
        }
    };

    const handleNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);

        const lastCloneIndex = infiniteSlideData.length - slideData.length - 1;

        if (currentIndex === lastCloneIndex) {
            setTimeout(() => {
                carouselRef.current.classList.add("no-transition");
                setCurrentIndex(slideData.length);
                setTimeout(() => {
                    carouselRef.current.classList.remove("no-transition");
                    setIsTransitioning(false);
                }, 20);
            }, 600);
        } else {
            setTimeout(() => setIsTransitioning(false), 600);
        }
    };

    const handleCardClick = (index) => {
        if (isTransitioning) return;
        setCurrentIndex(index);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isTransitioning]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning]);

    const getCardClass = (index) => {
        const position = index - currentIndex;

        switch (position) {
            case 0:
                return 'card active';
            case -1:
                return 'card prev-1';
            case -2:
                return 'card prev-2';
            case 1:
                return 'card next-1';
            case 2:
                return 'card next-2';
            default:
                return 'card';
        }
    };

    const getDisplayIndex = () => {
        return currentIndex % slideData.length;
    };

    const displaySlide = slideData[getDisplayIndex()];

    return (

        <div className="project-reference-wrappers">
    <div className="project-reference-pages">
     

        <section
            className="project-showcase-section"
            ref={sectionRef}
        >
            <div class="project-bar">
                <span class="separator">*</span>
                <span>What we have</span>
                <span class="separator">*</span>

                <span className="projectReference"> Project Reference </span>
                <span class="separator">*</span>

                <span>done previously</span>
                <span class="separator">*</span>
            </div>


            {/* Carousel Section */}
            <div
                className={`carousel-section-wrapper ${isVisible ? "visible" : ""}`}
            >
                <div className="carousel-container">
                    <div className="carousel-wrapper" ref={carouselRef}>
                        {infiniteSlideData.map((slide, index) => (
                            <div className={getCardClass(index)} onClick={() => handleCardClick(index)}>
                                <img src={slide.image} alt={slide.title} />

                                {/* Gradient + text */}
                                <div className="card-text-bar">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.subtitle}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                   

                    <button
                        className="nav-button prev"
                        onClick={handlePrev}
                        disabled={isTransitioning}
                    >
                        <span className="nav-arrow"></span>
                    </button>

                    <button
                        className="nav-button next"
                        onClick={handleNext}
                        disabled={isTransitioning}
                    >
                        <span className="nav-arrow"></span>
                    </button>
                </div>
            </div>
                </section>
             
                    </div>
                </div>

    );
};

export default Carousel;