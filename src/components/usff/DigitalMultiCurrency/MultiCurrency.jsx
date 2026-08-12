import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CURRENCIES } from "@/data/CURRENCIES";
import { FEATURES } from "@/data/FEATURES";

export default function MultiCurrency() {
  return (
    <section className="w-full bg-white py-10">
      <div className="">
        {/* ── Currencies block ── */}
        <div className="text-center mb-12">
          <h2 className="text-[30px] lg:text-[34px] font-extrabold text-black tracking-tight">
            Supported Currencies.
          </h2>
          <p className="mt-3 text-[15px] text-gray-500">
            USFF Support a growing list of global digital currencies. <br /> All
            exchanges are 1:1 daily
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 lg:gap-3">
          {CURRENCIES.map((currency) => (
            <div
              key={currency.code}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-1 ring-black/5 shadow-sm shrink-0">
                <Image
                  src={currency.flag}
                  alt={currency.code + "Flag"}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="text-[15px] font-bold text-black">
                {currency.label}
              </p>
              <p className="text-[13px] leading-snug text-gray-500">
                {currency.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={2} />
          <span className="text-[14px] text-gray-500">
            More currencies coming soon...
          </span>
        </div>
      </div>
    </section>
  );
}
