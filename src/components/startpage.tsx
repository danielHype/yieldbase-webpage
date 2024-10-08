"use client";

import { Hero } from "@/components/hero";
import { Screens } from "@/components/screens";
import { SectionFive } from "@/components/section-five";
import { SectionFour } from "@/components/section-four";
import { SectionOne } from "@/components/section-one";
import { SectionFAQ } from "./section-faq";
import { SectionSeven } from "@/components/section-seven";
import { SectionSix } from "@/components/section-six";
import { SectionTwo } from "@/components/section-two";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "./partners";
import { SectionNewsletter } from "./section-newsletter";

import { SectionNine } from "./section-nine";
import YieldGenerator from "./yield-generator";
import SectionThree from "./section-three";
import FrequentlyAskedQuestions from "./faq";
import Testimonial from "./testimonial";

export function StartPage() {
  return (
    <>
      <Hero />

      <YieldGenerator />
      <Screens />
      <Partners />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* Text fading in  */}
      <SectionSeven />
      {/* Text fading in  */}
      <SectionFive />
      <SectionSix />

      <SectionNine />
      <SectionFAQ />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <SectionNewsletter />
    </>
  );
}
