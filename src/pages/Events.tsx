import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

interface POC {
    name: string;
    phone: string;
}

interface EventDetail {
    id: number;
    title: string;
    category: string;
    day: number;
    date: string;
    time: string;
    location: string;
    color: string;
    image: string;
    description: string;
    rules: string[];
    prizePool: string;
    regType: 'Free' | 'Paid';
    regFee?: string;
    teamSize: 'Solo' | 'Group' | 'Solo/Group';
    pocs: POC[];
}

const generateEvents = (): EventDetail[] => {
    const categories = ["Music", "Dance", "Drama", "Gaming", "Tech", "Art", "Craft", "Speech"];
    const colors = ["#ffb7c5", "#00d2ff", "#ff0000"];
    const events: EventDetail[] = [];

    for (let day = 1; day <= 3; day++) {
        for (let i = 1; i <= 15; i++) {
            const id = (day - 1) * 15 + i;
            const cat = categories[Math.floor(Math.random() * categories.length)];
            events.push({
                id,
                title: `${cat} Challenge ${i}`,
                category: cat,
                day,
                date: `March ${day + 15}, 2026`,
                time: `${9 + (i % 8)}:00 ${i < 4 ? 'AM' : 'PM'}`,
                location: `Sector ${String.fromCharCode(65 + i)}`,
                color: colors[day - 1],
                image: `https://images.unsplash.com/photo-${1500000000000 + id}?q=80&w=1000&auto=format&fit=crop`,
                description: `Experience the ultimate ${cat.toLowerCase()} showdown. Compete with the best talents and showcase your skills in this high-energy environment.`,
                rules: [
                    "Participants must record their presence 30 mins before the start.",
                    "No external materials allowed unless specified.",
                    "Decision of judges will be final and binding.",
                    "Strict adherence to time limits is required."
                ],
                prizePool: "₹" + (Math.floor(Math.random() * 5 + 1) * 5000),
                regType: i % 3 === 0 ? 'Paid' : 'Free',
                regFee: i % 3 === 0 ? '₹200' : undefined,
                teamSize: i % 2 === 0 ? 'Solo' : 'Group',
                pocs: [
                    { name: "Alex Chen", phone: "+91 98765 43210" },
                    { name: "Sarah J.", phone: "+91 87654 32109" }
                ]
            });
        }
    }
    return events;
};

const allEvents = generateEvents();

const categoriesList = ["All", "Music", "Dance", "Drama", "Gaming", "Tech", "Art", "Craft", "Speech"];
const dayThemes = [
    {
        id: 0,
        name: "FULL SAGA",
        label: "THE ROAD",
        color: "#ffffff",
        kanji: "路",
        bgImage: "https://images.unsplash.com/photo-1534149764508-857d40fec6ed?q=80&w=2000&auto=format&fit=crop",
        tagline: "THE COMPLETE JOURNEY",
        style: "geometric"
    },
    {
        id: 1,
        name: "IGNITION",
        label: "THE SPARK",
        color: "#ffb7c5",
        kanji: "始",
        bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
        tagline: "WHERE THE ROAD BEGINS",
        style: "organic"
    },
    {
        id: 2,
        name: "OVERDRIVE",
        label: "THE VELOCITY",
        color: "#00d2ff",
        kanji: "速",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        tagline: "RIDING THE LIGHTNING",
        style: "cybernetic"
    },
    {
        id: 3,
        name: "DESTINY",
        label: "THE LEGEND",
        color: "#ff0000",
        kanji: "終",
        bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
        tagline: "BEYOND THE HORIZON",
        style: "chaotic"
    }
];

