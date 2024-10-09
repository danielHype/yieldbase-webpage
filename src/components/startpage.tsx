"use client";

import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { SectionSeven } from "@/components/section-seven";
import FrequentlyAskedQuestions from "./faq";
import EnhancedYieldCalculator from "./enhanced-yield-calculator";
import Features from "./features";
import Roadmap from "./roadmap";
import Concierge from "./concierge";

export function StartPage() {
  return (
    <>
      <Hero />
      <EnhancedYieldCalculator />

      <Features />
      {/* <SectionFour /> */}
      {/* Text fading in  */}
      <SectionSeven />
      {/* Text fading in  */}
      <Process />
      {/* <SectionSix /> */}
      <Concierge />
      <Roadmap />
      {/* <SectionNine /> */}
      {/* <SectionFAQ />
      <Testimonial /> */}
      <FrequentlyAskedQuestions />
    </>
  );
}
