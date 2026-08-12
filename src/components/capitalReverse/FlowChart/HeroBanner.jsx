"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";

export default function HeroBanner() {
  return (
    <div className="relative w-full min-h-120 bg-[#030712] text-white overflow-hidden border border-amber-500/20 my-8 p-8 md:p-12 lg:p-16 flex items-center">
      <Container>
        {/* Background Sphere Matrix Grid Placeholder */}
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
              USFF First Sale{" "}
              <span className="text-primary">Structure.</span>{" "}
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              This Flow chart represents the distribution and allocation model
              of 90,000,000,000 USFF, outlining how funds are structured across
              allocation, sales, reserves and operational costs.
            </p>
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
