import Container from "@/components/Container/Container";

export default function HedgeCapitalOverview() {
  return (
    <Container>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 justify-items-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight w-full md:w-1/2">
              <span className="text-primary">USFRANC</span> Hedge Capital
              Investments Overview
            </h1>
            <p className="text-gray-600">Posting Frequency: Monthly</p>
            <p className="max-w-3xl mx-auto text-gray-500">
              This is a non-exhaustive listing of active and planned capital
              reserves used to stabilize USFRANC operations. This list is
              illustrative and does not represent any financial instrument
              offering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Government Instruments */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                Government Instruments
              </h2>
              <div className="space-y-4">
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p className="font-medium">Instrument Type: Sovereign Bond</p>
                  <p>Holding Institution: Confidential (EU Jurisdiction)</p>
                  <p>Start Date: Jan 2025</p>
                  <p>Term: 3 Years</p>
                  <p className="font-semibold text-green-600">
                    Allocation Status: Active
                  </p>
                </div>
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p className="font-medium">Instrument Type: Treasury Note</p>
                  <p>Holding Institution: Confidential (US Jurisdiction)</p>
                  <p>Start Date: Feb 2025</p>
                  <p>Term: 2 Years</p>
                  <p className="font-semibold text-green-600">
                    Allocation Status: Active
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                Property-Based Assets
              </h2>
              <div className="space-y-4">
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p>Asset Type: Real Estate</p>
                  <p>Region: Europe</p>
                  <p>Holding Since: Q1 2025</p>
                  <p>Term: None</p>
                  <p className="text-green-600 font-semibold">
                    Allocation Status: Active
                  </p>
                </div>
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p>Asset Type: Real Estate</p>
                  <p>Region: Asia</p>
                  <p>Holding Since: Q2 2025</p>
                  <p>Term: None</p>
                  <p className="text-yellow-600 font-semibold">
                    Allocation Status: Planned
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Currency Holdings</h2>
              <div className="space-y-4">
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p>Currency: EUR</p>
                  <p>Institution: Tier-1 European Bank</p>
                  <p>Date Opened: March 2025</p>
                  <p>Term: Open</p>
                  <p className="text-green-600 font-semibold">
                    Allocation Status: Active
                  </p>
                </div>
                <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                  <p>Currency: USD</p>
                  <p>Institution: Tier-1 US Bank</p>
                  <p>Date Opened: April 2025</p>
                  <p>Term: Open</p>
                  <p className="text-green-600 font-semibold">
                    Allocation Status: Active
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                Institutional Deposits
              </h2>
              <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                <p>Deposit Type: Fixed-Term Deposit</p>
                <p>Institution: EU Regulated Entity</p>
                <p>Scheduled Start: Planned Q3 2025</p>
                <p>Term: 6 Months</p>
                <p className="text-yellow-600 font-semibold">
                  Allocation Status: Planned
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Contingency Capital
              </h2>
              <div className="border rounded-xl p-4 hover:border-primary transition-colors duration-300">
                <p>Purpose: Operational Buffer</p>
                <p>Form: Cash + Liquidity</p>
                <p>Established: Live</p>
                <p>Usage Conditions: For emergencies</p>
                <p className="text-green-600 font-semibold">
                  Allocation Status: Active
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold">Ownership and Disclaimer</h2>
            <p className="text-gray-300">
              All listed investments are fully held and controlled by USFRANC
              corporate entities (including USFRANC SAS, USFRANC Ltd, USFRANC
              LLC, and regional subsidiaries). These reserves are allocated for
              internal project stability and operational continuity.
            </p>
            <p className="text-gray-300 font-medium">
              USFRANC cryptocurrency holders have no ownership, legal right,
              security interest, or financial claim to these assets under any
              jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
