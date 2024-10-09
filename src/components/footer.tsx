"use client";

import { useTranslation } from "@/app/i18n/client";
import { LogoLarge } from "@/components/logo-large";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";


export function Footer() {

  const lng = useLanguage()
  const { t } = useTranslation(lng, "common")

  return (
    <footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#F6F6F3] dark:bg-[#0C0C0C]">
      <div className="container">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <LogoLarge />
            <span className="sr-only">RevBoost</span>
          </Link>

          <span className="font-normal md:text-2xl text-right">
            {t("heroTitle")}
          </span>
        </div>
        {/*
        <div className="flex flex-col md:flex-row w-full mb-10 md:mb-20">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
            <div>
              <span className="font-medium">Kontakt</span>
              <ul>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  030 / 22210202
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Mo. - Fr. 08:00 bis 18:00
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Sa. 10:00 bis 16:00
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  frage@revboost.com
                </li>

              </ul>
            </div>

            <div>
              <span>Services</span>
              <ul>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Fragen und Antworten
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Versand und Verpackungen
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Konditionen und Zahlung
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Showrooms
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Blog
                </li>
              </ul>
            </div>

            <div>
              <span>Über RevBoost</span>
              <ul>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Über uns
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Jobs
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  Presse
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  AGB
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
            <div className="flex justify-between md:items-end flex-col space-y-14">
              <div className="flex items-center">
                <SocialLinks />
              </div>

    </div>
          </div >
        </div >*/}

        <p className="text-xs text-[#B3B3B2] dark:text-[#3E3E3E] mb-12">
          {t("basedInBali")}
        </p>
      </div >
    </footer >
  );
}
