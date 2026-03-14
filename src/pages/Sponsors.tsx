import { motion } from 'framer-motion';

const sponsorsData = [
    { name: "Greenstar", tier: "Special Sponsor", logo: "https://api.dicebear.com/7.x/initials/svg?seed=GS", desc: "Official Special Sponsor." },
    { name: "Gamistry", tier: "Event Sponsor", logo: "https://api.dicebear.com/7.x/initials/svg?seed=GM", desc: "Powering the events." },
    { name: "Zebronics", tier: "Event Sponsor", logo: "https://api.dicebear.com/7.x/initials/svg?seed=ZB", desc: "Elevating the experience." },
    { name: "Xmold Polymers", tier: "Sponsor", logo: "https://api.dicebear.com/7.x/initials/svg?seed=XP", desc: "Proud sponsor of Highways'26." }
];

const Sponsors = () => {
    return (
        <section className="sponsors-page">
            <div className="sponsors-container">
                <div className="sponsors-header">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="sponsors-uptitle"
                    >
                        THE PATRONS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="sponsors-title"
                    >
                        THE PILLARS OF HIGHWAYS
                    </motion.h1>
                    <p className="sponsors-subtitle">Empowering the spirit of cultural fusion and artistic expression.</p>
                </div>

                <div className="sponsors-showcase">
                    {sponsorsData.map((sponsor, idx) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="sponsor-card"
                        >
                            <div className="sponsor-logo-wrap">
                                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                                <div className="sponsor-tier-badge">{sponsor.tier}</div>
                            </div>
                            <div className="sponsor-info">
                                <h3>{sponsor.name}</h3>
                                <p>{sponsor.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="sponsor-cta">
                    <div className="cta-glass">
                        <h2>BECOME A PATRON</h2>
                        <p>Join our journey to create the most immersive Japanese Carnival experience in Southern India.</p>
                        <a href="mailto:highways@svce.ac.in" className="cta-btn">GET IN TOUCH</a>
                    </div>
                </div>
            </div>

            <style>{`
                .sponsors-page {
                    min-height: 100vh;
                    background: #050505;
                    padding: 150px 0 100px;
                    color: white;
                }

                .sponsors-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 5%;
                }

                .sponsors-header {
                    text-align: center;
                    margin-bottom: 6rem;
                }

                .sponsors-uptitle {
                    font-size: 0.8rem;
                    letter-spacing: 5px;
                    color: #ff0000;
                    font-weight: 800;
                    display: block;
                    margin-bottom: 1rem;
                }

                .sponsors-title {
                    font-size: 4rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .sponsors-title .highlight {
                    color: #ff0000;
                }

                .sponsors-subtitle {
                    color: rgba(255,255,255,0.4);
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .sponsors-showcase {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                    margin-bottom: 8rem;
                }

                .sponsor-card {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 20px;
                    padding: 3rem 2rem;
                    text-align: center;
                    transition: all 0.4s ease;
                    backdrop-filter: blur(10px);
                }

                .sponsor-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: #ff0000;
                    transform: translateY(-10px);
                }

                .sponsor-logo-wrap {
                    position: relative;
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: center;
                }

                .sponsor-logo {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    filter: grayscale(1) brightness(1.5);
                    transition: all 0.4s ease;
                }

                .sponsor-card:hover .sponsor-logo {
                    filter: grayscale(0);
                    transform: scale(1.1);
                }

                .sponsor-tier-badge {
                    position: absolute;
                    bottom: -10px;
                    background: #ff0000;
                    color: white;
                    padding: 0.4rem 1rem;
                    border-radius: 4px;
                    font-size: 0.6rem;
                    font-weight: 900;
                    letter-spacing: 1px;
                }

                .sponsor-info h3 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 0.8rem;
                }

                .sponsor-info p {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                .sponsor-cta {
                    display: flex;
                    justify-content: center;
                }

                .cta-glass {
                    background: linear-gradient(135deg, rgba(255,0,0,0.1), rgba(0,0,0,0.1));
                    border: 1px solid rgba(255,0,0,0.2);
                    padding: 4rem;
                    border-radius: 30px;
                    text-align: center;
                    max-width: 800px;
                    backdrop-filter: blur(20px);
                }

                .cta-glass h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .cta-glass p {
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 2.5rem;
                    font-size: 1.1rem;
                }

                .cta-btn {
                    display: inline-block;
                    padding: 1.2rem 3rem;
                    background: #ff0000;
                    color: white;
                    text-decoration: none;
                    font-weight: 900;
                    border-radius: 12px;
                    letter-spacing: 2px;
                    transition: all 0.3s ease;
                }

                .cta-btn:hover {
                    box-shadow: 0 0 30px rgba(255,0,0,0.5);
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .sponsors-title { font-size: 2.5rem; }
                    .cta-glass { padding: 3rem 1.5rem; }
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
