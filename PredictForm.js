import { useState } from "react";

export default function PredictForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    msrp: "",
    price_anomaly_z: "",
    clip_image_text_sim: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [autoDetect, setAutoDetect] = useState(true); // fake switch

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          msrp: Number(form.msrp),
          price_anomaly_z: Number(form.price_anomaly_z),
          clip_image_text_sim: Number(form.clip_image_text_sim),
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.layout}>

      {/* =================== Sidebar =================== */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>Amazon Dashboard</div>

        <div style={styles.menuItem}> All Products</div>
        <div
          style={{
            ...styles.menuItem,
            backgroundColor: "#ff9900",
            color: "black",
            fontWeight: "700",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          Suspicious Checker
        </div>

        <div style={styles.menuItem}>Reports</div>
        <div style={styles.menuItem}>User Accounts</div>
        <div style={styles.menuItem}>Settings</div>
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
        <h2 style={styles.pageTitle}>Suspicious Product Checker</h2>

        {/* Fake Switch
        <div style={styles.switchRow}>
          <span style={{ fontWeight: 600 }}>Auto-Detect Enabled</span>

          <label style={styles.switch}>
            <input
              type="checkbox"
              checked={autoDetect}
              onChange={() => setAutoDetect(!autoDetect)}
            />
            <span style={styles.slider}></span>
          </label>
        </div> */}

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
            {/* <span style={{
              ...styles.slider,
              backgroundColor: autoDetect ? "#ff9900" : "#ccc",
            }}></span> */}
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


        {/* =================== Form Card =================== */}
        <div style={styles.card}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Product Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Category</label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>MSRP (₹)</label>
                <input
                  type="number"
                  name="msrp"
                  value={form.msrp}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Price Anomaly Z</label>
                <input
                  type="number"
                  name="price_anomaly_z"
                  value={form.price_anomaly_z}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>CLIP Image-Text Similarity</label>
              <input
                type="number"
                name="clip_image_text_sim"
                value={form.clip_image_text_sim}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <button style={styles.button} type="submit">
              {loading ? "Analyzing..." : "Check Suspicion"}
            </button>
          </form>
        </div>

        {/* =================== Result Section =================== */}
        {result && (
          <div style={styles.resultCard}>
            <h3>Prediction Result</h3>

            <p>
              <strong>Suspicion Score:</strong> {result.suspicion_score}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color: result.label === "safe" ? "green" : "red",
                  fontWeight: 700,
                }}
              >
                {result.label === "safe" ? "Safe" : "Suspicious"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
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
    width: "300px",
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
