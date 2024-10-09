"use client";

import { Hero } from "@/components/hero";
import { Screens } from "@/components/screens";
import { Process, SectionFive } from "@/components/process";
import { SectionFour } from "@/components/section-four";
import { SectionOne } from "@/components/section-one";
import { SectionFAQ } from "./section-faq";
import { SectionSeven } from "@/components/section-seven";
import { SectionSix } from "@/components/section-six";
import { SectionTwo } from "@/components/section-two";
import { Partners } from "./partners";
import { SectionNewsletter } from "./section-newsletter";

import { SectionNine } from "./section-nine";
import YieldGenerator from "./yield-generator";
import SectionThree from "./bento-section-three";
import FrequentlyAskedQuestions from "./faq";
import Testimonial from "./testimonial";
import EnhancedYieldCalculator from "./enhanced-yield-calculator";
import BentoSectionFeatures from "./bento-section-three";
import Roadmap from "./roadmap";
import Concierge from "./concierge";

export function StartPage() {
  return (
    <>
      <Hero />
      <EnhancedYieldCalculator />

      <BentoSectionFeatures />
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
