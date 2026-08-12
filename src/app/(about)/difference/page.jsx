"use client";
import React from "react";
import investorImg from "../../assets/1.1.png";
import Image from "next/image";
import crypto from "../../assets/nefa-cc.4277338.webp";
import img2 from "../../assets/advanced-trading-tools.4f95ae5.webp";
import { motion } from "motion/react";
import Container from "@/components/Container/Container";
const Difference = () => {
  return (
    <Container>
      <div>
        <Image
          src={investorImg}
          width={500}
          height={500}
          alt="investor image"
          className="w-full h-full rounded-lg mt-10"
        />
        <div className="mt-16 py-12 rounded-lg">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex-1 w-full">
              <Image
                src={crypto}
                alt=""
                width={100}
                height={100}
                className="object-cover w-full rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text- py-3">
                What USFRANC IS
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-2 text-lg">
                  A native cryptocurrency built on its own hybrid PoW + PoS
                  blockchain.
                </li>
                <li className="flex gap-2 text-lg">
                  A utility coin backed by capital reserves (67%+ hedged at
                  launch).
                </li>
                <li className="flex gap-2 text-lg">
                  A decentralized, transparent, and community-governed project.
                </li>
                <li className="flex gap-2 text-lg">
                  A non-custodial system — users control their own wallets.
                </li>
                <li className="flex gap-2 text-lg">
                  A flexible means of payment, storage, or crypto exchange.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <motion.div
              initial={{ y: 20, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="">
              <h2 className="text-2xl font-semibold py-3 flex-1">
                What USFRANC IS NOT
              </h2>
              <ul className="space-y-3">
                <li className="text-lg">Is not a fiat coin.</li>
                <li className="text-lg">
                  Not a financial security or investment product.
                </li>
                <li className="text-lg">
                  Not a custodial platform, bank, or lender.
                </li>
                <li className="text-lg">
                  Not a source of dividends, passive yield, or ownership rights.
                </li>
                <li className="text-lg">
                  Not an issuer of returns, interest, or financial guarantees.
                </li>
              </ul>
            </motion.div>
            <div className="flex-1 w-full">
              <Image
                src={img2}
                alt=""
                width={100}
                height={100}
                className="object-cover w-full rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="py-16">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Utility Use Cases
              </h2>

              <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.75 h-[calc(100%-190px)] md:h-[calc(100%-20px)] bg-linear-to-b from-amber-300 via-yellow-500 to-amber-700"></div>

                <div className="mb-12 flex justify-between w-full">
                  <div className="w-1/2 pr-10 text-right">
                    <h4 className="font-semibold text-lg">
                      Peer-to-Peer Transfers
                    </h4>
                    <p className="text-gray-400">
                      Send USFC instantly between wallets across borders — fast,
                      secure, and decentralized.
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-10 h-10 flex items-center justify-items-center justify-center rounded-full 
        backdrop-blur-lg bg-white/10 border border-white/20 text-black font-bold shadow-lg z-10">
                    1
                  </motion.div>

                  <div className="w-1/2"></div>
                </div>

                <div className="mb-12 flex justify-between w-full">
                  <div className="w-1/2"></div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        backdrop-blur-lg bg-white/10 border border-white/20 text-black font-bold shadow-lg z-10">
                    2
                  </motion.div>

                  <div className="w-1/2 pl-10 text-left">
                    <h4 className="font-semibold text-lg">
                      Store of Value with Flexibility
                    </h4>
                    <p className="text-gray-400">
                      Hold USFC securely in your wallet. Swap into other
                      cryptocurrencies when needed.
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex justify-between w-full">
                  <div className="w-1/2 pr-10 text-right">
                    <h4 className="font-semibold text-lg">
                      Merchant Payments with Escrow
                    </h4>
                    <p className="text-gray-400">
                      Pay for goods using USFC. Merchants receive funds after
                      delivery.
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        backdrop-blur-lg bg-white/10 border border-white/20 text-black font-bold shadow-lg z-10">
                    3
                  </motion.div>

                  <div className="w-1/2"></div>
                </div>

                <div className="mb-12 flex justify-between w-full">
                  <div className="w-1/2"></div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        backdrop-blur-lg bg-white/10 border border-white/20 text-black font-bold shadow-lg z-10">
                    4
                  </motion.div>

                  <div className="w-1/2 pl-10 text-left">
                    <h4 className="font-semibold text-lg">
                      Flexible Recipient Usage
                    </h4>
                    <p className="text-gray-400">
                      Recipients can hold, convert, resell, or spend USFC.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="">
              <h2 className="text-2xl font-semibold py-3">
                Jurisdictional Use
              </h2>
              <p className="text-lg">
                USFRANC may be used for payments where legally permitted, or
                held, exchanged, and transferred where crypto usage is lawful.
              </p>
              <p className="mt-4 text-lg">
                USFRANC does not promise capital gain, returns, or act as a
                regulated financial instrument.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Difference;
