import Container from "@/components/Container/Container";
import React from "react";

const ParticipationTerms = () => {
  const lists = [
    {
      title: "Immediate Delivery",
      points: [
        "100% of purchased USFC coins are sent to the investor wallet at the time of purchase.",
      ],
    },
    {
      title: "Deferred Utility Distribution",
      points: [
        "10% bonus after 12 months (Year 1)",
        "10% bonus after 24 months (Year 2)",
        "Total bonus: 20%",
      ],
    },
    {
      title: "Holding & Resale Rules",
      points: [
        "No resale in Year 1.",
        "At the end of Year 1, investors may sell up to 50% of their total holding (including bonus coins received by then).",
        "At the end of Year 2, all remaining coins (initial + bonuses) are fully unlocked for use or sale.",
      ],
    },
    {
      title: "Legal Framing (FCA-safe)",
      points: [
        "This is a two-year utility participation program.",
        "Not a guarantee of return or investment yield.",
        "The Deferred Utility Distribution is based on ecosystem support, not a financial incentive.",
      ],
    },
  ];
  return (
    <Container>
      <div className="bg-white text-slate-900 font-sans selection:bg-primary selection:text-white">
        <section className="relative overflow-hidden bg-slate-50/50 border-b border-slate-100 py-10 px-4 md:px-6">
          <div className=" text-center justify-items-center">
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tight leading-tight text-slate-900">
                <span className="text-primary">USFRANC </span>
                Private Sale Participation Terms
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                This document outlines the structure and conditions for
                participation in the USFranc Private Sale. The program is
                designed to provide early access to the USFranc cryptocurrency
                while supporting responsible usage and ecosystem alignment.
              </p>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          {lists.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-slate-800">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-sm text-slate-600 mb-3">
                  {item.description}
                </p>
              )}

              {item.points && (
                <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {item.sections && (
                <div className="space-y-3">
                  {item.sections.map((sec, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-semibold text-primary">
                        {sec.subtitle}
                      </h4>
                      <p className="text-sm text-slate-600">{sec.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
        <div className="p-8 mt-16 rounded-2xl shadow-sm border border-slate-100 bg-white hover:border-primary transition-colors duration-300">
          <h3 className="text-3xl text-primary font-semibold mb-3">
            {" "}
            Issuer Information
          </h3>
          <p>Issuer: USFranc Ltd</p>
          <p>Email: usfranc@bobosohomail.com</p>
          <p>Jurisdiction: United Kingdom</p>
          <p className="text-gray-500 mt-6">Date: May 15, 2025</p>
        </div>
      </div>
    </Container>
  );
};

export default ParticipationTerms;
