"use client";

import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import useLanguage from "@/hooks/useLanguage";
import NumberPill from "./numberPill";

export function Process() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, "process");

  const [isActive, setActive] = useState([false, false, false, false, false]);

  const handleHover = (index: number, state: boolean) => {
    const newActiveState = [...isActive];
    newActiveState[index] = state;
    setActive(newActiveState);
  };

  return (
    <div className="mx-2 mt-2 rounded-4xl pt-8 md:pt-32" id="process">
      <h4 className="font-medium text-xl md:text-2xl font-white mb-4">{t('process.title')}</h4>
      <h4 className="font-medium text-2xl md:text-4xl mb-4">{t('process.subtitle')}</h4>

      <section className="grid lg:grid-cols-2 gap-8 lg:gap-y-12 mb-12 mt-10 sm:mt-16 ">


        {t("process.steps", { returnObjects: true }).map((step: any, index: number) => (
          <div
            key={index}
            className={`border border-border rounded-2xl bg-white dark:bg-[#121212] p-10 flex flex-col ${index === 4 ? "lg:col-span-2" : ""  // Make the 5th row span 2 columns
              }`}
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <NumberPill number={step.number} />
            <h4 className="font-medium text-xl md:text-2xl mb-4">
              {step.title}
            </h4>
            <p className="text-[#878787] md:mb-6">
              {step.description}
            </p>

            {/* <motion.div
            animate={isActive[index] ? { y: -5, x: -5 } : { y: 0, x: 0 }}
            initial={{ y: -5, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mt-8 lg:mt-auto"
          >
            <AdaptiveImage
              darkSrc={`/images/index/4Steps_${step.number}.webp`}
              lightSrc={`/images/index/4Steps_${step.number}.webp`}
              quality={100}
              alt={step.title[lng]}
            />
          </motion.div> */}
          </div>
        ))}
      </section>
    </div>
  );
}
