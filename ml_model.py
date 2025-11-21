import os
import pickle
import torch
import numpy as np
from sentence_transformers import SentenceTransformer

# ===============================
# Paths
# ===============================
BASE_DIR = os.path.dirname(os.path.dirname(__file__))   # backend/
MODEL_DIR = os.path.join(BASE_DIR, "models")

# ===============================
# Load PCA + Scaler
# ===============================
with open(os.path.join(MODEL_DIR, "pca_transform.pkl"), "rb") as f:
    pca = pickle.load(f)

with open(os.path.join(MODEL_DIR, "scaler.pkl"), "rb") as f:
    scaler = pickle.load(f)

# ===============================
# Model Definition
# ===============================
class MLP(torch.nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.net = torch.nn.Sequential(
            torch.nn.Linear(dim, 256),
            torch.nn.ReLU(),
            torch.nn.Dropout(0.2),

            torch.nn.Linear(256, 64),
            torch.nn.ReLU(),
            torch.nn.Dropout(0.1),

            torch.nn.Linear(64, 1)
        )

    def forward(self, x):
        return self.net(x).squeeze(1)

# ===============================
# Load PyTorch Model
# ===============================
model = MLP(68)
model.load_state_dict(
    torch.load(os.path.join(MODEL_DIR, "suspicion_model.pt"), map_location="cpu")
)
model.eval()

# ===============================
# Load Sentence Transformer
# ===============================
embedder = SentenceTransformer("all-MiniLM-L6-v2")

print("ML Model + PCA + Scaler Loaded Successfully.")

# ===============================
# Prediction Function
# ===============================
def predict(record, threshold=0.65):
    """
    record: dict containing title, description, category,
            price, msrp, price_anomaly_z, clip_image_text_sim
    returns: suspicion_score + label
    """

    # Combine text
    text = (
        str(record.get("title", "")) + " " +
        str(record.get("description", "")) + " " +
        str(record.get("category", ""))
    )

    # Embedding (ensure numpy output)
    emb = embedder.encode([text], convert_to_numpy=True)
    emb_p = pca.transform(emb)

    # Numeric features
    price = float(record.get("price", 0))
    msrp = float(record.get("msrp", 0))
    paz = float(record.get("price_anomaly_z", 0))
    sim = float(record.get("clip_image_text_sim", 0))

    sim_norm = (sim + 1) / 2  # normalize -1..1 → 0..1

    num = np.array([[price, msrp, paz, sim_norm]])
    num_s = scaler.transform(num)

    # Combine features
    X = np.hstack([emb_p, num_s]).astype(np.float32)

    # Predict
    with torch.no_grad():
        tensor = torch.tensor(X, dtype=torch.float32)
        p = torch.sigmoid(model(tensor)).item()

    # Clean probability
    p = max(min(p, 1), 0)

    return {
        "suspicion_score": round(p, 4),
        "label": "suspicious" if p >= threshold else "safe"
    }

