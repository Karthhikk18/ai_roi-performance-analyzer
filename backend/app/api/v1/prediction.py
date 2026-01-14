from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.deps import get_db
from app.schemes.prediction import PredictionCreate, PredictionOut
from app.services.prediction_service import create_prediction

router = APIRouter(prefix="/predictions", tags=["Predictions"])

@router.post("/", response_model=PredictionOut)
def add_prediction(
    data: PredictionCreate,
    db: Session = Depends(get_db)
):
    return create_prediction(db, data)
