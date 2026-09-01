import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {page === "home" && <Header setPage={setPage} />}

      {page === "home" && <Home />}

      {page === "dashboard" && <DashboardPage />}
    </div>
  );
}
export default App;
