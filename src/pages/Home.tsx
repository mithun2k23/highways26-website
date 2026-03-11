import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import HighwaysLogo from "../assets/highways-logo.png";

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
                    <div className="flex justify-center mb-12">
                        <img
                            src={HighwaysLogo}
                            alt="Highways Logo"
                            className="w-[95%] h-auto mx-auto"
                        />
                    </div>
                    <div className="hero-info">
                        <div className="premium-countdown">
                            {[
                                { value: timeLeft.days, label: 'DAYS' },
                                { value: timeLeft.hours, label: 'HOURS' },
                                { value: timeLeft.minutes, label: 'MINUTES' },
                                { value: timeLeft.seconds, label: 'SECONDS' }
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
                            <div className="about-highlights">
                                <div className="highlight"><i className="fas fa-bolt"></i> Pure Energy</div>
                                <div className="highlight"><i className="fas fa-palette"></i> Creative Soul</div>
                                <div className="highlight"><i className="fas fa-star"></i> Infinite Talent</div>
                            </div>
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
            <section id="glimpses" className="glimpses-section-new">
                <div className="container" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title center">PAST GLIMPSES</h2>
                </div>

                <div className="glimpses-track-container">
                    {/* Track 1: Slow */}
                    <div className="drift-track slow">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => (
                            <div key={`t1-${i}`} className="glimpse-frame">
                                <img src={`/assets/glimpses/${n}.${n === 8 || n === 9 || n === 10 || n === 11 ? 'png' : (n === 2 || n === 4 || n === 6 ? 'webp' : 'JPG')}`} alt="Highways" />
                            </div>
                        ))}
                    </div>

                    {/* Track 2: Medium (Opposite) */}
                    <div className="drift-track med">
                        {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((n, i) => (
                            <div key={`t2-${i}`} className="glimpse-frame">
                                <img src={`/assets/glimpses/${n}.png`} alt="Highways" />
                            </div>
                        ))}
                    </div>

                    {/* Track 3: Fast */}
                    <div className="drift-track fast">
                        {[23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33].map((n, i) => (
                            <div key={`t3-${i}`} className="glimpse-frame">
                                <img src={`/assets/glimpses/${n}.png`} alt="Highways" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
