import Container from "@/components/Container/Container";
import HeroBanner from "@/components/usff/Ecosystem/HeroBanner";
import SecurityAndServicesSection from "@/components/usff/Ecosystem/SecurityAndServicesSection";
import USFFMultiDigitalCurrencies from "@/components/usff/Ecosystem/USFFMultiDigitalCurrencies";
import Web2Web3EcosystemSection from "@/components/usff/Ecosystem/Web2Web3EcosystemSection";
import React from "react";

export default function page() {
  return (
    <>
      <HeroBanner />
      <Container>
        <USFFMultiDigitalCurrencies />
        <Web2Web3EcosystemSection />
        <SecurityAndServicesSection />
      </Container>
    </>
  );
}
