"use client";

const LEDGER_ITEMS = [
  "67% OF EVERY SALE RESERVED IN LOW-RISK CAPITAL",
  "HYBRID POW + POS CONSENSUS",
  "WALLET-BASED ESCROW PROTECTION",
  "7-DAY BUYER RETURN WINDOW",
  "COMPLIANCE-FIRST GOVERNANCE",
];

const TrustTicker = () => {
  const items = [...LEDGER_ITEMS, ...LEDGER_ITEMS];

  return (
    <div className="ticker relative mt-8 w-full overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#171310] shadow-[0_18px_50px_-30px_rgba(23,19,16,0.45)] sm:rounded-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#171310] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#171310] to-transparent sm:w-20" />

      <div className="ticker-track flex w-max items-center gap-8 py-3.5 sm:gap-12 sm:py-3">
        {items.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 sm:gap-12">
            <span className="font-mono text-[9px] font-medium tracking-[0.16em] text-[#F2CC22] sm:text-[10px]">
              {item}
            </span>
            <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-[#F2CC22]/50" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 34s linear infinite;
        }
        .ticker:hover .ticker-track {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustTicker;
