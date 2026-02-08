import { useState, useEffect } from "react";
import { getProducts } from "../services/api"
import type { Products } from "../types";
import Table from "../components/Table";
import SearchBox from "../components/SearchBox";

export default function Products() {
  
  const [products, setProducts] = useState<Products[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = [
  {
    header: "Name",
    value: (product: Products) => product.name,
  },
  {
    header: "Stock Quantity (Units",
    value: (product: Products) => product.stock_quantity,
  },
  {
    header: "Total Sold (Units)",
    value: (product: Products) => product.total_sold,
  },
  {
    header: "Price (CHF)",
    value: (product: Products) => product.price.toFixed(2),
  },
];


  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <SearchBox 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={setSearchTerm} 
      />
      <Table 
        data={filteredProducts} 
        headers={headers} 
      />
    </div>
  );
    
}