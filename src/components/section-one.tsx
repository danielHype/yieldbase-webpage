import { useTranslation } from "@/app/i18n/client";
import useLanguage from "@/hooks/useLanguage";

export function SectionOne() {
  const lng = useLanguage();
  const { t } = useTranslation(lng, "common");

  return (
    <section className="text-center mt-24 md:mt-[200px] mb-12" id="features">
      <h3 className="text-2xl md:text-6xl font-medium">
        {t("section1Headline")}
      </h3>
    </section>
  );
}
