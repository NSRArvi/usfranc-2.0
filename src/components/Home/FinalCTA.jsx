 "use client";

import Link from "next/link";
import { ArrowRight, FileText, Lock, ShieldCheck, Landmark } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { fadeUp } from "./motion-variants";

const badges = [
  { icon: Lock, label: "Escrow Protected" },
  { icon: ShieldCheck, label: "Compliance-First" },
  { icon: Landmark, label: "Capital-Backed Reserve" },
];

const FinalCTA = () => {
  return (
    <AnimatedSection
      as="section"
      variant={fadeUp}
      className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#171310]/8 bg-[#171310] sm:mt-28 sm:rounded-[2.5rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#F2CC22_1px,transparent_1px),linear-gradient(to_bottom,#F2CC22_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2CC22]/15 blur-3xl"
      />

      <div className="relative flex flex-col items-center px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E8C766]/25 bg-white/5 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-[#E8C766] sm:text-[11px]">
          SECTION 04 &middot; GET STARTED
        </span>

        <h2 className="font-heading mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to hold capital-backed crypto?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-white/60">
          Join USFC and put a coin with real reserves, real governance, and
          real utility to work for you.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/pre-order"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2CC22] px-7 py-3.5 font-semibold text-[#171310] shadow-[0_14px_30px_-15px_rgba(242,204,34,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7d84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2CC22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171310]"
          >
            Get USFC Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/lite-paper"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171310]"
          >
            <FileText className="h-4 w-4" />
            Read Lite White Paper
          </Link>
        </div>

        <div
          role="list"
          className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-7"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              role="listitem"
              className="flex items-center gap-2 text-sm text-white/50"
            >
              <Icon className="h-4 w-4 text-[#E8C766]" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-xl text-xs leading-relaxed text-white/30">
          USFRANC is not intended to constitute, nor should it be considered,
          an investment opportunity, investment contract, or any form of
          security. Availability is subject to your country&rsquo;s
          regulations.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTA;
