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

        <div style={styles.menuItem}
          onClick={() => navigate("/reports")}>
          Reports
        </div>

        <div style={{ ...styles.menuItem, backgroundColor: "#ff9900" }}
          onClick={() => navigate("/users")}>
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
        <h2 style={styles.pageTitle}>User Accounts</h2>

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

        {/* =================== USER STATS =================== */}
        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <h3>320</h3>
            <p>Total Users</p>
          </div>

          <div style={{ ...styles.statCard, borderTop: "4px solid #f1c40f" }}>
            <h3>45</h3>
            <p>Suspicious</p>
          </div>

          <div style={{ ...styles.statCard, borderTop: "4px solid #e74c3c" }}>
            <h3>12</h3>
            <p>Banned</p>
          </div>

          <div style={{ ...styles.statCard, borderTop: "4px solid #2ecc71" }}>
            <h3>263</h3>
            <p>Active</p>
          </div>
        </div>

        {/* =================== USERS TABLE =================== */}
        <div style={styles.tableContainer}>

          <div style={styles.tableHeader}>
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Risk</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {[
            { name: "Ritesh Kumar", email: "ritesh@gmail.com", role: "Seller", risk: 0.12, status: "Active" },
            { name: "FakeDeals99", email: "fake@spam.com", role: "Seller", risk: 0.88, status: "Suspicious" },
            { name: "Admin", email: "admin@amazon.com", role: "Admin", risk: 0.05, status: "Active" },
            { name: "TrendySellerX", email: "trend@shop.com", role: "Seller", risk: 0.95, status: "Banned" },
          ].map((u, i) => (
            <div key={i} style={{
              ...styles.tableRow,
              backgroundColor: i % 2 === 0 ? "#fafafa" : "#fff"
            }}>
              <div style={{ fontWeight: "600" }}>{u.name}</div>
              <div>{u.email}</div>
              <div>{u.role}</div>
              <div>{u.risk}</div>

              <div>
                <span style={{
                  ...styles.statusBadge,
                  backgroundColor:
                    u.status === "Active"
                      ? "#2ecc71"
                      : u.status === "Suspicious"
                        ? "#f1c40f"
                        : "#e74c3c"
                }}>
                  {u.status}
                </span>
              </div>

              <div>
                <button style={styles.actionBtn}>View</button>
              </div>
            </div>
          ))}
        </div>

        {/* =================== ALERT PANEL =================== */}
        <div style={{ marginTop: "25px" }}>
          <h3>⚠️ High Risk Users</h3>

          <div style={styles.alertHigh}>
            FakeDeals99 — Risk Score: 0.88
          </div>

          <div style={styles.alertHigh}>
            TrendySellerX — Risk Score: 0.95
          </div>
        </div>

        {/* =================== ACTIVITY =================== */}
        <div style={{ marginTop: "25px" }}>
          <h3>Recent Activity</h3>

          <div style={styles.activityItem}>
            🚨 User banned: TrendySellerX
          </div>

          <div style={styles.activityItem}>
            ⚠️ Suspicious account flagged: FakeDeals99
          </div>

          <div style={styles.activityItem}>
            ✅ New seller verified: Ravi Kumar
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  statsRow: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },

  statCard: {
    flex: 1,
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
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
    gridTemplateColumns: "1.5fr 2fr 1fr 1fr 1fr 1fr",
    padding: "12px",
    background: "#232f3e",
    color: "white",
    fontWeight: "600",
  },

  tableRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 2fr 1fr 1fr 1fr 1fr",
    padding: "12px",
    borderBottom: "1px solid #eee",
    alignItems: "center",
  },

  statusBadge: {
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
  },

  actionBtn: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#ff9900",
    cursor: "pointer",
  },

  alertHigh: {
    background: "#ffe6e6",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "8px",
  },

  activityItem: {
    background: "#fff",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
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
