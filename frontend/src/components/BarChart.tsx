import { useEffect, useState } from "react";

interface BarChartItem {
  label: string;
  value: number;
}

interface BarChartProps {
  title: string;
  items: BarChartItem[];
}

export default function BarChart({ title, items }: BarChartProps) {
  const [animate, setAnimate] = useState(false);

  const maxValue = Math.max(...items.map((item) => item.value), 1);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <div className="bg-white border-green-200 max-w-2xl mt-8 border-l-4 rounded-r-lg shadow-sm px-5 pt-3 pb-5">
      <h3 className="text-lg font-semibold text-coffee-500 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => {

          const rawPercentage = (item.value / maxValue) * 100;
          const percentage = Math.min(rawPercentage, 92);

          return (
            <div key={item.label} className="flex items-center gap-1">
              <div className="text-sm font-medium text-black min-w-[85px]">
                {item.label}
              </div>
              <div className="relative flex-1 h-4">
                <div
                  className="h-4 bg-green-200 rounded transition-all duration-500"
                  style={{
                    width: animate ? `${percentage}%` : "0%",
                  }}
                />
                <div
                  className="absolute top-1/2 text-sm font-semibold text-black whitespace-nowrap"
                  style={{
                    left: animate ? `calc(${percentage}% + 8px)` : "0%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
