from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime
from datetime import datetime
from backend.app.db.session import Base

class CostMetric(Base):
    __tablename__ = "cost_metrics"

    id = Column(Integer, primary_key=True, index=True)
    prediction_id = Column(Integer, ForeignKey("predictions.id"))
    api_cost = Column(Float)
    infra_cost = Column(Float)
    human_minutes_saved = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
