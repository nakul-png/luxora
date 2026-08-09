from app.data.products import products
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from app.routers.products import router as product_router
from app.config.settings import settings
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():
    return {
        "message": "Welcome to LUXORA Product Service"
    }

app.include_router(product_router)