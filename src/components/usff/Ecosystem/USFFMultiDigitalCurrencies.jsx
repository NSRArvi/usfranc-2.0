"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  MoreHorizontal,
} from "lucide-react";
import { STEPS } from "@/data/STEPS";
import { SUPPORTED_CURRENCIES } from "@/data/SUPPORTED_CURRENCIES";

const FEATURES = [
  "1:1 Daily Exchange Rate",
  "Low Exchange Fee: 0.50% flat fee",
  "Fast, secure and low-cost global transfers",
  "Pay and get paid across the USFF marketplace",
  "Create your free multi-currency wallet",
];

export default function USFFMultiDigitalCurrencies() {
  return (
    <div className="w-full my-12 text-slate-900 rounded-3xl font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: Overview & Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                USFF Multi Digital Currencies
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Exchange between multiple global currencies at 1:1 value, every
                day.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Middle Card: How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-8">
              How It Works
            </h3>

            {/* Workflow Steps */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
              {STEPS.map((stepItem, idx) => {
                const Icon = stepItem.icon;
                return (
                  <React.Fragment key={stepItem.step}>
                    <div className="flex flex-col items-center text-center max-w-25 z-10">
                      {/* Circle Icon Badge */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3 shadow-xs ${
                          stepItem.isHighlighted
                            ? "bg-amber-50 border-amber-600 text-amber-700"
                            : "bg-white border-slate-800 text-slate-800"
                        }`}
                      >
                        {Icon ? (
                          <Icon className="w-5 h-5" />
                        ) : (
                          <span className="font-bold text-sm">
                            {stepItem.textBadge}
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-slate-900 text-xs leading-tight">
                        {stepItem.title}
                      </h4>
                      <p className="text-[10px] text-slate-600 mt-1 leading-normal">
                        {stepItem.description}
                      </p>
                    </div>

                    {/* Step Arrow Divider */}
                    {idx < STEPS.length - 1 && (
                      <div className="hidden sm:block text-slate-400 shrink-0 mb-8">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="mt-8 bg-[#f2ebd9] border border-[#e0d0b0] rounded-xl p-4 flex items-center gap-3.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-slate-900 border border-amber-600/20 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Transparent. Fair. Global.
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                We maintain a 1:1 daily exchange rate across all supported
                currencies. No hidden fees. No markups. Just 0.50% – always.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Supported Currencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs"
        >
          <div>
            <div className="text-center mb-6 space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Supported Currencies
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                All exchanges are 1:1 daily.
              </p>
            </div>

            {/* Currency Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {SUPPORTED_CURRENCIES.map((currency, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-300">
                    <Image
                      src={currency.flag}
                      alt={`${currency.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0">
                    <div className="font-bold text-xs text-slate-900 leading-none">
                      {currency.code}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-none mt-0.5">
                      {currency.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* More Currencies Placeholder */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-200/80 border border-slate-300 flex items-center justify-center shrink-0">
                  <MoreHorizontal className="w-4 h-4 text-slate-600" />
                </div>
                <div className="space-y-0">
                  <div className="font-semibold text-[11px] text-slate-700 leading-tight">
                    More currencies
                  </div>
                  <div className="text-[9px] text-slate-500 leading-none">
                    coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
