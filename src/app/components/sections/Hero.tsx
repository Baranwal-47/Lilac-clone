import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-section">
      <div className="max-w-content mx-auto px-8 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT — Circular Image */}
        <div className="flex justify-center md:justify-start md:-ml-12">
          <div className="relative w-465 h-465 rounded-full overflow-hidden">
            <Image
              src="/hero.webp"
              alt="Flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <h1 className="
            font-display
            text-(--text-hero)
            leading-tight
            tracking-display
            mb-8
            max-w-lg
          ">
            Live your life
            <br />
            in full bloom
          </h1>

          <p className="
            font-body
            text-(--text-body-lg)
            leading-body
            mb-10
          ">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button className="
            border border-foreground
            px-8 py-3
            text-xs
            tracking-[0.18em]
            uppercase
            hover:bg-foreground
            hover:text-white
            transition-all
            duration-300
          ">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
}
