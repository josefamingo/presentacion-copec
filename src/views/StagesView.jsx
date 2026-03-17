import { useState } from "react";
import StageComparison from "../components/StageComparison";
import { stages } from "../data/stages";

export default function StagesView() {
  const [openId, setOpenId] = useState(1);

  const toggleStage = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="page-section">
      <div className="stages-header">
        <h1 className="stages-title">Resumen por etapas</h1>
        <p className="stages-text">
          Cada etapa se despliega por separado y muestra una comparación entre
          ambos programas, junto con los puntos de unificación y sus
          diferencias.
        </p>
      </div>

      <div className="stages-list">
        {stages.map((stage) => (
          <StageComparison
            key={stage.id}
            stage={stage}
            isOpen={openId === stage.id}
            onToggle={() => toggleStage(stage.id)}
          />
        ))}
      </div>
    </section>
  );
}