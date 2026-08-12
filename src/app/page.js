import Container from "@/components/Container/Container";
import HeroBanner from "@/components/Home/HeroBanner";
import Highlights from "@/components/Home/Highlights";
import HighlightsTwo from "@/components/Home/HighlightsTwo";
import HowItWorks from "@/components/Home/HowItWorks";
import Usage from "@/components/Home/Usage";

const Page = () => {
  return (
    <Container>
      <HeroBanner />
      <Highlights />
      <Usage />
      <HighlightsTwo />
      <HowItWorks />
    </Container>
  );
};

export default Page;
