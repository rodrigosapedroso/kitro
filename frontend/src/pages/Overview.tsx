import { useEffect, useState } from "react";
import type { Metrics } from "../types";
import { getMetrics } from "../services/api";

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
      {/* Total Stock */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Stock</h3>
        <p className="mt-2 text-2xl font-bold">{metrics?.total_stock}</p>
      </div>

      {/* Total Sold */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Sold</h3>
        <p className="mt-2 text-2xl font-bold">{metrics?.total_sold}</p>
      </div>

      {/* Total Gains After Taxes */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Gains After Taxes</h3>
        <p className="mt-2 text-2xl font-bold">
          ${metrics?.total_gains_after_taxes.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
