import HeroSection from "../components/HeroSection";
import SummaryCard from "../components/SummaryCard";

export default function HomeView() {
  return (
    <section className="page-section">
      <HeroSection />

      <div className="summary-grid">
        <SummaryCard
          title="Resumen"
          text="Esta presentación busca ordenar y comunicar de forma clara cómo dos programas pueden integrarse en una sola ruta de trabajo, manteniendo coherencia metodológica, foco estratégico y una lógica común de implementación."
        />

        <SummaryCard
          title="Objetivo"
          text="Visualizar el proceso de unificación, identificar los hitos principales y entregar una lectura simple de cada etapa, mostrando coincidencias, diferencias y puntos relevantes para la toma de decisiones."
        />
      </div>

      <article className="info-panel">
        <h2 className="info-panel-title">Datos importantes</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Cobertura estimada</p>
            <p className="stat-value">85%</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Procesos homologables</p>
            <p className="stat-value">12 de 15</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Diferencias críticas</p>
            <p className="stat-value">3</p>
          </div>

          <div className="stat-card">
            <p className="stat-label">Tiempo estimado</p>
            <p className="stat-value">4 meses</p>
          </div>
        </div>
      </article>
    </section>
  );
}