"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "@/components/Container/Container";

const investorsTermsAndConditions = () => {
  const lists = [
    {
      title: "Coin Delivery",
      text: "All participants will receive 100% of their purchased USFranc (USFC) coins directly to their designated wallet address immediately upon completion of their pre-launch purchase.",
    },
    {
      title: "Deferred Utility Distribution",
      text: "Participants may receive up to an additional 60% in USFC through a Deferred Utility Distribution, issued as 20% allocations annually over three years (at 12, 24, and 36 months post-launch). This is not a guaranteed return and may be adjusted or withheld based on compliance, eligibility, and behavior aligned with the USFranc ecosystem.",
    },
    {
      title: "Resale Conditions",
      text: "Participants agree not to resell more than one-third (1/3) of their originally purchased USFC coins per year starting from the second year post-launch. This limitation supports price stability and responsible usage.",
    },
    {
      title: "Regulatory & Legal Notice",
      text: "USFranc is a utility cryptocurrency. It is not classified as an investment product or financial security. No financial returns or profit guarantees are offered. The Deferred Utility Distribution is not interest, yield, or a financial incentive. It is solely designed to encourage long-term participation in the USFranc ecosystem.",
    },
    {
      title: "Contact & Jurisdiction",
      issuer: "Issuer: USFranc Ltd",
      email: "Email: usfranc@bobosohomail.com",
      jurisdiction: "Jurisdiction: United Kingdom",
    },
  ];
  return (
    <Container>
      <div className="py-16 text-center justify-items-center">
        <h1 className="text-5xl font-black tracking-tighter w-full md:w-2/3  leading-tight">
          <span className="text-primary">USFranc</span> DPre-Launch
          Participation Terms & Conditions
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lists.map((item, i) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            key={i}
            className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#7b5e00] transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-lg">{item.title}</h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.text} {item?.Issuer} <br />
              {item?.email} <br />
              {item?.jurisdiction}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-400 mt-10">Date: May 15, 2025</p>
    </Container>
  );
};

export default investorsTermsAndConditions;
