# 🛡️ Suspicious Product Checker

A machine-learning powered system that detects potentially suspicious or fraudulent product listings based on text metadata, pricing anomalies, and image–text similarity. The system uses a **React.js frontend**, a **FastAPI backend**, and an **ML processing pipeline** involving NLP embeddings, PCA, scaling, and a PyTorch MLP classifier.

---

## 📸 UI Preview
Frontend Dashboard Screenshot:
<img width="1866" height="916" alt="Screenshot 2025-11-21 132419" src="https://github.com/user-attachments/assets/d22708a8-fb66-4bde-8d45-2766b366d821" />

Architecture Diagram:
<img width="1432" height="706" alt="diagram-export-11-21-2025-2_03_42-PM" src="https://github.com/user-attachments/assets/99e0bebd-6000-4b6f-8fff-01de5e43386f" />

---

## 📌 Features

* 🔍 Detects suspicious products using ML
* 🧠 SentenceTransformer for text embeddings (title, description, category)
* 📉 Price anomaly detection using Z-scores
* 🖼️ CLIP image–text similarity integration
* ⚡ Real-time predictions through FastAPI
* 🎛️ Beautiful admin dashboard UI (React.js)
* 📁 Modular ML artifacts (PCA, Scaler, Transformer, PyTorch model)

---

## 🏗️ System Architecture

Below is the overall architecture of the system:

### **High-Level Flow**

1. **Frontend (React.js)** sends product details via `POST /predict`.
2. **FastAPI** validates input JSON and forwards it to ML pipeline.
3. **ML Processing Layer** handles preprocessing:

   * Combine title + description + category
   * Generate embeddings using SentenceTransformer
   * PCA transformation
   * Standard scaling
4. **Model Inference**:

   * Features concatenated
   * PyTorch MLP model outputs suspicion score
   * Sigmoid + threshold → label (Safe / Suspicious)
5. **Result returned** to React frontend.

### 📁 Model Artifacts Used

* `all-MiniLM-L6-v2` (SentenceTransformer)
* `pca_transform.pkl`
* `scaler.pkl`
* `suspicion_model.pt` (PyTorch classifier)

---

## 📂 Folder Structure

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
  "suspicion_score": 0.0001,
  "label": "Safe"
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

* Add image upload + CLIP scoring directly
* Live auto-detection using background job
* Multi-category risk profiling
* Database for storing prediction history

---

## 🤝 Contributing

Pull requests are welcome! Open an issue for major changes.

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
