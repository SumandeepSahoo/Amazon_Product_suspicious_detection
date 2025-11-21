from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import ItemInput
from app.ml_model import predict

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # You can restrict to ["http://localhost:3000"] later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "ML Suspicion Model Running"}


@app.post("/predict")
def predict_item(item: ItemInput):
    # Convert Pydantic object to dictionary
    result = predict(item.dict())
    return result
