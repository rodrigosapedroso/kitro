#File to create the app FastAPI, import routes and connect them to the app
from fastapi import FastAPI
from app.database import Base, engine

app = FastAPI(title="Kitro")

@app.get("/") 
async def root(): 
    return {
        "status": "ok",
        "service": "Kitro API"
    }

# Create database tables
Base.metadata.create_all(bind=engine)
