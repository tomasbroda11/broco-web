import { BrocoSolutionsRibbon } from "@/components/agro/BrocoSolutionsRibbon";
import { Nav } from "@/components/agro/Nav";
import { Hero } from "@/components/agro/Hero";
import { Problem } from "@/components/agro/Problem";
import { Insight } from "@/components/agro/Insight";
import { Solution } from "@/components/agro/Solution";
import { Product } from "@/components/agro/Product";
import { WhyNow } from "@/components/agro/WhyNow";
import { Stack } from "@/components/agro/Stack";
import { Roadmap } from "@/components/agro/Roadmap";
import { Contact } from "@/components/agro/Contact";
import { Footer } from "@/components/agro/Footer";
import { GrainOverlay } from "@/components/agro/ui/GrainOverlay";

export default function BrocoAgroPage() {
  return (
    <>
      <GrainOverlay />
      <BrocoSolutionsRibbon />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Insight />
        <Solution />
        <Product />
        <WhyNow />
        <Stack />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
