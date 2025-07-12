interface SedeDescriptionProps {
  title: string;
  description: string;
  items: { label: string; value: string }[];
}

export default function SedeDescription({ title, description, items }: SedeDescriptionProps) {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-gray-700">
      <h2 className="text-2xl font-bold text-valencia-blue mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(({ label, value }) => (
          <div key={label} className="bg-valencia-light-blue/20 rounded-lg p-4">
            <span className="font-semibold">{label}:</span> {value}
          </div>
        ))}
      </div>
    </section>
  );
}
