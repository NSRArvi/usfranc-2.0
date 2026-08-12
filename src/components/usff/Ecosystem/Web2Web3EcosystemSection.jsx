"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight, Boxes } from "lucide-react";

const WEB2_FEATURES = [
  "User-friendly wallet & dashboard",
  "Online checkout and merchant payments",
  "Fiat conversion and multi-currency support",
  "Customer support and easy onboarding",
  "Designed for global commerce",
];

const WEB3_FEATURES = [
  "Decentralized transactions",
  "Smart contracts and dApps",
  "DeFi integrations and staking",
  "DAO and community governance",
  "Open source and community driven",
];

export default function Web2Web3EcosystemSection() {
  return (
    <div className="w-full my-12 text-slate-900 rounded-3xl font-sans border border-slate-200/80 shadow-xs">
      {/* Title & Subtitle */}
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Web2 and Web3 – One Ecosystem
        </h2>
        <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">
          USFF bridges the gap between traditional internet and decentralized
          technologies.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center p-6">
        {/* Left Card: Web2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 bg-[#f0f4f9] border border-[#d8e2ee] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs"
        >
          <div>
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-full bg-blue-100 text-blue-700 shrink-0">
                <Globe className="w-8 h-8" />
              </div>
              <div className="space-y-1 pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">
                  Web2 – Easy. Familiar. Accessible.
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Built for everyday users and businesses.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {WEB2_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center: Connectors & Central Logo Circle */}
        <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-3 py-4 lg:py-0">
          {/* Arrow Left */}
          <div className="text-slate-400 hidden lg:block">
            <ArrowRight className="w-6 h-6" />
          </div>

          {/* Central Split Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-36 h-36 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center shrink-0 p-2"
          >
            {/* Blue & Gold Circular Border Ring */}
            <div className="absolute inset-2 rounded-full border-4 border-l-blue-600 border-b-blue-600 border-r-amber-500 border-t-amber-500" />

            <div className="text-center z-10 px-2">
              <div className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none">
                USFF
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-none">
                Ecosystem
              </div>
            </div>
          </motion.div>

          {/* Arrow Right */}
          <div className="text-slate-400 hidden lg:block">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>

        {/* Right Card: Web3 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 bg-[#fbf5e9] border border-[#f0e2ca] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs"
        >
          <div>
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-full bg-amber-100 text-amber-700 shrink-0">
                <Boxes className="w-8 h-8" />
              </div>
              <div className="space-y-1 pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-amber-900 leading-tight">
                  Web3 – Decentralized. Secure. Innovative.
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Built for the future of finance.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {WEB3_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
