from app.db.session import Base, engine

from app.models.model_registry import ModelRegistry
from app.models.prediction import Prediction
from app.models.outcome import ActualOutcome
from app.models.cost import CostMetric
from app.models.roi_report import ROIReport
from app.models.alert import Alert


def init_db():
    Base.metadata.create_all(bind=engine)
