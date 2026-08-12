"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Percent } from "lucide-react";

const WHY_EXCHANGE_POINTS = [
  "Simplifies global payments and transfers",
  "Eliminates volatility risk between supported currencies",
  "Promotes stability, trust, and usability",
  "Supports real-world adoption and commerce",
];

const EXCHANGE_FEE_POINTS = [
  "Flat fee of only 0.50% per transaction",
  "No hidden charges",
  "Applies to all currency exchanges",
  "Helps us maintain the ecosystem and infrastructure",
];

export default function USFFExchangeInfoSection() {
  return (
    <div className="w-full my-8 text-slate-900 rounded-3xl font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs"
        >
          {/* Faint Background Globe Watermark */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 text-slate-900">
            <Globe className="w-64 h-64" strokeWidth={1} />
          </div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Why 1:1 Daily Exchange?
            </h3>

            <div className="space-y-4">
              {WHY_EXCHANGE_POINTS.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs"
        >
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 text-slate-900">
            <Percent className="w-64 h-64" strokeWidth={1} />
          </div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Exchange Fee
            </h3>

            <div className="space-y-4">
              {EXCHANGE_FEE_POINTS.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
