"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
import { motion } from "framer-motion";
import ExpertsImage from "public/images/index/4Steps_Experts.webp"
import DesignImage from "public/images/index/4Steps_Design.webp"
import { useState } from "react";
import NumberPill from "./numberPill";


export function SectionFive() {
 
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);

  return (
    <section className="flex justify-between space-y-12 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row overflow-hidden mb-12">
      <div
        className="border border-border lg:basis-4/8 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <NumberPill number="01" />
        <h4 className="font-medium text-xl md:text-2xl mb-4">
          Expertenwissen
        </h4>
        <p className="text-[#878787] md:mb-6">
          Erfassung Ihrer Anforderungen und Beratung durch unsere Verpackungsexperten.
        </p>

        <motion.div
          animate={isActive ? { y: -5, x: -5 } : { y: 0, x: 0 }}
          initial={{ y: -5, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 lg:mt-auto"
        >
          <AdaptiveImage
            darkSrc={ExpertsImage}
            lightSrc={ExpertsImage}
            quality={100}
            alt="Experts"
          />
        </motion.div>
      </div>
      <div
        className="border border-border lg:basis-4/8 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
        onMouseEnter={() => setActive2(true)}
        onMouseLeave={() => setActive2(false)}
      >
        <NumberPill number="02" />
        <h4 className="font-medium text-xl md:text-2xl mb-4">
          Design
        </h4>
        <p className="text-[#878787] md:mb-6">
          Konstruktion und CAD Design Ihrer Verpackungen durch unsere Konstrukteure.
        </p>

        <motion.div
          animate={isActive2 ? { y: -5, x: -5 } : { y: 0, x: 0 }}
          initial={{ y: -5, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 lg:mt-auto"
        >
          <AdaptiveImage
            darkSrc={DesignImage}
            lightSrc={DesignImage}
            quality={100}
            alt="Design"
          />
        </motion.div>
      </div>


    </section>
  );
}
