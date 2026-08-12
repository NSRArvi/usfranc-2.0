"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, AlertTriangle, Database, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import image from "../../assets/stack-5.png";
import Container from "@/components/Container/Container";

const Section = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-5xl mx-auto">
    <Card className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">
      {/* subtle premium border gradient */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(123,94,0,0.15), transparent 40%, rgba(123,94,0,0.1))",
        }}
      />

      <CardContent className="relative p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div
            className="p-4 rounded-full shadow-sm"
            style={{ backgroundColor: "rgba(123,94,0,0.1)" }}>
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h2>

        <div className="text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function AssurancePage() {
  return (
    <Container>
      <section className="relative bg-linear-to-br from-white via-yellow-50 to-white text-gray-900 py-10 space-y-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-200/30 blur-3xl rounded-full" />

        <div className="text-center mx-auto space-y-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            USFranc Confidentiality & Integrity Assurance
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Built on a hybrid Proof of Work (PoW) and Proof of Stake (PoS)
            blockchain, USFranc ensures privacy, security, and compliance
            without compromising decentralization.
          </p>

          <div className="relative mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={image}
              alt="Blockchain Security"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-white/60 to-transparent" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <CardContent className="p-6 text-gray-600 text-center leading-relaxed">
              USFranc is a sovereign cryptocurrency powered by a hybrid Proof of
              Work (PoW) and Proof of Stake (PoS) blockchain infrastructure,
              ensuring a balance between decentralization, performance, and
              security.
            </CardContent>
          </Card>
        </div>
        <Section icon={Lock} title="Transactional Privacy">
          <p>
            All standard transactions remain confidential and decentralized
            under our PoW/PoS consensus.
          </p>

          <div
            className="p-4 rounded-lg border text-sm"
            style={{
              backgroundColor: "rgba(123,94,0,0.08)",
              borderColor: "rgba(123,94,0,0.2)",
            }}>
            Transfers exceeding €50,000 individually or in aggregate are routed
            through a compliance layer for automated verification to meet global
            AML standards.
          </div>

          <p>
            Wallet identities, balances, and activity remain private and are not
            shared outside of compliance triggers.
          </p>
        </Section>

        <Section
          icon={AlertTriangle}
          title="Illegal Transfers & Intrusion Prevention">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Unauthorized access or wallet compromise",
              "Grey-market brokers or unauthorized OTC",
              "AML evasion attempts",
              "Structured or multiplexed transfers",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-sm border bg-red-50 border-red-200 hover:shadow-sm transition">
                {item}
              </div>
            ))}
          </div>

          <div className="text-left space-y-2">
            <p className="font-semibold text-gray-900">System Response:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Delay or hold suspicious transactions</li>
              <li>Flag wallets and notify authorities</li>
              <li>Trace via Mirrored Ledger</li>
              <li>Blacklist confirmed threats</li>
            </ul>
          </div>
        </Section>

        <Section icon={Database} title="Ledger Integrity & System Security">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "General Ledger (GL)",
              "Mirrored Ledger (31-day encrypted rotation)",
              "AES-256 encryption + hash chain verification",
              "Multi-zone secure storage (including off-EU)",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg text-sm border bg-blue-50 border-blue-200 hover:shadow-sm transition">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section icon={CheckCircle} title="User Rights & Network Protection">
          <ul className="space-y-2 text-left max-w-md mx-auto text-gray-600">
            <li>✔ Full rights to buy, hold, and transfer</li>
            <li>✔ No censorship except verified fraud cases</li>
            <li>✔ Decentralized validation via PoW/PoS</li>
            <li>✔ Protected and compliant ecosystem</li>
          </ul>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            USFranc – Built on Time. Guided by Wisdom. Backed by Surety.
          </h2>

          <div className="text-gray-600 space-y-1">
            <p>Your confidentiality is respected.</p>
            <p>Your rights are preserved.</p>
            <p>Your security is guaranteed.</p>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}
