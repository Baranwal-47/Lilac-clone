import Image from "next/image";

export default function Reassurance() {
  return (
    <section className="grid lg:grid-cols-2">

      <div className="relative h-[500px]">
        <Image src="/calm.webp" alt="" fill className="object-cover"/>
      </div>

      <div className="bg-[#d8d3df] px-12 py-20">
        <h2 className="font-display text-3xl mb-6">
          You don’t have to do this alone.
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-muted">
          <li>Persistent sadness</li>
          <li>Trouble focusing</li>
          <li>Relationship challenges</li>
          <li>Feeling exhausted</li>
        </ul>
      </div>

    </section>
  );
}
