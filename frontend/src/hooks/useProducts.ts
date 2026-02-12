import { useState, useEffect } from "react";
import { getProducts } from "../services/api"
import type { Products } from "../types";

export default function useProducts() {
  
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const timer = setTimeout(() => setLoading(true), 50) //after 50ms, shoot setLoading(true)
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        clearTimeout(timer) //if fetch under 50ms, cancel timer
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
}
