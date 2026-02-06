export default function FAQ() {
  const items = [
    "Do you take insurance?",
    "What are your rates?",
    "Openings available?"
  ];

  return (
    <section className="py-24">
      <div className="max-w-xl mx-auto">

        <h2 className="font-display text-2xl mb-6">FAQs</h2>

        {items.map((q,i)=>(
          <details key={i} className="border-b py-4">
            <summary className="cursor-pointer">{q}</summary>
            <p className="text-muted mt-2">
              Answer placeholder
            </p>
          </details>
        ))}

      </div>
    </section>
  );
}
