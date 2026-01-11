from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime
from backend.app.db.session import Base

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("models.id"))
    alert_type = Column(String)
    message = Column(String)
    severity = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
