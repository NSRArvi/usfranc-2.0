import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
export function InvestmentCard({ card }) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: card.id * 0.05 }}
      className="bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-600/20 text-amber-700 shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug">
              {card.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mt-4 pt-4 border-t border-slate-200/60">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
            Examples:
          </h4>
          <ul className="space-y-1.5">
            {card.examples.map((example, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Risk Badge Footer */}
      <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
        <ShieldCheck className={`w-4 h-4 ${card.riskColor}`} />
        <span>Risk Level:</span>
        <span className={card.riskColor}>{card.riskLevel}</span>
      </div>
    </motion.div>
  );
}
