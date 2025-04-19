import '../styles/persona.css';

export default function PersonaViewer({ persona }) {
  if (!persona) return null;

  return (
    <div className="persona-card">
      <h2>Persona: {persona.name}</h2>
      <p><strong>Age:</strong> {persona.age_range}</p>
      <p><strong>Income:</strong> {persona.income_level}</p>
      <p><strong>Location:</strong> {persona.location}</p>
      <p><strong>Interests:</strong> {persona.interests?.join(', ')}</p>
      <p><strong>Intent:</strong> {persona.purchase_intent}</p>
      <p>{persona.description}</p>
    </div>
  );
}
