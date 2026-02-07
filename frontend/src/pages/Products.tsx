import { useState, useEffect } from "react";
import { getProducts } from "../services/api"
import type { Products } from "../types";

export default function Products() {
  
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Stock Quantity</th>
          <th className="py-2 px-4">Total Sold</th>
          <th className="py-2 px-4">Price</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.name}>
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">{product.stock_quantity}</td>
            <td className="py-2 px-4">{product.total_sold}</td>
            <td className="py-2 px-4">${product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
    
}