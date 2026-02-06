import Image from "next/image";

const cards = [
  {
    title: "Self-Esteem",
    text: "Building a strong sense of self-worth is key to living a fulfilled life. Let’s work together to bolster your self-esteem.",
    img: "/s1.webp",
  },
  {
    title: "Relationships",
    text: "Navigating relationships can be complex. I’m here to guide you through these complexities to help you form healthier connections.",
    img: "/s2.webp",
  },
  {
    title: "Burnout",
    text: "Feeling overwhelmed by your career is more common than you think. Together, we’ll identify strategies to manage and prevent burnout.",
    img: "/s3.webp",
  },
];

export default function Specialties() {
  return (
    <section className="py-28">
      {/* Title */}
      <h2
        className="
          font-display
          text-4xl lg:text-5xl
          text-center
          mb-20
          text-foreground
        "
      >
        My Specialties
      </h2>

      {/* Cards */}
      <div
        className="
          max-w-[1500px]          /* bigger layout width */
          mx-auto
          grid
          md:grid-cols-3
          gap-12                 /* more breathing room */
          px-12
        "
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="
              bg-[#e9e4dc]
              border-1.5 border-black     /* thick dark border */
              p-10                      /* larger padding */
              flex flex-col
              justify-between
              min-h-[400px]             /* taller card */
            "
          >
            {/* Text */}
            <div>
              <h3
                className="
                  font-display
                  text-xl lg:text-2xl     /* larger title */
                  mb-6
                  text-foreground
                "
              >
                {c.title}
              </h3>

              <p
                className="
                  text-base lg:text-lg    /* larger body text */
                  text-muted
                  leading-relaxed
                "
              >
                {c.text}
              </p>
            </div>

            {/* Image */}
            <div
              className="
                relative
                w-[260px] h-[260px]       /* bigger circle */
                lg:w-[300px] lg:h-[300px]
                mx-auto
                mt-12
                rounded-full
                overflow-hidden
              "
            >
              <Image src={c.img} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
