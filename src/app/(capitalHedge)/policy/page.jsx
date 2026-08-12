export default function CapitalHedgePolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#7b5e00]">
            USFRANC Capital Hedge Policy
          </h1>
        </div>

        {/* Section 1 */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
          <p>
            USFRANC’s Capital Hedge Policy establishes a strict framework to
            protect and anchor the value of USFRANC cryptocurrency (ISF).
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">2. Core Objectives</h2>
          <p>
            <strong>Capital Preservation:</strong> Eliminate exposure to
            speculative or volatile assets.
          </p>
          <p>
            <strong>Sovereign Security:</strong> Rely exclusively on
            government-issued instruments from top-rated countries.
          </p>
          <p>
            <strong>High Liquidity:</strong> Maintain reserves that are
            accessible within 7 business days at any time.
          </p>
          <p>
            <strong>Cash Equivalents:</strong> Operate reserve management under
            validator community governance.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              3. Investment Framework
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              3.1 Approved Asset Classes and Allocations
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#7b5e00] text-white">
                  <tr>
                    <th className="p-3 text-left">Asset Class</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Example Instruments</th>
                    <th className="p-3 text-left">Target</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t">
                    <td className="p-3">AAA/AA+ rated Sovereign Bonds</td>
                    <td className="p-3">
                      Long-term bonds (8-15 years) from AAA/AA-rated sovereigns
                    </td>
                    <td className="p-3">
                      German Bunds (10Y), Swiss Confederation Bonds (10Y), US
                      Treasuries (8–10Y)
                    </td>
                    <td className="p-3">70%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Short-Term Sovereign Instruments</td>
                    <td className="p-3">
                      Treasury Bills and Notes under 12 months maturity
                    </td>
                    <td className="p-3">
                      US T-Bills (3M, 6M), FRNs, Gins (8M), French BTFs (8M,
                      Bons du Trésor fixe)
                    </td>
                    <td className="p-3">20%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Cash Equivalents</td>
                    <td className="p-3">
                      Money Market Funds and Insured Bank Deposits
                    </td>
                    <td className="p-3">
                      EUR/USD Government Money Market Funds, AAA Institutional
                      Liquidity Pools
                    </td>
                    <td className="p-3">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3.2 */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-xl font-semibold">
              3.2 Specific Investment Conditions
            </h3>
            <p>
              Only sovereign issuers from the Eurozone, US, UK, where the coin
              is prominently build.
            </p>
            <p>All holdings denominated in EUR and USD</p>
            <p>
              No corporate bonds, equities, cryptocurrencies, derivatives, or
              speculative assets.
            </p>
            <p>Maximum redemption timeframe: 7 business days.</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">4. Reserve Management</h2>
          <p>
            The Validator Community retains authority over Reserve Management
            Entity.
          </p>
          <p>Reserve composition manually revalidated by validators.</p>
          <p>
            Emergency liquidity action must be discussed and justified publicly.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold">
            5. Risk Management Strategy
          </h2>
          <p>Minimizing by investing only in the top-rated sovereign bonds.</p>
          <p>
            Mitigating Liquidity Risk by holding 50% in short-term and cash
            instruments.
          </p>
          <p>Currency Risk by limiting to EUR and USD instruments.</p>
        </div>

        {/* Section 7 */}
        <div className="bg-[#7b5e00] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">7. Policy Summary</h2>
          <p className="leading-relaxed">
            The USFRANC Capital HFEF is: 100% sovereign-based — no corporate or
            speculative risk. Fully transparent, with decentralized validator
            control. Designed not for long-term stability, regulatory alignment,
            and trustworthiness.
          </p>
        </div>
      </div>
    </div>
  );
}