const EventModal = ({ event, isOpen, onClose }: { event: EventDetail | null, isOpen: boolean, onClose: () => void }) => {
    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(15px)' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '1000px',
                            maxHeight: '90vh',
                            background: '#0a0a0a',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'row',
                            border: `1px solid ${event.color}33`,
                            boxShadow: `0 30px 100px -20px rgba(0,0,0,1), 0 0 50px ${event.color}11`
                        }}
                    >
                        {/* Left Side: Image */}
                        <div style={{ width: '40%', position: 'relative', overflow: 'hidden' }}>
                            <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, transparent, #0a0a0a)` }} />
                            <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
                                <span style={{ background: 'rgba(0,0,0,0.8)', padding: '8px 20px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 900, color: event.color }}>CHAPTER 0{event.day}</span>
                            </div>
                        </div>

                        {/* Right Side: Details */}
                        <div className="modal-scroll-area" style={{ width: '60%', padding: '4rem', overflowY: 'auto', position: 'relative' }}>
                            {/* Premium Close Button */}
                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    position: 'absolute',
                                    top: '25px',
                                    right: '25px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'white',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 100,
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                                }}
                            >
                                <i className="fas fa-times" style={{ fontSize: '1.2rem' }}></i>
                            </motion.button>

                            <span style={{ color: event.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase' }}>{event.category}</span>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 950, margin: '1rem 0', color: 'white', lineHeight: 0.9 }}>{event.title}</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Venue</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.location}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Time & Date</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.time} | {event.date}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Registration</p>
                                    <p style={{ color: event.regType === 'Free' ? '#4ade80' : event.color, fontWeight: 700 }}>{event.regType} {event.regFee && `(${event.regFee})`}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Team Format</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.teamSize}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: event.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem' }}>DESCRIPTION</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{event.description}</p>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: event.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem' }}>RULES & GUIDELINES</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {event.rules.map((rule, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                                            <span style={{ color: event.color }}>0{i + 1}</span> {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem', background: `linear-gradient(45deg, ${event.color}22, transparent)`, padding: '2rem', borderRadius: '24px', borderLeft: `4px solid ${event.color}` }}>
                                <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '0.5rem' }}>TOTAL PRIZE POOL</h4>
                                <p style={{ fontSize: '2.5rem', fontWeight: 950, color: 'white' }}>{event.prizePool}</p>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: event.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem' }}>CONTACT ORGANIZERS</h4>
                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    {event.pocs.map((poc, i) => (
                                        <div key={i}>
                                            <p style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>{poc.name}</p>
                                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{poc.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: event.color, color: (event.day === 2 || event.day === 0) ? 'black' : 'white' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    width: '100%',
                                    background: event.color,
                                    color: (event.day === 2 || event.day === 0) ? 'black' : 'white',
                                    border: 'none',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    fontWeight: 950,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '4px',
                                    textTransform: 'uppercase'
                                }}
                            >
                                PROCEED TO REGISTER
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const BackgroundElements = ({ themeColor, activeKanji, dayId }: { themeColor: string, activeKanji: string, dayId: number }) => {
    return (
        <div className="background-decorations" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={dayId}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${dayThemes[dayId].bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(1) brightness(0.08) contrast(1.1)',
                        opacity: 0.2
                    }}
                />
            </AnimatePresence>

            {/* Chapter Specific Overlay Layers */}
            <AnimatePresence mode="wait">
                {dayId === 1 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 10%, rgba(255,183,197,0.05) 0%, transparent 50%)' }}
                    />
                )}
                {dayId === 2 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="cyber-grid"
                        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,210,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
                    />
                )}
                {dayId === 3 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at bottom, rgba(255,0,0,0.1) 0%, transparent 70%)' }}
                    />
                )}
            </AnimatePresence>

            <motion.div animate={{ x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '5%', right: '5%', width: '500px', height: '500px', background: `radial-gradient(circle, ${themeColor}22 0%, transparent 70%)`, filter: 'blur(100px)' }} />

            <motion.div key={activeKanji} initial={{ opacity: 0, scale: 0.8, x: -100 }} animate={{ opacity: 0.05, scale: 1, x: 0 }} transition={{ duration: 2 }}
                style={{ position: 'absolute', top: '15%', left: '5%', fontSize: '25rem', fontWeight: 900, color: 'white', fontFamily: '"Noto Sans JP", sans-serif' }}>
                {activeKanji}
            </motion.div>

            <div className="grid-overlay" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
    );
};

