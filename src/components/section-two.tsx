"use client";

import { useTranslation } from "@/app/i18n/client";
import { AdaptiveImage } from "@/components/adaptive-image";
import useLanguage from "@/hooks/useLanguage";
import { motion } from "framer-motion";

import DesignTeamImage from "public/images/index/Inhouse_Designteam.webp";
import { useState } from "react";

export function SectionTwo() {
  const [isActive, setActive] = useState(false);
  const lng = useLanguage();
  const { t } = useTranslation(lng, "common");

  return (
    <section
      className="border border-border rounded-2xl container bg-white dark:bg-[#121212] md:pb-0 overflow-hidden mb-12"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="flex flex-col md:space-x-12 md:flex-row">
        <div className="">
          <motion.div
            animate={isActive ? { y: -5, x: 5 } : { y: 0, x: 0 }}
            initial={{ y: 0, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full"
          >
            <AdaptiveImage
              lightSrc={DesignTeamImage}
              darkSrc={DesignTeamImage}
              height={400}
              width={789}
              className="-mb-[1px] object-contain md:rounded-l-md"
              alt="Design Team"
            />
          </motion.div>
        </div>

        <div className="md:flex md:max-w-[50%] justify-center align-middle p-8">
          <div className="md:flex md:flex-col md:justify-center md:align-middle">
            <h3 className="font-medium text-xl md:text-2xl mb-4">
              {t("section2Headline")}
            </h3>

            <p className="text-[#878787] mb-4">{t("section2BodyPart1")}</p>
            <p className="text-[#878787] mb-4">{t("section2BodyPart2")}</p>
            <p className="text-[#878787] mb-4">{t("section2BodyPart3")}</p>
            <p className="text-[#878787] mb-4">{t("section2BodyPart4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
