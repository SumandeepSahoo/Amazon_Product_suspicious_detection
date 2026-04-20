import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
    const navigate = useNavigate();
    const [autoDetect, setAutoDetect] = useState(true); // fake switch
    const getStatusColor = (status) => {
        if (status === "Safe") return "#2ecc71";
        if (status === "Medium Risk") return "#f1c40f";
        return "#e74c3c";
    };

    return (
        <div style={styles.layout}>
 
            {/* =================== Sidebar =================== */}
            <div style={styles.sidebar}>
                <div style={styles.sidebarHeader}>Amazon Dashboard</div>

                <div style={styles.menuItem} onClick={() => navigate("/products")}>
                    All Products
                </div>

                <div
                    style={styles.menuItem} onClick={() => navigate("/")}>
                    Suspicious Checker
                </div>

                <div style={{ ...styles.menuItem, backgroundColor: "#ff9900" }}
                    onClick={() => navigate("/reports")}>
                    Reports
                </div>

                <div style={styles.menuItem} onClick={() => navigate("/users")}>
                    User Accounts
                </div>

                <div style={styles.menuItem} onClick={() => navigate("/settings")}>
                    Settings
                </div>

            </div>

            {/* =================== Main section =================== */}
            <div style={styles.main}>

                {/* Top Bar */}
                <div style={styles.topBar}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon"
                        style={styles.topLogo}
                    />
                    <div style={styles.topRight}>
                        <span style={{ marginLeft: "15px" }}>Admin</span>
                        <span style={styles.profileCircle}>S</span>
                    </div>
                </div>

                {/* Title */}
                <h2 style={styles.pageTitle}>All Reports</h2>

                {/* Fake Switch */}
                <div style={styles.switchRow}>
                    <span style={styles.switchLabel}>
                        Auto-Detect Enabled
                    </span>

                    <label style={styles.switch}>
                        <input
                            type="checkbox"
                            checked={autoDetect}
                            onChange={() => setAutoDetect(!autoDetect)}
                            style={styles.switchInput}
                        />
                        <span
                            style={{
                                ...styles.slider,
                                backgroundColor: autoDetect ? "#ff9900" : "#ccc",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    height: "20px",
                                    width: "20px",
                                    left: autoDetect ? "28px" : "4px",
                                    bottom: "3px",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    transition: "0.3s",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                                }}
                            />
                        </span>

                    </label>
                </div>

                {/* =================== KPI BAR =================== */}
                <div style={styles.kpiRow}>
                    <div style={styles.kpiCard}>
                        <p style={styles.kpiLabel}>Total Listings</p>
                        <h2>1,248</h2>
                        <span style={styles.kpiSub}>+12% this week</span>
                    </div>

                    <div style={{ ...styles.kpiCard, borderTop: "4px solid #e74c3c" }}>
                        <p style={styles.kpiLabel}>High Risk</p>
                        <h2>186</h2>
                        <span style={{ color: "#e74c3c" }}>↑ Fraud spike</span>
                    </div>

                    <div style={{ ...styles.kpiCard, borderTop: "4px solid #f1c40f" }}>
                        <p style={styles.kpiLabel}>Medium Risk</p>
                        <h2>342</h2>
                        <span style={{ color: "#f1c40f" }}>Needs review</span>
                    </div>

                    <div style={{ ...styles.kpiCard, borderTop: "4px solid #2ecc71" }}>
                        <p style={styles.kpiLabel}>Safe Listings</p>
                        <h2>720</h2>
                        <span style={{ color: "#2ecc71" }}>Stable</span>
                    </div>
                </div>

                {/* =================== GRID SECTION =================== */}
                <div style={styles.gridSection}>

                    {/* LEFT: CATEGORY RISK TABLE */}
                    <div style={styles.panel}>
                        <h3>Category Risk Breakdown</h3>

                        <div style={styles.tableHeaderSmall}>
                            <div>Category</div>
                            <div>Listings</div>
                            <div>Risk %</div>
                        </div>

                        {[
                            { cat: "Electronics", count: 420, risk: "28%" },
                            { cat: "Fashion", count: 310, risk: "35%" },
                            { cat: "Accessories", count: 280, risk: "41%" },
                            { cat: "Home", count: 238, risk: "18%" },
                        ].map((c, i) => (
                            <div key={i} style={styles.tableRowSmall}>
                                <div>{c.cat}</div>
                                <div>{c.count}</div>
                                <div style={{ color: "#e74c3c" }}>{c.risk}</div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: ALERT PANEL */}
                    <div style={styles.panel}>
                        <h3>⚠️ Fraud Alerts</h3>

                        <div style={styles.alertHigh}>
                            High spike detected in "Accessories"
                        </div>

                        <div style={styles.alertMedium}>
                            Multiple duplicate listings flagged
                        </div>

                        <div style={styles.alertLow}>
                            Price anomaly detected in Electronics
                        </div>
                    </div>

                </div>

                {/* =================== ACTIVITY FEED =================== */}
                <div style={{ marginTop: "25px" }}>
                    <h3>Recent Activity</h3>

                    <div style={styles.activityItem}>
                        🚨 Fake AirPods detected — Score: 0.91
                    </div>

                    <div style={styles.activityItem}>
                        ⚠️ Suspicious seller flagged — ID: #A1023
                    </div>

                    <div style={styles.activityItem}>
                        ✅ Verified product approved — Samsung TV
                    </div>
                </div>

                {/* =================== AI INSIGHTS =================== */}
                <div style={{ marginTop: "25px" }}>
                    <h3>AI Insights</h3>

                    <div style={styles.insightBox}>
                        📊 Fraud probability increases when price deviation exceeds 70%
                    </div>

                    <div style={styles.insightBox}>
                        🧠 Unknown sellers contribute to 68% of high-risk listings
                    </div>

                    <div style={styles.insightBox}>
                        🔍 Text-image mismatch strongly correlates with fraud cases
                    </div>
                </div>

            </div>
        </div>
    );
}

/* ===================== STYLES ===================== */

const styles = {
    kpiRow: {
        display: "flex",
        gap: "15px",
        marginTop: "20px",
    },

    kpiCard: {
        flex: 1,
        background: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },

    kpiLabel: {
        fontSize: "12px",
        color: "#777",
    },

    kpiSub: {
        fontSize: "12px",
        color: "#999",
    },

    gridSection: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "25px",
    },

    panel: {
        background: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },

    tableHeaderSmall: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        fontWeight: "600",
        marginTop: "10px",
        paddingBottom: "6px",
        borderBottom: "1px solid #eee",
    },

    tableRowSmall: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "8px 0",
        fontSize: "14px",
    },

    alertHigh: {
        background: "#ffe6e6",
        padding: "10px",
        borderRadius: "6px",
        marginTop: "10px",
    },

    alertMedium: {
        background: "#fff4cc",
        padding: "10px",
        borderRadius: "6px",
        marginTop: "10px",
    },

    alertLow: {
        background: "#e6f7ff",
        padding: "10px",
        borderRadius: "6px",
        marginTop: "10px",
    },

    activityItem: {
        background: "#fff",
        padding: "10px",
        marginTop: "8px",
        borderRadius: "6px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    },

    insightBox: {
        background: "#f9f9f9",
        padding: "10px",
        marginTop: "8px",
        borderRadius: "6px",
    },
    tableContainer: {
        marginTop: "20px",
        background: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },

    tableHeader: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
        padding: "12px 16px",
        background: "#232f3e",
        color: "white",
        fontWeight: "600",
    },

    tableRow: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
        padding: "14px 16px",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        cursor: "pointer",
    },

    statusBadge: {
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        color: "#fff",
    },

    subText: {
        fontSize: "12px",
        color: "#777",
    },
    switchRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "320px",
        padding: "10px 15px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "20px",
    },

    switchLabel: {
        fontSize: "15px",
        fontWeight: 600,
        color: "#232f3e",
    },

    switch: {
        position: "relative",
        display: "inline-block",
        width: "52px",
        height: "26px",
    },

    switchInput: {
        opacity: 0,
        width: 0,
        height: 0,
    },

    slider: {
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "26px",
        transition: "0.3s",
        boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)",
        background: "#ccc",
    },

    /* Knob inside the slider */
    sliderBefore: {
        content: "",
    },

    layout: {
        display: "flex",
        background: "#f2f3f4",
        minHeight: "100vh",
    },

    /* Sidebar */
    sidebar: {
        width: "230px",
        background: "#232f3e",
        color: "white",
        padding: "20px 10px",
    },

    sidebarHeader: {
        fontSize: "20px",
        fontWeight: "700",
        marginBottom: "20px",
    },

    menuItem: {
        padding: "12px 10px",
        borderRadius: "6px",
        marginBottom: "5px",
        cursor: "pointer",
        opacity: 0.9,
    },

    /* Main */
    main: {
        flex: 1,
        padding: "20px 40px",
    },

    /* Top Bar */
    topBar: {
        height: "55px",
        background: "white",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        justifyContent: "space-between",
        marginBottom: "25px",
    },

    topLogo: { height: "28px" },

    topRight: {
        display: "flex",
        alignItems: "center",
        fontSize: "18px",
    },

    profileCircle: {
        background: "#ff9900",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "12px",
        fontWeight: "700",
    },

    pageTitle: {
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "15px",
    },

    /* Switch Toggle */
    switchRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        alignItems: "center",
        width: "200px",
    },

    switch: {
        position: "relative",
        display: "inline-block",
        width: "50px",
        height: "24px",
    },

    slider: {
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ccc",
        borderRadius: "24px",
        transition: ".4s",
    },

    /* Card */
    card: {
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "20px",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },

    row: {
        display: "flex",
        gap: "15px",
    },

    field: { display: "flex", flexDirection: "column" },
    label: { fontWeight: "600", marginBottom: "5px" },

    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
    },

    textarea: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        minHeight: "80px",
    },

    button: {
        background: "#ffbd4a",
        border: "none",
        padding: "12px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "16px",
    },

    resultCard: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "400px",
    },
};
