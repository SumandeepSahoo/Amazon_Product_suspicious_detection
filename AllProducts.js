import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
    const products = [
        {
            name: "Apple iPhone 14 (128GB)",
            price: "₹79,999",
            seller: "Appario Retail",
            category: "Electronics",
            rating: 4.6,
            suspicion: 0.12,
            status: "Safe",
        },
        {
            name: "AirPods Pro (Copy Version)",
            price: "₹1,999",
            seller: "Unknown Seller",
            category: "Accessories",
            rating: 2.1,
            suspicion: 0.87,
            status: "High Risk",
        },
        {
            name: "Samsung 55\" Smart TV",
            price: "₹45,000",
            seller: "Samsung Official",
            category: "Electronics",
            rating: 4.4,
            suspicion: 0.25,
            status: "Medium Risk",
        },
        {
            name: "Nike Running Shoes",
            price: "₹3,499",
            seller: "Nike Store",
            category: "Fashion",
            rating: 4.2,
            suspicion: 0.18,
            status: "Safe",
        },
        {
            name: "Dell Inspiron 15 Laptop (i5, 8GB RAM)",
            price: "₹52,999",
            seller: "Dell Authorized",
            category: "Electronics",
            rating: 4.3,
            suspicion: 0.15,
            status: "Safe",
        },
        {
            name: "Sony WH-1000XM4 Headphones",
            price: "₹19,990",
            seller: "Sony Center",
            category: "Accessories",
            rating: 4.7,
            suspicion: 0.10,
            status: "Safe",
        },
        {
            name: "Rolex Luxury Watch (Replica)",
            price: "₹3,499",
            seller: "LuxuryDeals_99",
            category: "Fashion",
            rating: 2.5,
            suspicion: 0.92,
            status: "High Risk",
        },
        {
            name: "HP Wireless Mouse",
            price: "₹499",
            seller: "HP Official",
            category: "Accessories",
            rating: 4.1,
            suspicion: 0.22,
            status: "Medium Risk",
        },
        {
            name: "Boat Rockerz 255 Pro+",
            price: "₹1,299",
            seller: "Boat Lifestyle",
            category: "Accessories",
            rating: 4.0,
            suspicion: 0.19,
            status: "Safe",
        },
        {
            name: "OnePlus Nord CE 3 Lite",
            price: "₹19,999",
            seller: "OnePlus Store",
            category: "Electronics",
            rating: 4.2,
            suspicion: 0.21,
            status: "Medium Risk",
        },
        {
            name: "Fake Adidas Hoodie",
            price: "₹899",
            seller: "TrendyFashionX",
            category: "Fashion",
            rating: 2.0,
            suspicion: 0.85,
            status: "High Risk",
        },
        {
            name: "LG 260L Refrigerator",
            price: "₹28,500",
            seller: "LG Official",
            category: "Home Appliances",
            rating: 4.5,
            suspicion: 0.13,
            status: "Safe",
        },
        {
            name: "Mi 10000mAh Power Bank",
            price: "₹899",
            seller: "Mi Store",
            category: "Electronics",
            rating: 4.3,
            suspicion: 0.17,
            status: "Safe",
        },
        {
            name: "Gaming Keyboard RGB (Unknown Brand)",
            price: "₹1,199",
            seller: "GameHub99",
            category: "Electronics",
            rating: 3.1,
            suspicion: 0.68,
            status: "High Risk",
        }
    ];

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

                <div style={{ ...styles.menuItem, backgroundColor: "#ff9900" }}
                    onClick={() => navigate("/products")}>
                    All Products
                </div>

                <div
                    style={styles.menuItem} onClick={() => navigate("/")}>
                    Suspicious Checker
                </div>

                <div style={styles.menuItem} onClick={() => navigate("/reports")}>
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
                <h2 style={styles.pageTitle}>All Products</h2>

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

                <div style={styles.tableContainer}>

                    {/* Header */}
                    <div style={styles.tableHeader}>
                        <div>Product</div>
                        <div>Category</div>
                        <div>Seller</div>
                        <div>Price</div>
                        <div>Rating</div>
                        <div>Status</div>
                    </div>

                    {/* Rows */}
                    {products.map((p, i) => (
                        <div key={i} style={{
                            ...styles.tableRow,
                            backgroundColor: i % 2 === 0 ? "#fafafa" : "#fff"
                        }}>
                            <div>
                                <div style={{ fontWeight: "600" }}>{p.name}</div>
                                <div style={styles.subText}>Score: {p.suspicion}</div>
                            </div>

                            <div>{p.category}</div>
                            <div>{p.seller}</div>
                            <div>{p.price}</div>
                            <div>⭐ {p.rating}</div>

                            <div>
                                <span style={{
                                    ...styles.statusBadge,
                                    backgroundColor: getStatusColor(p.status)
                                }}>
                                    {p.status}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

/* ===================== STYLES ===================== */

const styles = {
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
