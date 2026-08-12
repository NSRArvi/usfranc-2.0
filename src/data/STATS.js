import {
  ArrowLeftRight,
  Clock,
  Code2,
  Coins,
  Globe,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export const STATS = [
  { icon: Globe, value: "120+", label: "Countries", sub: "Supported" },
  {
    icon: Coins,
    value: "9+",
    label: "Digital Currencies",
    sub: "(1:1 Backed)",
  },
  { icon: Code2, value: "500+", label: "Merchant APIs", sub: "Integrations" },
  { icon: Wallet, value: "250K+", label: "Wallets", sub: "Created" },
  {
    icon: ArrowLeftRight,
    value: "1M+",
    label: "Transactions",
    sub: "Processed",
  },
  { icon: ShieldCheck, value: "10+", label: "Security", sub: "Layers" },
  { icon: Clock, value: "24/7", label: "Monitoring", sub: "Active" },
];
