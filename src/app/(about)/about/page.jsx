"use client";
import React from "react";
import bannerImg from "../../assets/banner_image.webp";
import aboutImg from "../../assets/about.png";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Landmark,
  RefreshCcw,
  Lock,
  Globe,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container/Container";

const LearnUSFC = () => {
  return (
    <Container>
      <div className=" text-slate-900 font-sans selection:bg-blue-100">
        <div
          className="bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${bannerImg.src})` }}>
          <header className=" mx-auto py-10 md:py-30 justify-center items-center  bg-white/70 backdrop-blur-sm h-full rounded-b-lg">
            <div className="space-y-6 text-center justify-items-center">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                  What is <span className="text-primary">USFRANC?</span>
                </h1>
                <p className="text-xl mx-auto px-2 mt-4 text-slate-600 leading-relaxed w-full md:w-1/2">
                  USFRANC (USFC) is a capital-backed utility crypto coin
                  designed for secure, real-world payments — both online and
                  in-store. It enables blockchain-based commerce through a
                  transparent, non-custodial wallet and smart contract model.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0.1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="font-medium text-sm">Transparent Model</span>
                </div>
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="font-medium text-sm">Non-Custodial</span>
                </div>
              </motion.div>
            </div>
          </header>
        </div>

        <main className="md:mt-10 pb-24 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <Globe className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Crypto Coins Purpose</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Paying for goods and services with USFC</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Holding in your non-custodial wallet</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Converting to other crypto assets for merchant settlement
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 bg-white border border-slate-200 rounded-[2rem]  shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">
                Escrow-Based Buyer Protection
              </h3>
              <ol className="space-y-4 text-slate-600 list-decimal pl-4">
                <li>Funds are held in a smart contract wallet</li>
                <li>
                  Released to the merchant only once delivery is confirmed
                </li>
                <li>
                  A 7-day confirmation period gives the buyer peace of mind
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 border border-blue-100 rounded-[2rem]  shadow-sm hover:shadow-md transition-shadow lg:col-span-1">
              <Landmark className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Capital Reserve Model</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>70% of first-sale proceeds</strong> are invested in
                low-risk assets (UK gilts, bonds). The remaining 30% covers
                operational costs and liquidity support. This structure gives
                USFRANC stability and long-term support without custodial risk.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 border border-amber-100 rounded-[2rem]  shadow-sm hover:shadow-md transition-shadow">
              <RefreshCcw className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">
                Buyback Guarantee (Limited)
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                A <strong>€0.30 buyback guarantee</strong> is offered during the
                first issuance period if the price drops below €0.20, valid for
                60 days from launch. A reduced 20% buyback option applies in
                secondary issuance rounds under certain conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 bg-white border border-slate-200 rounded-[2rem]  shadow-sm hover:shadow-md transition-shadow">
              <Layers className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Supply & Distribution</h3>
              <p className="text-slate-600 leading-relaxed">
                USFRANC will issue <strong>1 billion</strong> crypto coins in
                total, released in batches of 50 million. Each batch corresponds
                to a new issuance round and is governed by transparent economic
                policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="p-8 bg-white border border-slate-200 rounded-[2rem]  shadow-sm hover:shadow-md transition-shadow">
              <Lock className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Validation Model</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-bold block">Proof of Work (PoW):</span>
                  <span className="text-slate-600 text-sm italic">
                    Supports early network stability and mining
                  </span>
                </li>
                <li>
                  <span className="font-bold block">Proof of Stake (PoS):</span>
                  <span className="text-slate-600 text-sm italic">
                    Enables governance and energy-efficient participation
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
          <section className="bg-primary/80 rounded-[2.5rem] p-10 text-white overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Crypto Coin Snapshot
                </h2>
                <p className="text-sm">Real-time protocol metrics at launch</p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:col-span-2">
                <div className="bg-primary flex flex-col md:flex-row justify-between items-center border border-[#7b5e00] p-4 rounded-xl">
                  <span className=" uppercase text-xs tracking-widest font-bold">
                    Launch Price
                  </span>
                  <span className="text-2xl font-mono text-yellow-400">
                    €0.50
                  </span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center bg-primary border border-[#7b5e00] p-4 rounded-xl">
                  <span className=" uppercase text-xs tracking-widest font-bold">
                    Consensus
                  </span>
                  <span className="text-sm font-medium">
                    Hybrid PoW + PoS | 87% Capital Hedge (UK Bonds)
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
          </section>
        </main>
        <div className=" bg-slate-100 rounded-lg">
          <div className="text-center justify-items-center py-10">
            <h2 className="text-3xl mb-4 font-semibold text-primary">
              Disclaimer
            </h2>
            <p className="w-full px-2 md:w-1/2">
              USFRANC is not an equity, investment opportunity, investment
              contract or security of any type. It is a utility crypto coins
              used to facilitate digital payments and purpose that suits the
              crypto holder in accordance with their local country crypto usage
              compliance.
            </p>
          </div>
        </div>
        <Image
          src={aboutImg}
          alt="about image"
          width={500}
          height={500}
          className="mx-auto w-full h-full mt-20 rounded-lg"
        />
      </div>
    </Container>
  );
};

export default LearnUSFC;
