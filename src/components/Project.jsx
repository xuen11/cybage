import React, { useState, useEffect, useRef } from 'react';
import '/src/App.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cardsRef = useRef([]);
    const carouselRef = useRef(null);
    const sectionRef = useRef(null);
    const marqueeRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        const contentElement = contentRef.current;

        if (!marqueeElement || !contentElement) return;

        const cloneContent = () => {
            contentElement.innerHTML += contentElement.innerHTML;
        };

        const startMarquee = () => {
            const contentWidth = contentElement.scrollWidth / 2;
            const duration = contentWidth / 50;

            marqueeElement.style.animationDuration = `${duration}s`;
            marqueeElement.classList.add('marquee-animate');
        };

        cloneContent();
        startMarquee();

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

            <div
                className={`carousel-section-wrapper ${isVisible ? "visible" : ""}`}
            >
                <div className="carousel-container">
                    <div className="carousel-wrapper" ref={carouselRef}>
                        {infiniteSlideData.map((slide, index) => (
                            <div className={getCardClass(index)} onClick={() => handleCardClick(index)}>
                                <img src={slide.image} alt={slide.title} />

                                <div className="card-text-bar">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.subtitle}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
                </section>
             
                    </div>
                </div>

    );
};

export default Carousel;


/*Project*/

/*.carousel-page {

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a2a3a 0%, #2d3f4f 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

    .carousel-page::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%);
        pointer-events: none;
    }

.carousel-container {
    width:100%;
    max-width: 1500px;
    height: 700px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
    padding: 20px;
    padding-left: 60px;
    
}

.carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    position: absolute;
    width: 330px;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    opacity: 0;
    z-index: 0;
}

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .card:hover img {
        transform: scale(1.05);
    }

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .card-overlay {
    opacity: 1;
}*/

/* Card positions */
/*.card.active {
    transform: translateX(0) scale(1.15) rotateY(0deg);
    z-index: 5;
    filter: brightness(1.1);
    opacity: 1;
}

.card.prev-2 {
    transform: translateX(-550px) scale(0.75) rotateY(25deg);
    z-index: 1;
    filter: brightness(0.5);
    opacity: 1;
}

.card.prev-1 {
    transform: translateX(-320px) scale(0.9) rotateY(15deg);
    z-index: 3;
    filter: brightness(0.7);
    opacity: 1;
}

.card.next-1 {
    transform: translateX(320px) scale(0.9) rotateY(-15deg);
    z-index: 3;
    filter: brightness(0.7);
    opacity: 1;
}

.card.next-2 {
    transform: translateX(550px) scale(0.75) rotateY(-25deg);
    z-index: 1;
    filter: brightness(0.5);
    opacity: 1;
}

.content-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
    pointer-events: none;
    color: white;
}

    .content-overlay h1 {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 10px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        line-height: 1.2;
        transition: opacity 0.3s ease;
    }

    .content-overlay .divider {
        width: 80px;
        height: 3px;
        background: white;
        margin: 20px auto;
    }

    .content-overlay p {
        font-size: 18px;
        letter-spacing: 2px;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        font-weight: 300;
        transition: opacity 0.3s ease;
    }

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 20;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: none;
    outline: none;

}

    .nav-button:hover:not(:disabled) {
        background: rgba(255,255,255,0.2);
        border-color: rgba(255,255,255,0.5);
        transform: translateY(-50%) scale(1.1);
    }

    .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-button.prev {
        left: 80px;
    }

    .nav-button.next {
        right: 40px;
    }

.nav-arrow {
    width: 12px;
    height: 12px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    display: block;
}

.nav-button.prev .nav-arrow {
    transform: rotate(135deg);
    margin-left: 5px;
}

.nav-button.next .nav-arrow {
    transform: rotate(-45deg);
    margin-right: 5px;
}

.carousel-section-wrapper {
    opacity: 0;
    transform: translateY(80px);
    transition: opacity 1s ease, transform 1s ease;
}*/

/* When visible */
/*.carousel-section-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
}*/

/* Optional gradient to blend with previous black section */
/*.carousel-section {
    background: linear-gradient( to bottom, #000 0%, #111 20%, #ffffff 60% );
    padding-top: 100px;
}*/

/* Project Showcase Section */
/*.project-showcase-section {
    position: relative;
    margin: 60px 0;
    background:black;
    z-index:-1000;
    top:-60px;
}

.project-bar {
    background: #6ae242;*/ /* yellow like image */
