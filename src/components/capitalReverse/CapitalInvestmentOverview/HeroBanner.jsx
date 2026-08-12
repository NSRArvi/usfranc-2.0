"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";
import Container from "@/components/Container/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Invested, Not Hedged",
    text: "We take strategic risks to create long-term value.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Value",
    text: "Every investment supports the USFF vision.",
  },
  {
    icon: Users,
    title: "For The Ecosystem",
    text: "Growth, utility, and impact for everyone.",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative w-full min-h-120 bg-[#030712] text-white overflow-hidden border border-amber-500/20 my-8 p-8 md:p-12 lg:p-16 flex items-center">
      <Container>
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <Image
            src="/capital_transparency.png"
            alt="Digital Network Background"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#030712] via-[#030712]/90 to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              USFF Capital <span className="text-primary">Investment.</span>{" "}
              <br />
              Overview.
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              Our capital reserve is invested, not hedged. We build, grow and
              reinvest in real assets, technology and initiative that creates
              lasting value for the USFF ecosystem and teh community
            </p>

            {/* Feature Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-800/80">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5 group">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-white text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Coin Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient Glow Effects */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
            <div className="absolute w-48 h-48 bg-amber-300/10 rounded-full blur-[60px] pointer-events-none -z-10" />

            {/* 3D Coin Asset Placeholder */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 filter drop-shadow-[0_20px_35px_rgba(245,158,11,0.35)] hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src="/banner_coni.png"
                alt="USFF Gold Cryptocurrency Coin"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
