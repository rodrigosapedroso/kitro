from pydantic import BaseModel

class ProductsOut(BaseModel):
    name: str
    stock_quantity: int
    total_sold: int
    price: float

    class Config:
        orm_mode = True

class MetricsOut(BaseModel):
    total_stock: int
    total_sold: int
    total_gains_after_taxes: float
