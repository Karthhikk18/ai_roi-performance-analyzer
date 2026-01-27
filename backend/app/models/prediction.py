from sqlalchemy import Column, Integer, Float, DateTime
from datetime import datetime
from app.db.session import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, nullable=False)
    cost = Column(Float, nullable=False)
    benefit = Column(Float, nullable=False)
    roi = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
