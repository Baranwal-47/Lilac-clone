"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "Do you take insurance?",
    a: "Answer placeholder text goes here explaining the details."
  },
  {
    q: "What are your rates?",
    a: "Answer placeholder text goes here explaining the details."
  },
  {
    q: "Do you have any openings?",
    a: "Answer placeholder text goes here explaining the details."
  }
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i:number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#f7f5f1] min-h-[920px] py-30 flex items-center">

      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-24 px-10 w-full">

        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="
            relative
            w-[500px]
            h-[700px]
            xl:h-[780px]
            overflow-hidden
            rounded-t-[240px]
          ">
            <Image
              src="/faq.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">

          <h2 className="font-display text-6xl mb-16 text-foreground">
            FAQs
          </h2>


          <div className="border-t border-foreground/40">

            {items.map((item, i) => {

              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className="
                    border-b border-foreground/40
                    py-8
                    group
                  "
                >

                  {/* CLICK ROW */}
                  <button
                    onClick={()=>toggle(i)}
                    className="
                      w-full flex items-center gap-6 text-left
                      text-3xl lg:text-4xl
                      cursor-pointer
                      text-foreground
                      transition-colors duration-200
                      hover:text-foreground/70
                    "
                  >

                    {/* PLUS ICON */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl leading-none"
                    >
                      +
                    </motion.span>

                    {item.q}
                  </button>


                  {/* ANIMATED ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22,1,0.36,1]   // premium easing
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: .25 }}
                          className="
                            mt-6 ml-[52px]
                            text-xl lg:text-2xl
                            text-muted
                            leading-relaxed
                            max-w-xl
                          "
                        >
                          {item.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
