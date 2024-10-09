"use client";

import useLanguage from "@/hooks/useLanguage";
import { Button } from "./form/button";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";


export function FooterCTA() {
  const lng = useLanguage()
  const { t } = useTranslation(lng, "common")

  return (
    <div className="border border-border rounded-2xl md:container text-center px-10 py-14 mx-4 md:mx-auto md:px-24 md:py-20 mb-32 mt-24 flex items-center flex-col bg-[#121212]">
      <span className="text-2xl	md:text-4xl font-medium text-white">
        {t("contactUsTitle")}
      </span>
      <p className="text-[#878787] mt-6">
        {t("contactUsDescription")}
      </p>

      <div className="mt-10 md:mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/meeting">
            <Button
              variant="outline"
              className="border border-primary h-12 px-6 border-white text-white hidden md:block"
            >
              {t("heroSecondaryCallToAction")}
            </Button>
          </Link>

          <a href="/signup">
            <Button className="h-12 px-5 bg-white text-black hover:bg-white/80">
              {t("heroPrimaryCallToAction")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
