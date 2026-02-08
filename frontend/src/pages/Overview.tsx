import { useEffect, useState } from "react";
import type { Metrics } from "../types";
import { getMetrics } from "../services/api";
import Card from "../components/Card"

export default function Overview() {

  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchMetrics() {
      try {
        const data = await getMetrics();
        setMetrics(data);
      } catch (err) {
        setError("Failed to fetch metrics.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMetrics();
  }, []);

  if (loading) return <p>Loading metrics...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <Card label="Total Stock" value={metrics?.total_stock}/>
      <Card label="Total Sold" value={metrics?.total_sold}/>
      <Card label="Total Gains After Taxe" value={metrics?.total_gains_after_taxes.toFixed(2)}/>
    </div>
  );
}
