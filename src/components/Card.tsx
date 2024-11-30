interface CardProps {
  title: string;
  description?: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="bg-slate-400 min-h-20 rounded shadow-sm p-2">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
