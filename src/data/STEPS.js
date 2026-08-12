import { Check, Percent, Repeat, Wallet } from "lucide-react";

export const STEPS = [
  {
    step: 1,
    title: "1. Choose Currency",
    description:
      "Select the currency you want to exchange from your USFF wallet.",
    icon: Wallet,
  },
  {
    step: 2,
    title: "2. Select Target Currency",
    description: "Choose the currency you want to receive.",
    icon: Repeat,
  },
  {
    step: 3,
    title: "3. 1:1 Daily Rate",
    description: "All currencies are exchanged at a 1:1 value, updated daily.",
    textBadge: "1:1",
  },
  {
    step: 4,
    title: "4. Pay 0.50% Fee",
    description: "A flat 0.50% fee is applied to every exchange.",
    icon: Percent,
  },
  {
    step: 5,
    title: "5. Receive Instantly",
    description: "The exchanged currency is credited to your wallet instantly.",
    icon: Check,
    isHighlighted: true,
  },
];
