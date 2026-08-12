import Container from "@/components/Container/Container";
import EcosystemSection from "@/components/MultiCurrency/EcosystemSection";
import HeroBanner from "@/components/MultiCurrency/HeroBanner";
import ProtectedByBitss from "@/components/MultiCurrency/ProtectedByBitss";
import WhyUsffSection from "@/components/MultiCurrency/WhyUsffSection";
import React from "react";

export default function MultiCurrencyPage() {
  return (
    <>
      <HeroBanner />
      <Container>
        <EcosystemSection />
        <ProtectedByBitss />
        <WhyUsffSection />
      </Container>
    </>
  );
}
