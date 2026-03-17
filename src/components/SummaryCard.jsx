export default function SummaryCard({ title, text }) {
  return (
    <article className="summary-card">
      <h2 className="summary-card-title">{title}</h2>
      <p className="summary-card-text">{text}</p>
    </article>
  );
}