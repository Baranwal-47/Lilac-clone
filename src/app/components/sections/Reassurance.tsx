import Image from "next/image";

export default function Reassurance() {
  return (
    <section className="grid lg:grid-cols-2">

      {/* LEFT IMAGE — full height */}
      <div className="relative min-h-[520px] lg:min-h-[890px]">
        <Image
          src="/calm.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="bg-[#d8d3df] flex flex-col justify-between">

        {/* MAIN TEXT AREA */}
        <div className="px-12 lg:px-20 py-16 lg:py-20">

          <h2 className="
            font-display
            text-4xl lg:text-5xl
            leading-tight
            mb-6
            text-foreground
          ">
            You don’t have to do this
            <br />
            all <em className="italic">alone.</em>
          </h2>

          <p className="text-muted mb-6">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="
            list-disc
            pl-6
            space-y-3
            text-base
            text-foreground
          ">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-muted mt-8">
            With empathy and guidance, we’ll work together to navigate
            the challenges life throws your way.
          </p>
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="
          border-t border-neutral-500
          py-6
          text-center
          text-sm
          tracking-wider
        ">
          WORK WITH ME →
        </div>

      </div>

    </section>
  );
}
