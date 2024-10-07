"use client";

import { AdaptiveImage } from "@/components/adaptive-image";
import { motion } from "framer-motion";
import ImageSustainability from "public/images/index/WinWin.webp";
import { useState } from "react";


export function SectionNine() {

    const [isActive, setActive] = useState(false);

    return (
        <div className="mb-24">
            <section>
                <div className="text-center mt-24 md:mt-[200px] mb-12">
                    <h3 className="text-2xl md:text-6xl font-medium">Effiziente Verpackungen, die Ressourcen schonen</h3>
                </div>
            </section>
            <section
                className="border border-border rounded-2xl container bg-white dark:bg-[#121212] p-8 md:p-10 md:pb-0 overflow-hidden mb-12"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <div className="flex flex-col md:space-x-12 md:flex-row">
                    <motion.div
                        animate={isActive ? { y: -5, x: 5 } : { y: 0, x: 0 }}
                        initial={{ y: 0, x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="w-full"
                    >
                        <AdaptiveImage
                            lightSrc={ImageSustainability}
                            darkSrc={ImageSustainability}
                            height={400}
                            width={789}
                            className="-mb-[1px] object-contain rounded-md"
                            alt="Design Team"
                        />
                    </motion.div>

                    <div className="mt-6 md:max-w-[40%] md:ml-8 md:mb-8">
                        <h3 className="font-medium text-xl md:text-2xl mb-4">
                            Win-Win für die Umwelt und Ihr Unternehmen
                        </h3>

                        <p className="text-[#878787] mb-4">
                            Bei der Konstruktion Ihrer Verpackungslösung
                            achten wir vor allem auf Effizienz. Die
                            Verpackung muss zunächst die Waren während
                            des Versands optimal schützen. Es sollten aber
                            auch Lufträume und Stopfmaterial vermieden
                            werden. Das spart Versandkosten und
                            Verpackungsmüll</p>
                        <p className="text-[#878787] mb-4">
                            Unser Ziel ist es Ihnen eine passgenaue
                            Kartonverpackung zu liefern. Diese Verpackung
                            soll die Umwelt wenig belasten und gleichzeitig
                            wirtschaftlich die beste Lösung bieten.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
