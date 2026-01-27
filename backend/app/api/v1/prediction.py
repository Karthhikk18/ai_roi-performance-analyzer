from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.schemes.prediction import PredictionCreate, PredictionOut
from app.services.prediction_service import create_prediction, get_all_predictions

router = APIRouter(prefix="/predictions", tags=["Predictions"])

@router.post("/", response_model=PredictionOut)
def add_prediction(
    data: PredictionCreate,
    db: Session = Depends(get_db)
):
    return create_prediction(db, data)
from typing import List

@router.post("/predictions/")
def add_prediction(data: PredictionCreate, db: Session = Depends(get_db)):
    prediction = create_prediction(db, data)

    return {
        "id": prediction.id,
        "model_id": prediction.model_id,
        "input_ref": prediction.input_ref,
        "cost": prediction.cost,
        "benefit": prediction.benefit,
        "roi": prediction.roi,
        "created_at": prediction.created_at,
    }
