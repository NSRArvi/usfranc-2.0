import Link from "next/link";
import { ShieldCheck, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { SECURITY_PILLARS } from "@/data/SECURITY_PILLARS";
import { TRUST_BADGES } from "@/data/TRUST_BADGES";
import { Button } from "../ui/button";

export default function ProtectedByBitss() {
  return (
    <section className="w-full bg-[#EAF2FB] py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-stretch">
          {/* ── LEFT: Brand + CTA ── */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[13px] font-semibold text-gray-500 mb-4">
                Protected by
              </p>

              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-8 h-8 text-black" strokeWidth={2} />
                <span className="text-[26px] font-extrabold text-black">
                  Bitss
                </span>
              </div>

              <h2 className="text-[22px] font-extrabold leading-tight text-primary mb-4">
                Cyber Security
                <br />
                Protection &amp; Audits
              </h2>

              <p className="text-[14px] leading-relaxed text-gray-600 max-w-70">
                Every transaction, wallet, merchant and node is protected by
                Bitss integrated security solutions.
              </p>
            </div>

            {/* <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 rounded-md text-[14px] font-semibold text-white bg-primary hover:brightness-110 transition-all duration-150 w-fit"
            >
              Learn More About Bitss
             
            </Link> */}

            <Button
              className="group inline-flex items-center justify-center gap-2 min-h-12 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              asChild
            >
              <Link href="#">
                {" "}
                Create Free Wallet <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SECURITY_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl bg-[#0B1220] border border-white/5 p-6 flex flex-col gap-4 h-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/15 shrink-0">
                        <Icon
                          className="w-5 h-5 text-primary"
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="leading-tight">
                        <p className="text-white font-bold text-[15px]">
                          {pillar.title}
                        </p>
                        <p className="text-white font-bold text-[15px]">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[13.5px] text-gray-300"
                        >
                          <Check
                            className="w-4 h-4 text-primary mt-0.5 shrink-0"
                            strokeWidth={2.5}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-black/5">
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.title} className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <Icon
                        className="w-4.5 h-4.5 text-primary"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="leading-tight">
                      <p className="text-[13px] font-semibold text-black">
                        {badge.title}
                      </p>
                      <p className="text-[12px] text-gray-500">{badge.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
