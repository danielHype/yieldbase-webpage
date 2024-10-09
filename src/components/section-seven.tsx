import { useTranslation } from "@/app/i18n/client";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import useLanguage from "@/hooks/useLanguage";

export function SectionSeven() {

  const lng = useLanguage()
  const { t } = useTranslation(lng, "common")
  return (

    <TextGenerateEffect
      className="text-4xl	md:text-6xl max-w-[1370px] container md:leading-[85px] py-8"
      words={t("heroTitle")}
    />

  );
}
