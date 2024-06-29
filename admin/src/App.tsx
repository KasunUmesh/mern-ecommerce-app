import { LayoutDashboard, ShoppingCart  } from "lucide-react";
import "./App.css";
import Sidebar, { SidebarItem } from "./components/layout/sidebar";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/dashboard";
import { useState } from "react";

function App() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (path: string) => {
    setActiveItem(path);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <Link to="/" onClick={() => handleItemClick("/")}>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active={activeItem === "/"}
            />
          </Link>

          <Link to="/addproduct" onClick={() => handleItemClick("/addproduct")}>
            <SidebarItem
              icon={<ShoppingCart  size={20} />}
              text="Products"
              active={activeItem === "/addproduct"}
            />
          </Link>
        </Sidebar>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
