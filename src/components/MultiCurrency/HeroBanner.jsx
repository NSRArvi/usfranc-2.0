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
import { Button } from "../ui/button";

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
    <section className="relative w-full overflow-hidden bg-white">
      {/* ================= LEFT / CONTENT ================= */}
      <div
        className="relative z-10 flex w-full flex-col justify-center bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:w-[55%] lg:px-0 lg:py-20 xl:py-24"
        style={{
          paddingLeft: "max(1.25rem, calc((100vw - 1536px) / 2))",
          paddingRight: "max(1.25rem, calc((100vw - 1536px) / 2))",
        }}
      >
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            The Global
            <br />
            Digital Currency
            <br />
            Ecosystem
          </h1>

          {/* Description */}
          <p className="mb-7 w-full max-w-2xl text-sm leading-[1.65] text-muted-foreground sm:text-[15px] md:text-base lg:mb-8 lg:w-2/3">
            Connecting Web2 and Web3 through secure digital currencies, merchant
            payments, escrow, and capital-backed trust.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mb-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:mb-10">
            <Button
              className="group inline-flex items-center justify-center gap-2 min-h-12 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              asChild
            >
              <Link href="#">
                {" "}
                <Wallet size={16} /> Create Free Wallet
              </Link>
            </Button>

            {/* Merchant Account */}
            <Link
              href="#"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-150 hover:bg-[#fdf8ee] sm:w-auto sm:px-6"
            >
              <House size={16} />
              Open Merchant Account
            </Link>

            <Link
              href="/whitepaper"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#cccccc] bg-white px-5 py-3 text-sm font-semibold text-[#555555] transition-all duration-150 hover:border-primary hover:text-primary sm:w-auto sm:px-6"
            >
              <FileText size={16} />
              Read Whitepaper
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:items-start lg:gap-7 xl:gap-8">
            {tags.map((tag, i) => {
              const Icon = tag.icon;

              return (
                <div key={i} className="flex items-start gap-2">
                  <Icon
                    size={18}
                    stroke="#7b6318"
                    className="mt-0.5 shrink-0"
                  />

                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-black">
                      {tag.title}
                    </p>

                    <p className="text-xs leading-tight text-black">
                      {tag.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative h-[55vw] min-h-75 max-h-162.5 w-full sm:h-[50vw] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[50%]">
        <Image
          src="https://res.cloudinary.com/dxn0qc49a/image/upload/v1786265648/highlights_two0_dayglo.jpg"
          alt="Two people overlooking a city skyline"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />

        {/* Desktop fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-white to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-[35%] lg:bg-linear-to-r lg:from-white lg:via-white/50 lg:to-transparent" />

        {/* Mobile bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-white to-transparent lg:hidden" />
      </div>

      <div
        className="pointer-events-none absolute z-20 left-1/2 top-[calc(100%-55vw)] -translate-x-1/2 translate-y-1/2 w-[clamp(140px,28vw,260px)] aspect-square sm:top-[calc(100%-50vw)] lg:left-[52%] lg:top-1/2 lg:w-[clamp(180px,20vw,300px)] lg:-translate-y-1/2"
        style={{
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))",
        }}
        aria-hidden="true"
      >
        <Image
          src="https://res.cloudinary.com/dxn0qc49a/image/upload/v1786260833/updated_banner_image_vox7uz.png"
          alt="USFF coin"
          fill
          sizes="(max-width: 639px) 140px, (max-width: 1023px) 220px, 300px"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
