"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingBag, PiggyBank, ShieldCheck, Send } from "lucide-react";
import bannerImg from "../../app/assets/banner_image.jpeg";
import { staggerContainer, fadeUp } from "./motion-variants";

const usageData = [
  {
    icon: ShoppingBag,
    title: "Online Spending",
    desc: "Make purchases with USFC at online merchants accepting the cryptocurrency.",
  },
  {
    icon: PiggyBank,
    title: "Store of Value",
    desc: "Buy and hold USFC as a store of value, exchanging to other crypto when desired.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Purchases",
    desc: "Utilize the optional escrow feature for added security in transactions.",
  },
  {
    icon: Send,
    title: "Money Transfer",
    desc: "Send USFC to other users worldwide, with the option to withdraw to traditional currency.",
  },
];

const Usage = () => {
  return (
    <section className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#171310]/8 sm:mt-28 sm:rounded-[2.5rem]">
      <Image
        src={bannerImg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#f7f2ec]/90 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,204,34,0.2),transparent_35%)]" />

      <div className="relative px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
        <header className="mx-auto mb-11 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7b5e00]/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-[#7b5e00] sm:text-[11px]">
            SECTION 03 &middot; UTILITY
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#171310] sm:text-4xl md:text-5xl">
            Built for trust, powered by purpose
          </h2>

          <p className="mt-5 text-base font-medium leading-relaxed text-primary sm:text-lg md:text-xl">
            Recommended usage of USFC (usage may differ according to crypto
            users&rsquo; country regulations &mdash; apply the appropriate use
            for your purpose).
          </p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {usageData.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-[1.35rem] border border-[#171310]/8 bg-white/90 p-5 backdrop-blur-md duration-300 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-[#171310]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-[#171310] sm:text-xl">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#171310]/55">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Usage;
