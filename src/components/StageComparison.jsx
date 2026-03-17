export default function StageComparison({ stage, isOpen, onToggle }) {
  return (
    <article className="stage-comparison">
      <button
        type="button"
        onClick={onToggle}
        className="stage-comparison-header"
      >
        <div className="stage-comparison-header-text">
          <p className="stage-comparison-label">Etapa</p>
          <h3 className="stage-comparison-title">{stage.title}</h3>
          <p className="stage-comparison-summary">{stage.summary}</p>
        </div>

        <span className="stage-comparison-icon">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="stage-comparison-content">
          <div className="stage-comparison-grid">
            <div className="comparison-quadrant comparison-program">
              <h4 className="comparison-quadrant-title">Programa A</h4>
              <ul className="comparison-list">
                {stage.programA.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-quadrant comparison-program">
              <h4 className="comparison-quadrant-title">Programa B</h4>
              <ul className="comparison-list">
                {stage.programB.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-quadrant comparison-unification">
              <h4 className="comparison-quadrant-title comparison-green">
                Puntos de unificación
              </h4>
              <ul className="comparison-list">
                {stage.unification.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-quadrant comparison-differences">
              <h4 className="comparison-quadrant-title comparison-orange">
                Diferencias
              </h4>
              <ul className="comparison-list">
                {stage.differences.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}