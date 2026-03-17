import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import StagesView from "./views/StagesView";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="app">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="main-content">
        {currentView === "home" && <HomeView />}
        {currentView === "stages" && <StagesView />}
      </main>
    </div>
  );
}

