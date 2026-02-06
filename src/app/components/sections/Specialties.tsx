import Image from "next/image";

const cards = [
  { title: "Self-Esteem", img: "/s1.webp" },
  { title: "Relationships", img: "/s2.webp" },
  { title: "Burnout", img: "/s3.webp" },
];

export default function Specialties() {
  return (
    <section className="py-24 text-center">
      <h2 className="font-display text-3xl mb-12">
        My Specialties
      </h2>

      <div className="max-w-content mx-auto grid md:grid-cols-3 gap-8 px-8">
        {cards.map((c,i)=>(
          <div key={i} className="border p-6">

            <h3 className="mb-4">{c.title}</h3>

            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
              <Image src={c.img} alt="" fill className="object-cover"/>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
