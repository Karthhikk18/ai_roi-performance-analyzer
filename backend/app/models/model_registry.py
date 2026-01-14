from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.db.session import Base


class ModelRegistry(Base):
    __tablename__ = "models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    version = Column(String)
    description = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
