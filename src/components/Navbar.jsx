export default function Navbar({ currentView, setCurrentView }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src="/logo-centro-innovacion.png"
            alt="Logo Centro de Innovación"
            className="navbar-logo"
          />

          <div>
            <p className="navbar-title">Centro de Innovación</p>
            <p className="navbar-subtitle">Presentación de unificación</p>
          </div>
        </div>

        <nav className="navbar-nav">
          <button
            type="button"
            onClick={() => setCurrentView("home")}
            className={`nav-button ${
              currentView === "home" ? "nav-button-active" : ""
            }`}
          >
            Inicio
          </button>

          <button
            type="button"
            onClick={() => setCurrentView("stages")}
            className={`nav-button ${
              currentView === "stages" ? "nav-button-active" : ""
            }`}
          >
            Etapas
          </button>
        </nav>
      </div>
    </header>
  );
}