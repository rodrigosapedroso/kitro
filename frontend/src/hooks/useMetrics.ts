import { useEffect, useState } from "react";
import type { Metrics } from "../types";
import { getMetrics } from "../services/api";

export default function useMetrics() {

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchMetrics() {
      const timer = setTimeout(() => setLoading(true), 50) //after 50ms, shoot setLoading(true)
      try {
        const data = await getMetrics();
        setMetrics(data);
      } catch {
        setError("Failed to load metrics.");
      } finally {
        clearTimeout(timer) //if fetch under 50ms, cancel timer
        setLoading(false);
      }
    }
    fetchMetrics();
  }, []);

  return { metrics, loading, error };
}