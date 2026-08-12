import {
  Building2,
  CircleDollarSign,
  FlaskConical,
  Handshake,
  Server,
  Users,
} from "lucide-react";

export const INVESTMENT_CARDS = [
  {
    id: 1,
    title: "1. Technology & Infrastructure",
    description:
      "Investing in the backbone of the USFF ecosystem and future-ready technologies.",
    icon: Server,
    examples: [
      "Blockchain infrastructure & node networks",
      "Security & audit tools",
      "Wallet and payment system development",
      "Decentralized identity & encryption",
      "Cloud, hosting & data infrastructure",
    ],
    riskLevel: "Low - Moderate",
    riskColor: "text-emerald-600",
  },
  {
    id: 2,
    title: "2. Research & Development",
    description:
      "Funding innovation, R&D, and open-source projects that drive real-world utility.",
    icon: FlaskConical,
    examples: [
      "Blockchain protocol improvements",
      "Interoperability solutions",
      "AI & automation for fintech",
      "Cybersecurity advancements",
      "Open-source contributions",
    ],
    riskLevel: "Low - Moderate",
    riskColor: "text-emerald-600",
  },
  {
    id: 3,
    title: "3. Community & Social Impact",
    description:
      "Supporting global communities and initiatives that create positive change.",
    icon: Users,
    examples: [
      "Education & blockchain awareness",
      "Social impact projects",
      "Grants for developers & builders",
      "Environmental initiatives",
      "Local community programs",
    ],
    riskLevel: "Low",
    riskColor: "text-emerald-600",
  },
  {
    id: 4,
    title: "4. Strategic Partnerships",
    description:
      "Building strong partnerships that expand USFF adoption and utility.",
    icon: Handshake,
    examples: [
      "Fintech & payment integrations",
      "Exchange listings & liquidity partnerships",
      "Enterprise blockchain solutions",
      "Cross-industry collaborations",
      "Ecosystem accelerator programs",
    ],
    riskLevel: "Low - Moderate",
    riskColor: "text-emerald-600",
  },
  {
    id: 5,
    title: "5. Real-World Assets",
    description:
      "Investing in tangible assets and cash-flow generating opportunities.",
    icon: Building2,
    examples: [
      "Real estate (rental income properties)",
      "Income-generating businesses",
      "Agricultural & land assets",
      "Renewable energy projects",
      "Equipment & productive assets",
    ],
    riskLevel: "Moderate",
    riskColor: "text-amber-600",
  },
  {
    id: 6,
    title: "6. Financial Instruments",
    description:
      "Allocating a portion to conservative financial instruments for stability and yield.",
    icon: CircleDollarSign,
    examples: [
      "Government & corporate bonds",
      "Money market instruments",
      "Short-term treasury bills",
      "High-grade fixed income funds",
      "Interest-bearing accounts",
    ],
    riskLevel: "Low",
    riskColor: "text-emerald-600",
  },
];
