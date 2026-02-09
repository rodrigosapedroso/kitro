import { useEffect, useState } from "react";
import type { Metrics } from "../types";
import { getMetrics } from "../services/api";
import Card from "../components/Card"

export default function Overview() {

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchMetrics() {
      const timer = setTimeout(() => setLoading(true), 50) //after 50ms, shoot setLoading(true)
      try {
        const data = await getMetrics();
        setMetrics(data);
      } catch (err) {
        setError("Failed to fetch metrics.");
      } finally {
        clearTimeout(timer) //if fetch under 50ms, cancel timer
        setLoading(false);
      }
    }
    fetchMetrics();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {loading? (
        <p>Loading metrics...</p>
      ) : (
        <div className="flex-col space-y-4">
          <Card label="Total Stock (Units)" value={metrics?.total_stock}/>
          <Card label="Total Sold (Units)" value={metrics?.total_sold}/>
          <Card label="Total Gains After Taxes (CHF)" value={metrics?.total_gains_after_taxes.toFixed(2)}/>
        </div>
      )}    
    </div>
  );
}
