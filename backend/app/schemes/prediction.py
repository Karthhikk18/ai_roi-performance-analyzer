from pydantic import BaseModel
from datetime import datetime

class PredictionCreate(BaseModel):
    model_id: int
    input_ref: str
    predicted_value: float
    confidence: float

class PredictionOut(PredictionCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
