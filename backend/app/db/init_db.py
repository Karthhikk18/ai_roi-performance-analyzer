from app.db.session import engine, Base

# IMPORT ALL MODELS HERE
from app.models.model_registry import ModelRegistry
from app.models.prediction import Prediction
from app.models.alert import Alert
from app.models.cost import CostMetric
from app.models.outcome import ActualOutcome

from app.models.roi_report import ROIReport

def init_db():
    Base.metadata.create_all(bind=engine)
