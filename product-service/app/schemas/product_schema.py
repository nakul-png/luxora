from pydantic import BaseModel

class Product(BaseModel):
    id: str
    name: str
    image: str
    images: list[str]
    colors: list[str]
    price: int
    category: str
    description: str