from pydantic import BaseModel

class ItemInput(BaseModel):
    title: str
    description: str
    category: str
    price: float
    msrp: float
    price_anomaly_z: float
    clip_image_text_sim: float
