"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
import { motion } from "framer-motion";
import LogisticsImage from "public/images/index/4Steps_Logistics.webp"
import ProductionImage from "public/images/index/4Steps_Production.webp"
import { useState } from "react";
import NumberPill from "./numberPill";

export function SectionSix() {
    const [isActive, setActive] = useState(false);
    const [isActive2, setActive2] = useState(false);

    return (
        <section className="flex justify-between space-y-12 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row overflow-hidden mb-12">
            <div
                className="border border-border lg:basis-4/8 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <NumberPill number="03" />
                <h4 className="font-medium text-xl md:text-2xl mb-4">
                    Produktion
                </h4>
                <p className="text-[#878787] md:mb-6">
                    Produktion Ihrer Verpackung gemäß festgelegter Qualität und Zeitplan.
                </p>

                <motion.div
                    animate={isActive ? { y: -5, x: -5 } : { y: 0, x: 0 }}
                    initial={{ y: -5, x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="mt-8 lg:mt-auto"
                >
                    <AdaptiveImage
                        darkSrc={ProductionImage}
                        lightSrc={ProductionImage}
                        quality={100}
                        alt="Production"
                    />
                </motion.div>
            </div>
            <div
                className="border border-border lg:basis-4/8 rounded-2xl bg-white dark:bg-[#121212] p-10 md:text-center flex flex-col"
                onMouseEnter={() => setActive2(true)}
                onMouseLeave={() => setActive2(false)}
            >
                <NumberPill number="04" />
                <h4 className="font-medium text-xl md:text-2xl mb-4">
                    Logistik
                </h4>
                <p className="text-[#878787] md:mb-6">
                    Auslieferung der Verpackungen gemäß festgelegtem Termin.
                </p>

                <motion.div
                    animate={isActive2 ? { y: -5, x: -5 } : { y: 0, x: 0 }}
                    initial={{ y: -5, x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="mt-8 lg:mt-auto"
                >
                    <AdaptiveImage
                        darkSrc={LogisticsImage}
                        lightSrc={LogisticsImage}
                        quality={100}
                        alt="Logistics"
                    />
                </motion.div>
            </div>
           
            
        </section>
    );
}
