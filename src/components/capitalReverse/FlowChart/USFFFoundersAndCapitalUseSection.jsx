"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, BarChart3, CheckCircle2 } from "lucide-react";
import { FOR_FOUNDERS_POINTS } from "@/data/FOR_FOUNDERS_POINTS";
import { CAPITAL_USE_POINTS } from "@/data/CAPITAL_USE_POINTS";

export default function USFFFoundersAndCapitalUseSection() {
  return (
    <div className="w-full my-8 text-slate-900 rounded-3xl font-sans">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Card: For Founders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-xs"
        >
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              For Founders
            </h3>
          </div>

          {/* Points List */}
          <div className="space-y-4">
            {FOR_FOUNDERS_POINTS.map((point) => (
              <div key={point.id} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Card: About Our Capital Use */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-xs"
        >
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              About Our Capital Use
            </h3>
          </div>

          {/* Points List */}
          <div className="space-y-4">
            {CAPITAL_USE_POINTS.map((point) => (
              <div key={point.id} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
