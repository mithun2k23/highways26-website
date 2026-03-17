import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Glimpses from './Glimpses';

const HighwaysLogo = "/assets/logos/highways-logo.webp";

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-04-09T00:00:00');

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section id="hero" className="hero" style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,0.9)), url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none' // Added override
            }}>
                <div className="hero-content home-hero-content animate-fade w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* FIXED LOGO CONTAINER */}
                    <div className="flex justify-center w-full mb-6 md:mb-8">
                        <img
                            src={HighwaysLogo}
                            alt="Highways Logo"
                            className="w-auto h-auto max-w-[100%] md:max-w-[1000px] max-h-[200px] md:max-h-[300px] lg:max-h-[380px] object-contain mx-auto drop-shadow-2xl"
                        />
                    </div>

                    <div className="hero-info flex flex-col items-center">

                        <div className="text-6xl md:text-7xl font-black uppercase tracking-wider text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)] my-8 text-center px-4">
                            APRIL 09, 10, 11
                        </div>

                        {/* Countdown - Adjusted for mobile */}
                        <div className="premium-countdown flex flex-wrap justify-center gap-2 mb-2 scale-50 md:scale-75">
                            {[
                                { value: timeLeft.days, label: 'DAYS' },
                                { value: timeLeft.hours, label: 'HOURS' },
                                { value: timeLeft.minutes, label: 'MINS' },
                                { value: timeLeft.seconds, label: 'SECS' }
                            ].map(({ value, label }) => (
                                <div key={label} className="countdown-card">
                                    <div className="card-top">
                                        <span className="countdown-number">
                                            {value.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="card-bottom">
                                        <span className="countdown-label">{label}</span>
                                    </div>
                                    <div className="glow-bar"></div>
                                </div>
                            ))}
                        </div>

                        {/* <p className="hero-tagline text-center text-4xl md:text-7xl lg:text-[100px] xl:text-[140px] font-[1000] text-[#FF1A1A] drop-shadow-[0_6px_12px_rgba(0,0,0,1)] uppercase tracking-tight">
                            Bigger. Better. Bolder
                        </p> */}
                    </div>

                    <div className="hero-btns flex justify-center mt-4 md:mt-5">
                        <Link to="/events" className="btn-matsuri">Explore More</Link>
                    </div>
                </div>
            </section>

            {/* WRAPPER FOR ABOUT AND CELEBRITIES TO ADD A BRIGHTER BACKGROUND */}
            <div style={{
                background: 'linear-gradient(to bottom, rgba(15,15,15,0.8), rgba(20,20,20,0.85)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: '90% 81%',
                backgroundAttachment: 'fixed'
            }}>
                {/* ABOUT SECTION */}
                {/* Added border: 'none' to remove potential CSS border-bottom */}
                <section id="about" className="about-section world-white" style={{ padding: '84px 0', border: 'none' }}>
                    <div className="container">
                        <div className="about-flex">
                            <div className="about-text">
                                <h2 className="section-title left uppercase ">The Highways</h2>
                                <p>HIGHWAYS, the flagship fest of SVCE, continues to inspire, empower and entertain students with its showcase of cultural brilliance and artistic vitality. It offers a powerful stage for participants to express themselves, celebrate creativity and unveil their hidden talents.</p>
                                <p>Uniting students from diverse backgrounds and traditions, HIGHWAYS 26 promises an unforgettable experience with a spectacular lineup of culturally rich performances and vibrant non-technical showcases. It stands as a celebration of talent, unity and the true spirit of festivity.</p>
                            </div>
                            <div className="about-image-container">
                                <div className="image-frame" style={{ position: 'relative' }}>
                                    <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=1200&auto=format&fit=crop" alt="Natural Scenery" className="main-about-img" style={{ width: '100%', borderRadius: '15px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CELEBRITY GUESS SECTION */}
                {/* Added border: 'none' to remove potential CSS border-top */}
                <section id="celebrities" className="celebrity-section" style={{ padding: '84px 0', border: 'none' }}>
                    <div className="container">
                        <h2 className="section-title center">CELEBRITY GUEST</h2>
                        <div className="celebrity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '36px' }}>
                            {[
                                { id: 1, type: "GUEST", hint: "" },
                                { id: 2, type: "GUEST", hint: "" },
                                { id: 3, type: "GUEST", hint: "" }
                            ].map(celeb => (
                                <motion.div
                                    key={celeb.id}
                                    whileHover={{ scale: 1.05 }}
                                    className="celebrity-card-premium"
                                    style={{
                                        background: 'transparent',
                                        borderRadius: '30px',
                                        padding: '40px 20px',
                                        textAlign: 'center',
                                        border: 'none',
                                        boxShadow: 'none',
                                        position: 'relative',
                                        overflow: 'visible',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div className="mystery-container" style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Curved Square Box Highlight */}
                                        <div style={{
                                            position: 'absolute',
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '40px',
                                            background: 'linear-gradient(45deg, #ff4d4d22, #ffb7c522)',
                                            border: '2px solid #ff4d4d',
                                            boxShadow: '0 0 30px rgba(255, 77, 77, 0.2)',
                                            transform: 'rotate(15deg)'
                                        }} />
                                        <div style={{
                                            position: 'absolute',
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '40px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            transform: 'rotate(-10deg)'
                                        }} />
                                        
                                        <div className="mystery-circle" style={{
                                            width: '150px',
                                            height: '150px',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '4rem',
                                            fontWeight: 900,
                                            color: '#ff4d4d',
                                            textShadow: '0 0 20px rgba(255, 77, 77, 0.4)',
                                            position: 'relative',
                                            zIndex: 1,
                                            backdropFilter: 'blur(5px)'
                                        }}>?</div>
                                    </div>
                                    <span style={{ color: '#ff4d4d', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px' }}>{celeb.type}</span>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '10px 0' }}>COMING SOON</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{celeb.hint}</p>
                                    <div className="reveal-btn" style={{
                                        marginTop: '20px',
                                        background: 'white',
                                        color: 'black',
                                        padding: '8px 20px',
                                        borderRadius: '50px',
                                        fontSize: '0.75rem',
                                        fontWeight: 900
                                    }}>REVEAL SOON</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* GLIMPSES SECTION */}
            <Glimpses />
        </div>
    );
};

export default Home;