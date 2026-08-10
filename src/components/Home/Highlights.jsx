import Image from "next/image";
import { Scale } from "lucide-react";
import img from "../../app/assets/compliance_governance.png";
import AnimatedSection from "./AnimatedSection";
import { fadeLeft, fadeRight, scaleIn } from "./motion-variants";

const Highlights = () => {
  return (
    <section className="relative mt-20 sm:mt-28 lg:mt-32">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-[#F2CC22]/12 blur-3xl"
      />

      <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7b5e00]/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-[#7b5e00] sm:text-[11px]">
            <Scale className="h-3.5 w-3.5" aria-hidden="true" />
            SECTION 01 &middot; GOVERNANCE
          </span>
        </div>
      </div>

      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <AnimatedSection variant={fadeLeft} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#F2CC22]/8 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#171310]/8 bg-white p-5 sm:p-8">
              <Image
                src={img}
                alt="USFRANC compliance and governance framework"
                width={1000}
                height={800}
                className="h-auto w-full object-contain transition duration-700 hover:scale-[1.015]"
                sizes="(min-width: 1024px) 52vw, 92vw"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          variant={fadeRight}
          className="order-1 flex flex-col justify-center lg:order-2"
        >
          <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight text-[#171310] sm:text-4xl md:text-5xl">
            Compliance &amp; governance,{" "}
            <span className="text-primary">first</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#171310]/60 sm:text-lg">
            We operate under a hybrid PoW + PoS consensus model, ensuring a
            secure, transparent, and community-driven governance framework.
          </p>

          <AnimatedSection
            variant={scaleIn}
            delay={0.15}
            className="mt-8 w-full max-w-xl"
          >
            <div className="rounded-2xl border border-[#7b5e00]/15 bg-white/80 p-5 backdrop-blur-md sm:p-6">
              <div className="h-1 w-12 rounded-full bg-[#F2CC22]" />
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#171310] sm:text-base">
                USFranc: a secure cryptocurrency for modern usage &mdash; backed
                by compliance, powered by capital, designed for real-world
                utility.
              </p>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Highlights;
