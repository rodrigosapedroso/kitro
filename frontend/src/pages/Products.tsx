import { useState, useEffect } from "react";
import { getProducts } from "../services/api"
import type { Products } from "../types";

export default function Products() {
  
  const [products, setProducts] = useState<Products[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 px-3 py-2 border rounded w-full"
      />
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Stock Quantity (Units)</th>
            <th className="py-2 px-4">Total Sold (Units)</th>
            <th className="py-2 px-4">Price (CHF)</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((product) => (
            <tr key={product.name} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.stock_quantity}</td>
              <td className="py-2 px-4">{product.total_sold}</td>
              <td className="py-2 px-4">CHF {product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    
}