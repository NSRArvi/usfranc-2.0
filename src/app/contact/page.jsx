import React from "react";
import {
  Mail,
  Globe,
  Code2,
  MapPin,
  ShieldCheck,
  Building2,
} from "lucide-react";
import Image from "next/image";
import contactImage from "../assets/contact.png";
import GetInTouchForm from "@/components/GetInTouchForm";

/**
 * PRODUCTION DATA CONFIGURATION
 * Maintainable source of truth for your contact details.
 */
const CONTACT_DATA = {
  hero: {
    heading: "SECURE COMMUNICATION",
    subheading: "Connect with our crypto team",
    description:
      "Reach out for partnerships, compliance inquiries, or network management.",
  },
  locations: [
    {
      id: "uk",
      entity: "USFRANC LTD (Reg N° 10325829)",
      address: [
        "4th Floor, Silverstream House,",
        "45 Fitzroy Street, London,",
        "England, W1T 6EB, UK",
      ],
    },
    {
      id: "fr-office",
      entity: "French Hybrid Office",
      address: ["8 Rue Dublin, 34200 Sète, France"],
    },
    {
      id: "fr-compliance",
      entity: "Compliance & Network Management",
      subEntity: "SAS Affin (Reg N° 803965227)",
      address: ["8 Rue Dublin, 34200 Sète, France"],
      role: "USFRANC Reserve Management Entity Manager",
    },
  ],
  channels: [
    { label: "SECURE EMAIL", value: "usfranc@bobosohomail.com", icon: Mail },
    { label: "BLOCKCHAIN WEB", value: "www.usfranc.com", icon: Globe },
    { label: "TECH SUPPORT", value: "dev@usfranc.com", icon: Code2 },
  ],
};

const Contact = () => {
  const { hero, locations, channels } = CONTACT_DATA;

  return (
    <section className="bg-white text-slate-900 pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP HERO AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                <ShieldCheck size={18} /> {hero.heading}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                {hero.subheading}
              </h1>
            </div>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              {hero.description}
            </p>

            {/* Quick Channels List */}
            <div className="pt-6 space-y-4">
              {channels.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 group">
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                    {item.label}
                  </span>
                  <a
                    href={
                      item.label.includes("EMAIL")
                        ? `mailto:${item.value}`
                        : `https://${item.value}`
                    }
                    className="text-lg font-bold text-slate-800 hover:text-primary transition-colors flex items-center gap-2">
                    <item.icon size={18} className="text-primary" />
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
            <Image
              src={contactImage}
              alt="Crypto Team Communication"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              OUR LOCATIONS
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="p-8 border border-slate-100 bg-slate-50/50 rounded-2xl space-y-4 hover:border-blue-200 hover:bg-white hover:shadow-xs hover:shadow-blue-50/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building2 size={20} />
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 leading-tight">
                    {loc.entity}
                  </h3>
                  {loc.subEntity && (
                    <p className="text-sm font-bold text-primary">
                      {loc.subEntity}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  {loc.address.map((line, i) => (
                    <p
                      key={i}
                      className="text-slate-500 text-sm font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {loc.role && (
                  <div className="pt-4 mt-4 border-t border-slate-200/50">
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider">
                      {loc.role}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetInTouchForm />
    </section>
  );
};

export default Contact;
