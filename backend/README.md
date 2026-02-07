# Kitro - Backend

This is the backend for **Kitro**, a simple inventory management API designed to track products, stock, sales, and compute basic metrics for a restaurant or retail environment.

## Technology Stack

- **Python 3.11+**
- **FastAPI** - Web framework
- **SQLAlchemy** - ORM for database operations
- **PostgreSQL** - Database

---

## Project Structure
```
backend/
├── app/
│   ├── routers.py       # API endpoints (products & metrics)
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── database.py      # Database connection and session
│   ├── __init__.py      # Makes app a Python package
│   └── main.py          # Application entry point
├── seed.py              # Script to populate initial data
├── startup.py           # Starts the FastAPI server
├── .env                 # Environment variables
├── requirements.txt     # Python dependencies for the backend
└── README.md            # Project documentation
```

## Setup Instructions

### Prerequisites

- Python 3.11+
- PostgreSQL 14+

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/kitro.git
   ```
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Create a PostgreSQL database:
   ```
   CREATE DATABASE kitro;
   ```
6. Create a `.env` file based on the provided `.env.example` template:
   ```
   cp .env.example .env
   ```
   This allows the backend to connect to your database. Using environment variables keeps credentials secure and makes switching environments easier.

7. Initialize the database using the provided script:
   ```
   python seed.py
   ```
   This will create the tables and insert some sample data.

### Running the Application

```
cd backend
python startup.py
```

Alternatively, you can run the application directly with uvicorn:

```
cd backend
uvicorn app.main:app --reload
```

The API will be available at http://127.0.0.1:8000

## API Documentation

Once the application is running, you can access the API documentation at:
- Swagger UI: http://127.0.0.1:8000/docs

## API Endpoints

### Products

- `GET /products` - Returns a list of all products

#### Response example: 

```
[
  {
    "id": 1,
    "name": "Lettuce",
    "stock_quantity": 10,
    "total_sold": 2,
    "price": 3.5
  },
  {
    "id": 2,
    "name": "Tomato",
    "stock_quantity": 20,
    "total_sold": 5,
    "price": 2.0
  }
]
```

### Metrics

- `GET /metrics` - Returns computed metrics: total stock, total sold, total gains after taxes

#### Response example: 

```
{
  "total_stock": 30,
  "total_sold": 7,
  "total_gains_after_taxes": 15.81
}
```

#### Notes

- total_stock is the sum of stock_quantity for all products

- total_sold is the sum of total_sold for all products

- total_gains_after_taxes is calculated as the sum of total_sold * price * (1 - TAX_RATE) for each product, assuming a 7% tax rate

