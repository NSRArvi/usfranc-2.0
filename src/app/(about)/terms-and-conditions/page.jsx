"use client";
import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Globe,
  AlertTriangle,
  ArrowRightLeft,
  Wallet,
} from "lucide-react";
import Container from "@/components/Container/Container";

const TermsAndConditions = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };
  const lists = [
    {
      t: "A native cryptocurrency",
      d: "USFC is not a token or stablecoin but a fully independent cryptocurrency built on its own blockchain.",
    },
    {
      t: "A flexible medium of exchange",
      d: "USFC allows for global payments, transfers, and the exchange of value in a decentralized ecosystem.",
    },
    {
      t: "Decentralized",
      d: "USFC operates within a decentralized, transparent network with no central authority controlling the currency.",
    },
    {
      t: "A store of value",
      d: "You can hold USFC crypto coin and use when required in various transactions, pay, hold or exchange or sell it",
    },
  ];

  return (
    <Container>
      <div className="bg-white text-slate-900 font-sans selection:bg-primary selection:text-white">
        <header className="relative overflow-hidden bg-slate-50/50 border-b border-slate-100 py-10 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <span className="inline-block py-1.5  rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 uppercase tracking-widest border border-[#7b5e00]/20">
                Official Terms and Conditions
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-slate-900">
                Welcome to <br />
                <span className="text-primary">USFRANC (USFC)</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed font-light">
                By accessing or using our services, you agree to comply with and
                be bound by the following terms and conditions.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="py-20">
          <section className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900">
                What is USFRANC (USFC)?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                USFRANC (USFC) is a cryptocurrency built on its own hybrid
                **Proof-of-Work (PoW)** and **Proof-of-Stake (PoS)** blockchain.
                It offers a decentralized, secure, and scalable solution for
                digital transactions.
              </p>
              <div className="p-6 bg-primary/5 rounded-3xl border border-[#7b5e00]/10">
                <p className="text-slate-700 italic">
                  USFC can be used for a variety of purposes, including
                  peer-to-peer transfers, merchant payments with escrow
                  protection, and as a store of value or asset exchange.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 blur-[100px] group-hover:opacity-40 transition-opacity" />
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Zap className="text-primary" /> Network Architecture
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60">Blockchain Type</span>
                  <span className="font-mono text-primary font-bold">
                    Hybrid PoW/PoS
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/60">Ecosystem</span>
                  <span className="font-mono text-primary font-bold">
                    Independent
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Authority</span>
                  <span className="font-mono text-primary font-bold">
                    Decentralized
                  </span>
                </div>
              </div>
            </motion.div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 mb-32">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
                <span className="h-1 w-12 bg-primary" /> What USFRANC IS
              </h3>
              <div className="grid gap-4">
                {lists.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-primary mb-2">{item.t}</h4>
                    <p className="text-sm text-slate-500">{item.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-4 text-red-600">
                <span className="h-1 w-12 bg-red-600" /> What USFRANC IS NOT
              </h3>
              <div className="grid gap-3">
                {[
                  "Not a financial investment product",
                  "Not a custodial service",
                  "Not a bank or lender",
                  "Not a stablecoin",
                  "Not a source of guaranteed returns",
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100 text-slate-700">
                    <AlertTriangle
                      size={18}
                      className="text-red-500 shrink-0"
                    />
                    <span className="text-sm font-semibold">{text}</span>
                  </motion.div>
                ))}
                <div className="mt-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 border-dashed text-xs text-slate-400 leading-relaxed">
                  USFC is not designed as a financial security or investment
                  product. It does not guarantee returns or dividends.
                </div>
              </div>
            </motion.div>
          </div>

          <section className="mb-24">
            <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100">
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl font-black mb-6">
                  USFRANC Usage Policy
                </h2>
                <p className="text-slate-500 text-lg">
                  Defined standards for network participants and users.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRightLeft size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Peer-to-Peer Transfers
                    </h4>
                    <p className="text-slate-500 text-sm">
                      USFC can be sent directly between users in a secure, fast,
                      and decentralized manner.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Merchant Payments
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Escrow protection ensures payment is only released upon
                      delivery and after a 7-day return window.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Storing and Converting
                    </h4>
                    <p className="text-slate-500 text-sm">
                      USFC can be held in your wallet or converted to other
                      cryptocurrencies, offering flexibility.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Regulatory Compliance
                    </h4>
                    <p className="text-slate-500 text-sm">
                      USFC complies with applicable cryptocurrency regulations
                      in countries where it is used.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 px-6 rounded-xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-black mb-6 text-slate-900">
                  Liabilities and Disclaimers
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-2xl">
                  By using USFRANC (USFC), you acknowledge that you understand
                  the inherent risks associated with cryptocurrency and
                  decentralized finance. USFC does not guarantee the stability
                  of the value of the currency and is not responsible for any
                  losses or gains resulting from market conditions.
                </p>
              </div>
              <div className="flex flex-col justify-end lg:items-end">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
                  Terminal Protocol
                </p>
                <p className="text-xs text-slate-400 text-right italic">
                  If you do not agree with any part of these terms, please do
                  not use our website or services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
