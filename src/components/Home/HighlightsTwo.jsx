"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Landmark, ShieldCheck } from "lucide-react";
import highlightImage from "../../app/assets/highlights_two.png";
import { fadeLeft, fadeRight } from "./motion-variants";

const pillars = [
  {
    index: "01",
    icon: Landmark,
    title: (
      <>
        <span className="text-primary">USFRANC</span> own capital hedge fund
      </>
    ),
    body: "A portion (67%) of every USFC sale is securely invested into low-risk reserves \u2014 government bonds or similar instruments. This capital is entirely the financial property of USFRANC; its hedging purpose is to build trust and stability for USFC users.",
    variant: fadeLeft,
  },
  {
    index: "02",
    icon: ShieldCheck,
    title: "Wallet-based escrow security",
    body: "Funds are held in a wallet-based escrow, protecting both buyers and merchants with safe, verified transactions. Merchants opt in to the USFC wallet; USFC can be sent to any wallet by any crypto holder.",
    variant: fadeRight,
  },
];

const HighlightsTwo = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-5%", "5%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#171310]/8 bg-[#f5efe8] sm:mt-28 sm:rounded-[2.5rem]"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY, scale: 1.08 }}
      >
        <Image
          src={highlightImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-[#f5efe8]/96 via-[#f5efe8]/80 to-[#f5efe8]/96" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,204,34,0.18),transparent_38%)]" />

      <div className="relative px-5 py-14 sm:px-8 sm:py-20 md:py-24">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b5e00]">
            USFRANC
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
          {pillars.map(({ index, icon: Icon, title, body, variant }) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={variant}
              whileHover={{ y: -5 }}
              className="group relative flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur-xl duration-300 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F2CC22]/10 blur-3xl transition duration-500 group-hover:bg-[#F2CC22]/20" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#171310] text-[#F2CC22]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-[#171310]/35">
                  PROTOCOL {index}
                </span>
              </div>

              <h3 className="relative mt-7 font-heading text-2xl font-bold leading-snug text-[#171310] sm:text-[1.75rem]">
                {title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-[#171310]/60">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsTwo;
