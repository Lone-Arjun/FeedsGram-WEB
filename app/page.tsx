import { PageLayout } from "@/components/layouts/page-layout";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <Pricing />
      <About />
      <CTA />
    </PageLayout>
  );
}