/*padding: 12px 20px;
font-family: Arial, sans-serif;
font-size: 30px;
font-weight: 600;
color: #333;
display: flex;
gap: 25px;
align-items: center;
position: relative;
height: 100px;
justify-content: center;
top:50px;
}*/

/* green angled bottom shape */
/*.project-bar::after {
    content: "";
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #EE1B24;*/ /* dark green */
/*transform: skewY(-3deg);
transform-origin: top left;
z-index: -99;
}

.separator {
color: #1f4d28;
font-weight: 900;
}*/
/* Carousel Section Animation */
/*.carousel-section-wrapper {
opacity: 0;
transform: translateY(50px);
transition: all 0.8s ease-out;
}

.carousel-section-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
}

.projectReference{
    font-size:45px;
    color:white;
}


.project-reference-wrappers {
position: relative;
width: 100%;
}*/

/* The gradient overlay at the bottom */
/*.project-reference-wrappers::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 350px;*/
/* Black → transparent → white gradient */
/*background: linear-gradient(
to bottom,
rgba(0, 0, 0, 0.95) 10%,
rgba(0, 0, 0, 0.35) 30%,
rgba(0, 0, 0, 0.15) 40%,
rgba(255, 255, 255, 0) 70%,
#ffffff 100%
);
pointer-events: none;*/ /* so it won't block clicking */
/*z-index: 0;
top:720px;
}*/


/* Animations */
/*@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (max-width: 1200px) {
    .card {
        width: 300px;
        height: 400px;
    }

    .content-overlay h1 {
        font-size: 48px;
    }

    .card.prev-1 {
        transform: translateX(-250px) scale(0.9) rotateY(15deg);
    }

    .card.next-1 {
        transform: translateX(250px) scale(0.9) rotateY(-15deg);
    }

    .card.prev-2 {
        transform: translateX(-450px) scale(0.75) rotateY(25deg);
    }

    .card.next-2 {
        transform: translateX(450px) scale(0.75) rotateY(-25deg);
    }
}

@media (max-width: 768px) {
    .carousel-container {
        height: 400px;
    }

    .card {
        width: 250px;
        height: 350px;
    }

        .card.prev-1 {
            transform: translateX(-180px) scale(0.85) rotateY(20deg);
        }

        .card.next-1 {
            transform: translateX(180px) scale(0.85) rotateY(-20deg);
        }

        .card.prev-2,
        .card.next-2 {
            display: none;
        }

    .content-overlay h1 {
        font-size: 36px;
        letter-spacing: 4px;
    }

    .content-overlay p {
        font-size: 14px;
    }

    .nav-button {
        width: 50px;
        height: 50px;
    }

        .nav-button.prev {
            left: 20px;
        }

        .nav-button.next {
            right: 20px;
        }
}

@media (max-width: 480px) {
    .carousel-container {
        height: 350px;
    }

    .card {
        width: 200px;
        height: 300px;
    }

        .card.prev-1 {
            transform: translateX(-130px) scale(0.85) rotateY(20deg);
        }

        .card.next-1 {
            transform: translateX(130px) scale(0.85) rotateY(-20deg);
        }

    .content-overlay h1 {
        font-size: 28px;
        letter-spacing: 2px;
    }

    .content-overlay p {
        font-size: 12px;
    }
}


.card-text-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 18px 20px;*/
/* Black → transparent top gradient */
/*background: linear-gradient( to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 100% );
color: white;
pointer-events: none;
}

.card-text-bar h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
}

.card-text-bar p {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.9;
    margin: 4px 0 0 0;
}*/















/*Solution Page */

















/*Contact*/
/*.contact-banner {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 250px;
    margin: 4rem auto;
    border-radius: 20px;
    overflow: hidden;
    background: url('/contact.jfif') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    top:80px;
    z-index:10;
}*/

/* Dark overlay */
/*.contact-banner-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
}*/

/* Text + Button */
/*.contact-banner-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 1rem 2rem;
}

    .contact-banner-content h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .contact-banner-content p {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

.contact-banner-btn {
    padding: 0.7rem 1.8rem;
    background: #ee1f27;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    opacity: 1 !important;
    position: relative !important;
    z-index: 100 !important;
    display: inline-block !important;
    visibility: visible !important;
}

    .contact-banner-btn:hover {
        background: #b50f17 !important;
        transform: translateY(-2px) !important;
        opacity: 1 !important;
        z-index: 200 !important;
    }*/