"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/Container/Container";

const InvestorsPolicy = () => {
  const list = [
    {
      title: "Purpose",
      text: "The Deferred Utility Distribution is a structured allocation mechanism designed to support long-term commitment, ecosystem engagement, and market stability for the USFranc cryptocurrency. It is not a form of return on investment, interest, or profit-sharing.",
    },
    {
      title: "Eligibility",
      text: "All participants who purchase USFranc (USFC) coins during the official pre-launch phase and comply with the applicable participation terms may be eligible for a Deferred Utility Distribution.",
    },
    {
      title: "Distribution Schedule",
      text: "Participants may receive up to 60% additional USFC coins over a three-year period following the official launch of USFranc, subject to compliance and continued engagement. The release schedule is as follows: ",
      1: "20% after 12 months",
      2: "20% after 24 months",
      3: "20% after 36 months",
    },
    {
      title: "Vesting & Release Conditions",
      text: "Each annual allocation is subject to vesting terms that ensure responsible usage. The release may be withheld or adjusted if the participant engages in behavior contrary to the principles of the USFranc ecosystem or violates the pre-sale terms.",
    },
    {
      title: "Resale Limitations",
      text: "To protect price integrity, participants may not sell more than one-third (1/3) of their original USFC purchase per year, starting from the second year post-launch. This condition does not apply to Deferred Utility Distributions.",
    },
    {
      title: "Legal & Regulatory Position",
      text: "This policy does not constitute an offer of securities or financial products. USFranc is a utility-based cryptocurrency. The Deferred Utility Distribution is not guaranteed and is offered solely as an ecosystem-based allocation under a usage and vesting framework. It is subject to ongoing compliance with applicable laws and regulations under the jurisdiction of the United Kingdom.",
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
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="pt-16 text-center justify-items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter w-full md:w-2/3  leading-tight">
          <span className="text-primary">USFranc</span> Deferred Utility
          Distribution Policy
        </h1>
        <p className="w-full md:w-1/2 mt-6">
          This policy outlines the conditions and structure of the Deferred
          Utility Distribution made available to eligible pre-launch
          participants of the USFranc cryptocurrency project.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {list.map((item, i) => (
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
              {item.text} {item?.issuer}
              {item?.email}
              {item?.jurisdiction} <br /> <br />
              {item[1]} <br /> {item[2]} <br /> {item[3]}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <p className="text-gray-400 mt-10">Date: May 15, 2025</p>
    </Container>
  );
};

export default InvestorsPolicy;
