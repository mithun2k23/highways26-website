import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { X, Upload, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Passes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        register_number: '',
        id_card_number: '',
        college_mail: '',
        college_name: '',
        mobile_number: '',
        year: '',
        department: '',
        section: '',
        transaction_id: '',
        payment_screenshot_base64: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, payment_screenshot_base64: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('early_pass_registrations')
                .insert([{
                    ...formData,
                    verification_status: 'pending'
                }]);

            if (supabaseError) throw supabaseError;

            setSubmitted(true);
            setTimeout(() => {
                setIsModalOpen(false);
                setSubmitted(false);
                setFormData({
                    name: '', register_number: '', id_card_number: '', college_mail: '', college_name: '',
                    mobile_number: '', year: '', department: '', section: '',
                    transaction_id: '', payment_screenshot_base64: ''
                });
            }, 3000);

        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="passes-page" style={{ paddingTop: '150px', minHeight: '100vh', paddingBottom: '100px', background: 'radial-gradient(circle at top, #1a0104 0%, #050000 100%)', color: '#fff' }}>
            {/* Background Aesthetic Elements */}
            <div style={{ position: 'fixed', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(239, 35, 60, 0.08) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />
            <div style={{ position: 'fixed', bottom: '10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
                
                <div className="passes-header" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, #ef233c)' }} />
                            <span style={{ color: '#ef233c', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '8px' }}>THE ELITE EXPERIENCE</span>
                            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, #ef233c)' }} />
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 950, letterSpacing: '-2px', textTransform: 'uppercase', marginBottom: '1rem', background: 'linear-gradient(to bottom, #fff 0%, #ef233c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: '"Orbitron", sans-serif' }}>
                            HIGHWAYS '26
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 600 }}>EXCLUSIVES PASSES</p>
                    </motion.div>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* EARLY BIRD - EXPIRED */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 0.8
                        }}
                    >
                        {/* THE X DESIGN */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>EXPIRED</div>
                        </div>

                        <div style={{ opacity: 0.15 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>EARLY BIRD</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>All-In-One Experience</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Early bird discount<br/>
                                Access to all Pro Shows<br/>
                                Access to all free and standard events
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>899
                            </div>
                            <button disabled style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: '#ef233c',
                                border: 'none',
                                color: 'white',
                                borderRadius: '24px',
                                fontWeight: 950,
                                letterSpacing: '2px',
                                cursor: 'not-allowed',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem'
                            }}>EXPIRED</button>
                        </div>
                    </motion.div>

                    {/* NORMAL - COMING SOON/X */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 0.8
                        }}
                    >
                        {/* THE X DESIGN */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>COMING SOON</div>
                        </div>

                        <div style={{ filter: 'blur(8px)', opacity: 0.5 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>NORMAL PASS</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>Standard Access</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                General pass access for the festival experience with standard event entry.
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>TBA
                            </div>
                            <button disabled style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: '#ef233c',
                                border: 'none',
                                color: 'white',
                                borderRadius: '24px',
                                fontWeight: 950,
                                letterSpacing: '2px',
                                cursor: 'not-allowed',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem'
                            }}>GET PASS NOW</button>
                        </div>
                    </motion.div>

                    {/* OTHER COLLEGE - LOCKED/X */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid rgba(239, 35, 60, 0.1)',
                            borderRadius: '40px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
                            opacity: 0.8
                        }}
                    >
                         {/* THE X DESIGN */}
                         <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(45deg)' }}></div>
                           <div style={{ position: 'absolute', width: '130%', height: '2px', background: 'rgba(239, 35, 60, 0.3)', transform: 'rotate(-45deg)' }}></div>
                           <div style={{ background: '#0a0a0a', padding: '10px 25px', borderRadius: '15px', border: '1px solid #ef233c', color: '#ef233c', fontWeight: 950, zIndex: 11, fontSize: '1rem', letterSpacing: '3px' }}>COMING SOON</div>
                        </div>

                        <div style={{ filter: 'blur(8px)', opacity: 0.5 }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.8rem', color: '#fff', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>NON-SVCE</h3>
                            <div style={{ background: 'rgba(239, 35, 60, 0.1)', color: '#ef233c', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1.2rem', textTransform: 'uppercase', display: 'inline-block' }}>External Entry</div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Pass access for non-SVCE participants with details to be announced shortly.
                            </p>
                            <div style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '1.8rem', color: '#ef233c' }}>₹</span>TBA
                            </div>
                            <button disabled style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: '#ef233c',
                                border: 'none',
                                color: 'white',
                                borderRadius: '24px',
                                fontWeight: 950,
                                letterSpacing: '2px',
                                cursor: 'not-allowed',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem'
                            }}>GET PASS NOW</button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.97)', zIndex: 1000, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', padding: '20px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            style={{
                                background: '#0a0a0a', width: '100%', maxWidth: '850px',
                                maxHeight: '95vh', overflowY: 'auto', borderRadius: '40px',
                                border: '1px solid rgba(255,255,255,0.05)', position: 'relative',
                                padding: '4rem', boxShadow: '0 50px 100px rgba(0,0,0,0.8)'
                            }}
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', cursor: 'pointer', padding: '12px', borderRadius: '50%', transition: '0.3s' }}
                            >
                                <X size={20} />
                            </button>

                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                                    <div style={{ width: '100px', height: '100px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                                        <CheckCircle2 size={60} color="#4ade80" />
                                    </div>
                                    <h2 style={{ fontSize: '2.8rem', fontWeight: 950, marginBottom: '1rem', letterSpacing: '-1px' }}>Received!</h2>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
                                        We're validating your transaction. Your e-ticket will arrive in your college inbox shortly.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div style={{ marginBottom: '3rem' }}>
                                        <h2 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '0.5rem', letterSpacing: '-1px' }}>Register</h2>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Highways '26 Early Pass Access Portal</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.8rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.8rem' }}>
                                            <div className="form-group">
                                                <label style={labelStyle}>Full Name</label>
                                                <input required name="name" type="text" placeholder="As per ID Card" style={inputStyle} value={formData.name} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label style={labelStyle}>College Register No</label>
                                                <input required name="register_number" type="text" placeholder="Ex: 211022020" style={inputStyle} value={formData.register_number} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem' }}>
                                            <div className="form-group">
                                                <label style={labelStyle}>College Name</label>
                                                <input required name="college_name" type="text" placeholder="Full College Name" style={inputStyle} value={formData.college_name} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label style={labelStyle}>College Mail ID</label>
                                                <input required name="college_mail" type="email" placeholder="student@college.edu" style={inputStyle} value={formData.college_mail} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem' }}>
                                            <div className="form-group">
                                                <label style={labelStyle}>ID Card Number</label>
                                                <input required name="id_card_number" type="text" placeholder="Unique ID on card" style={inputStyle} value={formData.id_card_number} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label style={labelStyle}>WhatsApp Number</label>
                                                <input required name="mobile_number" type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} value={formData.mobile_number} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem' }}>
                                            <div className="form-group">
                                                <label style={labelStyle}>Study Year</label>
                                                <select required name="year" style={inputStyle} value={formData.year} onChange={handleChange}>
                                                    <option value="">Select</option>
                                                    <option value="I">I Year</option>
                                                    <option value="II">II Year</option>
                                                    <option value="III">III Year</option>
                                                    <option value="IV">IV Year</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label style={labelStyle}>Department</label>
                                                <select required name="department" style={inputStyle} value={formData.department} onChange={handleChange}>
                                                    <option value="">Select</option>
                                                    <option value="CSE">CSE</option>
                                                    <option value="IT">IT</option>
                                                    <option value="ECE">ECE</option>
                                                    <option value="EEE">EEE</option>
                                                    <option value="MECH">MECH</option>
                                                    <option value="CIVIL">CIVIL</option>
                                                    <option value="AI-DS">AI-DS</option>
                                                    <option value="OTHER">OTHER</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label style={labelStyle}>Section</label>
                                                <select required name="section" style={inputStyle} value={formData.section} onChange={handleChange}>
                                                    <option value="">Select</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="D">D</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ padding: '3rem 2rem', background: '#fff', borderRadius: '30px', textAlign: 'center', margin: '1rem 0', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)' }}>
                                            <p style={{ color: '#ef233c', fontWeight: 900, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Step 1: Payment</p>
                                            <h4 style={{ color: '#000', fontSize: '1.4rem', fontWeight: 950, marginBottom: '2rem' }}>Scan the Official Bank QR</h4>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{ padding: '15px', background: '#000', borderRadius: '25px' }}>
                                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=YOUR_PAYMENT_UPI_LINK" alt="Payment QR" style={{ width: '220px', height: '220px', borderRadius: '15px' }} />
                                                </div>
                                            </div>
                                            <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '1.5rem', fontWeight: 500 }}>Highways '26 Official Payment Gateway</p>
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <p style={{ color: '#ef233c', fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Step 2: Verification</p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem', alignItems: 'end' }}>
                                                <div className="form-group">
                                                    <label style={labelStyle}>Transaction ID (UTR)</label>
                                                    <input required name="transaction_id" type="text" placeholder="12-digit number" style={inputStyle} value={formData.transaction_id} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label style={labelStyle}>Payment Screenshot</label>
                                                    <div 
                                                        onClick={() => fileInputRef.current?.click()}
                                                        style={{
                                                            background: 'rgba(255,255,255,0.03)',
                                                            border: '2px dashed rgba(255,255,255,0.1)',
                                                            borderRadius: '20px',
                                                            padding: '1.4rem',
                                                            textAlign: 'center',
                                                            cursor: 'pointer',
                                                            color: formData.payment_screenshot_base64 ? '#4ade80' : 'rgba(255,255,255,0.4)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '0.8rem',
                                                            fontSize: '0.9rem',
                                                            fontWeight: 700,
                                                            transition: '0.3s'
                                                        }}
                                                    >
                                                        {formData.payment_screenshot_base64 ? <CheckCircle2 size={20} /> : <Upload size={20} />}
                                                        {formData.payment_screenshot_base64 ? 'VERIFIED' : 'CHOOSE FILE'}
                                                    </div>
                                                    <input required type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*" />
                                                </div>
                                            </div>
                                        </div>

                                        {error && (
                                            <div style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.05)', padding: '1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.8rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                                <AlertCircle size={20} />
                                                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{error}</span>
                                            </div>
                                        )}

                                        <button 
                                            disabled={loading}
                                            type="submit" 
                                            style={{
                                                background: '#ef233c', color: 'white', border: 'none',
                                                padding: '1.8rem', borderRadius: '24px', fontWeight: 950,
                                                fontSize: '1.1rem', marginTop: '1rem', cursor: loading ? 'not-allowed' : 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                                                transition: '0.3s', boxShadow: '0 20px 40px rgba(239, 35, 60, 0.2)'
                                            }}
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>COMPLETE PURCHASE <CheckCircle2 size={20} /></>}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1.2rem 1.5rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1.5px solid rgba(255,255,255,0.08)',
    borderRadius: '20px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    marginTop: '0.8rem',
    transition: '0.3s',
    fontFamily: 'inherit'
};

const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 800,
    color: 'rgba(255,255,255,0.35)',
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px'
};

export default Passes;
