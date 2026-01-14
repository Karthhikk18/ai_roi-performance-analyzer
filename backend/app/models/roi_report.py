from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime
from datetime import datetime
from app.db.session import Base

class ROIReport(Base):
    __tablename__ = "roi_reports"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("models.id"))
    total_cost = Column(Float)
    total_benefit = Column(Float)
    roi_percentage = Column(Float)
    generated_at = Column(DateTime, default=datetime.utcnow)
