import Image from "next/image";
import img from "../../assets/peer-to-peer-transfer.png";
import Container from "@/components/Container/Container";

const features = [
  {
    title: "Ecosystem Sustainability",
    desc: "Funds essential operations without outside financing.",
  },
  {
    title: "Buyer Protection",
    desc: "Escrow ensures delivery and 7-day return window.",
  },
  {
    title: "Transparent Fees",
    desc: "No hidden charges. Fully disclosed system.",
  },
  {
    title: "Reinforced Coin Value",
    desc: "Supports hedge capital and price stability.",
  },
  {
    title: "Future Development",
    desc: "Funds upgrades, compliance, and improvements.",
  },
];

export default function FeesSection() {
  return (
    <Container>
      <section className="relative py-10 bg-white overflow-hidden">
        <div className="absolute inset-0 flex justify-center opacity-20">
          <Image src={img} alt="bg" className="w-125 object-contain" />
        </div>

        <div className="relative px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Advantages of USFC <br />
            <span className="text-primary">Peer-to-Peer Transfer Fees</span>
          </h2>

          <p className="text-gray-600 mb-12">
            A simple 2% fee powers sustainability, security, and long-term
            growth of the USFC ecosystem.
          </p>

          <div className="mb-16">
            <div className="inline-block px-10 py-6 rounded-3xl bg-linear-to-r from-[#7b5e00]/80 to-[#7b5e00] text-white shadow-xl">
              <h3 className="text-5xl font-bold">2%</h3>
              <p className="mt-2 text-sm">Flat Peer-to-Peer Transaction Fee</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-[calc(100%-80px)] md:h-[calc(100%-50px)] bg-linear-to-b from-[#7b5e00]/80 to-[#7b5e00]"></div>

            <div className="space-y-12">
              {features.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}>
                  {/* Card */}
                  <div className="w-[45%]">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-white border border-gray-200 shadow-md z-10 font-bold text-amber-500">
                    {i + 1}
                  </div>
                  <div className="w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
