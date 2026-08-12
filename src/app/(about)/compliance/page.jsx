"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle } from "lucide-react";
import Container from "@/components/Container/Container";

const Compliance = () => {
  const [activeTab, setActiveTab] = useState("global");

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };
  const franceLists = [
    {
      title: "Classification Juridique de USFRANC",
      description:
        "USFRANC n’est ni un titre financier, ni une monnaie électronique...",
      points: [
        "Aucun droit à des profits n’est accordé aux détenteurs.",
        "Aucun dividende, intérêt ou rendement n’est distribué.",
        "Aucun droit sur les actifs ou les réserves couvertes n’est accordé.",
        "USFRANC n’est pas adossé à une monnaie fiduciaire ou une marchandise et ne constitue pas un stablecoin.",
      ],
    },
    {
      title: "Conformité à l’Union Européenne (MiCA, RGPD, LCB/FT)",
      sections: [
        {
          subtitle: "Règlement MiCA",
          text: "USFRANC est classé comme une cryptomonnaie utilitaire. Un livre blanc détaillé est publié conformément aux exigences de MiCA.",
        },
        {
          subtitle: "Conformité RGPD",
          text: "Notre site respecte le RGPD avec des outils de consentement aux cookies et des politiques transparentes. Les données utilisateurs ne sont jamais vendues.",
        },
        {
          subtitle: "Obligations LCB/FT",
          text: "Nous n'offrons pas actuellement de services de garde ou d’échange. Si de tels services sont ajoutés, nous nous enregistrerons comme PSAN/CASP auprès d’une autorité compétente.",
        },
      ],
    },
    {
      title: "France (AMF, ACPR, Loi PACTE)",
      description:
        "USFRANC ne fournit pas de services réglementés nécessitant un enregistrement PSAN...",
    },
    {
      title: "Royaume-Uni (Réglementation FCA)",
      description:
        "USFRANC n'est pas proposé aux résidents britanniques. Aucune activité promotionnelle ou service de garde n’est offert. L’accès au site est restreint et des avertissements sont en place.",
    },
    {
      title: "États-Unis (SEC, FinCEN, CFTC, IRS)",
      sections: [
        {
          subtitle: "SEC",
          text: "USFRANC n’est pas un titre financier selon le test de Howey.",
        },
        {
          subtitle: "FinCEN",
          text: "USFRANC n’agit pas comme un transmetteur de fonds. Si le service est étendu aux paiements américains, une inscription MSB sera effectuée avec KYC/AML.",
        },
        {
          subtitle: "CFTC & IRS",
          text: "USFRANC n’est pas utilisé dans des produits dérivés. L’information fiscale est mise à disposition des utilisateurs.",
        },
      ],
    },
    {
      title: " Politique de Réserve de Capital",
      description:
        "Une partie des recettes issues des ventes initiales est allouée à des réserves internes à faible risque. Ces réserves ne constituent pas des produits d’investissement et ne donnent lieu à aucun droit ou rendement.",
    },
    {
      title: "Juridictions Restreintes",
      description: "USFRANC n'est pas proposé dans les régions suivantes :",
      points: [
        "États-Unis",
        "Royaume-Uni",
        "État de New York",
        "Pays sous sanctions",
      ],
    },
    {
      title: "Transparence et Déclarations",
      points: [
        "Tous les documents sont disponibles en français et en anglais.",
        "L’architecture de validation (PoW + PoS) est publiée et vérifiable.",
        "Contact : compliance@usfranc.com",
      ],
    },
  ];
  const globalLists = [
    {
      title: "European Union (MiCA)",
      points: [
        "USFRANC is a utility coin, not an e-money or asset-backed token.",
        " USFRANC complies with MiCA whitepaper, consumer disclosure, and technical audit guidelines.",
      ],
    },
    {
      title: "France (AMF / ACPR)",
      points: [
        "USFRANC SAS is not currently registered as a PSAN.",
        "Full French documentation and capital reserve policy are available.",
      ],
    },
    {
      title: "United Kingdom (FCA)",
      points: [
        "USFRANC Ltd complies with promotional restrictions for cryptoassets.",
        "Services do not fall under FCA regulation as no custody or investments are offered.",
      ],
    },
    {
      title: "United States (SEC / FinCEN)",
      points: [
        "USFRANC LLC operates in alignment with FinCEN guidance.",
        "Not classified as a security under the Howey Test.",
        "MSB registration will be initiated if direct payment services are offered.",
      ],
    },
    {
      title: "Turkey (MASAK)",
      points: [
        "Crypto use in payments is restricted but holding and trading USFRANC is lawful.",
        "USFRANC is not promoted for merchant use in Turkey unless explicitly permitted.",
      ],
    },
    {
      title: "Asia-Pacific",
      points: [
        "USFRANC may be held, traded, or used for payments in regions such as Japan, Singapore, Vietnam, and South Korea, according to local frameworks.",
      ],
    },
    {
      title: "Legal Use, Risk Disclosure, and Limitations",
      points: [
        "USFRANC is a cryptocurrency coin, not a regulated financial",
        "product. Its use must always comply with the user’s national and regional laws.",
        " No guarantees of value, price appreciation, or financial protection are offered.",
        "Use in blacklisted or restricted jurisdictions is forbidden.",
      ],
    },
  ];
  return (
    <Container>
      <div className="min-h-screen bg-[#fafaf9] text-slate-900">
        <div className="bg-white border-b pt-20 pb-12 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-end">
            <div>
              {activeTab === "global" ? (
                <h1 className="text-5xl font-black leading-tight">
                  <span className="text-primary">USFRANC</span> Global
                  Compliance Statement
                </h1>
              ) : (
                <h1 className="text-5xl font-black leading-tight">
                  Déclaration de Conformité -{" "}
                  <span className="text-primary">USFRANC</span>
                </h1>
              )}
              <p className="text-slate-500 mt-4">
                Transparency and legal clarity across global jurisdictions.
                Updated April 2025.
              </p>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("global")}
                className={`px-5 py-2 rounded-lg font-bold ${activeTab === "global" ? "bg-white text-primary" : "text-slate-500"}`}>
                Global (EN)
              </button>
              <button
                onClick={() => setActiveTab("franc")}
                className={`px-5 py-2 rounded-lg font-bold ${activeTab === "franc" ? "bg-white text-primary" : "text-slate-500"}`}>
                Franc (FR)
              </button>
            </div>
          </div>
        </div>

        <main className="max-w-6xl  mx-auto px-6 py-16">
          <AnimatePresence mode="wait">
            {activeTab === "global" && (
              <motion.div key="global" {...fadeIn} className="space-y-16">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 p-8 bg-white rounded-3xl border">
                    <h3 className="text-xs font-bold text-primary mb-4">
                      Introduction
                    </h3>
                    <p className="text-lg">
                      USFRANC (USFC) is a decentralized cryptocurrency coin
                      designed for worldwide use as a payment instrument. Built
                      on a hybrid Proof of Work (PoW) and Proof of Stake (PoS)
                      blockchain, USFRANC facilitates secure and transparent
                      transactions across a wide range of jurisdictions and
                      markets.
                    </p>
                  </div>

                  <div className="p-8 bg-primary text-white rounded-3xl">
                    <AlertCircle />
                    <p className="mt-4 text-sm">
                      USFRANC is not a stablecoin, not a security, and does not
                      offer any investment return or income rights. Its primary
                      use is as a utility cryptocurrency for payments.
                    </p>
                  </div>
                </div>

                <section className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl border">
                    <h3 className="font-bold mb-4">
                      Global Use and Local Responsibility
                    </h3>
                    <p className="text-sm mb-4">
                      USFRANC is available to users in all countries that permit
                      the legal use of cryptocurrencies, including but not
                      limited to:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • United States (in accordance with FinCEN and SEC
                        guidelines)
                      </li>
                      <li>• United Kingdom</li>
                      <li>• European Union member states</li>
                      <li>• France (under AMF oversight for utility crypto)</li>
                      <li>
                        • Turkey (for permitted crypto transactions under MASAK
                        guidance)
                      </li>
                      <li>
                        • Asia-Pacific jurisdictions where crypto is authorized,
                        including Japan, South Korea, Singapore, Vietnam, and
                        parts of India and Indonesia
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-white rounded-3xl border">
                    <h3 className="font-bold mb-4">
                      Users are solely responsible for:
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • Complying with local crypto regulations regarding
                        ownership, transfer, taxation, and commercial use.
                      </li>
                      <li>
                        • Using USFRANC only in countries that legally allow
                        digital assets and payments.
                      </li>
                    </ul>

                    <p className="mt-6 text-sm">
                      <strong>Marketing Restrictions:</strong> USFRANC does not
                      actively market or promote in jurisdictions where
                      cryptocurrency use is restricted or prohibited.
                    </p>
                  </div>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-3xl border">
                    <h3 className="font-bold mb-4">Approved Use Cases</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Peer-to-peer payments between individuals</li>
                      <li>
                        • Merchant transactions (in-store and online) where
                        permitted by law
                      </li>
                      <li>
                        • Smart contract escrow-style payments with 7-day
                        post-delivery holding periods
                      </li>
                      <li>• Cross-border payments with local compliance</li>
                    </ul>
                  </div>

                  <div className="p-8 bg-white rounded-3xl border">
                    <h3 className="font-bold mb-4">USFRANC does not offer</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Staking or yield</li>
                      <li>• Profit sharing or dividends</li>
                      <li>• Custodial wallet services</li>
                    </ul>
                  </div>
                </section>

                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {globalLists.map((item, i) => (
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
                              <p className="text-sm text-slate-600">
                                {sec.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </section>

                <div className="p-8 bg-white rounded-3xl border">
                  <h3 className="font-bold mb-4">Transparency & Contact</h3>
                  <h5 className="font-medium mb-2">
                    Email: usfranc@bobosohomail.com
                  </h5>
                  <p className="text-sm">
                    A detailed whitepaper <br />
                    A capital reserve policy <br />
                    Compliance briefs for major regulatory regions
                  </p>
                </div>

                <section className="bg-slate-900 text-white p-10 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">
                    Capital Reserve Ownership and Disclaimer
                  </h3>
                  <p className="text-slate-300 mb-4">
                    All listed investments are fully held and controlled by
                    USFRANC corporate entities (including USFRANC SAS, USFRANC
                    Ltd, USFRANC LLC, and regional subsidiaries). These reserves
                    are allocated for internal project stability and operational
                    continuity.
                  </p>
                  <p className="text-slate-400 text-sm">
                    USFRANC cryptocurrency holders have no ownership, legal
                    right, security interest, or financial claim to these assets
                    under any jurisdiction.
                  </p>
                </section>
              </motion.div>
            )}

            {activeTab === "franc" && (
              <motion.div key="fr" {...fadeIn} className="space-y-12">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {franceLists.map((item, i) => (
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
                              <p className="text-sm text-slate-600">
                                {sec.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </Container>
  );
};

export default Compliance;
