from fastapi import FastAPI
from backend.app.api.v1.health import router as health_router

app = FastAPI(title="AI ROI Performance Analyzer")

app.include_router(health_router, prefix="/api/v1")

@app.get("/")
def root():
    return {"status": "running"}
