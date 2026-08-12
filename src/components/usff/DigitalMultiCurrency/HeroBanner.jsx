"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";
import { Percent, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: RefreshCcw,
    title: "1:1 Daily Exchange",
    text: "All supported currencies maintain a 1:1 value every day",
  },
  {
    icon: Percent,
    title: "Low Exchange Fee",
    text: "Only 0.50% flat fee on every exchange",
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              USFF Multi <br />
              <span className="text-primary">Digital Currency.</span>{" "}
            </h1>

            {/* Description Paragraph */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              One Ecosystem. Multiple Digital Currencies.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              USFF makes digital currency simple, fast, and fair. <br />{" "}
              Exchange between multiple global currencies <br /> at 1:1 value,
              every day.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800/80">
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
            <div className="flex flex-col md:flex-row gap-10">
              <Button
                className="group inline-flex items-center justify-center gap-2 min-h-12 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                asChild
              >
                <Link href="#"> How It Works</Link>
              </Button>

              <Link
                href="#"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-150 hover:bg-[#fdf8ee] sm:w-auto sm:px-6"
              >
                View Supported Currencies
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
