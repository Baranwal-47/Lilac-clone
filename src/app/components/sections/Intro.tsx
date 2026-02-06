import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-[#e9e4dc]">

      {/* divider */}
      <div className="border-t border-[#cfc8be]" />

      <div className="grid lg:grid-cols-2">

        {/* LEFT TEXT */}
        <div className="flex items-center px-8 lg:px-20 py-16 h-full">
          <div className="max-w-xl">

            <h2 className="font-display text-4xl mb-6 text-foreground">
              Live a fulfilling life.
            </h2>

            <p className="text-muted mb-4 leading-relaxed">
              Life can be challenging — especially when you&apos;re trying to
              balance your personal and professional life.
            </p>

            <p className="text-muted leading-relaxed">
              It&apos;s easy to feel like you&apos;re alone in facing these challenges,
              but I want you to know that I&apos;m here to help.
            </p>

          </div>
        </div>

        {/* RIGHT FULL IMAGE */}
        <div className="relative">

          <div className="relative w-full h-[500px] lg:h-[720px] xl:h-[790px]">

            <Image
              src="/intro.webp"
              alt=""
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
