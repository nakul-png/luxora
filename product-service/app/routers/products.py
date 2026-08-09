from fastapi import APIRouter
from app.services.product_service import get_all_products
from app.schemas.product_schema import Product
router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

@router.get("/", response_model=list[Product])
def get_products():
    return get_all_products()