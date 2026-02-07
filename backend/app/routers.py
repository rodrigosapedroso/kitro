from fastapi import APIRouter, Depends
from app.schemas import ProductsOut, MetricsOut
from app.models import Products
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

TAX_RATE = 0.07

@router.get("/products", response_model=list[ProductsOut])
def get_products(db: Session = Depends(get_db)): 
    
    products = db.query(Products).all()
    return products

@router.get("/metrics", response_model=MetricsOut)
def get_metrics(db: Session = Depends(get_db)):
    
    total_stock = 0
    for i in db.query(Products.stock_quantity).all():
        total_stock += i[0]

    total_sold = 0
    for i in db.query(Products.total_sold).all():
        total_sold += i[0]

    total_gains_after_taxes = 0
    for sold, price in db.query(Products.total_sold, Products.price).all():
        total_gains_after_taxes += sold * price * (1-TAX_RATE)

    return MetricsOut(
        total_stock = total_stock,
        total_sold = total_sold,
        total_gains_after_taxes = total_gains_after_taxes
    )