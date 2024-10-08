"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";

const languages = [
  {
    label: "English",
    value: "en",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="24"
        height="12"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
  {
    label: "Bahasa Indonesia",
    value: "id",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3 2"
        width="24"
        height="16"
      >
        <rect width="3" height="2" fill="#fff" />
        <rect width="3" height="1" y="1" fill="#ce1126" />
        <rect
          width="3"
          height="2"
          fill="none"
          stroke="#000"
          strokeWidth="0.1"
        />
      </svg>
    ),
  },
];

export default function LanguagePicker() {
  const lng = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    languages.find((lang) => lang.value === lng) || languages[0]
  );
  const [isOpen, setIsOpen] = React.useState(false);

  if (selectedLanguage)
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-[80px] md:w-[200px] justify-between"
          >
            <span className="flex items-center">
              {selectedLanguage.flag}
              <span className="ml-2 hidden md:flex">
                {selectedLanguage.label}
              </span>
            </span>
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[80px] md:w-[200px]">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.value}
              onClick={() => {
                setSelectedLanguage(language), setIsOpen(false);
              }}
            >
              <Link
                href={`/${language.value}`}
                className="flex items-center w-full"
              >
                <div className="flex items-center">
                  {language.flag}
                  <span className="ml-2 hidden md:flex">{language.label}</span>
                </div>
                <Check
                  className={`ml-auto h-4 w-4 ${
                    selectedLanguage.value === language.value
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
