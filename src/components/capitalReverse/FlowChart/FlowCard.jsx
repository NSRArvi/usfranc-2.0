export const FlowCard = ({ data, className = "" }) => {
  if (data.isAmberHighlight) {
    return (
      <div
        className={`bg-primary text-white rounded-xl p-3.5 sm:p-4 text-center border border-amber-500/50 shadow-md ${className}`}
      >
        {data.amount && (
          <div className="text-xs sm:text-sm font-bold tracking-wider mb-0.5">
            {data.amount}
          </div>
        )}
        <div className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
          {data.title}
        </div>
        {data.subtitle && (
          <div className="text-xs font-medium opacity-90">{data.subtitle}</div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`bg-[#f6f2e9] border border-[#e4d7be] rounded-2xl p-4 sm:p-5 text-center shadow-xs flex flex-col justify-center items-center h-full ${className}`}
    >
      {data.amount && (
        <div className="text-xl sm:text-2xl font-bold text-amber-700 leading-tight">
          {data.amount}
        </div>
      )}
      <div className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5">
        {data.title}
      </div>
      {data.subtitle && (
        <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
          {data.subtitle}
        </div>
      )}
    </div>
  );
};
