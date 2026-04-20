import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [autoDetect, setAutoDetect] = useState(true);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview
    }
  };

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

  const getComment = (score) => {
    if (score > 0.8) return "🚨 High risk detected. Listing shows strong fraudulent patterns.";
    if (score > 0.5) return "⚠️ Moderate risk. Some suspicious signals found.";
    return "✅ Low risk. Listing appears safe and normal.";
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
          style={{ ...styles.menuItem, backgroundColor: "#ff9900" }}
          onClick={() => navigate("/")}>
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
        <h2 style={styles.pageTitle}>Suspicious Product Checker</h2>



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
            {/* </div> */}

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
          </div>
            {/* RIGHT: IMAGE UPLOAD */}
              <div style={styles.imageCard}>
                <h3>Product Image</h3>

                <label style={styles.uploadBox}>
                  {image ? (
                    <img
                      src={image}
                      alt="preview"
                      style={styles.previewImage}
                    />
                  ) : (
                    <>
                      <p style={{ color: "#777" }}>Click to Upload</p>
                      <p style={{ fontSize: "12px", color: "#aaa" }}>
                        JPG, PNG supported
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>

                {image && (
                  <button
                    style={styles.removeBtn}
                    onClick={() => setImage(null)}
                  >
                    Remove Image
                  </button>
                )}
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
          <div style={styles.resultGrid}>

            {/* Box 1: Prediction */}
            <div style={styles.resultCard}>
              <h3>Prediction Result</h3>

              <p><strong>Suspicion Score:</strong> {result.suspicion_score}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span style={{
                  color: result.label === "safe" ? "green" : "red",
                  fontWeight: 700,
                }}>
                  {result.label === "safe" ? "Safe" : "Suspicious"}
                </span>
              </p>
            </div>

            {/* Box 2: AI Comment */}
            <div style={styles.resultCard}>
              <h3>AI Analysis</h3>
              <p>{getComment(result.suspicion_score)}</p>
            </div>

            {/* Box 3: Graph */}
            <div style={styles.resultCard}>
              <h3>Risk Visualization</h3>

              <div style={styles.graphBar}>
                <div
                  style={{
                    ...styles.graphFill,
                    width: `${result.suspicion_score * 100}%`,
                    background:
                      result.suspicion_score > 0.8
                        ? "#e74c3c"
                        : result.suspicion_score > 0.5
                          ? "#f1c40f"
                          : "#2ecc71",
                  }}
                />
              </div>

              <p style={{ marginTop: "8px" }}>
                {(result.suspicion_score * 100).toFixed(1)}%
              </p>
            </div>

            {/* Box 4: Extra Insights */}
            <div style={styles.resultCard}>
              <h3>Key Signals</h3>

              <p>📉 Price anomaly detected</p>
              <p>🧠 Text similarity mismatch</p>
              <p>⚠️ Seller pattern risk</p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  previewImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  removeBtn: {
    marginTop: "10px",
    padding: "6px 10px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  resultGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  graphBar: {
    height: "12px",
    background: "#eee",
    borderRadius: "6px",
    marginTop: "10px",
    overflow: "hidden",
  },

  graphFill: {
    height: "100%",
    borderRadius: "6px",
    transition: "0.3s",
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
    background: "#fff",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    minHeight: "120px",
  },
};
