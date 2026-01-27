from pydantic import BaseModel
from datetime import datetime

class PredictionCreate(BaseModel):
    model_id: int
    
    cost: float
    benefit: float

class PredictionOut(PredictionCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
