import Container from "@/components/Container/Container";
import React from "react";

const capitalReserveTransparency = () => {
  return (
    <Container>
      <div className="bg-slate-100/30 rounded-2xl py-20 justify-items-center">
        <h1 className="text-4xl md:text-7xl font-black leading-tight text-center w-full md:w-2/3">
          <span className="text-primary">USFRANC</span> Capital Reserve
          Transparency
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-20 gap-10 fade-in-65 ease-in-out duration-500">
        <div className="flex-1 border border-primary shadow-sm p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-5">
            How We Hedge Against Market Volatility
          </h2>
          <p>
            At USFRANC, our hedge reserve policy is built around security,
            sustainability, and responsible transparency.
          </p>
          <p className="leading-relaxed">
            We allocate a minimum of 67% of net capital from first coin sales
            into low-risk capital return strategies. These reserves are intended
            solely to support operational continuity and project infrastructure
            — not for speculation or profit generation.
          </p>
        </div>
        <div className="flex-1 border border-primary shadow-sm p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-5">
            Hedge Capital Policy Overview
          </h2>
          <p>USFRANC’s internal reserve strategy may include:</p>
          <ul className="list-disc space-y-2">
            <li>
              Government-related financial instruments (such as sovereign bonds
              and treasury holdings)
            </li>
            <li>Property-based assets</li>
            <li>
              Diversified multi-currency accounts held in regulated
              jurisdictions
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-20 rounded-3xl justify-items-center">
        <h2 className="text-3xl text-primary font-bold mb-4">
          Important Notice
        </h2>
        <p className="text-sm w-full md:w-1/2">
          These internal reserves are not collateral-backed and do not grant
          coinholders any ownership or financial rights. Their sole function is
          to ensure the long-term stability of the USFRANC ecosystem.
        </p>
      </div>
    </Container>
  );
};

export default capitalReserveTransparency;
