import React from "react";
import faqImg from "../app/assets/faq.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const WalletFAQs = () => {
  const accordions = [
    {
      value: "accordion1",
      title: " What makes USFranc Wallet different from other wallets?",
      content:
        "USFranc Wallet features Escrow-Secured Multi-Chain Swaps™ — a unique protection layer that verifies every transaction before release, preventing routing errors, failed swaps, and malicious addresses.",
    },
    {
      value: "accordion2",
      title: "When will USFRANC Wallet be available?",
      content:
        " We aim to launch in the coming months. Join our newsletter to stay updated and get early access to the wallet.",
    },
    {
      value: "accordion3",
      title: "Which blockchains will USFranc Wallet support?",
      content:
        "USFranc Wallet will support multi-chain swaps with Ethereum, Solana, Polkadot, and more. BNB Chain and Bitcoin support are coming soon.",
    },
    {
      value: "accordion4",
      title: "How does the Escrow Protection Layer work?",
      content:
        "Our blockchain escrow verification layer validates every step of a cross—chain transaction before releasing funds, ensuring complete protection against fraud and technical failures.",
    },
    {
      value: "accordion5",
      title: "Will there be any bonuses for early adopters?",
      content:
        "Yes! Early adopters of USFranc Wallet will receive exclusive benefits including airdrops, lower transaction fees, and priority access to new features .",
    },
  ];
  return (
    <div>
      <div className="flex items-center">
        <div className="w-full">
          <Image
            src={faqImg}
            alt="faq image"
            width={1000}
            height={1000}
            className="w-120 h-120 object-cover mx-auto rounded-xl"
          />
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-8 text-primary">Wallet FAQs</h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg"
          >
            {accordions.map((accordion, i) => (
              <AccordionItem value={accordion.value} key={i}>
                <AccordionTrigger>{accordion.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {accordion.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default WalletFAQs;
