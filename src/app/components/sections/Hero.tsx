import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center pt-20 lg:pt-24 min-h-screen">

      <div className="grid lg:grid-cols-[45%_55%] items-center w-full">

        {/* LEFT — Curved Cutout Image */}
        <div className="flex justify-center lg:justify-start pl-6 lg:pl-16">

          <div
            className="
              relative
              w-[420px]
              h-[630px]
              lg:w-[500px]
              lg:h-[750px]
              xl:w-[560px]
              xl:h-[840px]
              overflow-hidden
            "
            style={{
              borderTopLeftRadius: "50% 30%",
              borderTopRightRadius: "50% 30%",
            }}
          >
            <Image
              src="/hero.webp"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>

        {/* RIGHT — Text */}
        <div className="flex items-center px-8 lg:px-16">

          <div className="max-w-xl">

            <h1 className="
              font-display
              text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
              leading-[0.9]
              tracking-[-0.02em]
              text-foreground
              mb-6
            ">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="
              font-body
              text-base md:text-lg xl:text-xl
              text-muted
              mb-10
            ">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <button className="
              border border-foreground
              px-6 py-3 lg:px-8 lg:py-4
              text-xs lg:text-sm
              tracking-[0.2em]
              uppercase
              text-foreground
              hover:bg-foreground
              hover:text-background
              transition
            ">
              CONNECT WITH ME →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
