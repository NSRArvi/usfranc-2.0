import Container from "@/components/Container/Container";
import HeroBanner from "@/components/usff/DigitalMultiCurrency/HeroBanner";
import HowUSFFWorksSection from "@/components/usff/DigitalMultiCurrency/HowUSFFWorksSection";
import MultiCurrency from "@/components/usff/DigitalMultiCurrency/MultiCurrency";
import USFFExchangeInfoSection from "@/components/usff/DigitalMultiCurrency/USFFExchangeInfoSection";
import React from "react";

export default function page() {
  return (
    <>
      <HeroBanner />
      <Container>
        <HowUSFFWorksSection />
        <MultiCurrency />
        <USFFExchangeInfoSection />
      </Container>
    </>
  );
}
