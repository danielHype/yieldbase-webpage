"use client";

import { cn } from "@/utils/cn";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoIcon } from "./logo-icon";
import LanguagePicker from "./language-picker";

import { useTranslation } from "@/app/i18n/client"
import useLanguage from "@/hooks/useLanguage"


const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function Header() {
  const lng = useLanguage()
  const { t } = useTranslation(lng, "common")

  const links = [
    {
      title: `${t("benefits")}`,
      path: "#features",
      name: "features",
    },
    {
      title: `${t("process")}`,
      path: "#process",
      name: "process",
    },

    {
      title: `${t("faq")}`,
      path: "#faq",
      name: "faq",
    },
  ];

  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const lastPath = `/${pathname.split("/").pop()}`;

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  return (
    <header className="h-12 sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      <nav className="border border-border p-3 rounded-2xl flex items-center backdrop-filter backdrop-blur-xl bg-[#FDFDFC] dark:bg-[#121212] bg-opacity-70">
        <NavigationMenu>
          <Link href="/" className="mr-8">
            <span className="sr-only">RevBoost Logo</span>
            <LogoIcon />
          </Link>

          <LanguagePicker />

          <ul className="space-x-2 font-medium text-sm hidden md:flex mx-3">
            {links.map(({ path, name, title }) => {
              const isActive = path === lastPath;

              return (
                <li key={path}>
                  <Link
                    href={path}
                    className={cn(
                      "h-8 items-center justify-center rounded-md text-sm font-medium transition-colors px-3 py-2 inline-flex text-secondary-foreground hover:bg-secondary",
                      isActive && "bg-secondary hover:bg-secondary"
                    )}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </NavigationMenu>

        <button
          type="button"
          className="ml-auto md:hidden p-2"
          onClick={() => handleToggleMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={13}
            fill="none"
          >
            <path
              fill="currentColor"
              d="M0 12.195v-2.007h18v2.007H0Zm0-5.017V5.172h18v2.006H0Zm0-5.016V.155h18v2.007H0Z"
            />
          </svg>
        </button>

        <Link
          href="/meeting"
          className="border hidden md:inline-flex h-8 items-center justify-center rounded-md text-sm font-medium transition-colors px-3 py-2 hover:bg-secondary mr-4"
        >
          {t("heroSecondaryCallToAction")}
        </Link>

        <Link
          href="/signup"
          className="hidden md:inline-flex h-8 items-center justify-center rounded-md text-sm font-medium transition-colors px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {t("heroPrimaryCallToAction")}
        </Link>
      </nav>

      {isOpen && (
        <motion.div
          className="fixed bg-background top-0 right-0 left-0 bottom-0 h-screen z-10 px-2 m-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="mt-4 flex justify-between p-3 relative">
            <button type="button" onClick={handleToggleMenu}>
              <span className="sr-only">RevBoost Logo</span>
              <LogoIcon />
            </button>

            <button
              type="button"
              className="ml-auto md:hidden p-2 absolute right-[10px] top-2"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="fill-primary"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>

          <div className="h-full overflow-auto">
            <motion.ul
              initial="hidden"
              animate="show"
              className="px-3 pt-8 text-xl text-[#707070] dark:text-[#878787] space-y-8 mb-8"
              variants={listVariant}
            >
              {links.map(({ path, name, title }) => {
                const isActive =
                  path === "/updates"
                    ? pathname.includes("updates")
                    : path === lastPath;

                return (
                  <motion.li variants={itemVariant} key={path}>
                    <Link
                      href={path}
                      className={cn(isActive && "text-primary")}
                      onClick={handleToggleMenu}
                    >
                      {title}
                    </Link>
                  </motion.li>
                );
              })}
              <LanguagePicker />
              <motion.li
                className="mt-auto border-t-[1px] pt-8"
                variants={itemVariant}
              >
                <Link className="text-xl text-primary" href="/signup">
                  {t("heroSecondaryCallToAction")}
                </Link>
              </motion.li>

              <motion.li
                className="mt-auto pt-4"
                variants={itemVariant}
              >
                <Link className="text-xl text-primary" href="/signup">
                  {t("heroPrimaryCallToAction")}
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </header>
  );
}
