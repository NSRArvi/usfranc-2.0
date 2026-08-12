"use client";
import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  FileSearch,
  UserCheck,
  Scale,
  AlertCircle,
  ClipboardCheck,
  History,
  Flag,
} from "lucide-react";
import Container from "@/components/Container/Container";

const AMLCompliancePage = () => {
  const primaryColor = "#7b5e00";

  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <div className="bg-white pt-0 text-slate-900 font-sans selection:bg-primary selection:text-white">
        <header className="rounded-lg bg-slate-50 border-b border-slate-200 pt-20 pb-16 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Scale size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              AML Screening Policy &{" "}
              <span style={{ color: primaryColor }}>Compliance Workflow</span>
            </h1>
            <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-sm">
              USFRANC (USFC) Regulatory Framework
            </p>
          </motion.div>
        </header>

        <section className=" py-20">
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">
                01. Public Disclosure
              </h2>
              <div className="h-px grow bg-slate-200" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-xl">AML Screening Clause</h3>
                  <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500">
                    EN
                  </span>
                </div>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p className="font-bold text-slate-900">
                    Anti-Money Laundering (AML) and Compliance Screening
                  </p>
                  <p>
                    In compliance with international AML/CTF standards,
                    including recommendations from the Financial Action Task
                    Force (FATF), any purchase of USFRANC cryptocurrency
                    exceeding **€50,000** may be subject to enhanced due
                    diligence (EDD).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-primary">
                    <li>Verification of identity and beneficial ownership</li>
                    <li>
                      Screening against global watch lists, sanctions lists, and
                      PEP databases
                    </li>
                    <li>Verification of the source of funds</li>
                    <li>Ongoing transaction monitoring</li>
                  </ul>
                  <p className="pt-4 border-t border-slate-100 italic">
                    By proceeding with a high-value purchase, the buyer consents
                    to these compliance checks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-xl">Clause de Contrôle LBA</h3>
                  <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500">
                    FR
                  </span>
                </div>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p className="font-bold text-slate-900">
                    Lutte contre le blanchiment d’argent (LBA) et Contrôle de
                    Conformité
                  </p>
                  <p>
                    Conformément aux normes internationales LBA/FT, tout achat
                    de la cryptomonnaie USFRANC supérieur à **50 000 €** peut
                    faire l’objet d’une procédure de diligence renforcée (EDD).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-primary">
                    <li>
                      La vérification de l’identité et du bénéficiaire effectif
                    </li>
                    <li>
                      Le contrôle sur les listes de surveillance mondiales et
                      listes de sanctions
                    </li>
                    <li>La vérification de la provenance des fonds</li>
                    <li>Une surveillance continue des transactions</li>
                  </ul>
                  <p className="pt-4 border-t border-slate-100 italic">
                    En procédant à un achat de grande valeur, l’acheteur accepte
                    ces contrôles de conformité.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#7b5e00] to-transparent opacity-50" />

            <div className="max-w-4xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
                  Internal Compliance Workflow
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold">
                  <AlertCircle size={14} /> TRIGGER: PURCHASES &gt; €50,000
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                <motion.div
                  variants={itemVariants}
                  className="relative md:pl-24 group">
                  <div className="absolute left-0 top-0 h-16 w-16 bg-primary rounded-2xl flex items-center justify-center z-10 shadow-[0_0_20px_rgba(123,94,0,0.4)]">
                    <UserCheck size={28} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 group-hover:border-[#7b5e00]/50 transition-colors">
                    <div>
                      <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                        Step 01: KYC/EDD
                      </h4>
                      <ul className="text-sm space-y-2 opacity-80 list-disc pl-4">
                        <li>ID + Proof of Residence</li>
                        <li>Beneficial ownership disclosure</li>
                        <li>Proof of Funds (bank letter, etc.)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-slate-400 font-bold mb-4 uppercase text-xs tracking-widest italic">
                        Diligence renforcée
                      </h4>
                      <ul className="text-sm space-y-2 opacity-50 list-disc pl-4">
                        <li>Pièce d’identité + Justificatif domicile</li>
                        <li>Achat entité : bénéficiaire effectif</li>
                        <li>Justificatif de fonds</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="relative md:pl-24 group">
                  <div className="absolute left-0 top-0 h-16 w-16 bg-slate-800 rounded-2xl flex items-center justify-center z-10 border border-white/20">
                    <FileSearch size={28} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 group-hover:border-[#7b5e00]/50 transition-colors">
                    <div>
                      <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                        Step 02: Automated Tool
                      </h4>
                      <ul className="text-sm space-y-2 opacity-80 list-disc pl-4">
                        <li>FATF-listed countries screening</li>
                        <li>OFAC, EU, UK, UN sanctions</li>
                        <li>PEP Status & Interpol notices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-slate-400 font-bold mb-4 uppercase text-xs tracking-widest italic">
                        Contrôle automatisé
                      </h4>
                      <ul className="text-sm space-y-2 opacity-50 list-disc pl-4">
                        <li>Pays à haut risque (GAFI)</li>
                        <li>Sanctions internationales</li>
                        <li>Statut PEP & Avis Interpol</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="relative md:pl-24 group">
                  <div className="absolute left-0 top-0 h-16 w-16 bg-slate-800 rounded-2xl flex items-center justify-center z-10 border border-white/20">
                    <ClipboardCheck size={28} />
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h4 className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">
                      Step 03: Decision / Décision
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg text-sm font-bold">
                        PASS: Proceed with transaction
                      </div>
                      <div className="bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-bold">
                        FLAGGED: Manual Escalation
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="relative md:pl-24 group">
                  <div className="absolute left-0 top-0 h-16 w-16 bg-slate-800 rounded-2xl flex items-center justify-center z-10 border border-white/20">
                    <Flag size={28} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 group-hover:border-[#7b5e00]/50 transition-colors">
                    <div className="space-y-4">
                      <h4 className="text-primary font-bold uppercase text-xs tracking-widest">
                        Step 04: Record Keeping
                      </h4>
                      <p className="text-sm opacity-80 flex items-center gap-2">
                        <History size={14} /> Secure logs & approvals storage.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-primary font-bold uppercase text-xs tracking-widest">
                        Step 05: Suspicious Activity
                      </h4>
                      <p className="text-sm opacity-80">
                        File SAR with FIU if needed (TRACFIN, FinCEN).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="mt-20 text-center max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4 text-left">
              <ShieldCheck className="text-slate-400 shrink-0" size={24} />
              <p className="text-xs text-slate-500 leading-relaxed italic">
                All information collected is processed confidentially and only
                for compliance purposes. Toutes les informations collectées sont
                traitées de manière confidentielle et exclusivement à des fins
                de conformité.
              </p>
            </div>
          </section>
        </section>
      </div>
    </Container>
  );
};

export default AMLCompliancePage;
