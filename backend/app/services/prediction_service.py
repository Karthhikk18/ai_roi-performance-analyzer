from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.models.prediction import Prediction
from app.schemes.prediction import PredictionCreate
from typing import List


def create_prediction(db: Session, data: PredictionCreate):
    if data.cost <= 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cost must be greater than zero"
        )

    roi = ((data.benefit - data.cost) / data.cost) * 100

    prediction = Prediction(
        model_id=data.model_id,
        
        cost=data.cost,
        benefit=data.benefit,
        roi=roi,
    )

    db.add(prediction)
    db.commit()
    db.refresh(prediction)
    return prediction
from typing import List
from app.models.prediction import Prediction

def get_all_predictions(db: Session) -> List[Prediction]:
    return (
        db.query(Prediction)
        .order_by(Prediction.id.desc())
        .all()
    )
