from app.database import SessionLocal
from app.models import Product

def seed():
    db = SessionLocal()

    if db.query(Product).count() == 0:
        products = [
            Product(
                name="Lettuce", 
                stock_quantity=120, 
                total_sold=80, 
                price=2.50
            ),
            Product(
                name="Potato", 
                stock_quantity=300, 
                total_sold=200, 
                price=1.20
            ),
            Product(
                name="Tomato", 
                stock_quantity=150, 
                total_sold=100, 
                price=3.00
            ),
            Product(
                name="Bread", 
                stock_quantity=90, 
                total_sold=60, 
                price=3.80
            ),
            Product(
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