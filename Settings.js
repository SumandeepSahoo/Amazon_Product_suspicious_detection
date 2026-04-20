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

        <div style={styles.menuItem} onClick={() => navigate("/users")}>
          User Accounts
        </div>

        <div style={{ ...styles.menuItem, backgroundColor: "#ff9900" }}
          onClick={() => navigate("/settings")}>
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
        <h2 style={styles.pageTitle}>Settings</h2>

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

        {/* =================== SETTINGS GRID =================== */}
        <div style={styles.settingsGrid}>

          {/* Detection Settings */}
          <div style={styles.panel}>
            <h3>Detection Settings</h3>

            <div style={styles.settingRow}>
              <span>Auto Detection</span>
              <span style={styles.badgeOn}>Enabled</span>
            </div>

            <div style={styles.settingRow}>
              <span>Suspicion Threshold</span>
              <input type="range" min="0" max="1" step="0.01" style={{ width: "120px" }} />
            </div>

            <div style={styles.settingRow}>
              <span>AI Model</span>
              <span style={styles.badgeInfo}>Active</span>
            </div>
          </div>

          {/* Admin Preferences */}
          <div style={styles.panel}>
            <h3>Admin Preferences</h3>

            <div style={styles.settingRow}>
              <span>Notifications</span>
              <span style={styles.badgeOn}>On</span>
            </div>

            <div style={styles.settingRow}>
              <span>Dark Mode</span>
              <span style={styles.badgeOff}>Off</span>
            </div>

            <div style={styles.settingRow}>
              <span>Auto Refresh</span>
              <span style={styles.badgeOn}>Enabled</span>
            </div>
          </div>

        </div>

        {/* =================== ACCOUNT =================== */}
        <div style={styles.panel}>
          <h3>Account Settings</h3>

          <input placeholder="Admin Name" style={styles.input} />
          <input placeholder="Email Address" style={styles.input} />

          <button style={styles.saveBtn}>Save Changes</button>
        </div>

        {/* =================== SYSTEM CONTROL =================== */}
        <div style={styles.panel}>
          <h3>System Control</h3>

          <div style={styles.actionRow}>
            <button style={styles.warningBtn}>Clear Logs</button>
            <button style={styles.dangerBtn}>Reset Model</button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  settingsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },

  panel: {
    background: "#fff",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "12px",
  },

  badgeOn: {
    background: "#2ecc71",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  badgeOff: {
    background: "#ccc",
    color: "#333",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  badgeInfo: {
    background: "#3498db",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  saveBtn: {
    marginTop: "12px",
    padding: "10px",
    background: "#ff9900",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  actionRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  dangerBtn: {
    padding: "10px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  warningBtn: {
    padding: "10px",
    background: "#f1c40f",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
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
