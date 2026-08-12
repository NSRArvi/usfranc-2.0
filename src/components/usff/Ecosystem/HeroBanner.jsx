"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";
import { CheckCircle, CloudSync, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi Digital Currencies",
    text: "1:1 daily exchange across global currencies",
  },
  {
    icon: ShieldCheck,
    title: "Bitss Security & Audit",
    text: "Advance Protection and continuous audits",
  },
  {
    icon: CloudSync,
    title: "Web2 & Web3 Integration",
    text: "Seamless experience for users,merchants and enterprises",
  },
  {
    icon: CheckCircle,
    title: "Transfer & Fair",
    text: "No hidden fees. Just 0.50% flat fee per exchange",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative w-full min-h-180 bg-[#030712] text-white overflow-hidden border border-amber-500/20 my-8 p-8 md:p-12 lg:p-16 flex items-center">
      <Container>
        {/* Background Sphere Matrix Grid Placeholder */}
        <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none">
          <Image
            src="/ecosystem_banner.png"
            alt="Digital Network Background"
            fill
            priority
            className="object-cover object-right"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Column: Typography & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              The Complete <br />
              <span className="text-primary">USFF Ecosystem.</span>{" "}
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              One Ecosystem. Multiple Digital Currencies. Built for Web2 and
              Web3. Secured by{" "}
              <span className="font-bold text-primary">Bitss</span>.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              USFF powers a connected financial ecosystem that combines the
              simplicity of Web2 with the innovation of Web3, supported by
              multi-currency payments, enterprise-grade security, and full
              transparency.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-4 gap-6 border-t border-slate-800/80">
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
        </div>
      </Container>
    </div>
  );
}
