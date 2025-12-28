import React, { useState, useEffect } from "react";
import { CheckCircle, Save, Loader2 } from "lucide-react";

const API_URL = 'http://localhost:5000/api/grant';

const GrantPage = ({ isLoggedIn: propIsLoggedIn }) => {
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Persist login using localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return propIsLoggedIn || localStorage.getItem("isLoggedIn") === "true";
    });

    const [content, setContent] = useState({
        id: 1,
        title: "",
        introTitle: "",
        introDesc: "",
        grantHighlight: "",
        promotionPortal: [],
        programItems: [],
        whyJoin: [],
        requirements: []
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(API_URL);
            if (res.ok) {
                const data = await res.json();
                if (data) {
                    const safeParse = (input) => {
                        if (!input) return [];
                        if (typeof input === 'string') {
                            try { return JSON.parse(input); }
                            catch (e) { return []; }
                        }
                        return Array.isArray(input) ? input : [];
                    };

                    setContent({
                        id: data.id || 1,
                        title: data.title || "",
                        introTitle: data.introTitle || "",
                        introDesc: data.introDesc || "",
                        grantHighlight: data.grantHighlight || "",
                        promotionPortal: safeParse(data.promotionPortal),
                        programItems: safeParse(data.programItems),
                        whyJoin: safeParse(data.whyJoin),
                        requirements: safeParse(data.requirements)
                    });
                }
            }
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const payload = {
                id: content.id,
                title: content.title,
                introTitle: content.introTitle,
                introDesc: content.introDesc,
                grantHighlight: content.grantHighlight,
                promotionPortal: content.promotionPortal,
                programItems: content.programItems,
                whyJoin: content.whyJoin,
                requirements: content.requirements
            };

            const res = await fetch(`${API_URL}/${content.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                alert("Success! Content published.");
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.details?.sqlMessage || "Check Console"}`);
            }
        } catch (err) {
            alert("Network error. Is the server running?");
        } finally {
            setIsSaving(false);
        }
    };

    const updateList = (key, index, value) => {
        const newList = [...content[key]];
        newList[index] = value;
        setContent({ ...content, [key]: newList });
    };

    if (loading) return <div style={{ padding: '200px 0', textAlign: 'center' }}>Loading...</div>;

    // --- ADMIN VIEW ---
    if (isLoggedIn) {
        const adminStyles = {
            wrapper: { padding: '140px 5% 60px', background: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' },
            header: { marginBottom: '30px' },
            title: { fontSize: '28px', color: '#166534', margin: 0, fontWeight: '700' },
            subtitle: { color: '#15803d', margin: '5px 0 0' },
            card: { background: '#fff', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '20px' },
            label: { fontWeight: '600', color: '#166534', fontSize: '14px', display: 'block', marginBottom: '8px' },
            input: { width: '100%', padding: '12px', border: '1px solid #bbf7d0', borderRadius: '8px', marginBottom: '15px' },
            textarea: { width: '100%', padding: '12px', border: '1px solid #bbf7d0', borderRadius: '8px', marginBottom: '15px', minHeight: '80px' },
            listItem: { display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' },
            removeBtn: { background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' },
            addBtn: { background: '#dcfce7', color: '#166534', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', marginTop: '10px' },
            saveBtn: { position: 'fixed', bottom: '30px', right: '30px', background: '#16a34a', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 1000, fontWeight: '600' }
        };

        return (
            <div style={adminStyles.wrapper}>
                <div style={adminStyles.header}>
                    <h2 style={adminStyles.title}>Grant Page Admin Console</h2>
                    <p style={adminStyles.subtitle}>Edit all content for the Grant page</p>
                </div>
                {/* Admin form components remain the same */}
                {/* ... your admin forms ... */}
            </div>
        );
    }

    // --- CUSTOMER VIEW (Coming Soon) ---
    if (
        !content.title &&
        !content.introTitle &&
        !content.introDesc &&
        !content.grantHighlight &&
        (!content.promotionPortal || content.promotionPortal.length === 0) &&
        (!content.programItems || content.programItems.length === 0) &&
        (!content.whyJoin || content.whyJoin.length === 0) &&
        (!content.requirements || content.requirements.length === 0)
    ) {
        return (
            <div style={{ padding: '200px 20px', textAlign: 'center', fontFamily: 'sans-serif', color: '#166534' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Coming Soon</h1>
                <p style={{ fontSize: '20px', color: '#4b5563' }}>Our grant page is being prepared. Check back soon!</p>
            </div>
        );
    }

// --- CUSTOMER V
    // --- CUSTOMER VIEW (Original beautiful design) ---
    return (
        <div className="wito-design">
            <style>{`
                .wito-design { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; background-color: #ffffff; line-height: 1.6; position: relative; overflow: hidden; }
                .wito-design::before { content: ""; position: absolute; width: 700px; height: 700px; border-radius: 50%; top: -150px; left: -250px; background: radial-gradient(circle, #22c55e 0%, rgba(255,255,255,0) 70%); filter: blur(100px); opacity: 0.12; pointer-events: none; }
                .container { max-width: 1140px; margin: 0 auto; padding: 40px 20px; position: relative; z-index: 1; }
                .title-section { text-align: center; padding: 120px 20px 30px; }
                .title-section h1 { font-size: 44px; font-weight: 800; color: #166534; margin-bottom: 15px; }
                .title-accent { width: 60px; height: 4px; background: #22c55e; margin: 0 auto; border-radius: 2px; }
                .banner-container { width: 100%; text-align: center; margin-bottom: 60px; }
                .banner-container img { max-width: 95%; height: auto; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
                .section-highlight { background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); padding: 60px 0; margin: 40px 0; border-radius: 40px; }
                .why-join-h2{color:white;}
                h2 { font-size: 32px; color: green; margin-bottom: 30px; font-weight: 700; }
                h3 { font-size: 24px; color: #1e3a8a; margin-bottom: 20px; }
                .intro-text { font-size: 19px; color: #4b5563; margin-bottom: 30px; }
                .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
                .feature-item { background: #ffffff; padding: 35px; border-radius: 24px; border: 1px solid #e2e8f0; }
                .feature-item li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 16px; color: #374151; }
                .check-icon { color: #22c55e; flex-shrink: 0; margin-top: 4px; }
                .requirement-section { background-color: #f8fafc; padding: 40px; border-radius: 24px; border: 1px solid #f1f5f9; }
                .requirement-box { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; }
                .requirement-card { padding: 20px; background: #ffffff; border-radius: 16px; border-left: 4px solid #22c55e; }
                .why-join-highlight { background: #166534; color: white; padding: 40px; border-radius: 24px; margin: 60px 0; }
                @media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } .title-section h1 { font-size: 30px; } }
            `}</style>

            <div className="title-section">
                <h1>{content.title}</h1>
                <div className="title-accent"></div>
            </div>

            <div className="banner-container">
                <img src="https://wito.technology/wp-content/uploads/2023/11/grant2.jpg" alt="Grant Banner" />
            </div>

            <div className="container">
                <div className="content-box">
                    <h3>{content.introTitle}</h3>
                    <p className="intro-text">{content.introDesc}</p>

                    <div style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0', marginTop: '20px' }}>
                        <span style={{ fontSize: '20px', color: '#166534', fontWeight: 'bold' }}>
                            {content.grantHighlight}
                        </span>
                    </div>
                </div>
            </div>

            <div className="section-highlight">
                <div className="container">
                    <h2>What You Get:</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Promotion Portal</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {content.promotionPortal.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={18} className="check-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="feature-item">
                            <h3>Program</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {content.programItems.map((item, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={18} className="check-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="why-join-highlight">
                    <h2 className="why-join-h2">Why Join?</h2>
                    <ul style={{ paddingLeft: '20px' }}>
                        {content.whyJoin.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '10px' }}>{item}</li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>Sign up now to claim your grant!</p>
                </div>

                <div className="requirement-section">
                    <h2>Requirement Documents</h2>
                    <div className="requirement-box">
                        {content.requirements.map((req, idx) => (
                            <div key={idx} className="requirement-card">
                                <strong style={{ display: 'block', fontSize: '18px', color: '#166534', marginBottom: '8px' }}>{req.title}</strong>
                                <span style={{ fontSize: '15px' }}>{req.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default GrantPage;