import { useState } from "react";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import kitroLogo from "./assets/kitro.png"
import { SquareChartGantt, Apple } from "lucide-react";

type Page = "overview" | "products" | null;

function App() {
  const [page, setPage] = useState<Page>("overview");
  const [active, setActive] = useState<Page>(null);

  const sidebarItems = [
    {
      label: "Overview", 
      page: "overview",
      navigate: () => {
        setPage("overview"); 
        setActive("overview")
      },
      icon: <SquareChartGantt className="w-4 h-4"/>
    },
    {
      label: "Products",
      page: "products",
      navigate: () => {
        setPage("products"); 
        setActive("products")
      },
      icon: <Apple className="w-4 h-4"/>
    },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        logo={
          <button 
            onClick= {() => {
              setPage("overview"); 
              setActive(null)
            }}>
            <img 
              src={kitroLogo} 
              alt="Kitro Logo" 
              className="h-32 w-auto"/>
          </button>
        } 
        items={sidebarItems}
        activeItem={active}
      />
      {/* Main content */}
      <main className="flex-1 p-8 bg-cream-200">
        {page === "overview" && <Overview />}
        {page === "products" && <Products />}
      </main>
    </div>
  );
}

export default App;
