"use client";

import { useTranslation } from "@/app/i18n/client";
import { Button } from "./form/button";
import Link from "next/link";
import useLanguage from "@/hooks/useLanguage";

export function Hero() {
  const language = useLanguage();
  const { t } = useTranslation(language, "common");
  return (
    <section className="text-center mt-16 md:mt-18 items-center flex flex-col">
      {/* <AnnouncementPill /> */}
      <h1 className="text-4xl md:text-6xl font-medium mt-6 max-w-[800px]">
        {t("heroTitle")}
      </h1>

      <p className="mt-4 md:mt-6 text-[#707070] max-w-[800px]">
        {t("heroDescription1")}
      </p>
      <p className="mt-4 md:mt-6 text-[#707070] max-w-[800px]">
        {t("heroDescription2")}
      </p>

      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <Link href="/meeting">
            <Button
              variant="outline"
              className="border border-primary h-12 px-6"
            >
              {t("heroSecondaryCallToAction")}
            </Button>
          </Link>

          <a href="/anfrage">
            <Button className="h-12 px-5">
              {" "}
              {t("heroPrimaryCallToAction")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
