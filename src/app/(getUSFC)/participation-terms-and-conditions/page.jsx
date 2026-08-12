import Container from "@/components/Container/Container";
import React from "react";

const ParticipationTermsAndConditions = () => {
  const lists = [
    {
      title: "Participation and Delivery",
      points: [
        "Participants will receive 100% of their purchased USFC coins directly to their wallet upon completion of the transaction.",
      ],
    },
    {
      title: "Deferred Utility Distribution",
      points: [
        "10% issued after 12 months",
        "10% issued after 24 months",
        "This distribution is conditional and is not guaranteed. It is provided as a utility allocation, not as a return or profit.",
      ],
    },
    {
      title: "Resale Restrictions",
      points: [
        "USFranc is a utility cryptocurrency and not a security or investment product. Participation in the private sale does not constitute an offer of financial returns or interest. All distributions are subject to ecosystem rules and compliance frameworks.",
      ],
    },
    {
      title: "Regulatory Status",
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
        <section className="relative overflow-hidden bg-slate-50/50 border-b border-slate-100 py-10 px-4 md:px-6 rounded-2xl">
          <div className=" text-center justify-items-center">
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tight leading-tight text-slate-900">
                <span className="text-primary">USFRANC </span>
                Private Sale Terms and Conditions
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                These Terms and Conditions apply to all participants in the
                USFranc Private Sale and establish the framework for
                distribution, use, and resale of USFranc (USFC) coins.
              </p>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-6 mt-20">
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
          <h3 className="text-3xl text-primary font-semibold mb-3"> Contact</h3>
          <p>Issuer: USFranc Ltd</p>
          <p>Email: usfranc@bobosohomail.com</p>
          <p>Jurisdiction: United Kingdom</p>
          <p className="text-gray-500 mt-6">Date: May 15, 2025</p>
        </div>
      </div>
    </Container>
  );
};

export default ParticipationTermsAndConditions;
