"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Globe,
  ChevronRight,
  Landmark,
  ShieldCheck,
  Zap,
  MapPin,
} from "lucide-react";
import Container from "@/components/Container/Container";

const Whitepaper = () => {
  const [activeTab, setActiveTab] = useState("global");
  const primaryColor = "#7b5e00";

  return (
    <Container>
      <div className="bg-[#fafaf9] text-slate-900 font-sans selection:bg-primary selection:text-white">
        <header className="bg-white border-b border-slate-200 pt-10 md:pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-20" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md">
                    Official Documentation
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                  USFRANC{" "}
                  <span style={{ color: primaryColor }}>Whitepaper</span>
                </h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  Next-Generation Hybrid Blockchain Infrastructure
                </p>
              </div>

              {/* switch language */}
              <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 w-fit">
                <button
                  onClick={() => setActiveTab("global")}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === "global"
                      ? "bg-white shadow-sm text-primary"
                      : "text-slate-400 hover:text-slate-600"
                  }`}>
                  Global (EN)
                </button>
                <button
                  onClick={() => setActiveTab("france")}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === "france"
                      ? "bg-white shadow-sm text-primary"
                      : "text-slate-400 hover:text-slate-600"
                  }`}>
                  France (FR)
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        <section className="px-6 py-20">
          <AnimatePresence mode="wait">
            {activeTab === "global" ? (
              <motion.div
                key="global-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-16">
                {/* Introduction Card */}
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  <h2 className="text-3xl font-black mb-2 text-slate-900">
                    USFRANC Whitepaper
                  </h2>
                  <p className="text-primary font-bold mb-6">
                    Version 1.0 - April 2025
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
                    This document is provided for regulatory review and public
                    disclosure.
                  </p>

                  <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                    <ChevronRight size={20} className="text-primary" /> 1.
                    Introduction
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    USFranc is a reserve-backed, hybrid cryptocurrency project
                    built on a dual-consensus architecture: Proof of Work (PoW)
                    and Proof of Stake (PoS). It is designed to preserve
                    capital, offer practical utility for real-world
                    transactions, and deliver secure, transparent governance
                    through community involvement and smart contract automation.
                    The mission of USFranc is to deliver a next-generation
                    cryptocurrency that balances decentralization, compliance,
                    investor protection, and usability, while ensuring
                    resilience through its hybrid technical structure and
                    financial reserve model.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <section className="space-y-6">
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                      <h3 className="text-xl font-black mb-6">
                        2. Coin Overview
                      </h3>
                      <ul className="space-y-3 text-sm font-medium">
                        <li className="flex justify-between border-b pb-2">
                          <span>Coin Name:</span>{" "}
                          <span className="font-bold">USFranc</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span>Ticker Symbol:</span>{" "}
                          <span className="font-bold">
                            USFC (public-facing name: USFC)
                          </span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span>Fractional Units:</span>{" "}
                          <span className="font-bold">
                            1 USFC = 100,000,000 Franqs
                          </span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span>Total Supply:</span>{" "}
                          <span className="font-bold">1,000,000,000 USFC</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span>Native Chain:</span>{" "}
                          <span className="font-bold">
                            USFranc Hybrid Blockchain (PoW/PoS)
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span>Wrapped Version:</span>{" "}
                          <span className="font-bold">
                            BEP-20 Token (Binance Smart Chain-compatible)
                          </span>
                        </li>
                      </ul>
                      <p className="mt-6 text-xs text-slate-500 italic">
                        USFranc coins are digitally scarce and completely
                        pre-issued, meaning there will be no further
                        inflationary minting. This fixed-cap model protects
                        value and simplifies economic planning for both retail
                        users and institutional participants.
                      </p>
                    </div>

                    <div className="p-8 bg-white rounded-[2rem] border border-slate-200">
                      <h3 className="text-xl font-black mb-4">
                        3. Open Source Availability
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The USFranc blockchain operates as an open-source
                        protocol. However, due to cybersecurity considerations
                        and the need to preserve operational integrity, critical
                        modules (e.g., validator logic, ledger protocol,
                        compliance triggers) are made available only on request
                        to vetted developers, auditors, or institutional
                        partners. The public GitHub repository contains the
                        basic wallet infrastructure, wrapped token smart
                        contracts, and interoperability components. All forks or
                        derivative chains must first undergo a security and
                        compliance audit by the USFranc Reserve Management
                        Entity.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-6">
                    <div className="p-8 bg-slate-900 text-white rounded-[2rem] relative overflow-hidden">
                      <Cpu className="absolute -bottom-6 -right-6 size-32 opacity-10" />
                      <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-primary">
                        <Zap size={20} /> 4. Blockchain Architecture
                      </h3>
                      <ul className="space-y-4 text-sm font-bold">
                        <li className="flex flex-col">
                          <span className="text-primary text-[10px] uppercase">
                            Base Chain
                          </span>{" "}
                          <span>
                            Hybrid fork derived from Komodo (Zcash-based) and
                            Litecoin Core
                          </span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-primary text-[10px] uppercase">
                            Consensus
                          </span>{" "}
                          <span>
                            Hybrid (Litecoin-based PoW + Komodo PoS/SmartChain
                            modules)
                          </span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-primary text-[10px] uppercase">
                            Ledger
                          </span>{" "}
                          <span>
                            General Ledger (GL) with a real-time Mirrored Ledger
                            backup
                          </span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-primary text-[10px] uppercase">
                            Wallet Type
                          </span>{" "}
                          <span>
                            Fully non-custodial (user retains full private key
                            control)
                          </span>
                        </li>
                      </ul>
                      <p className="mt-6 text-xs text-slate-400 font-normal">
                        Node Types: Mining Nodes, Compliance Nodes, Master Node
                        for traffic relay, and Mirror Nodes
                      </p>
                      <p className="mt-4 text-xs text-slate-400 font-normal italic">
                        USFranc’s chain is both secure and scalable. The
                        Litecoin forked PoW ensures traditional miner validation
                        and hardware compatibility, while the Komodo PoS
                        integration provides flexibility for optional staking,
                        notarization, and smart contract expansion.
                      </p>
                    </div>
                  </section>
                </div>

                <div className="p-8 md:p-12 bg-white rounded-[3rem] border border-slate-200">
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                    <Landmark className="text-primary" /> 5. Capital Allocation
                    Strategy
                  </h3>
                  <p className="text-slate-600 mb-8">
                    To protect investors and stabilize the network, USFranc has
                    established a reserve policy through a transparent capital
                    hedging model:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="text-4xl font-black text-primary mb-2">
                        67%
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-left">
                        Capital Hedge Fund
                      </p>
                      <ul className="text-xs space-y-2 text-slate-600 list-disc pl-4">
                        <li>50% managed by SAS Affin (France)</li>
                        <li>
                          50% directly invested in government-backed obligations
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="text-4xl font-black text-slate-800 mb-2">
                        20%
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-left">
                        Operational Reserve Wallet
                      </p>
                      <p className="text-xs text-slate-600">
                        Maintains liquidity and project continuity
                      </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="text-4xl font-black text-slate-800 mb-2">
                        10%
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-left">
                        Capital Reserve Wallet
                      </p>
                      <p className="text-xs text-slate-600">
                        Emergency liquidity support, legal reserves
                      </p>
                    </div>
                  </div>
                  <p className="p-4 bg-primary/5 border border-[#7b5e00]/20 rounded-xl text-xs text-slate-600 italic">
                    Importantly, ownership of hedge capital is retained by
                    USFranc’s Reserve Management Entity (SAS Affin). Coin
                    holders do not receive direct financial rights over the
                    reserves but benefit from the macroeconomic protection they
                    offer.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200">
                    <h3 className="text-xl font-black mb-4">
                      6. Coin Distribution and Lock Policy
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 italic">
                      Of the total 1 billion USFC:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                      <div className="p-4 border border-slate-100 rounded-xl text-center">
                        <span className="block text-2xl font-black text-slate-800">
                          900M
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                          Public Sale
                        </span>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl text-center">
                        <span className="block text-2xl font-black text-slate-800">
                          50M
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                          Private Investors
                        </span>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl text-center">
                        <span className="block text-2xl font-black text-slate-800">
                          50M
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                          Founders (1yr Lock)
                        </span>
                      </div>
                    </div>
                    <h4 className="font-black text-sm mb-4">
                      Private Investor Lock and Bonus Program (50M USFC):
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-100">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 font-black uppercase text-slate-400">
                          <tr>
                            <th className="p-4">Timeframe</th>
                            <th className="p-4">Sell Permission</th>
                            <th className="p-4">Bonus</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-4 font-bold">Year 1</td>
                            <td className="p-4 text-red-500">0% allowed</td>
                            <td className="p-4">+10% added</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-bold">Year 2</td>
                            <td className="p-4">Up to 33%</td>
                            <td className="p-4">+10% added</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-bold">Year 3</td>
                            <td className="p-4">Up to 66%</td>
                            <td className="p-4">+10% added</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-bold">Year 4</td>
                            <td className="p-4 text-green-600">
                              100% unlocked
                            </td>
                            <td className="p-4 font-bold">+30% total</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 text-xs text-slate-500">
                      These rules are embedded in wallet permissions or
                      enforceable via optional escrow contracts or compliance
                      node reviews for large sales.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 bg-white rounded-3xl border border-slate-200">
                    <h3 className="text-lg font-black mb-4">
                      7. Administrative Fee
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">
                      A standard 2% transfer fee applies to all non-exchange P2P
                      transactions:
                    </p>
                    <ul className="space-y-2 text-xs font-bold">
                      <li className="flex justify-between">
                        <span>Hedge Fund</span>{" "}
                        <span className="text-primary">10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Capital Reserve</span>{" "}
                        <span className="text-primary">20%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Operational</span>{" "}
                        <span className="text-primary">70%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-2 p-8 bg-white rounded-3xl border border-slate-200">
                    <h3 className="text-lg font-black mb-4">
                      8. AML/CTF Compliance
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      USFranc implements full anti-money laundering (AML) and
                      counter-terrorist financing (CTF) procedures. All
                      purchases above €50,000 (or equivalent in crypto or fiat)
                      are subject to Enhanced Due Diligence (EDD), including:
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Identity verification, Screening against sanctions, PEP
                      databases, Source of funds justification, and Real-time
                      monitoring. Data is encrypted and not shared with third
                      parties unless required by law.
                    </p>
                  </div>
                </div>

                <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-200">
                  <h3 className="text-2xl font-black mb-8">
                    9. Transaction Privacy, Security & Anti-Intrusion
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-black text-primary text-sm mb-2">
                        9.1 Transaction Privacy
                      </h4>
                      <p className="text-xs text-slate-600">
                        Standard transactions remain fully decentralized and
                        private. Only compliance-triggered transfers are subject
                        to internal review. No user identities are exposed
                        publicly.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-sm mb-2">
                        9.2 Illicit Behavior Controls
                      </h4>
                      <p className="text-xs text-slate-600">
                        AML bypass via structuring is monitored. Suspicious
                        activity may trigger: Smart contract freezing, wallet
                        flagging, or rollback via Mirrored Ledger.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-primary text-sm mb-2">
                        9.3 Ledger Redundancy
                      </h4>
                      <p className="text-xs text-slate-600">
                        Main General Ledger (GL) supported by a Mirrored Ledger
                        (encrypted, 31-day rotating, updated daily) using
                        AES-256 and cryptographic integrity via hashed logging.
                      </p>
                    </div>
                  </div>
                </div>

                <section className="space-y-8">
                  <div className="p-8 bg-slate-900 text-white rounded-3xl">
                    <h3 className="text-xl font-black mb-6 text-primary">
                      10. Key Attributes Summary
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-[10px] font-bold uppercase tracking-wider text-center">
                      <div className="p-4 border border-white/10 rounded-xl">
                        Security Focus
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl">
                        Capital Hedge
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl">
                        Utility First
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl">
                        Non-Custodial
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl">
                        Governance
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-slate-400">
                      USFranc is designed for longevity, integration, and
                      cross-chain usability --- with security and value
                      protection as foundational pillars.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                      <h3 className="text-xl font-black mb-4">
                        11. Founders and Entity
                      </h3>
                      <p className="text-sm font-bold">
                        Founder: <span className="text-primary">Brian Fin</span>
                      </p>
                      <p className="text-sm font-bold">
                        Co-Founder:{" "}
                        <span className="text-primary">SAS Affin</span>
                      </p>
                      <p className="text-sm font-bold">
                        First Issuing Entity:{" "}
                        <span className="text-primary">
                          SAS Affin (Registered under French corporate law)
                        </span>
                      </p>
                      <p className="text-xs text-slate-500 mt-4 font-bold uppercase">
                        Compliance: usfranc@bobosohomail.com
                      </p>
                      <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-[10px] font-bold text-red-800">
                        11A. Confidential Elements: Server networks, validator
                        authorization, and distribution algorithms are not
                        publicly disclosed for cybersecurity.
                      </div>
                    </div>
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl">
                      <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                        <MapPin className="text-primary" /> 12. Our Locations
                      </h3>
                      <div className="space-y-4 text-xs font-bold text-slate-500">
                        <p>
                          USFRANC LTD (Reg N° 10325829)
                          <br />
                          4th Floor, Silverstream House, 45 Fitzroy Street,
                          London, W1T 6EB, UK
                        </p>
                        <p>
                          SAS Affin (Reg N° 803965227)
                          <br />8 Rue Dublin, 34200 Sète, France
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="p-12 bg-white rounded-[3rem] border border-slate-200">
                  <h3 className="text-2xl font-black mb-4">
                    13. Advantages of USFC Peer-to-Peer Transfer Fees
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-10">
                    USFranc’s peer-to-peer transfer system is designed with
                    clarity, transparency, and operational sustainability. The
                    2% transaction fee collected after the coin launch is
                    distributed as follows: 10% to the Capital Hedge Fund, 20%
                    to the Capital Reserve Wallet, and 70% to the Operational
                    Cost Wallet.
                  </p>

                  <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                    14. Escrow System for Merchant Credibility
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The USFranc platform includes a secure, voluntary
                    escrow-based wallet system for merchants and crypto holders.
                    In this setup: Crypto holders can choose to activate an
                    escrow mode at the time of payment. USFranc will temporarily
                    hold the payment in escrow for 7 days or until delivery is
                    confirmed. This optional feature provides transactional
                    security, builds buyer trust, and enhances merchant
                    credibility. The system is not enforced and is voluntarily
                    used by both parties to improve accountability and trust in
                    crypto payments.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl">
                  <h3 className="text-xl font-black mb-6">
                    15. Terms and Conditions
                  </h3>
                  <p className="text-xs font-bold text-primary mb-4">
                    Full terms available at:
                    https://usfranc.com/terms-and-conditions
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-[10px] font-bold text-slate-500 leading-loose">
                    <p>
                      <span className="text-slate-900 block">
                        Coin Ownership:
                      </span>{" "}
                      Buyers of USFranc obtain ownership of a decentralized
                      cryptocurrency that is neither a security nor a
                      stablecoin.
                    </p>
                    <p>
                      <span className="text-slate-900 block">
                        Use Case Limitation:
                      </span>{" "}
                      USFranc may be used for payments, storage, exchange, and
                      participation. It does not grant voting rights.
                    </p>
                    <p>
                      <span className="text-slate-900 block">
                        Regulatory Clarity:
                      </span>{" "}
                      Subject to AML, CTF, and local laws. Initial oversight by
                      French (SAS Affin) and UK (USFranc Ltd) authorities.
                    </p>
                  </div>
                  <p className="mt-6 text-[10px] text-slate-400 font-bold uppercase text-center">
                    Transferability: USFC coins are freely transferable between
                    non-custodial wallets, subject to 2% admin fee rules. |
                    Non-Refund Clause: All transactions are final.
                  </p>
                </div>

                <div className="p-12 bg-white rounded-[3rem] border border-slate-200">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-black mb-4">
                        16. COIN VERSION:
                      </h3>
                      <p className="text-xs font-bold text-slate-600">
                        Native Hybrid PoW/PoS Coin (Forked from Komodo +
                        Litecoin Core)
                        <br />
                        Wrapped BEP-20 Token for BNB Smart Chain compatibility
                      </p>
                      <h3 className="text-xl font-black mt-8 mb-4">
                        17. WALLET:
                      </h3>
                      <p className="text-xs font-bold text-slate-600">
                        Official: USFWallet / USFrancWallet (Multi-Coin Wallet,
                        Non-Custodial)
                        <br />
                        Compatible: Trust Wallet, MetaMask (for BEP-20 wUSF)
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-4">
                        18. Technical Identity of USFC
                      </h3>
                      <p className="text-xs text-slate-600">
                        USFranc (USFC) is a native hybrid cryptocurrency. It is
                        not an ERC-20 or TRC-20 token. It is built on its own
                        custom blockchain infrastructure using Komodo and
                        Litecoin components. Mainnet Chain uses Komodo’s
                        SmartChain framework.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 p-4  md:p-8 bg-slate-50 rounded-2xl">
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                      <ShieldCheck /> 19. Wrapped Token Version
                    </h3>
                    <p className="text-xs text-slate-600 mb-6">
                      wUSF: A BEP-20 token version (Wrapped USFranc) created for
                      compatibility with Binance Smart Chain wallets such as
                      Trust Wallet and MetaMask. wUSF is pegged 1:1 to the
                      native USFC.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[10px] font-bold">
                        <thead className="bg-slate-200 uppercase tracking-tighter">
                          <tr>
                            <th className="p-2">Feature</th>
                            <th className="p-2">Native USFC Coin</th>
                            <th className="p-2">Wrapped wUSF Token (BEP-20)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-2 bg-slate-100">Blockchain</td>
                            <td className="p-2">USFranc Hybrid Chain</td>
                            <td className="p-2">Binance Smart Chain</td>
                          </tr>
                          <tr>
                            <td className="p-2 bg-slate-100">Standard</td>
                            <td className="p-2">Native (no token standard)</td>
                            <td className="p-2">BEP-20</td>
                          </tr>
                          <tr>
                            <td className="p-2 bg-slate-100">Wallet</td>
                            <td className="p-2">USFWallet</td>
                            <td className="p-2">Trust Wallet, MetaMask</td>
                          </tr>
                          <tr>
                            <td className="p-2 bg-slate-100">Ownership</td>
                            <td className="p-2">
                              Decentralized via private keys
                            </td>
                            <td className="p-2">Managed by Reserve Entity</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-black mb-4">
                      20. Mining Policy
                    </h3>
                    <p className="text-xs text-slate-600 leading-loose">
                      USFranc’s mining architecture is based on a hybrid model:
                      PoW Base derived from Litecoin with Komodo integration.
                      Mining will be open but monitored. The USFranc network may
                      apply node authorization and IP-based limitations to
                      control participation. No Reward Dilution: Mining rewards
                      are algorithmically fixed and distributed only to verified
                      mining addresses. Supply Integrity: A maximum supply cap
                      of 1,000,000,000 USFC is enforced. No new coins beyond
                      this issuance. Admin Monitoring: A compliance node will
                      verify large transactions and trace transaction origin to
                      prevent manipulation or fraud.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 p-8 bg-primary text-white rounded-3xl">
                      <h3 className="text-xl font-black mb-4">
                        21. Compliance Access
                      </h3>
                      <p className="text-xs opacity-80 mb-4">
                        USFranc adheres to robust compliance standards under EU,
                        UK, and international law.
                      </p>
                      <p className="text-xs font-bold uppercase tracking-widest">
                        Contact: usfranc@bobosohomail.com |
                        https://usfranc.com/compliance
                      </p>
                    </div>
                    <div className="flex-1 p-8 bg-white border border-slate-200 rounded-3xl">
                      <h3 className="text-xl font-black mb-4">
                        22. Legal Disclaimer
                      </h3>
                      <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed">
                        USFranc is a decentralized cryptocurrency, not a
                        security. By engaging with USFranc: You acknowledge you
                        hold and manage your wallet and funds independently.
                        USFranc Ltd, SAS Affin, or its affiliates are not liable
                        for user errors, third-party breaches, or losses from
                        misuse. You agree to abide by AML/CTF, tax laws, and
                        crypto regulations in your jurisdiction.
                      </p>
                    </div>
                  </div>

                  <div className="p-12 bg-white rounded-[3rem] border border-slate-200">
                    <h3 className="text-2xl font-black mb-8 text-center uppercase tracking-tighter">
                      23. Why USFranc Stands Apart
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-[10px] font-black text-center text-primary uppercase">
                      <div className="space-y-2">
                        <div className="h-1 bg-primary w-full mb-4" />
                        Hybrid Blockchain
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 bg-primary w-full mb-4" />
                        Capital-Backed
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 bg-primary w-full mb-4" />
                        Voluntary Escrow
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 bg-primary w-full mb-4" />
                        Regulatory-Focused
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 bg-primary w-full mb-4" />
                        Fixed Supply
                      </div>
                    </div>
                    <div className="mt-8 text-xs text-slate-500 italic text-center">
                      67% of first sales invested in government bonds. After the
                      first sale of all coins the hedge fund will equal 670
                      million.
                    </div>
                  </div>

                  <div className="p-12 bg-slate-900 text-white rounded-[3rem]">
                    <h3 className="text-2xl font-black mb-6 text-primary">
                      24. Hybrid Blockchain Justification & Benefits
                    </h3>
                    <p className="text-sm text-slate-400 mb-8">
                      USFranc’s blockchain is designed as a hybrid architecture
                      that combines Proof of Work (PoW) using a Litecoin-derived
                      base for robust security and Proof of Stake (PoS) using
                      Komodo’s SmartChain modules for energy-efficient
                      validation.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6 text-[10px] font-bold uppercase tracking-widest">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        Security + Efficiency
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        Notarization (dPoW)
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        Scalability
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        Interoperability
                      </div>
                    </div>
                  </div>

                  <div className="p-12 bg-white rounded-[3rem] border border-slate-200">
                    <h3 className="text-2xl font-black mb-6">
                      25. Compliance Infrastructure and Tools
                    </h3>
                    <p className="text-sm text-slate-600 mb-8">
                      USFranc embeds compliance protocols directly into its
                      blockchain and operational infrastructure, without
                      compromising decentralization.
                    </p>
                    <div className="space-y-4 text-xs font-bold text-slate-500">
                      <p>
                        <span className="text-slate-900 block font-black">
                          Compliance Node System:
                        </span>{" "}
                        Flags transactions above €50,000 or attempts to split
                        them. Triggered events are routed through a Compliance
                        Smart Contract Layer for review.
                      </p>
                      <p>
                        <span className="text-slate-900 block font-black">
                          Mirrored Ledger:
                        </span>{" "}
                        A 31-day rolling read-only backup of the General Ledger
                        is encrypted and mirrored daily. It ensures
                        recoverability without everyday surveillance.
                      </p>
                      <p>
                        <span className="text-slate-900 block font-black">
                          Escrow Framework (Voluntary):
                        </span>{" "}
                        Holds merchant transactions in smart contracts for 7
                        days post-delivery confirmation. Participation is
                        voluntary.
                      </p>
                    </div>
                  </div>

                  <div className="p-16 bg-primary text-white rounded-[4rem] text-center">
                    <h3 className="text-3xl font-black mb-6">
                      26. Final Remarks and Commitment
                    </h3>
                    <p className="max-w-3xl mx-auto text-sm opacity-80 leading-relaxed mb-8">
                      USFranc is more than a coin --- it is a vision for
                      capital-secure, compliance-resilient, and decentralized
                      crypto use in the real world. All development and
                      compliance operations are fully administered by SAS Affin
                      and USFranc Ltd, with ongoing updates provided through
                      https://usfranc.com.
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] border-t border-white/20 pt-8 max-w-lg mx-auto">
                      Disclaimer: This Compliance Statement is for informational
                      purposes only and does not constitute legal or financial
                      advice.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="france-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12 max-w-4xl mx-auto">
                <div className="p-12 bg-white rounded-[3rem] border border-slate-200">
                  <h2 className="text-3xl font-black mb-2 text-slate-900">
                    Livre Blanc USFRANC
                  </h2>
                  <p className="text-primary font-bold mb-6">
                    Version 1.0 - Avril 2025
                  </p>
                  <p className="text-xs text-slate-400 font-bold uppercase mb-12">
                    Ce document est fourni à des fins de transparence
                    réglementaire et d’information publique.
                  </p>

                  <div className="space-y-12">
                    <section>
                      <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                        1. Résumé Exécutif
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        USFRANC est une cryptomonnaie décentralisée conçue pour
                        les paiements réels, combinant des mécanismes de
                        consensus Proof of Work (PoW) et Proof of Stake (PoS).
                        Le projet vise à fournir une monnaie numérique stable,
                        sécurisée et conforme pour les transactions en ligne et
                        en point de vente.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black mb-4">
                        2. Objectif et Vision
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        USFRANC est conçu pour servir de monnaie de paiement
                        numérique, permettant aux individus et aux entreprises
                        d’envoyer, de recevoir et de régler des paiements de
                        manière sécurisée et transparente. Un modèle de
                        transaction inspiré de l’entiercement est intégré afin
                        de bloquer les fonds jusqu’à la validation de la
                        livraison.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black mb-4">
                        3. Modèle d’Utilisation
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        USFRANC fonctionne comme un moyen d’échange. Les pièces
                        sont conservées dans des portefeuilles, utilisées pour
                        l’achat de biens ou de services, puis converties par les
                        commerçants après validation de la livraison. Les fonds
                        sont bloqués pendant 7 jours après réception afin de
                        protéger les utilisateurs, sans offrir de rendement
                        financier.
                      </p>
                    </section>

                    <section className="p-8 bg-slate-900 text-white rounded-3xl">
                      <h3 className="text-xl font-black mb-4 text-primary">
                        4. Architecture Technique
                      </h3>
                      <p className="text-sm text-slate-400">
                        USFRANC repose sur une blockchain à double couche : un
                        réseau principal basé sur un fork de Litecoin (PoW) et
                        une sidechain PoS pour les contrats intelligents. Ce
                        modèle hybride garantit une validation efficace et une
                        haute résilience du réseau.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black mb-4">
                        5. Répartition des Pièces et Gouvernance
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        USFRANC émet 115 millions de pièces :
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold uppercase text-center">
                        <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          67 % adossées aux réserves
                        </li>
                        <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          10M investisseurs
                        </li>
                        <li className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          5M fondateurs
                        </li>
                      </ul>
                    </section>

                    <section className="p-8 bg-primary/5 border border-[#7b5e00]/20 rounded-3xl">
                      <h3 className="text-xl font-black mb-4 text-primary">
                        6. Stratégie de Réserve de Capital
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Au moins 67 % du capital net issu des premières ventes
                        est alloué à des réserves sûres (ex : obligations
                        d’État). Ces réserves ne constituent pas un fonds
                        mutualisé ni un actif accessible aux utilisateurs. Aucun
                        rendement, dividende ou droit n’est accordé. Cette
                        stratégie renforce l’intégrité opérationnelle.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black mb-4">
                        7. Classification Juridique & Risques
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        USFRANC n’est ni un titre financier, ni une monnaie
                        électronique, ni un produit réglementé. Il est classé
                        comme une cryptomonnaie. Aucun rendement ou droit sur
                        les actifs n’est garanti. Les utilisateurs assument le
                        risque total de perte.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                        <Globe size={20} /> 8. Conformité Réglementaire
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase">
                        <div className="p-4 border border-slate-100 rounded-xl">
                          <strong>UE:</strong> MiCA (pièce utilitaire), RGPD,
                          LCB/FT
                        </div>
                        <div className="p-4 border border-slate-100 rounded-xl">
                          <strong>France:</strong> Conformité AMF, non-PSAN
                        </div>
                        <div className="p-4 border border-slate-100 rounded-xl">
                          <strong>UK:</strong> Non disponible, mentions FCA
                          affichées
                        </div>
                        <div className="p-4 border border-slate-100 rounded-xl">
                          <strong>USA:</strong> Non un titre (test de Howey),
                          enregistrement FinCEN
                        </div>
                      </div>
                    </section>

                    <div className="space-y-6 pt-12 border-t border-slate-100">
                      <p className="text-[10px] text-slate-500 font-bold uppercase">
                        9. Conditions Générales: Aucun service financier n’est
                        offert. Accès restreint aux résidents des USA, UK, NY et
                        pays sous sanctions.
                      </p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">
                        10. Transparence: Tous les documents sont publiés en FR
                        et EN. Gouvernance auditée. Contact :
                        compliance@usfranc.com
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold text-center italic mt-10">
                        Clause de non-responsabilité : Cette déclaration de
                        conformité est fournie à titre informatif uniquement et
                        ne constitue pas un conseil juridique ou financier.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </Container>
  );
};

export default Whitepaper;
