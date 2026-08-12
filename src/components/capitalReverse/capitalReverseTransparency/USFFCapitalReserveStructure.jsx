"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const tire1 = [
  {
    title: "50M",
    label: "Initial Allocation",
    text: "(Ecosystem Start)",
  },
  {
    title: "50M",
    label: "Sold to Founders",
    text: "(Must Purchase)",
  },
  {
    title: "900M",
    label: "First Sales",
    text: "(To the Public)",
  },
];
const tire2 = [
  {
    per: "100%",
    title: "Capital Reserve Fund",
    text: "(Owned by USFF through Affin)",
  },
  {
    per: "67%",
    title: "Capital Reserve Investments",
    text: "(Growth, R&D, Community, Infrastructure, Interest-Bearing Assets)",
  },
  {
    per: "10%",
    title: "Reserve Wallet",
    text: "(Liquidity & Operational Continuity)",
  },
  {
    per: "20%",
    title: "Admin & Operational Costs Wallet",
    text: "(Sustainable Ecosystem Operations)",
  },
  {
    per: "3%",
    title: "Founders Must Purchase on Market",
    text: "(No Free Coins, No Exceptions)",
  },
];

export default function USFFCapitalReserveStructure() {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 p-6 md:p-12 text-slate-900 rounded-3xl font-sans">
      {/* Header Section */}
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          USFF Capital Reserve Structure
        </h2>
        <p className="text-slate-600 font-medium text-sm md:text-base">
          1,000,000,000 USFF Total Supply
        </p>
      </div>

      {/* Main Architecture Diagram Container */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-[#111827] text-white px-8 py-3.5 rounded-xl border border-amber-500/40 shadow-lg text-center min-w-70"
        >
          <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
            Total Supply
          </div>
          <div className="text-lg md:text-xl font-bold tracking-wide text-white">
            1,000,000,000 USFF
          </div>
        </motion.div>

        <div className="w-px h-8 bg-slate-300" />

        <div className="relative w-full max-w-4xl flex items-center justify-between">
          <div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative pt-4">
          {tire1.map((tire, i) => {
            const delay = (i + 1) * 0.1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                className="flex flex-col items-center"
              >
                <div className="w-px h-4 bg-slate-300 -mt-4 mb-2 hidden md:block" />
                <div className="w-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-5 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    {tire.title}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mt-0.5">
                    {tire.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {tire.text}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="w-px h-8 bg-slate-300" />

        <div className="relative w-full max-w-5xl hidden md:block">
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl relative pt-4">
          {tire2.map((tire, i) => {
            const delay = (i + 1) * 0.4;
            return (
              <motion.div
                key={tire.per}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-px h-4 bg-slate-300 -mt-4 mb-1 hidden md:block" />
                <span className="text-xs font-bold text-slate-800 mb-2">
                  {tire.per}
                </span>
                <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-xl p-4 text-center shadow-sm flex flex-col justify-center">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm leading-snug">
                    {tire.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    {tire.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 w-full max-w-5xl bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              No Hedging. No Speculation. Just Strategic Reserves.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              All funds are invested, not hedged, to support operational
              continuity, ecosystem growth, and the USFF vision.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
