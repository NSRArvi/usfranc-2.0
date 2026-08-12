import Container from "@/components/Container/Container";
import Image from "next/image";
import React from "react";
import buyImage from "../../assets/buy_page.png";
import Link from "next/link";

const Buy = () => {
  return (
    <Container>
      <div className="text-center justify-items-center gap-6 md:gap-0 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight w-full md:w-3/4">
          <span className="text-primary">USFRANC</span> building trust for a
          purpose - the only crypto coin hedged to its own capital.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-20 items-center">
        <div className="flex-1">
          <p className="text-gray-600 mb-6 text-lg">
            Join the private sale pre-order of 5 million exclusive crypto coins
            on offer. Built for trust, Powered by Purpose.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Cryptocoin prelaunch sales inputed as followers. 70% to capital
            hedge fund 10% to réservés 20% to admin operational cost. The start
            of the hedge fund will add value to USFRANC crypto coin.
          </p>
          <div className="">
            <div className="flex md:justify-end pr-10">
              <Link href="/pre-order">
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 mt-4 md:mt-12">
                  Get USFC Now
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 md:text-right mt-4 pr-10">
              Private Sale Limited Supply — Secure Your Share Today
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={buyImage}
            alt=""
            width={500}
            height={500}
            className="mx-auto md:w-2/3 max-h-screen object-cover rounded-2xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default Buy;
