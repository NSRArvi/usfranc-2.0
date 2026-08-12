"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  UserCircle,
  RefreshCcw,
  Lock,
  Share2,
  Cookie,
  Mail,
  ChevronRight,
  Fingerprint,
  History,
} from "lucide-react";
import Container from "@/components/Container/Container";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sectionRefs = useRef({});
  const sections = useMemo(
    () => [
      {
        id: "info",
        title: "1. Information We Collect",
        icon: <UserCircle size={18} />,
      },
      {
        id: "usage",
        title: "2. How We Use Information",
        icon: <RefreshCcw size={18} />,
      },
      {
        id: "retention",
        title: "3. Data Retention",
        icon: <History size={18} />,
      },
      {
        id: "security",
        title: "4. Data Protection",
        icon: <Lock size={18} />,
      },
      {
        id: "sharing",
        title: "5. Sharing Information",
        icon: <Share2 size={18} />,
      },
      {
        id: "rights",
        title: "6. Your Rights",
        icon: <ShieldCheck size={18} />,
      },
      {
        id: "cookies",
        title: "7. Cookies",
        icon: <Cookie size={18} />,
      },
    ],
    [],
  );
  const scrollTo = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "instant" });
      setActiveSection(id);
    }
  };
  const lists1 = [
    {
      title: "Account Information",
      text: "When you create an account to interact with USFRANC, we collect basic information, including your name, email address, and other necessary contact details.",
    },
    {
      title: "Transaction Data",
      text: "We collect details of your transactions on the USFRANC network, including sending, receiving, and storing USFC.",
    },
    {
      title: "Device and Usage Data",
      text: "We collect technical data, such as your device’s IP address, browser type, operating system, and information related to your activity on the platform.",
    },
    {
      title: "Wallet Information",
      text: "USFRANC is a non-custodial wallet system. Therefore, we do not store your private keys but may collect public wallet addresses for transaction purposes.",
    },
  ];
  const lists2 = [
    {
      title: "To provide our services",
      desc: "We use the information to process transactions, offer USFRANC services, and improve the platform’s functionality.",
    },
    {
      title: "Security and compliance",
      desc: "Protecting your privacy is our top priority. We use the information to monitor suspicious activity, ensure security, and comply with applicable regulations.",
    },
    {
      title: "Improvement of the platform",
      desc: "We analyze usage data to improve USFRANC features, performance, and services.",
    },
    {
      title: "Communication",
      desc: "We may use your contact information to send you service updates, security alerts, and promotional materials related to USFRANC (if you have opted in).",
    },
  ];
  const lists3 = [
    {
      t: "Right to Access",
      d: "You have the right to request a copy of your info.",
    },
    {
      t: "Right to Rectification",
      d: "You can request corrections of data.",
    },
    {
      t: "Right to Erasure",
      d: "You may request deletion subject to law.",
    },
    {
      t: "Right to Object",
      d: "You have the right to object to processing.",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sec) => {
        const el = sectionRefs.current[sec.id];
        if (el) {
          if (
            scrollPosition >= el.offsetTop &&
            scrollPosition < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Container>
      <div className="relative z-0 min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-primary selection:text-white">
        <header className="bg-white border-b border-slate-200 pt-16 pb-12 ">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                <span>Effective Date: April 2025</span>
                <span className="hidden md:block">|</span>
                <span>Last Revised: April 2025</span>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto  py-16 grid lg:grid-cols-12 gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-2 z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
                Contents
              </p>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeSection === sec.id
                      ? "bg-primary text-white shadow-lg shadow-[#7b5e00]/20"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}>
                  {sec.icon}
                  {sec.title.split(". ")[1]}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-12 text-slate-600">
            <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black mb-6 text-slate-900">
                Introduction
              </h2>
              <p className="leading-relaxed">
                At USFRANC (USFC), we are committed to safeguarding your
                privacy. This Privacy Policy outlines how we collect, use, and
                protect your personal information when you use our website,
                platforms, and services related to USFRANC. USFRANC is a
                decentralized cryptocurrency (coin) built on a hybrid
                Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain model.
                We aim to provide our users with a transparent, secure, and
                private experience. By using USFRANC and its related services,
                you agree to the collection and processing of your information
                in accordance with this Privacy Policy.
              </p>
            </section>

            <section
              id="info"
              ref={(el) => (sectionRefs.current["info"] = el)}
              className="scroll-mt-32 space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                  1. Information We Collect
                </h2>
                <div className="h-px grow bg-slate-200" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {lists1.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="usage"
              ref={(el) => (sectionRefs.current["usage"] = el)}
              className="scroll-mt-32">
              <h2 className="text-2xl font-black mb-8 text-slate-900">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4">
                {lists2.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section
                id="retention"
                ref={(el) => (sectionRefs.current["retention"] = el)}
                className="scroll-mt-32 p-8 bg-slate-900 text-white rounded-[2rem] relative overflow-hidden">
                <Fingerprint className="absolute -bottom-4 -right-4 size-32 opacity-10" />
                <h2 className="text-xl font-bold mb-4">3. Data Retention</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We retain your personal data for as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy... Due to
                  the decentralized nature of USFRANC, your wallet information
                  is only stored on your device.
                </p>
              </section>

              <section
                id="security"
                ref={(el) => (sectionRefs.current["security"] = el)}
                className="scroll-mt-32 p-8 border-2 border-[#7b5e00] rounded-[2rem] bg-white">
                <h2 className="text-xl font-bold mb-4 text-primary">
                  4. Data Protection & Security
                </h2>
                <div className="space-y-3 text-xs font-bold text-slate-600">
                  <div className="flex justify-between border-b pb-2">
                    <span>Encryption</span>
                    <span className="text-primary">SSL/TLS protocols</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Auth</span>
                    <span className="text-primary">2FA Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wallet</span>
                    <span className="text-primary">Non-Custodial</span>
                  </div>
                </div>
                <p className="mt-4 text-[10px] text-slate-400 italic">
                  We maintain full control over your funds.
                </p>
              </section>
            </div>

            <section
              id="sharing"
              ref={(el) => (sectionRefs.current["sharing"] = el)}
              className="scroll-mt-32">
              <h2 className="text-2xl font-black mb-6 text-slate-900">
                5. Sharing Your Information
              </h2>
              <div className="grid gap-4">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-6 items-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                    <Share2 />
                  </div>
                  <p className="text-sm text-slate-500">
                    **Service Providers:** We may share information with
                    third-party service providers that help us operate USFRANC’s
                    services.
                  </p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-6 items-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                    <ShieldCheck />
                  </div>
                  <p className="text-sm text-slate-500">
                    **Legal Compliance:** We may disclose your information if
                    required by law.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="rights"
              ref={(el) => (sectionRefs.current["rights"] = el)}
              className="scroll-mt-32 bg-primary/5 p-8 rounded-[2rem] border border-[#7b5e00]/10">
              <h2 className="text-2xl font-black mb-6 text-slate-900">
                6. Your Rights
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {lists3.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <ChevronRight className="text-primary shrink-0" size={18} />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {item.t}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="cookies"
              ref={(el) => (sectionRefs.current["cookies"] = el)}
              className="scroll-mt-32 p-8 bg-white border border-slate-200 rounded-[2rem]">
              <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                <Cookie size={20} className="text-primary" /> 7. Cookies
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                USFRANC may use cookies to enhance your user experience and
                improve functionality.
              </p>
            </section>

            <div className="space-y-8">
              <div className="p-8 bg-white border border-slate-200 rounded-[2rem]">
                <h3 className="font-bold text-slate-900 mb-2">
                  8. Third-Party Websites
                </h3>
                <p className="text-sm text-slate-500">
                  Our platform may contain links to external websites. We are
                  not responsible for their privacy practices.
                </p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem]">
                <h3 className="font-bold text-slate-900 mb-2">
                  9. Children’s Privacy
                </h3>
                <p className="text-sm text-slate-500">
                  USFRANC does not knowingly collect information from children
                  under 18.
                </p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem]">
                <h3 className="font-bold text-slate-900 mb-2">
                  10. Changes to Policy
                </h3>
                <p className="text-sm text-slate-500">
                  Any changes will be posted on this page with an updated
                  “Effective Date.”
                </p>
              </div>
            </div>

            <section
              id="contact"
              className="bg-primary p-10 rounded-[2.5rem] text-white text-center">
              <Mail className="mx-auto mb-4 opacity-50" size={32} />
              <h2 className="text-3xl font-black mb-4">11. Contact Us</h2>
              <p className="opacity-80 mb-6 text-sm">
                Questions? Contact us at:
              </p>
              <a
                href="mailto:usfranc@bobosohomail.com"
                className="text-xl font-bold bg-white text-primary px-8 py-3 rounded-full hover:bg-slate-100 transition-colors inline-block">
                usfranc@bobosohomail.com
              </a>
            </section>
          </main>
        </div>

        <footer className="py-12 border-t border-slate-100 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
          USFRANC Ecosystem © 2026
        </footer>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
