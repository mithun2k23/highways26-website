import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { applyCursorTheme } from '../lib/cursorTheme';
import background from '../background.jpg';

import { allEvents } from '../data/eventsData';
import type { EventDetail } from '../data/eventsData';


const categoriesList = ["All", "Music and Dance", "Quizzing, Debate and Literary", "Performance Arts", "Cinematic and Visual Arts", "Quizzes and Entertainment", "Innovation, Tech and Gaming"];
const dayThemes = [
  {
    id: 1,
    name: "Peace",
    label: "THE SPARK",
    color: "#e8729a",
    kanji: "始",
    bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
    tagline: "WHERE THE ROAD BEGINS",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#1c0f14"
  },
  {
    id: 2,
    name: "Balance",
    label: "THE VELOCITY",
    color: "#f5e6c8",
    kanji: "速",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    tagline: "RIDING THE LIGHTNING",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#1c0f14"
  },
  {
    id: 3,
    name: "Inversion",
    label: "THE LEGEND",
    color: "#ff0000",
    kanji: "終",
    bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
    tagline: "BEYOND THE HORIZON",
    style: "cybernetic",
    displayFont: '"Orbitron", sans-serif',
    bodyFont: '"Rajdhani", sans-serif',
    buttonText: "#ffffff"
  }
];

