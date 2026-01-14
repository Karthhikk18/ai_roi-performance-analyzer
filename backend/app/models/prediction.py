from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime
from datetime import datetime
from app.db.session import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("models.id"))
    predicted_value = Column(Float)
    confidence = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
