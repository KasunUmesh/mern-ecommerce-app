import { LayoutDashboard, School2 } from "lucide-react";
import "./App.css";
import Sidebar, { SidebarItem } from "./components/layout/sidebar";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import School from "./pages/schoolAndClub";
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

          <Link to="/school" onClick={() => handleItemClick("/school")}>
            <SidebarItem
              icon={<School2 size={20} />}
              text="School"
              active={activeItem === "/school"}
            />
          </Link>
        </Sidebar>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