const Events = () => {
    const [filter, setFilter] = useState({ category: "All", day: 0 });
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, -120]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const activeTheme = useMemo(() => {
        return dayThemes.find(t => t.id === filter.day) || dayThemes[0];
    }, [filter.day]);

    const filteredEvents = useMemo(() => {
        return allEvents.filter(event => {
            const categoryMatch = filter.category === "All" || event.category === filter.category;
            const dayMatch = filter.day === 0 || event.day === filter.day;
            return categoryMatch && dayMatch;
        });
    }, [filter]);

    const handleOpenModal = (event: EventDetail) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <section className={`events-cinematic-page style-${activeTheme.style}`} style={{
            paddingTop: '150px',
            minHeight: '100vh',
            paddingBottom: '150px',
            background: filter.day === 3 ? '#080000' : (filter.day === 2 ? '#000810' : '#030303'),
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 1.5s ease-in-out'
        }}>
            <BackgroundElements themeColor={activeTheme.color} activeKanji={activeTheme.kanji} dayId={filter.day} />

            <motion.div style={{ position: 'fixed', width: '800px', height: '800px', background: `radial-gradient(circle, ${activeTheme.color}10 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)', x: springX, y: springY }} />

            <div className="container">
                <motion.div className="events-header-premium" style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', y: yHero, opacity: opacityHero }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={filter.day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
                            <span style={{ color: activeTheme.color, fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '1rem', letterSpacing: '8px' }}>{activeTheme.tagline}</span>
                            <h1 style={{
                                fontSize: 'clamp(5rem, 15vw, 10rem)',
                                fontWeight: 950,
                                textTransform: 'uppercase',
                                letterSpacing: filter.day === 1 ? '10px' : (filter.day === 3 ? '-8px' : '-4px'),
                                lineHeight: 0.8,
                                transition: 'all 1s ease'
                            }}>
                                EVENT <span style={{ color: activeTheme.color, transition: 'all 1s ease' }}>SAGA</span>
                            </h1>
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ position: 'absolute', width: '200%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                        <span style={{ fontSize: '20vw', fontWeight: 950, color: 'transparent', WebkitTextStroke: `2px ${activeTheme.color}`, opacity: 0.3, transition: 'all 1.5s ease' }}>{activeTheme.name}</span>
                    </div>
                </motion.div>

                {/* Day Chapters */}
                <div className="day-navigator" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '6rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
                    {dayThemes.map((day) => (
                        <motion.button key={day.id} onClick={() => setFilter(prev => ({ ...prev, day: day.id }))} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                            style={{
                                background: filter.day === day.id ? day.color : 'rgba(255,255,255,0.02)',
                                color: filter.day === day.id ? (day.id === 0 || day.id === 2 ? '#000000' : '#ffffff') : 'rgba(255,255,255,0.4)',
                                border: `1px solid ${filter.day === day.id ? day.color : 'rgba(255,255,255,0.05)'}`,
                                padding: '1.5rem 2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', backdropFilter: 'blur(20px)', boxShadow: filter.day === day.id ? `0 20px 40px ${day.color}44` : 'none'
                            }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '3px', opacity: 0.6, marginBottom: '0.4rem' }}>{day.label}</span>
                            <span style={{ fontSize: '1.4rem', fontWeight: 950 }}>{day.name}</span>
                        </motion.button>
                    ))}
                </div>

                <div className="classification-carousel" style={{ marginBottom: '8rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none' }}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', minWidth: 'max-content', padding: '0 2rem' }}>
                        {categoriesList.map(c => (
                            <motion.button key={c} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFilter(prev => ({ ...prev, category: c }))}
                                style={{
                                    background: filter.category === c ? 'white' : 'rgba(255,255,255,0.03)',
                                    color: filter.category === c ? 'black' : 'rgba(255,255,255,0.6)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '0.8rem 2.5rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: 'all 0.4s ease', letterSpacing: '1px', textTransform: 'uppercase'
                                }}>{c}</motion.button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="events-grid-system" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.div layout key={event.id} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, margin: "-20px" }} transition={{ duration: 0.6, delay: (index % 4) * 0.1 }} className="event-premium-card"
                                style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '480px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}>
                                <div className="card-visual-header" style={{ height: '55%', position: 'relative', overflow: 'hidden' }}>
                                    <motion.img whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }} src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                                        <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '5px 15px', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 950, color: 'white' }}>CH 0{event.day}</div>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 10%, transparent 100%)' }} />
                                </div>
                                <div className="card-content-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
                                            <span style={{ color: event.color, fontSize: '0.65rem', fontWeight: 950, letterSpacing: '4px', textTransform: 'uppercase' }}>{event.category}</span>
                                            <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${event.color}44, transparent)` }} />
                                        </div>
                                        <h3 style={{ fontSize: '1.6rem', fontWeight: 950, margin: '0.3rem 0 1rem', color: 'white', lineHeight: 1.1 }}>{event.title}</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 700 }}>
                                            <span><i className="far fa-clock" style={{ color: event.color }}></i> {event.time}</span>
                                            <span><i className="fas fa-map-marker-alt" style={{ color: event.color }}></i> {event.location}</span>
                                        </div>
                                    </div>
                                    <motion.button onClick={() => handleOpenModal(event)} whileHover={{ scale: 1.02, backgroundColor: event.color, color: (event.day === 2 || event.day === 0) ? 'black' : 'white' }} whileTap={{ scale: 0.98 }}
                                        style={{ background: 'rgba(255,255,255,0.03)', color: 'white', border: `1px solid ${event.color}44`, padding: '1rem', borderRadius: '15px', fontWeight: 950, fontSize: '0.75rem', marginTop: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                        VIEW DETAILS
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <style>{`
                .container { max-width: 1700px !important; width: 95%; margin: 0 auto; }
                .event-premium-card:hover { border-color: ${activeTheme.color}66 !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 40px ${activeTheme.color}15; transform: translateY(-8px) !important; }
                
                /* Mobile Navigation Scrollbar Hiding */
                .day-navigator::-webkit-scrollbar, .classification-carousel::-webkit-scrollbar { display: none; }
                .day-navigator, .classification-carousel { -ms-overflow-style: none; scrollbar-width: none; }

                /* Style-specific typography */
                .style-organic h1 { font-family: 'Sawarabi Mincho', serif; font-weight: 400; letter-spacing: 12px; }
                .style-cybernetic h1 { font-family: 'Outfit', sans-serif; font-weight: 900; skew: -5deg; text-shadow: 0 0 20px ${activeTheme.color}44; }
                .style-chaotic h1 { font-weight: 950; letter-spacing: -10px; filter: contrast(1.5); }

                @media (max-width: 1400px) { .events-grid-system { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 1024px) { .events-grid-system { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; } }
                
                @media (max-width: 768px) {
                    .events-cinematic-page { padding-top: 100px !important; padding-bottom: 80px !important; }
                    .events-header-premium { margin-bottom: 4rem !important; }
                    .events-header-premium h1 { font-size: 3.5rem !important; letter-spacing: 2px !important; }
                    .events-header-premium span { font-size: 0.7rem !important; letter-spacing: 4px !important; }
                    
                    .day-navigator { 
                        justify-content: flex-start !important; 
                        overflow-x: auto !important; 
                        padding: 0 1.5rem 1rem !important; 
                        gap: 1rem !important;
                        -webkit-overflow-scrolling: touch;
                    }
                    .day-navigator button { min-width: 200px !important; padding: 1.2rem !important; }
                    
                    .classification-carousel { margin-bottom: 4rem !important; }
                    .classification-carousel > div { justify-content: flex-start !important; padding: 0 1.5rem !important; }

                    .events-grid-system { 
                        grid-template-columns: repeat(2, 1fr) !important; 
                        gap: 1rem !important; 
                        padding: 0 1rem !important;
                    }
                    .event-premium-card { height: 400px !important; border-radius: 18px !important; }
                    .card-content-body { padding: 1rem !important; }
                    .card-content-body h3 { font-size: 1.1rem !important; line-height: 1.2 !important; margin: 0.5rem 0 !important; }
                    .card-content-body span { font-size: 0.6rem !important; letter-spacing: 2px !important; }
                    .card-content-body div[style*="fontSize: '0.8rem'"] { font-size: 0.65rem !important; }
                    .event-premium-card button { padding: 0.6rem !important; font-size: 0.6rem !important; margin-top: 1rem !important; }

                    /* Modal Mobile Polish */
                    .modal-overlay { padding: 0 !important; }
                    .modal-overlay > div:last-child { 
                        flex-direction: column !important; 
                        height: 100vh !important; 
                        max-height: 100vh !important;
                        border-radius: 0 !important;
                        border: none !important;
                    }
                    .modal-overlay > div:last-child > div:first-child { width: 100% !important; height: 35vh !important; min-height: 35vh !important; }
                    .modal-overlay > div:last-child > div:last-child { width: 100% !important; padding: 2rem !important; }
                    .modal-overlay h2 { font-size: 2.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Events;
