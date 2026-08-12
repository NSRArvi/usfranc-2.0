import React from "react";
import {
  ShieldCheck,
  ArrowLeftRight,
  AlertCircle,
  Layers,
  Zap,
  Lock,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import walletImg from "../assets/wallet-coming-soon.png";
import Image from "next/image";
import Container from "@/components/Container/Container";
import Link from "next/link";
import WalletFAQs from "@/components/WalletFAQs";

const WALLET_CONTENT = {
  hero: {
    title: "ESCROW-SECURED MULTI-CHAIN SWAPS™",
    subtitle: "The Safest Way to Move Crypto Across Blockchains",
    description:
      "Swap USFranc (USFC) seamlessly with Ethereum, Solana, Polkadot, and more—protected by a next-generation blockchain escrow layer that verifies every step of the transaction before release.",
  },
  features: [
    {
      id: 1,
      icon: ArrowLeftRight,
      title: "Multi-Chain Connectivity",
      desc: "USF ↔ ETH ↔ SOL ↔ DOT ↔ more coming",
    },
    {
      id: 2,
      icon: Lock,
      title: "Escrow Protection Layer",
      desc: "Transactions verified before release",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Anti-Fraud Validation",
      desc: "Detects unsafe or invalid destinations",
    },
    {
      id: 4,
      icon: AlertCircle,
      title: "Network Failure Protection",
      desc: "Automatic rollback if swap cannot finalize",
    },
    {
      id: 5,
      icon: Layers,
      title: "Hybrid PoW/PoS Compatible",
      desc: "Ultra-secure chain foundation",
    },
    {
      id: 6,
      icon: Zap,
      title: "Fast Cross-Chain Swaps",
      desc: "Designed for modern crypto users",
    },
  ],
  whyBuy: {
    header: "Why Buy USFranc Crypto?",
    subHeader: "USFranc (USFC) – A Secured, Utility-Focused Cryptocurrency",
    context:
      "USFranc is built on its own hybrid PoW/PoS blockchain and is designed for payments, transfers, merchant systems, and cross-chain interoperability.",
    points: [
      {
        id: "1",
        title: "Stability Through Reserve-Backed Issuance",
        content:
          "A mandatory 70% reserve hedge ensures structured capital protection behind USFranc issuance — extremely rare in the crypto world.",
      },
      {
        id: "2",
        title: "Real Utility Inside an Expanding Ecosystem",
        content:
          "USFranc Wallet + Custodial Wallet + Merchant Escrow System = a complete payment ecosystem where USF can be used daily.",
      },
      {
        id: "3",
        title: "Multi-Chain Interoperability Expands Reach",
        content:
          "USFranc becomes a universal value asset through cross-chain swapping with:",
        chains: [
          "Ethereum",
          "Solana",
          "Polkadot",
          "BNB Chain (coming)",
          "Bitcoin (coming)",
        ],
        footer: "This increases global user access.",
      },
      {
        id: "4",
        title: "Built for Long-Term Compliance & Security",
        content:
          "The USF project is designed to align with multi-jurisdiction crypto regulations, ensuring long-term survival and adoption.",
      },
    ],
  },
};

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xs hover:border-blue-200 transition-all duration-200 group">
    <div className="p-2.5 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-slate-900 leading-tight">{title}</h4>
      <p className="text-sm text-slate-500 font-medium">{desc}</p>
    </div>
  </div>
);

const UtilityCard = ({ num, title, content, chains, footer }) => (
  <Card
    className={`p-8 border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors ${chains ? "md:col-span-2" : ""}`}>
    <div className="relative z-10 flex gap-6">
      <div className="hidden sm:flex h-10 w-10 rounded-full bg-slate-900 text-white items-center justify-center font-bold shrink-0">
        {num}
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span className="sm:hidden h-7 w-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
            {num}
          </span>
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{content}</p>

        {chains && (
          <div className="flex flex-wrap gap-2 pt-2">
            {chains.map((chain) => (
              <Badge
                key={chain}
                variant="destructive"
                className="px-3 py-1 bg-blue-50 text-muted-foreground text-xs font-bold rounded-full border border-blue-100">
                {chain}
              </Badge>
            ))}
          </div>
        )}

        {footer && (
          <p className="text-sm font-bold text-primary flex items-center gap-1.5 pt-2">
            <CheckCircle2 className="w-4 h-4" /> {footer}
          </p>
        )}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-4 text-9xl font-black text-slate-50 select-none group-hover:text-blue-50/50 transition-colors z-0">
      {num}
    </div>
  </Card>
);

export default function USFrancWallet() {
  const { hero, features, whyBuy } = WALLET_CONTENT;

  return (
    <Container>
      <div className="w-full bg-white text-slate-900 py-16 px-4">
        <div className="space-y-20">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <Badge
                  variant="destructive"
                  className="text-primary tracking-tight">
                  <ArrowLeftRight /> {hero.title}
                </Badge>
                <p className=" text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                  {hero.subtitle}
                </p>
              </div>
              <p className="text-base text-slate-500 leading-relaxed max-w-2xl">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Start Swap Now
                </button>

                <button className="px-6 py-3 rounded-lg border border-gray-300 bg-white/60 backdrop-blur-md font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                  Audit Status
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  desc={feature.desc}
                />
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-black uppercase tracking-tight">
                {whyBuy.header}
              </h2>
              <div className="space-y-2">
                <p className="text-xl font-bold text-primary">
                  {whyBuy.subHeader}
                </p>
                <p className="text-slate-500 italic font-medium">
                  {whyBuy.context}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyBuy.points.map((point) => (
                <UtilityCard
                  key={point.id}
                  num={point.id}
                  title={point.title}
                  content={point.content}
                  chains={point.chains}
                  footer={point.footer}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="my-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full">
              <Badge variant="destructive" className="text-muted-foreground">
                <Shield size={22} className="text-primary" />
                SECURE CRYPTO VAULT
              </Badge>
              <p className="mt-6 text-muted-foreground">
                The <b>native digital vault</b> for the{" "}
                <span className="text-primary">USFRANC</span> ecosystem,
                combining institutional-grade security with effortless crypto
                management.
              </p>
              <ul className="mt-4 text-gray-700">
                <li>
                  ✓ Multi-chain support for seamless crypto coin management
                </li>
                <li>✓ Non-custodial architecture - you control your keys</li>
                <li>
                  ✓ Built-in compliance tools for regulated crypto operations
                  Read Whitepaper
                </li>
              </ul>
              <Link href="whitepaper">
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 mt-8 cursor-pointer">
                  Read Whitepaper
                </button>
              </Link>
            </div>
            <div className="w-full">
              <Image
                src={walletImg}
                alt="wallet image"
                width={1000}
                height={1000}
                className=" w-120 h-120 rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <WalletFAQs />
      </div>
    </Container>
  );
}
