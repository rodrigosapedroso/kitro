from database import Base
from sqlalchemy import Column, Integer, String, Numeric

class Product(Base): 
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    stock_quantity = Column(Integer, default=0)
    total_sold = Column(Integer, default=0)
    price = Column(Numeric(10, 2), nullable=False)