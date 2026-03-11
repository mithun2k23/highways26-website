import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                backgroundPosition: 'center'
            }}>
                <div className="hero-content animate-fade">
                    <div className="flex justify-center mb-8 md:mb-12">
                        <img
                            src={HighwaysLogo}
                            alt="Highways Logo"
                            className="w-[95%] md:w-[85%] h-auto mx-auto"
                        />
                    </div>
                    <div className="hero-info">
                        <div className="premium-countdown">
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
                        <div className="date-badge">APRIL 09, 10, 11</div>
                        <p className="hero-tagline">WHERE TRADITION MEETS THE FUTURE</p>
                    </div>
                    <div className="hero-btns">
                        <Link to="/events" className="btn-matsuri">Explore More</Link>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section world-white" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="about-flex">
                        <div className="about-text">
                            <h2 className="section-title left">THE SAGA BEGINS</h2>
                            <p>Highways is the annual intercollegiate cultural festival of Sri Venkateswara College of Engineering (SVCE). Known for its vibrant atmosphere and creative energy, Highways brings together students from across the states to celebrate art, talent, and expression.</p>
                            <p>This year, for <strong>Highways '26</strong>, we are pushing the boundaries of creativity. Experience a festival like never before, where every moment is a masterpiece and every event is a step into the extraordinary.</p>

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
            <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="section-title center">CELEBRITY GUESS</h2>
                    <div className="celebrity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
                        {[
                            { id: 1, type: "ACTOR", hint: "From the blockbusters of Tamil Cinema" },
                            { id: 2, type: "SINGER", hint: "The voice that stole a million hearts" },
                            { id: 3, type: "COMEDIAN", hint: "Laughter is coming to SVCE" },
                            { id: 4, type: "GUEST", hint: "A legend in the making" }
                        ].map(celeb => (
                            <motion.div
                                key={celeb.id}
                                whileHover={{ scale: 1.05 }}
                                className="celebrity-card-premium"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '30px',
                                    padding: '40px 20px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                <div className="mystery-circle" style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto 20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    fontWeight: 900,
                                    color: '#ff4d4d',
                                    textShadow: '0 0 20px rgba(255, 77, 77, 0.4)'
                                }}>?</div>
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

            {/* GLIMPSES SECTION: INFINITE DRIFT */}
            <section id="glimpses" className="glimpses-section-new" style={{ position: 'relative' }}>
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-track-container" style={{ gap: '180px', marginTop: '100px' }}>
                    {[
                        { 
                            year: "2023", 
                            folder: "Highways 23", 
                            speed: "slow",
                            images: ['15.webp', '9.webp', '4.webp', '12.webp', '18.webp', '6.webp', '14.webp', '10.webp', '19.webp', '2.webp', '11.webp', '17.webp', '8.webp', '13.webp', '16.webp'] 
                        },
                        { 
                            year: "2024", 
                            folder: "Highways 24", 
                            speed: "med",
                            images: ['5.webp', '1.webp', '7.webp', '3.webp'] 
                        },
                        { 
                            year: "2025", 
                            folder: "Highways 25", 
                            speed: "fast",
                            images: ['31.webp', '24.webp', '20.webp', '28.webp', '33.webp', '22.webp', '26.webp', '30.webp', '21.webp', '29.webp', '25.webp', '32.webp', '23.webp', '27.webp'] 
                        }
                    ].map((track) => (
                        <div key={track.year} className="track-row-wrapper" style={{ 
                            position: 'relative'
                        }}>
                            {/* Cinematic Year Background Watermark */}
                            <div className="year-watermark" style={{
                                position: 'absolute',
                                left: '5%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: '12vw',
                                fontWeight: 950,
                                color: 'rgba(255,255,255,0.02)',
                                pointerEvents: 'none',
                                zIndex: 0,
                                fontFamily: "'Outfit', sans-serif"
                            }}>
                                {track.year}
                            </div>

                            {/* Floating Integrated Label - Aligned Left for all */}
                            <div className="floating-year-label" style={{
                                position: 'absolute',
                                left: '5%',
                                top: '-60px',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <div style={{ width: '40px', height: '1px', background: '#ff4d4d' }}></div>
                                <span style={{ 
                                    color: 'white', 
                                    fontWeight: 900, 
                                    fontSize: '1.5rem', 
                                    letterSpacing: '5px',
                                    textTransform: 'uppercase'
                                }}>
                                    <span style={{ color: '#ff4d4d' }}>HIGHWAYS</span> '{track.year.slice(2)}
                                </span>
                            </div>
                            
                            <div className="drift-track fast" style={{ zIndex: 1 }}>
                                {/* Repeat twice for a proper 50% loop */}
                                {[...track.images, ...track.images].map((img, i) => (
                                    <div key={`${track.year}-${i}`} className="glimpse-frame" style={{
                                        transform: i % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)'
                                    }}>
                                        <img src={`/assets/glimpses/${track.folder}/${img}`} alt={`Highways ${track.year}`} loading="eager" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
                    .track-row-wrapper {
                        transition: all 0.5s ease;
                    }
                    .track-row-wrapper:hover .year-watermark {
                        color: rgba(255, 77, 77, 0.05);
                        transform: translateY(-50%) scale(1.05);
                    }
                    .track-row-wrapper:hover .floating-year-label span {
                        color: #ff4d4d;
                        letter-spacing: 8px;
                    }
                    .track-row-wrapper:hover .floating-year-label div {
                        width: 80px;
                        background: white;
                    }
                    
                    @media (max-width: 768px) {
                        .premium-countdown { gap: 10px !important; }
                        .countdown-card { width: 70px !important; height: 90px !important; }
                        .countdown-number { font-size: 2rem !important; }
                        .countdown-label { font-size: 0.5rem !important; }
                        .hero-tagline { font-size: 0.8rem !important; letter-spacing: 4px !important; }
                        .hero-content { padding: 40px 15px !important; }
                        .about-flex { flex-direction: column !important; text-align: center; }
                        .about-text { margin-bottom: 3rem !important; }
                        .section-title.left { text-align: center !important; }
                        .section-title.left::after { left: 50% !important; transform: translateX(-50%) !important; }

                        .glimpses-track-container {
                            gap: 120px !important;
                        }
                        .floating-year-label {
                            left: 50% !important;
                            right: auto !important;
                            transform: translateX(-50%);
                            top: -40px !important;
                        }
                        .floating-year-label span { font-size: 1rem !important; }
                        .floating-year-label div { display: none; }
                        .year-watermark { display: none; }
                        .glimpse-frame {
                            height: 250px !important;
                            width: 180px !important;
                            transform: none !important;
                        }
                    }
                `}</style>
            </section>


        </div>
    );
};

export default Home;