const EventModal = ({ event, isOpen, onClose, activeTheme }: { event: EventDetail | null, isOpen: boolean, onClose: () => void, activeTheme: (typeof dayThemes)[number] }) => {
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
            className="event-modal-container"
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
              border: `1px solid ${activeTheme.color}33`,
              boxShadow: `0 30px 100px -20px rgba(0,0,0,1), 0 0 50px ${activeTheme.color}11`,
              fontFamily: activeTheme.bodyFont
            }}
          >
            {/* Premium Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.08, backgroundColor: activeTheme.color, color: activeTheme.buttonText }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close event details"
              style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                background: 'rgba(0,0,0,0.72)',
                border: `1px solid ${activeTheme.color}66`,
                color: activeTheme.color,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 10px 20px rgba(0,0,0,0.5), 0 0 16px ${activeTheme.color}33`,
                fontSize: '2rem',
                fontWeight: 800,
                lineHeight: 1,
                fontFamily: activeTheme.displayFont,
                textShadow: '0 1px 2px rgba(0,0,0,0.6)'
              }}
            >
              <span aria-hidden="true">×</span>
            </motion.button>

            {/* Details panel - now full width since images are removed */}
            <div className="event-modal-content-panel modal-scroll-area" style={{ width: '100%', padding: 'clamp(2rem, 8vw, 4rem)', overflowY: 'auto', position: 'relative' }}>
              <span style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>{event.category}</span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 950, margin: '1rem 0', color: 'white', lineHeight: 0.9, fontFamily: activeTheme.displayFont }}>{event.title}</h2>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch', marginBottom: '2rem' }}>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: activeTheme.color, color: activeTheme.buttonText }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    flex: 1,
                    background: activeTheme.color,
                    color: activeTheme.buttonText,
                    border: 'none',
                    padding: '1.2rem',
                    borderRadius: '20px',
                    fontWeight: 950,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: activeTheme.displayFont
                  }}
                >
                  REGISTER NOW
                </motion.button>
                {event.prizePool && event.prizePool !== "" && (
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '1rem 1.5rem', 
                    borderRadius: '20px', 
                    border: `1px solid ${activeTheme.color}44`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>PRIZE POOL</span>
                    <span style={{ color: 'white', fontWeight: 950, fontSize: '1.4rem', lineHeight: 1 }}>{event.prizePool}</span>
                  </div>
                )}
              </div>

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
                  <p style={{ color: event.regType === 'Free' ? '#4ade80' : activeTheme.color, fontWeight: 700 }}>{event.regType} {event.regFee && `(${event.regFee})`}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Team Format</p>
                  <p style={{ color: 'white', fontWeight: 700 }}>{event.teamSize}</p>
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>DESCRIPTION</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{event.description}</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>RULES & GUIDELINES</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {event.rules.map((rule, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                      <span style={{ color: activeTheme.color }}>0{i + 1}</span> {rule}
                    </li>
                  ))}
                </ul>
              </div>



              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>CONTACT ORGANIZERS</h4>
                <div style={{ display: 'flex', gap: '3rem' }}>
                  {event.pocs.map((poc, i) => (
                    <div key={i}>
                      <p style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>{poc.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{poc.phone}</p>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};



const Events = () => {
  const isLocked = false;
  const [filter, setFilter] = useState({ category: "All", day: 1 });
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

  useEffect(() => {
    applyCursorTheme({ accent: activeTheme.color });
  }, [activeTheme.color]);

  const filteredEvents = useMemo(() => {
    const categoryOrder = [
      "Music and Dance",
      "Quizzing, Debate and Literary",
      "Performance Arts",
      "Cinematic and Visual Arts",
      "Quizzes and Entertainment",
      "Innovation, Tech and Gaming"
    ];

    return allEvents
      .filter(event => {
        const categoryMatch = filter.category === "All" || event.category === filter.category;
        const dayMatch = filter.day === 0 || event.day === filter.day;
        return categoryMatch && dayMatch;
      })
      .sort((a, b) => {
        // 1. Sort by Day
        if (a.day !== b.day) return a.day - b.day;

        // 2. Sort by Category Order
        const orderA = categoryOrder.indexOf(a.category);
        const orderB = categoryOrder.indexOf(b.category);
        if (orderA !== orderB) return orderA - orderB;

        // 3. Sort by Title Alphabetically
        return a.title.localeCompare(b.title);
      });
  }, [filter]);

  const handleOpenModal = (event: EventDetail) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className={`events-cinematic-page style-${activeTheme.style}`} style={{
      paddingTop: '180px',
      minHeight: '100vh',
      paddingBottom: '150px',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: activeTheme.bodyFont,
    }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

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
                transition: 'all 1s ease',
                fontFamily: activeTheme.displayFont
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
                color: filter.day === day.id ? day.buttonText : 'rgba(255,255,255,0.55)',
                border: `1px solid ${filter.day === day.id ? day.color : 'rgba(255,255,255,0.05)'}`,
                padding: '1.5rem 2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', backdropFilter: 'blur(20px)', boxShadow: filter.day === day.id ? `0 20px 40px ${day.color}44` : 'none', fontFamily: day.displayFont
              }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '3px', opacity: 0.6, marginBottom: '0.4rem' }}>{day.label}</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 950 }}>{day.name}</span>
            </motion.button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          {isLocked && (
            <div style={{
              position: 'relative',
              zIndex: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(60px) saturate(1.5)',
              textAlign: 'center',
              padding: '10rem 2.5rem',
              borderRadius: '80px',
              minHeight: '800px',
              border: '1px solid rgba(255,255,255,0.03)',
              overflow: 'hidden',
              boxShadow: `0 0 100px ${activeTheme.color}11`
            }}>
              {/* Dramatic Symbolic Lock - No Text UI */}
              <div style={{ position: 'relative', width: '300px', height: '300px', perspective: '1000px' }}>
                {/* Outer Rotating Rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: 0, border: `2px solid ${activeTheme.color}22`, borderRadius: '50%', borderTopColor: activeTheme.color, filter: 'blur(1px)' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: '20px', border: `1px dashed ${activeTheme.color}33`, borderRadius: '50%', filter: 'blur(2px)' }} />

                {/* Inner Orbitals */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotateX: [0, 360],
                      rotateY: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 10 + i * 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      inset: '60px',
                      border: `1px solid ${activeTheme.color}44`,
                      borderRadius: '50%',
                      opacity: 0.3
                    }}
                  />
                ))}

                {/* The Core Singularity */}
                <div style={{ position: 'absolute', inset: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.8, 0.4],
                      filter: [`blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`, `blur(15px) drop-shadow(0 0 50px ${activeTheme.color})`, `blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: activeTheme.color,
                      borderRadius: '50%',
                      zIndex: 2
                    }}
                  />
                  {/* Glitch Overlay Over Core */}
                  <motion.div
                    animate={{
                      opacity: [0, 0.2, 0, 0.4, 0],
                      x: [-5, 5, -5, 10, -10, 0],
                      scaleX: [1, 2, 0.5, 1.5, 1]
                    }}
                    transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ position: 'absolute', width: '150px', height: '2px', background: 'white', filter: 'blur(10px)', zIndex: 3 }}
                  />
                </div>
              </div>

              {/* Coming Soon Text Element */}
              <div style={{ marginTop: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    color: activeTheme.color,
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: 950,
                    letterSpacing: '15px',
                    textTransform: 'uppercase',
                    textShadow: `0 0 30px ${activeTheme.color}88`
                  }}
                >
                  COMING SOON
                </motion.div>
              </div>

              {/* Minimal Symbolic Footer */}
              <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', opacity: 0.3 }}>
                <i className="fas fa-barcode" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <i className="fas fa-microchip" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <i className="fas fa-fingerprint" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
              </div>

              {/* Scanning Glitch Effect */}
              <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '300px',
                  background: `linear-gradient(transparent, ${activeTheme.color}05, transparent)`,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            </div>
          )}

          <div style={{ opacity: isLocked ? 0 : 1, pointerEvents: isLocked ? 'none' : 'auto', visibility: isLocked ? 'hidden' : 'visible', height: isLocked ? '600px' : 'auto', overflow: 'hidden' }}>

            <div className="classification-carousel" style={{ marginBottom: '8rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', minWidth: 'max-content', padding: '0 2rem' }}>
                {categoriesList.map(c => (
                  <motion.button key={c} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFilter(prev => ({ ...prev, category: c }))}
                    style={{
                      background: filter.category === c ? `${activeTheme.color}` : 'rgba(255,255,255,0.03)',
                      color: filter.category === c ? activeTheme.buttonText : 'rgba(255,255,255,0.72)',
                      border: `1px solid ${filter.category === c ? activeTheme.color : 'rgba(255,255,255,0.1)'}`,
                      padding: '0.8rem 2.5rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: 'all 0.4s ease', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont
                    }}>{c}</motion.button>
                ))}
              </div>
            </div>

            <motion.div layout className="events-grid-system" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event, index) => (
                  <motion.div layout key={event.id} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, margin: "-20px" }} transition={{ duration: 0.6, delay: (index % 4) * 0.1 }} className="event-premium-card"
                    style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: 'auto', minHeight: '350px', display: 'flex', flexDirection: 'column', border: `1px solid ${activeTheme.color}2f`, backdropFilter: 'blur(20px)' }}>
                    <div className="card-visual-header" style={{ height: '20px', position: 'relative', overflow: 'hidden', background: `linear-gradient(to right, ${activeTheme.color}44, transparent)` }}>
                      <div style={{ position: 'absolute', top: '5px', left: '20px' }}>
                        <div style={{ fontSize: '0.5rem', fontWeight: 950, color: activeTheme.color }}>CH 0{event.day}</div>
                      </div>
                    </div>
                    <div className="card-content-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
                          <span style={{ color: activeTheme.color, fontSize: '0.65rem', fontWeight: 950, letterSpacing: '4px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>{event.category}</span>
                          <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${activeTheme.color}55, transparent)` }} />
                        </div>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 950, margin: '0.3rem 0 1rem', color: 'white', lineHeight: 1.1, fontFamily: activeTheme.displayFont }}>{event.title}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.78)', fontSize: '0.8rem', fontWeight: 700 }}>
                          <span><i className="far fa-clock" style={{ color: activeTheme.color }}></i> {event.time}</span>
                          <span><i className="fas fa-map-marker-alt" style={{ color: activeTheme.color }}></i> {event.location}</span>
                        </div>
                      </div>
                      <motion.button onClick={() => handleOpenModal(event)} whileHover={{ scale: 1.02, backgroundColor: activeTheme.color, color: activeTheme.buttonText }} whileTap={{ scale: 0.98 }}
                        style={{ background: 'rgba(255,255,255,0.03)', color: 'white', border: `1px solid ${activeTheme.color}66`, padding: '1rem', borderRadius: '15px', fontWeight: 950, fontSize: '0.75rem', marginTop: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>
                        VIEW DETAILS
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} activeTheme={activeTheme} />

      <style>{`
                .container { max-width: 1700px !important; width: 95%; margin: 0 auto; }
                .event-premium-card:hover { border-color: ${activeTheme.color}66 !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 40px ${activeTheme.color}15; transform: translateY(-8px) !important; }

              .events-cinematic-page {
                font-family: ${activeTheme.bodyFont};
              }

              .events-cinematic-page h1,
              .events-cinematic-page h2,
              .events-cinematic-page h3,
              .events-cinematic-page h4,
              .events-cinematic-page .day-navigator button,
              .events-cinematic-page .classification-carousel button,
              .events-cinematic-page .card-content-body button,
              .events-cinematic-page .events-header-premium > div > span {
                font-family: ${activeTheme.displayFont};
              }
                
                /* Mobile Navigation Scrollbar Hiding */
                .day-navigator::-webkit-scrollbar, .classification-carousel::-webkit-scrollbar { display: none; }
                .day-navigator, .classification-carousel { -ms-overflow-style: none; scrollbar-width: none; }

                /* Global Cybernetic Typography */
                .style-cybernetic h1 { font-family: "Orbitron", sans-serif !important; font-weight: 900 !important; text-shadow: 0 0 15px ${activeTheme.color}88, 0 0 30px ${activeTheme.color}44; letter-spacing: 2px !important; }
                .style-cybernetic h2 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h3 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h4 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }

                @media (max-width: 1400px) { .events-grid-system { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 1024px) { .events-grid-system { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; } }
                
                @media (max-width: 768px) {
                    .events-cinematic-page { padding-top: 100px !important; padding-bottom: 80px !important; }
                    .events-header-premium { margin-bottom: 4rem !important; }
                    .events-header-premium h1 { font-size: 3rem !important; letter-spacing: 0 !important; }
                    .events-header-premium span { font-size: 0.6rem !important; letter-spacing: 4px !important; }
                    
                    .day-navigator { 
                        justify-content: flex-start !important; 
                        overflow-x: auto !important; 
                        padding: 0 1.5rem 1rem !important; 
                        gap: 1rem !important;
                    }
                    .day-navigator button { min-width: 160px !important; padding: 1rem !important; border-radius: 12px !important; }
                    .day-navigator button span:last-child { font-size: 1.1rem !important; }
                    
                    .classification-carousel { margin-bottom: 3rem !important; }
                    .classification-carousel > div { justify-content: flex-start !important; padding: 0 1rem !important; gap: 0.6rem !important; }
                    .classification-carousel button { padding: 0.6rem 1.5rem !important; font-size: 0.7rem !important; }

                    .events-grid-system { 
                        grid-template-columns: 1fr !important; 
                        gap: 1.5rem !important; 
                        padding: 0 1.5rem !important;
                    }
                    .event-premium-card { height: auto !important; min-height: 300px !important; border-radius: 20px !important; }
                    .card-visual-header { height: 40px !important; }
                    .card-content-body { padding: 1.5rem !important; }
                    .card-content-body h3 { font-size: 1.4rem !important; line-height: 1.2 !important; margin: 0.5rem 0 !important; }
                    .card-content-body span { font-size: 0.65rem !important; letter-spacing: 3px !important; }
                    
                    /* Lock Screen Mobile Adjustments */
                    div[style*="minHeight: '800px'"] { min-height: 600px !important; padding: 4rem 1.5rem !important; }
                    div[style*="width: '300px'"] { width: 200px !important; height: 200px !important; }
                    div[style*="inset: '100px'"] { inset: 60px !important; }
                    div[style*="marginTop: '5rem'"] { gap: 1.5rem !important; margin-top: 3rem !important; }
                }

                @media (max-width: 900px) {
                    .event-modal-container {
                        flex-direction: column !important;
                        overflow-y: auto !important;
                    }
                    .event-modal-image-panel {
                        width: 100% !important;
                        height: 250px !important;
                        flex-shrink: 0 !important;
                    }
                    .modal-gradient-overlay {
                        background: linear-gradient(to bottom, transparent, #0a0a0a) !important;
                    }
                    .event-modal-content-panel {
                        width: 100% !important;
                        padding: 2rem !important;
                        overflow-y: visible !important;
                    }
                }
            `}</style>
    </section>
  );
};

export default Events;
