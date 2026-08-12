"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import bannerImg from "../../app/assets/banner_image.webp";
import TrustTicker from "./TrustTicker";
import { fadeUp, staggerContainer } from "./motion-variants";

const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#171310]/8 bg-[#f7f2ec] sm:rounded-[2.5rem] mt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(242,204,34,0.24),transparent_28%),radial-gradient(circle_at_8%_92%,rgba(217,101,6,0.09),transparent_30%)]" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#171310_1px,transparent_1px),linear-gradient(to_bottom,#171310_1px,transparent_1px)] bg-size-[42px_42px]"
      />

      <div className="relative grid min-h-162.5 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-20 flex flex-col justify-center px-5 py-14 sm:px-9 sm:py-20 lg:px-14 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={staggerContainer(0.1)}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7b5e00]/15 bg-white/70 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.18em] text-[#7b5e00] shadow-sm backdrop-blur-md sm:text-[11px]"
            >
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              USFC &middot; CAPITAL-BACKED UTILITY COIN
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading max-w-3xl text-[clamp(2.5rem,6vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.045em] text-[#171310]"
            >
              Built for{" "}
              <span className="relative inline-block text-primary">
                trust.
                <span className="absolute -bottom-1 left-0 h-1 w-3/4 rounded-full bg-[#F2CC22] sm:-bottom-2" />
              </span>{" "}
              Backed by{" "}
              <span className="relative inline-block text-primary">
                capital.
                <span className="absolute -bottom-1 left-0 h-1 w-3/4 rounded-full bg-[#F2CC22] sm:-bottom-2" />
              </span>{" "}
              Powered by purpose.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#171310]/65 sm:text-lg lg:text-xl"
            >
              USFRANC is a decentralized cryptocurrency that puts its own
              capital to work as a hedge fund &mdash; building trust and
              delivering real-world utility for crypto users.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link
                href="/pre-order"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get USFC Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/lite-paper"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#171310]/12 bg-white/70 px-6 py-3.5 font-semibold text-[#171310] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#171310]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              >
                <FileText className="h-4 w-4" />
                Read Lite White Paper
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full">
              <TrustTicker />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative min-h-82.5 overflow-hidden lg:min-h-0">
          <Image
            src={bannerImg}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#f7f2ec] via-[#f7f2ec]/25 to-transparent lg:w-1/2" />
          <div className="absolute inset-0 bg-linear-to-t from-[#171310]/10 via-transparent to-transparent" />

          <div
            aria-hidden="true"
            className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/60 bg-white/20 backdrop-blur-md sm:right-12 sm:top-12 sm:h-32 sm:w-32"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-8 right-8 h-3 w-3 rounded-full bg-[#F2CC22] sm:bottom-12 sm:right-12"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
