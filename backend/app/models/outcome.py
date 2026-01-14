from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime
from datetime import datetime
from app.db.session import Base

class ActualOutcome(Base):
    __tablename__ = "actual_outcomes"

    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(Integer, ForeignKey("predictions.id"))
    actual_value = Column(Float)
    recorded_at = Column(DateTime, default=datetime.utcnow)
