# 🛡️ Product Suspicion Detection System for E-Commerce

An advanced **AI-powered fraud detection system** designed to identify suspicious or fraudulent product listings in e-commerce platforms. This system leverages **multimodal intelligence (text + image)**, **risk scoring**, and **real-time analytics dashboards** to provide actionable insights for users, sellers, and administrators.

---

## 🚀 What’s New (Major Upgrades)

✨ Image-based fraud detection using CLIP  
✨ AI-powered explanations for predictions  
✨ Interactive risk visualization dashboard  
✨ Key signals breakdown:
- Price anomaly detection  
- Text inconsistency detection  
- Seller risk profiling  

✨ User & seller risk tracking system  
✨ Admin dashboard with reports, alerts & controls  
✨ Real-time fraud alerts + activity tracking  

---

## 🧠 Core Intelligence

• NLP embeddings using SentenceTransformers  
• Price anomaly detection using Z-score analysis  
• Multimodal similarity using CLIP (image + text)  
• PyTorch neural network for final classification  

---

## 📸 UI Preview

### Dashboard Screens
<img width="1600" height="750" src="https://github.com/user-attachments/assets/0baa3d8b-6494-4372-892b-0e67915533b5" />
<img width="1600" height="755" src="https://github.com/user-attachments/assets/5e7cb7aa-3362-4748-a1ed-23efd19b13ee" />

### Architecture Diagram
<img width="1432" height="706" src="https://github.com/user-attachments/assets/99e0bebd-6000-4b6f-8fff-01de5e43386f" />

---

## 📌 Features

### 🔍 Fraud Detection Engine
- Detects suspicious product listings using ML models
- Combines textual, numerical, and image-based signals

### 🧠 AI Explainability
- Provides reasoning behind predictions
- Highlights contributing factors (price, text mismatch, seller risk)

### 📊 Risk Visualization Dashboard
- Displays risk scores in an intuitive format
- Helps users quickly understand fraud probability

### 👤 User & Seller Risk Tracking
- Maintains behavioral risk profiles
- Tracks suspicious activity trends over time

### 🛠️ Admin Control Panel
- Monitor platform-wide fraud activity
- Generate reports and alerts
- Take moderation actions

### ⚡ Real-Time Detection
- Instant predictions via FastAPI
- Live activity tracking and alerts

---

## 🏗️ System Architecture

### High-Level Flow

1. **Frontend (React.js)** sends product data via `POST /predict`
2. **FastAPI Backend** validates and forwards request
3. **ML Processing Layer**:
   - Combines title, description, category
   - Generates embeddings (SentenceTransformers)
   - Applies PCA transformation
   - Scales features using StandardScaler

4. **Multimodal Analysis**:
   - CLIP computes image-text similarity
   - Price anomaly computed using Z-score

5. **Model Inference**:
   - Features concatenated
   - Passed into PyTorch neural network
   - Outputs suspicion score

6. **Explainability Layer**:
   - Breaks down contributing risk signals

7. **Response Returned**:
   - Suspicion score
   - Label (Safe / Suspicious)
   - Explanation + key signals

---

## 📁 Model Artifacts

- `all-MiniLM-L6-v2` (SentenceTransformer)
- `pca_transform.pkl`
- `scaler.pkl`
- `suspicion_model.pt` (PyTorch model)
- CLIP model (for image-text similarity)

---

## 📂 Folder Structure

---

```
project-root/
├── backend/
│   ├── main.py
│   ├── models/
│   │   ├── pca_transform.pkl
│   │   ├── scaler.pkl
│   │   ├── suspicion_model.pt
│   │   └── all-MiniLM-L6-v2/
│   ├── utils/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── package.json
│
└── README.md
```

---

## 🚀 Tech Stack

### **Frontend**

* React.js
* Axios
* TailwindCSS
* React Router

### **Backend**

* FastAPI
* Pydantic

### **Machine Learning**

* PyTorch
* SentenceTransformers
* CLIP (OpenAI)
* Scikit-Learn (PCA, StandardScaler)
* NumPy

---

## 🧪 API Usage

### **POST /predict**

#### Request Body Example

```json
{
  "title": "Apple AirPods Pro",
  "description": "Active noise cancellation, original Apple product with warranty.",
  "category": "Electronics",
  "price": 19990,
  "msrp": 24900,
  "price_z": 0.12,
  "clip_similarity": 0.91
}
```

#### Response Example

```json
{
  "suspicion_score": 0.23,
  "label": "Safe",
  "explanation": {
    "price_risk": "Low",
    "text_consistency": "High",
    "seller_risk": "Medium"
  }
```

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd suspicious-product-checker
```

### 2️⃣ Install Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3️⃣ Install Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📊 Model Pipeline Explained

* **SentenceTransformer** converts text → 384-d vector
* **PCA** reduces dimensions for performance
* **StandardScaler** normalizes input features
* Features concatenated with numeric fields
* **PyTorch MLP** outputs suspicious likelihood

---

## 🛡️ Prediction Logic

```
if suspicion_score > 0.5:
    label = "Suspicious"
else:
    label = "Safe"
```

---

## 🧑‍💻 Future Improvements

* Real-time streaming fraud detection
* Advanced seller reputation scoring (graph-based)
* Auto-blocking suspicious listings
* Deployment with scalable microservices
* Integration with live e-commerce platforms

---

## 🤝 Contributing

Pull requests are welcome! Open an issue for major changes.

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
