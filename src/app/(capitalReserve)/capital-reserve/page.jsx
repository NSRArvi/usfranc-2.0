import Container from "@/components/Container/Container";
import React from "react";
import cryptoBG from "../../assets/crypto-bg.jpg";
import capital from "../../assets/capital_hedge.png";
import Image from "next/image";

const CapitalHedge = () => {
  const lists = [
    {
      title: "Core Objectives",
      description:
        "Capital Preservation: Ensure that the reserve retains value regardless of market conditions, without speculative exposure.Sovereign Security: Base reserves entirely on government-backed obligations to minimize default risk.High Liquidity: Maintain immediate access to funds, allowing rapid deployment if necessary.Regulatory Compliance: Meet or exceed standards for reserve asset management established by leading regulatory authorities (FCA, AMF, ESMA, FinCEN).Community Oversight: Operate under validator community governance, ensuring decentralized transparency.",
    },
    {
      title: "Capital Hedge Fund Value",
      description:
        "Estimated value of capital hedge fund coin price of 0.5 will be 350 million after the first sale of all coins. This could increasse to 670 million if the coin value increases to 1 euro",
    },
    {
      title: "Investment Framework",
      description: "The reserve will be invested as follows:",
      points: [
        "AAA/AA-rated Sovereign Bonds (70%)",
        "Short-Term Sovereign Instruments (20%)",
        "Cash Equivalents (10%)",
      ],
    },
    {
      title: "Reserve Management",
      description:
        "The reserve will be centrally managed by an entity known as the USFRANC Reserve Management Entity.Responsibilities of the Reserve Manager include: Executing the investment allocation according to the policy, maintaining liquidity levels, publishing quarterly reserve reports, and submitting to annual independent audits.",
    },
    {
      title: "Governance and Oversight",
      description:
        "The Validator Community retains full authority over the appointment, oversight, and potential replacement of the Reserve Manager.Any deviation from the investment policy requires formal validator approval.",
    },
    {
      title: "Risk Management",
      description:
        "Default Risk: Mitigated by limiting investments to sovereign issuers with the highest available credit ratings (AAA/AA).Liquidity Risk: Addressed by maintaining a substantial proportion of assets in short-term treasury instruments and cash equivalents.Currency Risk: Mitigated by denominating assets in strong reserve currencies (EUR, USD, CHF).",
    },
    {
      title: "Reporting",
      description:
        "Quarterly Reports: Detailed asset breakdowns, maturities, and custodial confirmations.Annual Audits: Conducted by external, regulated audit firms; publicly available.On-chain Publication: All reports uploaded to the blockchain for immutable transparency.",
    },
  ];
  return (
    <Container>
      <div
        className="bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${cryptoBG.src})` }}>
        <div className="bg-white/2 backdrop-blur-xs px-4 md:px-10 py-8 md:py-24 rounded-2xl">
          <h2 className="text-4xl font-semibold text-white ">Overview</h2>
          <p className="text-sm leading-tight text-white mt-6">
            USFRANC’s Capital Hedge Policy is the foundation of the USFRANC
            cryptocurrency coin, created to demonstrate that its value is backed
            by real, reserved capital — not by speculation or intangible hope,
            as is often the case in the wider crypto environment. USFRANC Ltd
            uses its own proceeds from first sales to build a sovereign-backed
            reserve invested in low-risk government instruments and insured
            financial assets. This reserve is strictly owned and controlled by
            USFRANC Ltd and its associated companies. 100% of these funds are
            invested transparently and managed under an auditable,
            community-supervised framework, ensuring long-term stability, trust,
            and regulatory alignment. This model proves that USFRANC is not a
            speculative asset, but a self-backed cryptocurrency and blockchain
            provider, grounded in financial responsibility and tangible
            reserves.
          </p>
        </div>
      </div>
      <Image
        src={capital}
        alt="capital hedge"
        width={1000}
        height={1000}
        className="mx-auto w-full mt-20 rounded-2xl"
      />
      <div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {lists.map((item, i) => (
          <div
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
              {item.description}
            </p>

            {item.points && (
              <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CapitalHedge;
