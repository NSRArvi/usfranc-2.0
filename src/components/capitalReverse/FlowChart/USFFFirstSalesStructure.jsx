"use client";

import React from "react";
import { motion } from "framer-motion";

export default function USFFFirstSalesFlowchart() {
  return (
    <div className="w-full my-12 text-slate-900 rounded-3xl font-sans">
      {/* Title Header */}
      <div className="text-center space-y-1.5 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          USFF First Sales Structure
        </h2>
        <p className="text-slate-600 font-medium text-sm md:text-base">
          90,000,000,000 USFF Total Supply
        </p>
      </div>

      {/* Main Flowchart */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-amber-600 text-white rounded-xl p-4 text-center border border-amber-500/50 shadow-md z-10"
        >
          <div className="text-lg sm:text-xl font-extrabold uppercase tracking-wide">
            USFF FIRST SALES
          </div>
          <div className="text-xs sm:text-sm font-medium opacity-90 mt-0.5">
            90,000,000,000 USFF
          </div>
        </motion.div>

        <div className="w-px h-8 bg-slate-400" />
        <div className="relative w-full max-w-3xl hidden md:block">
          <div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-slate-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative pt-4 md:pt-0">
          {/* Tier 1 - Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-2 hidden md:block" />
            <div className="w-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-5 text-center shadow-xs">
              <div className="text-2xl font-bold text-amber-700">4.5B USFF</div>
              <div className="font-bold text-slate-900 text-sm mt-1">
                Initial Allocation
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                (Ecosystem Start)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-2 hidden md:block" />
            <div className="w-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-5 text-center shadow-xs">
              <div className="text-2xl font-bold text-amber-700">4.5B USFF</div>
              <div className="font-bold text-slate-900 text-sm mt-1">
                Sold to Founders
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                (Must Purchase)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-2 hidden md:block" />
            <div className="w-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-5 text-center shadow-xs">
              <div className="text-2xl font-bold text-amber-700">81B USFF</div>
              <div className="font-bold text-slate-900 text-sm mt-1">
                First Sales
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                (To the Public)
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-4">
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-slate-400 hidden md:block" />
            <span className="text-xs font-bold text-slate-800 my-1">100%</span>
            <div className="w-px h-6 bg-slate-400 hidden md:block" />
          </div>

          <div className="flex flex-col items-center col-span-1">
            <div className="w-full md:flex justify-center relative h-6 hidden ">
              <div className="absolute top-0 left-0 right-1/2 h-px bg-slate-400" />
              <div className="w-px h-full bg-slate-400 mx-auto" />
            </div>
            <div className="bg-[#f6f2e9] border border-[#e4d7be] rounded-xl px-4 py-2 text-center shadow-xs my-1 w-full max-w-xs">
              <div className="font-bold text-slate-900 text-xs">
                50% Allocation
              </div>
              <div className="text-[11px] text-slate-600">Sale to Founders</div>
            </div>
            <div className="w-px h-6 bg-slate-400 hidden md:block" />
          </div>

          {/* Connector down from 81B USFF First Sales */}
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-slate-400 hidden md:block" />
          </div>
        </div>

        {/* TIER 3 DISTRIBUTION CONNECTORS */}
        <div className="relative w-full max-w-5xl hidden md:block">
          {/* Horizontal Line connecting 50% Founder Sale & 81B Sales to distributions */}
          <div className="absolute top-0 left-[28%] right-[10%] h-px bg-slate-400" />
          <div className="absolute top-0 right-[10%] left-[70%] h-px bg-slate-400" />
        </div>

        {/* TIER 3 FINAL ALLOCATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl relative pt-2">
          {/* Box 3.1: Capital Reserve Fund */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col items-center h-full"
          >
            <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 text-center shadow-xs flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Capital Reserve Fund
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                (Owned by USFF through Affin)
              </p>
            </div>
          </motion.div>

          {/* Box 3.2: 67% Capital Reserve Investments */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col items-center h-full relative"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-1 hidden md:block" />
            <span className="text-xs font-bold text-slate-800 mb-1">67%</span>
            <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 text-center shadow-xs flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                Capital Reserve Investments
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                (Growth, R&D, Community, Infrastructure, Interest-Bearing
                Assets)
              </p>
            </div>
          </motion.div>

          {/* Box 3.3: 10% Reserve Wallet */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col items-center h-full relative"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-1 hidden md:block" />
            <span className="text-xs font-bold text-slate-800 mb-1">10%</span>
            <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 text-center shadow-xs flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Reserve Wallet
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                (Liquidity & Operational Continuity)
              </p>
            </div>
          </motion.div>

          {/* Box 3.4: 10% Transfer to Admin */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-col items-center h-full relative"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-1 hidden md:block" />
            <span className="text-xs font-bold text-slate-800 mb-1">
              90% → 10%
            </span>
            <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 text-center shadow-xs flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Transfer to Admin
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                (For Operations)
              </p>
            </div>
          </motion.div>

          {/* Box 3.5: Admin & Operational Costs Wallet */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex flex-col items-center h-full relative"
          >
            <div className="w-px h-4 bg-slate-400 -mt-4 mb-1 hidden md:block" />
            <span className="text-xs font-bold text-slate-800 mb-1">10%</span>
            <div className="w-full h-full bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 text-center shadow-xs flex flex-col justify-center">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Admin & Operational Costs Wallet
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                (Sustainable Ecosystem Operations)
              </p>
            </div>
          </motion.div>
        </div>

        {/* TIER 4: Bottom 2% Admin Transfer Fee connected to Admin Wallet */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
          <div className="md:col-start-4 flex flex-col items-center">
            <div className="w-px h-4 bg-slate-400 hidden md:block" />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="w-full bg-amber-600 text-white rounded-xl p-3 text-center border border-amber-500/50 shadow-sm relative"
            >
              <div className="text-sm font-extrabold">2%</div>
              <div className="text-xs font-bold uppercase tracking-wider">
                Admin Transfer Fee
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full border-b-2 border-dashed border-slate-300 my-8" />
      </div>
    </div>
  );
}
