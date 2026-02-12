import { useState } from "react";
import Card from "../components/Card";
import BarChart from "../components/BarChart";
import useProducts from "../hooks/useProducts";
import useMetrics from "../hooks/useMetrics";

type Detail = "stock" | "sold" | "gains" | null;

export default function Overview() {

  const [detail, setDetail] = useState<Detail>(null);

  const { products, loading: productsLoading, error: productsError  } = useProducts();
  const { metrics, loading: metricsLoading, error: metricsError } = useMetrics();

  function handleCardClick(type: Detail) {
    setDetail(prev => (prev === type ? null : type));
  }

  const stockItems = products.map((product) => ({
    label: product.name,
    value: product.stock_quantity,
  }));

  const soldItems = products.map((product) => ({
    label: product.name,
    value: product.total_sold,
  }));

  const gainsItems = products.map((product) => ({
    label: product.name,
    value: Math.round(product.total_sold * product.price * 0.93),
  }));

  return (
    <>
      <h2 className="tracking-wide text-red-200 mb-6 px-6 mt-10 uppercase">
        <span className="text-2xl font-medium">
          SOME OF YOUR CORE
          <br />
        </span>
        <span className="text-4xl font-bold">
          BUSINESS DATA
        </span>
      </h2>
      {metricsLoading? (
        <p>Loading metrics...</p>
      ) : metricsError ? (
        <p className="text-red-500">{metricsError}</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-6 px-6">
            <Card 
              label="Total Stock (Units)" 
              value={metrics?.total_stock}
              onClick={() => handleCardClick("stock")}
              activeItem={detail === "stock"}
            />
            <Card 
              label="Total Sold (Units)" 
              value={metrics?.total_sold}
              onClick={() => handleCardClick("sold")}
              activeItem={detail === "sold"}
            />
            <Card 
              label="Total Gains After Taxes (CHF)" 
              value={metrics?.total_gains_after_taxes.toFixed(2)}
              onClick={() => handleCardClick("gains")}
              activeItem={detail === "gains"}
            />
          </div>
          <div className="px-6 mt-10">
            {detail && (
              <>
                {productsLoading ? (
                  <p>Loading data...</p>
                ) : productsError ? (
                  <p className="text-red-500 font-semibold">Failed to load data.</p>
                ) : (
                  <>
                    {detail === "stock" && <BarChart title="Stock Breakdown" items={stockItems} />}
                    {detail === "sold" && <BarChart title="Sold Breakdown" items={soldItems} />}
                    {detail === "gains" && <BarChart title="Gains Breakdown" items={gainsItems} />}
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}    
    </>
  );
}
