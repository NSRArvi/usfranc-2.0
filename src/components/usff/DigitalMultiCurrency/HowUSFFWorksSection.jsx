"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowRight,
  Repeat,
  Percent,
  Check,
  ShieldAlert,
} from "lucide-react";

const STEPS = [
  {
    step: 1,
    title: "1. Choose Currency",
    description:
      "Select the currency you want to exchange from your USFF wallet.",
    icon: Wallet,
  },
  {
    step: 2,
    title: "2. Select Target Currency",
    description: "Choose the currency you want to receive.",
    icon: Repeat,
  },
  {
    step: 3,
    title: "3. 1:1 Daily Rate",
    description: "All currencies are exchanged at a 1:1 value, updated daily.",
    textBadge: "1:1",
  },
  {
    step: 4,
    title: "4. Pay 0.50% Fee",
    description: "A flat 0.50% fee is applied to every exchange transaction.",
    icon: Percent,
  },
  {
    step: 5,
    title: "5. Receive Instantly",
    description: "The exchanged currency is credited to your wallet instantly.",
    icon: Check,
    isHighlighted: true,
  },
];

export default function HowUSFFWorksSection() {
  return (
    <div className="w-full my-12 text-slate-900 rounded-3xl font-sans border border-slate-200/80 shadow-xs py-10">
      {/* Title Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          How USFF Multi Digital Currencies Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative items-start mb-12">
        {STEPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.step}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-transform hover:scale-105 shadow-xs ${
                    item.isHighlighted
                      ? "bg-amber-50 border-amber-600 text-amber-700"
                      : "bg-white border-slate-800 text-slate-900"
                  }`}
                >
                  {Icon ? (
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  ) : (
                    <span className="font-extrabold text-lg tracking-tight">
                      {item.textBadge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-50">
                  {item.description}
                </p>
              </motion.div>

              {idx < STEPS.length - 1 && (
                <div
                  className="hidden md:flex absolute top-8 text-slate-400 z-0 items-center justify-center"
                  style={{ left: `calc(${(idx + 1) * 20}% - 12px)` }}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom Guarantee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-xs max-w-4xl mx-auto"
      >
        <div className="p-3 rounded-xl bg-white border border-[#e0d0b0] text-slate-900 shrink-0 shadow-xs">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-bold text-slate-900 text-base sm:text-lg">
            Transparent. Fair. Global.
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            We maintain a 1:1 daily exchange rate across all supported
            currencies to ensure fairness and stability.
            <br className="hidden sm:inline" /> No hidden fees. No markups. Just
            0.50% – always.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
