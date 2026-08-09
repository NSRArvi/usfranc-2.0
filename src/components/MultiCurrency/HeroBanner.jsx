import {
  FileText,
  Globe,
  House,
  LockKeyhole,
  Shield,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tags = [
  {
    icon: Shield,
    title: "Capital Backed",
    text: "Protection",
  },
  {
    icon: LockKeyhole,
    title: "Secure Escrow",
    text: "Payments",
  },
  {
    icon: Globe,
    title: "Multi Currency",
    text: "Ecosystem",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    text: "First",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full flex min-h-130 overflow-hidden bg-white">
      {/* ── LEFT: WHITE PANEL ── */}
      <div
        className="relative z-10 bg-white flex flex-col justify-center w-[55%] shrink-0 pr-6 py-16"
        style={{
          // matches Container's left gutter at each breakpoint —
          // adjust 1280px to your Container's actual max-width
          paddingLeft: "max(1.5rem, calc((100vw - 1536px) / 2))",
        }}
      >
        <h1 className="text-[56px] lg:text-[68px] font-black leading-[1.05] tracking-tight text-black mb-5">
          The Global
          <br />
          Digital Currency
          <br />
          Ecosystem
        </h1>

        <p className="text-[15px] leading-[1.65] text-muted-foreground mb-8 w-2/3">
          Connecting Web2 and Web3 through secure digital currencies, merchant
          payments, escrow, and capital-backed trust.
        </p>

        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {/* Solid gold-olive */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold text-white bg-primary border border-primary hover:brightness-110 transition-all duration-150"
          >
            <Wallet size={16} />
            Create Free Wallet
          </Link>

          {/* Outline gold */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold text-primary bg-white border border-primary hover:bg-[#fdf8ee] transition-all duration-150"
          >
            <House size={16} />
            Open Merchant Account
          </Link>

          {/* Outline gray */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-semibold text-[#555555] bg-white border border-[#cccccc] hover:border-primary hover:text-primary transition-all duration-150"
          >
            <FileText size={16} />
            Read Whitepaper
          </Link>
        </div>

        {/* Trust Icons Row */}
        <div className="flex items-start gap-8 flex-wrap">
          {tags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <div key={i} className="flex items-start gap-2">
                <Icon size={18} stroke="#7b6318" />
                <div>
                  <p className="text-sm font-semibold text-black leading-tight">
                    {tag.title}
                  </p>
                  <p className="text-xs text-black leading-tight">{tag.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── RIGHT: PHOTO PANEL ── */}
      <div className="relative flex-1">
        <Image
          src="https://res.cloudinary.com/dxn0qc49a/image/upload/v1786265648/highlights_two0_dayglo.jpg"
          alt="Two people overlooking a city skyline"
          width={700}
          height={700}
          className="object-cover object-center w-full "
          priority
        />

        {/* White fade-out — blends the text panel into the photo */}
        <div
          className="absolute inset-y-0 left-0 z-5 pointer-events-none"
          style={{
            width: "30%",
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* ── COIN — overlapping the split seam ── */}
      <div
        className="absolute z-20 pointer-events-none "
        style={{
          left: "49%",
          top: "50%",
          transform: "translate(-50%, -55%)",
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))",
          width: 350,
          height: 350,
        }}
        aria-hidden="true"
      >
        <Image
          src="https://res.cloudinary.com/dxn0qc49a/image/upload/v1786260833/updated_banner_image_vox7uz.png"
          alt="USFF coin"
          width={200}
          height={200}
          className="object-contain w-full"
          priority
        />
      </div>
    </section>
  );
}
