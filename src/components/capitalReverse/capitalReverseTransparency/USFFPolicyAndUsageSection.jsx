"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { policyItems } from "@/data/policyItems";
import { usageItems } from "@/data/usageItems";

export default function USFFPolicyAndUsageSection() {
  return (
    <div className="w-full my-8 p-6 md:p-10 bg-[#faf9f6] text-slate-900 rounded-3xl font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: USFF Crypto Policy by Affin */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            USFF Crypto Policy by Affin
          </h3>

          <div className="space-y-5">
            {policyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Where the Capital Reserve is Used */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
            Where the Capital Reserve is Used
          </h3>

          <div className="space-y-6">
            {usageItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-slate-800 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
