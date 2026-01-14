from fastapi import FastAPI
from app.api.v1.health import router as health_router
from app.api.v1.prediction import router as prediction_router
from app.db.init_db import init_db

app = FastAPI(title="AI ROI Performance Analyzer")

@app.on_event("startup")
def on_startup():
    init_db()

app.include_router(health_router, prefix="/api/v1")
app.include_router(prediction_router, prefix="/api/v1")
