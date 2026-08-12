"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  Landmark,
  Shield,
} from "lucide-react";
import { InvestmentCard } from "./InvestmentCard";
import { INVESTMENT_CARDS } from "@/data/INVESTMENT_CARDS";
import { FaGithub } from "react-icons/fa6";

const INVESTMENT_PRINCIPLES = [
  "We invest for the long term.",
  "We take calculated risks for greater impact.",
  "We prioritize sustainability and real-world value.",
  "We remain transparent and accountable.",
  "We grow the USFF culture and ecosystem.",
];

export default function USFFInvestmentSection() {
  return (
    <div className="w-full my-12  text-slate-900 rounded-3xl font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Where We Invest Our Capital Reserve
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          The 67% portion of every USFF sale is invested into a diversified
          portfolio of low to moderate risk opportunities. These investments are
          selected to support the growth of USFF, its culture, and long-term
          sustainability.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {INVESTMENT_CARDS.map((card) => (
          <InvestmentCard key={card.id} card={card} />
        ))}
      </div>

      {/* Bottom Row: Live Transparency & Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Live Transparency */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
        >
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl font-bold text-slate-900">
              Live Transparency
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-md">
              We believe in full transparency. Our audits and financial reports
              will be published when available.
            </p>

            <div className="pt-4 space-y-2.5 max-w-xs">
              <button className="w-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200 flex items-center justify-between transition-colors shadow-sm">
                <span className="flex items-center gap-2">
                  <FaGithub className="w-4 h-4 text-slate-700" />
                  View Audits on GitHub
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button className="w-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200 flex items-center justify-between transition-colors shadow-sm">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-700" />
                  View Financial Reports
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Faded Background Graphic */}
          <Shield className="absolute -right-6 -bottom-6 w-48 h-48 text-slate-300/30 pointer-events-none" />
        </motion.div>

        {/* Our Investment Principles */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
        >
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Our Investment Principles
            </h3>

            <div className="space-y-3 pt-1">
              {INVESTMENT_PRINCIPLES.map((principle, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Faded Background Graphic */}
          <Landmark className="absolute -right-6 -bottom-6 w-48 h-48 text-slate-300/30 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
