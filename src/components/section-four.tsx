"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
import { motion } from "framer-motion";
import { useState } from "react";
import BestPriceImage from "public/images/index/Top3_BestPrice.webp";
import ProcessesImage from "public/images/index/Top3_Processes.webp";
import QualityImage from "public/images/index/Top3_Quality.webp";
import clsx from "clsx";

export function SectionFour() {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  return (
    <section className="flex justify-between space-y-12 md:space-y-0 md:space-x-8 flex-col md:flex-row overflow-hidden mb-12">
      <div
        className="border border-border basis-1/3 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
        onMouseEnter={() => setActive2(true)}
        onMouseLeave={() => setActive2(false)}
      >
        <h4 className="font-medium text-xl md:text-2xl mb-4">Qualität</h4>
        <p className="text-[#878787] md:mb-4">
          Qualität steht bei uns an erster Stelle.
          Ohne Kompromisse. Prüfungen finden
          während der Produktion und vor dem
          Versand statt.
        </p>
        <motion.div
          animate={isActive2 ? { y: -5 } : { y: 0 }}
          initial={{ y: -5 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 md:mt-auto"
        >
          <AdaptiveImage
            darkSrc={QualityImage}
            lightSrc={QualityImage}
            quality={100}
            className={clsx("transition-100", !isActive2 ? "object-contain" : "object-cover aspect-square transition-100 py-8" )}
            alt="Quality"
          />
        </motion.div>
      </div>
      <div
        className="border border-border basis-1/3 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <h4 className="font-medium text-xl md:text-2xl mb-4">Bester Preis</h4>
        <p className="text-[#878787]">
          Wir bieten mittelfristig den
          besten Preis durch eine
          effiziente Produktion und
          perfekte Zulieferer.
        </p>
        <motion.div
          animate={isActive ? { y: -5 } : { y: 0 }}
          initial={{ y: -5 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 md:mt-auto"
        >
          <AdaptiveImage
            darkSrc={BestPriceImage}
            lightSrc={BestPriceImage}
            quality={100}
            className={clsx("transition-100", !isActive ? "object-contain" : "object-cover aspect-square transition-100 py-8")}
            alt="BestPrice"
          />
        </motion.div>
      </div>
      <div
        className="border border-border basis-1/3 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
        onMouseEnter={() => setActive3(true)}
        onMouseLeave={() => setActive3(false)}
      >
        <h4 className="font-medium text-xl md:text-2xl mb-4">Digitale Prozesse</h4>
        <p className="text-[#878787]">
          Digitale Prozesse vermeiden
          Fehler, verkürzen die
          Produktionszeit und bringen
          Ihnen Transparenz.
        </p>
        <motion.div
          animate={isActive3 ? { y: -5 } : { y: 0 }}
          initial={{ y: -5 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 md:mt-auto"
        >
          <AdaptiveImage
            darkSrc={ProcessesImage}
            lightSrc={ProcessesImage}
            quality={100}
            className={clsx("transition-100", !isActive3 ? "object-contain" : "object-cover aspect-square transition-100 py-8")}
            alt="Transparency"
          />
        </motion.div>
      </div>
    </section>
  );
}
