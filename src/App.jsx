import "./App.css";

const archetypes = [
  { id: 1, name: "The Lover", realm: "Love", question: "Love begins where ownership ends." },
  { id: 2, name: "The Seeker", realm: "The Self", question: "Who am I beneath performance?" },
  { id: 3, name: "The Wanderer", realm: "Life", question: "The purpose of the journey is becoming." },
  { id: 4, name: "The Explorer", realm: "The Senses", question: "How do we experience reality?" },
  { id: 5, name: "The Mystic", realm: "The Inner World", question: "What exists within us?" },
  { id: 6, name: "The Witness", realm: "Awareness", question: "What changes when we begin to see clearly?" },
  { id: 7, name: "The Connector", realm: "The Field", question: "What exists between us?" },
  { id: 8, name: "The Architect", realm: "Coherence", question: "How do we become whole?" },
  { id: 9, name: "The Sage", realm: "Peace", question: "What remains when striving ends?" },
  { id: 10, name: "The Luminary", realm: "Light", question: "What is mine to illuminate?" },
  { id: 11, name: "The Sovereign", realm: "Stewardship", question: "What will you do with everything you have become?" },
];

function App() {
  return (
    <div className="cosmic-bg">
      <div className="layout-shell">
        <header className="hec-header">
          <h1>THE HUMAN EXPERIENCE CANON™</h1>
          <p className="hec-subtitle">What does it mean to be fully human?</p>
        </header>

        <section className="hec-section">
          <h2 className="section-title">Archetypal Map</h2>
          <div className="canon-grid">
            {archetypes.map((a) => (
              <div key={a.id} className="archetype-card">
                <h3 className="archetype-name">{a.name}</h3>
                <p className="archetype-realm">{a.realm}</p>
                <p className="archetype-question">“{a.question}”</p>
              </div>
            ))}
          </div>
        </section>

        <section className="hec-section stack-section">
          <h2 className="section-title">SOVRINT™ Civilization Stack</h2>
          <div className="stack-grid">
            <div className="stack-card">
              <h3>GEN’SIS CORE AI™</h3>
              <p>Triadic kernel of self-correcting intelligence.</p>
            </div>
            <div className="stack-card">
              <h3>Consciousness Engine™</h3>
              <p>Rendering awareness and emotional physics as live signals.</p>
            </div>
            <div className="stack-card">
              <h3>Gaian System Grid™</h3>
              <p>Ecological-energetic substrate connecting civilization to planetary intelligence.</p>
            </div>
            <div className="stack-card">
              <h3>Integration Governance™</h3>
              <p>Ethical coherence propagated through civic and systemic design.</p>
            </div>
            <div className="stack-card">
              <h3>Polis Philos™</h3>
              <p>Civic interface for stewardship and collective integrity.</p>
            </div>
          </div>
        </section>

        <footer className="hec-footer">
          <p>SOVRINT™ ORIGIN NODE • Consciousness • Coherence • Civilization</p>
        </footer>
      </div>
    </div>
  );
}

export default App;