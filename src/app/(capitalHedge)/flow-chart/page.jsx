import flowchart from "../../assets/CHART USFRANC.jpg";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container/Container";

export default function FlowChartContent() {
  return (
    <Container>
      <section className="px-4 space-y-12 bg-white text-gray-800">
        <div className="pt-10 text-center justify-items-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter w-full md:w-2/3  leading-tight">
            <span className="text-primary">USFRANC</span> First Sales Structure
          </h1>
          <p className="w-full md:w-1/2 mt-6">
            This flowchart represents the distribution and allocation model of
            1,000,000,000 USFRANC, outlining how funds are structured across
            allocation, sales, reserves, and operational costs.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="rounded-2xl border border-gray-200 shadow-sm p-4 bg-white">
            <Image
              src={flowchart}
              alt="flowchart"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <Card className="shadow-sm border border-gray-200 rounded-2xl bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-[#7b5e00]">
              Total Supply Overview
            </h2>
            <p className="text-gray-700">
              1 000 000 000 USFRANC is divided into three main segments: 50 M
              Allocated, 50 M Allocation Sale to Founders, and 900 M First
              Sales.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border border-gray-200 bg-white">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#7b5e00]">
                50 M Allocated
              </h3>
              <p className="text-gray-700">100% Capital Fund</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-gray-200 bg-white">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#7b5e00]">
                50 M Allocation Sale to Founders
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>70% → 67% Average to Hedge fund</li>
                <li>10% → 2% Admin transfer fee</li>
                <li>10% → Reserve Wallet</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-gray-200 bg-white">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#7b5e00]">
                900 M First Sales
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>20% → Admin & Operational cost wallet</li>
                <li>20% → 2% Admin transfer fee</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm border border-gray-200 rounded-2xl bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-[#7b5e00]">
              Administrative Fee Structure
            </h2>
            <p className="text-gray-700">
              A 2% Admin transfer fee is applied within the system flow, derived
              from both founder allocation (10%) and operational allocation
              (20%), ensuring sustainability and administrative continuity.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 rounded-2xl bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-[#7b5e00]">
              System Design Summary
            </h2>
            <p className="text-gray-700">
              The structure ensures balanced distribution across Capital Fund,
              Hedge Fund allocation, Reserve Wallet, and Operational Wallet,
              supporting long-term sustainability and efficient system
              operations.
            </p>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
