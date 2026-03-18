import { useEffect, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/blocks/Hero';
import AboutH from '@/components/blocks/AboutH';
import AboutS from '@/components/blocks/AboutS';
import FAQ from '@/components/blocks/Faq';

const Glimpses = lazy(() => import('@/components/blocks/Glimpses'));

const HighwaysLogo = "/assets/logos/highways-logo.png";

const Home = () => {

    useEffect(() => {
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
        };
    }, []);

    return (
        <MainLayout>
            <Hero />
            <AboutH />

            {/* WRAPPER FOR ABOUT AND CELEBRITIES */}
            <div style={{
                position: 'relative'
            }}>
                {/* CELEBRITY GUESS SECTION */}
                <section id="celebrities" className="celebrity-section" style={{ padding: '100px 0 200px', border: 'none' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <span style={{ color: '#ff4d4d', fontSize: '1rem', fontWeight: 900, letterSpacing: '8px', display: 'block', marginBottom: '1rem' }}>LEGENDARY APPEARANCE</span>
                            <h2 className="section-title center mx-auto" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, lineHeight: 1.1 }}>CELEBRITY <span style={{ color: '#ff4d4d' }}>GUESTS</span></h2>
                        </div>
                        <div className="celebrity-grid w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                            {[
                                { id: 1, type: "MAIN GUEST", hint: "" },
                                { id: 2, type: "SPECIAL GUEST", hint: "" },
                                { id: 3, type: "PERFORMER", hint: "" }
                            ].map(celeb => (
                                <motion.div
                                    key={celeb.id}
                                    whileHover={{ y: -10 }}
                                    className="celebrity-card-premium"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '30px',
                                        padding: '40px 20px',
                                        textAlign: 'center',
                                        border: '1px solid rgba(255,77,77,0.1)',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <div className="mystery-container" style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                position: 'absolute',
                                                width: '140px',
                                                height: '140px',
                                                borderRadius: '35px',
                                                border: '2px dashed #ff4d4d',
                                                opacity: 0.3
                                            }}
                                        />
                                        <div style={{
                                            width: '110px',
                                            height: '110px',
                                            background: 'rgba(255,77,77,0.1)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '3.5rem',
                                            fontWeight: 900,
                                            color: '#ff4d4d',
                                            textShadow: '0 0 20px rgba(255, 77, 77, 0.5)',
                                            zIndex: 1
                                        }}>?</div>
                                    </div>
                                    <span style={{ color: '#ff4d4d', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '3px' }}>{celeb.type}</span>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '15px 0', color: 'white' }}>REVEALING SOON</h3>
                                    <div style={{
                                        marginTop: '20px',
                                        background: '#ff4d4d',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: 900,
                                        letterSpacing: '1px'
                                    }}>EXPECT THE UNEXPECTED</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* GLIMPSES SECTION */}
            <Glimpses />
            <AboutS />
            <FAQ />
        </MainLayout>
    );
};

export default Home;