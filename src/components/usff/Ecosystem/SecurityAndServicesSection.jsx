"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { SECURITY_FEATURES } from "@/data/SECURITY_FEATURES";
import { SERVICES } from "@/data/SERVICES";

export default function SecurityAndServicesSection() {
  return (
    <div className="w-full my-12  text-slate-900 font-sans space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#031527] text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-md"
      >
        <div className="text-center space-y-1 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
            Protected by Bitss – Security & Audits
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Advanced cybersecurity and continuous audits to protect the USFF
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Bitss Branding Box */}
          <div className="md:col-span-3 flex items-center gap-3 pr-0 md:pr-4 md:border-r border-slate-700/80">
            <div className="p-2 bg-slate-900 border border-slate-700 rounded-xl text-white">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight">
                Bitss
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-medium">
                Security. Trust. Assurance.
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 md:px-2">
            {SECURITY_FEATURES.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-2 pl-0 md:pl-4 md:border-l border-slate-700/80">
            <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
              View Audits
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-slate-300 text-left md:text-right leading-tight">
              Full audit reports and security updates are publicly available.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 flex flex-col items-center text-center justify-between shadow-xs hover:border-amber-400/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shrink-0">
                <Icon
                  className={`w-8 h-8 ${service.iconColor.split(" ")[0]}`}
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-tight">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
