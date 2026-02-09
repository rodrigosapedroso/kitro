import { useState } from "react";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import kitroLogo from "./assets/kitro.png"
import { SquareChartGantt, Apple } from "lucide-react";

type Page = "overview" | "products";

function App() {
  const [page, setPage] = useState<Page>("overview");

  const items = [
    {label: "Overview", page: () => setPage("overview"), icon: <SquareChartGantt className="w-4 h-4"/>},
    {label: "Products", page: () => setPage("products"), icon: <Apple className="w-4 h-4"/>},
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        logo={<img src={kitroLogo} alt="Kitro Logo" className="h-32 w-auto" />} 
        items={items}
      />
      {/* Main content */}
      <main className="flex-1 p-8 bg-kitro-background">
        {page === "overview" && <Overview />}
        {page === "products" && <Products />}
      </main>
    </div>
  );
}

export default App;
