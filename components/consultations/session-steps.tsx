interface SessionStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

interface SessionStepsProps {
  steps: readonly SessionStep[];
}

export function SessionSteps({ steps }: SessionStepsProps) {
  return (
    <ol className="steps-grid">
      {steps.map((item) => (
        <li key={item.step} className="surface-card step-card">
          <span className="surface-card__index">Step {item.step}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
