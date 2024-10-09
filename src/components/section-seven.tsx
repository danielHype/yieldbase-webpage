import { useTranslation } from "@/app/i18n/client";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import useLanguage from "@/hooks/useLanguage";

export function SectionSeven() {

  const lng = useLanguage()
  const { t } = useTranslation(lng, "common")
  return (
    <div id="process">
      <TextGenerateEffect
        className="pt-28 pb-40 text-4xl	md:text-6xl max-w-[1370px] container md:leading-[85px] mb-12"
        words={t("heroTitle")}
      />
    </div>
  );
}
