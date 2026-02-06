import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-[#e9e4dc]">

      {/* TOP DIVIDER */}
      <div className="border-t border-[#cfc8be]" />

      <div className="grid lg:grid-cols-2">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-between">
          
          {/* MAIN TEXT AREA */}
          <div className="px-8 lg:px-20 py-16 flex-1 flex items-center justify-center">
            <div className="max-w-2xl">

              {/* BIG HEADING */}
              <h2 className="
                font-display
                text-5xl
                lg:text-6xl
                xl:text-7xl
                leading-[1.05]
                text-foreground
                mb-8
              ">
                Live a fulfilling life.
              </h2>

              {/* BODY */}
              <p className="
                text-lg
                lg:text-xl
                text-muted
                leading-relaxed
                mb-6
                max-w-xl
              ">
                Life can be challenging — especially when you&apos;re trying to
                balance your personal and professional life.
              </p>

              <p className="
                text-lg
                lg:text-xl
                text-muted
                leading-relaxed
                max-w-xl
              ">
                It&apos;s easy to feel like you&apos;re alone in facing these challenges,
                but I want you to know that I&apos;m here to help.
              </p>

            </div>
          </div>

          {/* BOTTOM CTA STRIP */}
          <button className="
            border-t border-[#cfc8be]
            py-6
            text-center
            font-body
            text-xs lg:text-sm
            tracking-[0.25em]
            uppercase
            text-foreground
            bg-transparent
            cursor-pointer
            transition-all
            duration-300
            hover:text-white
            hover:bg-green-900
            w-full
          ">
            GET IN TOUCH →
          </button>

        </div>


        {/* RIGHT IMAGE (UNCHANGED SIZE) */}
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
