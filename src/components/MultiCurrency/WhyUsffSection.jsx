import { STATS } from "@/data/STATS";
import { WHY_USFF } from "@/data/WHY_USFF";

export default function WhyUsffSection() {
  return (
    <section className="w-full bg-white py-14">
      <div>
        <div className="text-center mb-10">
          <h2 className="text-[26px] lg:text-[28px] font-extrabold text-black tracking-tight">
            Why USFF?
          </h2>
          <span className="inline-block w-9 h-0.75 bg-primary rounded-full mt-2.5" />
        </div>

        {/* ── Feature cards — bordered, edge-to-edge like the reference ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 rounded-xl overflow-hidden border border-gray-200 divide-x divide-gray-200 mb-8">
          {WHY_USFF.map((item) => {
            const Icon = item.icon;
            const Badge = item.badge;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3 px-6 py-9 bg-white"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Icon className="w-11 h-11 text-primary" strokeWidth={1.4} />
                  {Badge && (
                    <span className="absolute -top-0.5 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <Badge
                        className="w-4 h-4 text-primary"
                        strokeWidth={2}
                        fill="white"
                      />
                    </span>
                  )}
                </div>
                <p className="text-[15px] font-bold text-black mt-1">
                  {item.title}
                </p>
                <p className="text-[12.5px] leading-relaxed text-gray-500 max-w-47.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Stats bar ── */}
        <div className="rounded-2xl bg-[#0B1220] px-6 py-7 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-6 gap-x-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <Icon
                    className="w-6 h-6 text-primary shrink-0"
                    strokeWidth={1.6}
                  />
                  <div className="leading-tight">
                    <p className="text-[17px] font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11.5px] text-gray-300">{stat.label}</p>
                    <p className="text-[11.5px] text-gray-300">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
