from sqlalchemy.orm import Session
from app.models.prediction import Prediction
from app.schemes.prediction import PredictionCreate

def create_prediction(db: Session, data: PredictionCreate):
    pred = Prediction(**data.dict())
    db.add(pred)
    db.commit()
    db.refresh(pred)
    return pred
