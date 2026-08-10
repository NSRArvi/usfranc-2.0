"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import logoBanner from "../../app/assets/logo_banner.png";
import investors from "../../app/assets/investors.png";
import AnimatedSection from "./AnimatedSection";
import { fadeLeft, fadeRight } from "./motion-variants";

const TAB_ORDER = ["tab1", "tab2", "tab3"];

const tabData = {
  tab1: {
    index: "01",
    label: "Buyer Confidence",
    content: [
      "Payments are securely held in escrow until delivery is confirmed.",
      "Buyers are protected with a 7-day return window before final fund release.",
    ],
  },
  tab2: {
    index: "02",
    label: "Merchant Reliability",
    content: [
      "Merchants hold payments in a USFC wallet until delivery is fulfilled.",
      "Builds trust and improves reputation for future transactions.",
    ],
  },
  tab3: {
    index: "03",
    label: "Mutual Trust",
    content: [
      "The system encourages ongoing buyer-merchant relationships through transparency and reliability.",
    ],
  },
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="mt-20 sm:mt-28 lg:mt-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <AnimatedSection variant={fadeLeft} as="article">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7b5e00]/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-[#7b5e00] sm:text-[11px]">
            SECTION 02 &middot; PROCESS
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#171310] sm:text-4xl md:text-5xl">
            How it works
          </h2>

          <div className="mt-8 w-full">
            <nav
              role="tablist"
              aria-label="How USFC transactions work"
              className="flex overflow-x-auto border-b border-[#171310]/10"
            >
              {TAB_ORDER.map((key) => {
                const isActive = activeTab === key;

                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(key)}
                    className={`relative shrink-0 px-3 py-3 text-left text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:px-5 sm:text-base ${
                      isActive
                        ? "text-primary"
                        : "text-[#171310]/45 hover:text-[#171310]"
                    }`}
                  >
                    <span className="mr-2 font-mono text-[10px] text-[#171310]/30">
                      {tabData[key].index}
                    </span>
                    {tabData[key].label}

                    {isActive && (
                      <motion.span
                        layoutId="how-it-works-underline"
                        className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="min-h-37.5 py-7">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-4"
                >
                  {tabData[activeTab].content.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#171310]/65 sm:text-base"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {text}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-white/90">
              <span className="font-bold">USFRANC</span> is a cryptocurrency
              with multiple purposes. Its use is subject to your country&rsquo;s
              regulations. <span className="font-bold">USFRANC</span> is not
              intended to constitute, nor should it be considered, an investment
              opportunity, investment contract, or any form of security.
            </p>
          </div>

          <Image
            src={logoBanner}
            alt="USFRANC"
            width={600}
            height={120}
            className="mx-auto mt-9 h-auto w-full max-w-lg"
          />

          <div className="mt-9">
            <Link
              href="/difference"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection variant={fadeRight} className="relative">
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#F2CC22]/15 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#171310]/8 bg-[#f7f2ec] p-3 sm:p-5">
            <Image
              src={investors}
              alt="USFC investors and reserve partners"
              width={500}
              height={400}
              className="h-auto w-full rounded-[1.25rem]"
              sizes="(min-width: 1024px) 48vw, 92vw"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;
