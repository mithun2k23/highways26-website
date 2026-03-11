import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

interface EventItem {
    time: string;
    category: string;
    title: string;
    location: string;
    image: string;
}

interface DayTheme {
    id: number;
    name: string;
    label: string;
    color: string;
    secondary: string;
    kanji: string;
    tagline: string;
    bgImage: string;
    style: 'organic' | 'cybernetic' | 'chaotic';
}

const dayThemes: DayTheme[] = [
    {
        id: 1,
        name: "IGNITION",
        label: "APRIL 09",
        color: "#ffb7c5",
        secondary: "#ffffff",
        kanji: "始",
        tagline: "WHERE THE ROAD BEGINS",
        bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
        style: 'organic'
    },
    {
        id: 2,
        name: "OVERDRIVE",
        label: "APRIL 10",
        color: "#00d2ff",
        secondary: "#000000",
        kanji: "速",
        tagline: "RIDING THE LIGHTNING",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        style: 'cybernetic'
    },
    {
        id: 3,
        name: "DESTINY",
        label: "APRIL 11",
        color: "#ff0000",
        secondary: "#ffffff",
        kanji: "終",
        tagline: "BEYOND THE HORIZON",
        bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
        style: 'chaotic'
    }
];

const scheduleEvents: Record<number, EventItem[]> = {
    1: [
        { time: "08:00 AM", category: "RITUAL", title: "THE AWAKENING CEREMONY", location: "CENTRAL SHRINE", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1000&auto=format&fit=crop" },
        { time: "10:00 AM", category: "MUSIC", title: "ZEN HARMONICS", location: "FLOWER GARDEN", image: "https://images.unsplash.com/photo-1514525253344-a812f020cff0?q=80&w=1000&auto=format&fit=crop" },
        { time: "12:30 PM", category: "DANCE", title: "PETAL DRIFT SOLO", location: "WATER STAGE", image: "https://images.unsplash.com/photo-1547153760-18fc21fca248?q=80&w=1000&auto=format&fit=crop" },
        { time: "03:00 PM", category: "TECH", title: "VIRTUAL NATURE SUMMIT", location: "HALL A", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" },
        { time: "05:00 PM", category: "ART", title: "BRUSH OF DESTINY", location: "GALLERY X", image: "https://images.unsplash.com/photo-1460661419201-fd4ce18a802f?q=80&w=1000&auto=format&fit=crop" },
        { time: "07:30 PM", category: "DRAMA", title: "MOONLIGHT ARCHIVES", location: "MAIN ARENA", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop" }
    ],
    2: [
        { time: "09:00 AM", category: "GAMING", title: "CYBERPUNK ARENA 1v1", location: "NEON SECTOR", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop" },
        { time: "11:30 AM", category: "TECH", title: "NEURAL NETWORK OPERA", location: "MAIN STAGE", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
        { time: "01:00 PM", category: "MUSIC", title: "SYNTH WAVE EXPLOSION", location: "SKY PLAZA", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" },
        { time: "04:30 PM", category: "DANCE", title: "GLITCH STEP BATTLE", location: "THE GRID", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop" },
        { time: "08:00 PM", category: "PRO SHOW", title: "DIGITAL DEITIES LIVE", location: "STADIUM 7", image: "https://images.unsplash.com/photo-1459749411177-042180ceea72?q=80&w=1000&auto=format&fit=crop" }
    ],
    3: [
        { time: "10:00 AM", category: "DRAMA", title: "THE FINAL REVENGE", location: "OPERA HOUSE", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop" },
        { time: "01:30 PM", category: "GAMING", title: "WORLD BOSS RAID", location: "COLISEUM", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" },
        { time: "04:00 PM", category: "SPEECH", title: "LEGACY ORATION", location: "HALL A", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop" },
        { time: "06:00 PM", category: "DANCE", title: "ETERNITY FINALE", location: "GRAND STAGE", image: "https://images.unsplash.com/photo-1547153760-18fc21fca248?q=80&w=1000&auto=format&fit=crop" },
        { time: "09:00 PM", category: "CELEBRATION", title: "BLOOD MOON CLOSING", location: "GRAND STADIUM", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop" }
    ]
};

const BackgroundElements = ({ theme }: { theme: DayTheme }) => {
    return (
        <div className="background-decorations" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${theme.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(1) brightness(0.08) contrast(1.1)',
                        opacity: 0.2
                    }}
                />
            </AnimatePresence>

            {/* Floating Kanji */}
            <motion.div
                key={theme.kanji}
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                animate={{ opacity: 0.05, scale: 1, x: 0 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                    fontSize: '30rem',
                    fontWeight: 900,
                    color: 'white',
                    fontFamily: '"Noto Sans JP", sans-serif'
                }}
            >
                {theme.kanji}
            </motion.div>

            {/* Glowing Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 80, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '20%', right: '10%', width: '600px', height: '600px', background: `radial-gradient(circle, ${theme.color}22 0%, transparent 70%)`, filter: 'blur(120px)' }}
            />

            <div className="grid-overlay" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
    );
};

const Schedule = () => {
    const isLocked = true;
    const [activeDay, setActiveDay] = useState(1);
    const springX = useSpring(0, { stiffness: 100, damping: 30 });
    const springY = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            springX.set(e.clientX - 400);
            springY.set(e.clientY - 400);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [springX, springY]);

    const activeTheme = useMemo(() => dayThemes.find(t => t.id === activeDay) || dayThemes[0], [activeDay]);
    const events = useMemo(() => scheduleEvents[activeDay], [activeDay]);

    return (
        <section className={`schedule-premium-page style-${activeTheme.style}`} style={{
            paddingTop: '180px',
            minHeight: '200vh',
            paddingBottom: '200px',
            background: activeDay === 3 ? '#0a0000' : (activeDay === 2 ? '#000a12' : '#030303'),
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 1.5s ease-in-out'
        }}>
            <BackgroundElements theme={activeTheme} />

            {/* Spotlight */}
            <motion.div style={{ position: 'fixed', width: '800px', height: '800px', background: `radial-gradient(circle, ${activeTheme.color}15 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, filter: 'blur(80px)', x: springX, y: springY }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <motion.div style={{ textAlign: 'center', marginBottom: '10rem' }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={activeDay} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 1 }}>
                            <span style={{ color: activeTheme.color, fontSize: '1rem', fontWeight: 900, letterSpacing: '12px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>{activeTheme.tagline}</span>
                            <h1 style={{
                                fontSize: 'clamp(5rem, 15vw, 12rem)',
                                fontWeight: 950,
                                textTransform: 'uppercase',
                                letterSpacing: activeTheme.id === 1 ? '15px' : (activeTheme.id === 3 ? '-10px' : '-4px'),
                                lineHeight: 0.8,
                                color: 'white'
                            }}>
                                THE <span style={{ color: activeTheme.color }}>CHRONIC</span>
                            </h1>
                            <h2 style={{ fontSize: '3vw', fontWeight: 900, letterSpacing: '20px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginTop: '1rem' }}>SAGA OF EVENTS</h2>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Day Controls */}
                <div className="day-navigator-schedule" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '12rem', position: 'relative', zIndex: 20 }}>
                    {dayThemes.map((day) => (
                        <motion.button
                            key={day.id}
                            onClick={() => setActiveDay(day.id)}
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: activeDay === day.id ? day.color : 'rgba(255,255,255,0.02)',
                                color: activeDay === day.id ? day.secondary : 'rgba(255,255,255,0.4)',
                                border: `1px solid ${activeDay === day.id ? day.color : 'rgba(255,255,255,0.05)'}`,
                                padding: '2rem 3.5rem',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: '280px',
                                transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
                                backdropFilter: 'blur(30px)',
                                boxShadow: activeDay === day.id ? `0 30px 60px ${day.color}33` : 'none'
                            }}
                        >
                            <span style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '5px', opacity: 0.6, marginBottom: '0.6rem' }}>{day.label}</span>
                            <span style={{ fontSize: '1.8rem', fontWeight: 950 }}>{day.name}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Interactive Timeline Wrapper with Lock */}
                <div style={{ position: 'relative' }}>
                    {isLocked && (
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(3,3,3,0.5)',
                            backdropFilter: 'blur(30px)',
                            textAlign: 'center',
                            padding: '4rem',
                            borderRadius: '50px',
                            minHeight: '600px'
                        }}>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                                <i className="fas fa-lock" style={{ fontSize: '4rem', color: activeTheme.color, marginBottom: '2rem', display: 'block', opacity: 0.5 }}></i>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 950, color: 'white', letterSpacing: '-2px', textTransform: 'uppercase', marginBottom: '1rem' }}>CHRONIC PAUSED</h2>
                                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>The pages will be released soon</p>
                                <div style={{ marginTop: '3rem', height: '2px', width: '200px', background: `linear-gradient(to right, transparent, ${activeTheme.color}, transparent)`, margin: '3rem auto' }}></div>
                            </motion.div>
                        </div>
                    )}

                    <div style={{ opacity: isLocked ? 0 : 1, pointerEvents: isLocked ? 'none' : 'auto', visibility: isLocked ? 'hidden' : 'visible', height: isLocked ? '600px' : 'auto', overflow: 'hidden' }}>
                        <div className="timeline-orchestra" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                            {/* Central Line */}
                            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: `linear-gradient(to bottom, transparent, ${activeTheme.color}33, transparent)`, transform: 'translateX(-50%)' }} />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDay}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    {events.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                                paddingRight: index % 2 === 0 ? '50%' : '0',
                                                paddingLeft: index % 2 !== 0 ? '50%' : '0',
                                                marginBottom: '10rem',
                                                position: 'relative'
                                            }}
                                        >
                                            {/* Time Marker */}
                                            <div style={{
                                                position: 'absolute',
                                                left: '50%',
                                                top: '40px',
                                                transform: 'translateX(-50%)',
                                                zIndex: 10
                                            }}>
                                                <div style={{ width: '120px', textAlign: 'center' }}>
                                                    <span style={{ color: activeTheme.color, fontWeight: 950, fontSize: '0.8rem', letterSpacing: '2px', background: '#030303', padding: '5px 15px', borderRadius: '100px', border: `1px solid ${activeTheme.color}44` }}>
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Event Card */}
                                            <motion.div
                                                whileHover={{ y: -10, scale: 1.02 }}
                                                style={{
                                                    width: '90%',
                                                    maxWidth: '450px',
                                                    background: 'rgba(255,255,255,0.01)',
                                                    borderRadius: '40px',
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(255,255,255,0.04)',
                                                    backdropFilter: 'blur(20px)',
                                                    padding: '2rem'
                                                }}
                                            >
                                                <div style={{ height: '300px', borderRadius: '30px', overflow: 'hidden', marginBottom: '2rem' }}>
                                                    <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div>
                                                    <span style={{ color: activeTheme.color, fontSize: '0.7rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase' }}>{event.category}</span>
                                                    <h3 style={{ fontSize: '2rem', fontWeight: 950, color: 'white', margin: '0.8rem 0', lineHeight: 1.1 }}>{event.title}</h3>
                                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                        <i className="fas fa-map-marker-alt" style={{ color: activeTheme.color }}></i> {event.location}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty Space Filling Decorative Headers */}
            <div style={{ position: 'absolute', top: '25%', left: '-5%', opacity: 0.03, pointerEvents: 'none' }}>
                <span style={{ fontSize: '25vw', fontWeight: 950, color: 'white', letterSpacing: '-20px' }}>SCHEDULE</span>
            </div>
            <div style={{ position: 'absolute', bottom: '15%', right: '-5%', opacity: 0.03, pointerEvents: 'none' }}>
                <span style={{ fontSize: '20vw', fontWeight: 950, color: 'white', letterSpacing: '-15px' }}>TIMELINE</span>
            </div>

            <style>{`
                .container { max-width: 1700px !important; width: 95%; margin: 0 auto; }
                
                /* Typography & Vibe Shifts */
                .style-organic h1 { font-family: 'Sawarabi Mincho', serif; font-weight: 400; letter-spacing: 20px; text-shadow: 0 0 30px rgba(255,183,197,0.2); }
                .style-cybernetic h1 { font-family: 'Outfit', sans-serif; skew: -5deg; text-shadow: 0 0 40px rgba(0,210,255,0.4); }
                .style-chaotic h1 { letter-spacing: -15px; filter: contrast(1.2) brightness(1.2); }

                .day-navigator-schedule::-webkit-scrollbar { display: none; }
                .day-navigator-schedule { -ms-overflow-style: none; scrollbar-width: none; }

                @media (max-width: 1024px) {
                    .timeline-orchestra { padding: 0 2rem; }
                    .timeline-orchestra > div > div { padding-left: 0 !important; padding-right: 0 !important; justify-content: flex-start !important; margin-left: 40px; }
                    .timeline-orchestra div[style*="left: 50%"] { left: 0 !important; transform: none !important; }
                    
                    /* Adjust markers for left-aligned timeline */
                    .timeline-orchestra div[style*="left: 50%"][style*="zIndex: 10"] {
                        left: -50px !important;
                    }

                    .day-navigator-schedule { 
                        justify-content: flex-start !important; 
                        overflow-x: auto !important; 
                        padding: 0 2rem 2rem !important;
                        gap: 1.5rem !important;
                    }
                    .day-navigator-schedule button { min-width: 240px !important; flex-shrink: 0; }
                }

                @media (max-width: 768px) {
                    .schedule-premium-page { padding-top: 100px !important; }
                    .schedule-premium-page h1 { font-size: 3.5rem !important; letter-spacing: 2px !important; }
                    .schedule-premium-page h2 { font-size: 1.2rem !important; letter-spacing: 5px !important; }
                    
                    .timeline-orchestra { padding: 0 1.5rem !important; }
                    .timeline-orchestra > div > div { margin-left: 30px !important; margin-bottom: 6rem !important; }
                    
                    .timeline-orchestra div[style*="left: 50%"][style*="zIndex: 10"] {
                        left: -15px !important;
                        top: 20px !important;
                    }
                    .timeline-orchestra div[style*="width: 120px"] span {
                        font-size: 0.6rem !important;
                        padding: 4px 10px !important;
                    }

                    .timeline-orchestra div[style*="borderRadius: 40px"] {
                        border-radius: 24px !important;
                        padding: 1.5rem !important;
                    }
                    .timeline-orchestra div[style*="height: 300px"] {
                        height: 200px !important;
                        border-radius: 20px !important;
                    }
                }

                @keyframes scanline { 0% { top: -100%; } 100% { top: 100%; } }
                .style-cybernetic::after { 
                    content: ''; position: fixed; inset: 0; 
                    background: linear-gradient(to bottom, transparent, transparent 50%, rgba(0,210,255,0.02) 50%, rgba(0,210,255,0.02)); 
                    background-size: 100% 4px; z-index: 10; pointer-events: none; 
                }
            `}</style>
        </section>
    );
};

export default Schedule;
