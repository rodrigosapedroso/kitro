from app.database import SessionLocal, Base, engine
from app.models import Products

Base.metadata.create_all(bind=engine)

def seed():
    db = SessionLocal()

    if db.query(Products).count() == 0:
        products = [
            Products(
                name="Lettuce", 
                stock_quantity=120, 
                total_sold=80, 
                price=2.50
            ),
            Products(
                name="Potato", 
                stock_quantity=300, 
                total_sold=200, 
                price=1.20
            ),
            Products(
                name="Tomato", 
                stock_quantity=150, 
                total_sold=100, 
                price=3.00
            ),
            Products(
                name="Bread", 
                stock_quantity=90, 
                total_sold=60, 
                price=3.80
            ),
            Products(
                name="Onion", 
                stock_quantity=110, 
                total_sold=70, 
                price=1.00
            ),
        ]

        db.add_all(products)
        db.commit()

    db.close()

if __name__ == "__main__":
    seed()