import useLanguage from "@/hooks/useLanguage";
import { BentoCard } from "./bento-card";
import { useTranslation } from "@/app/i18n/client";

export default function Concierge() {
    const lng = useLanguage();
    const { t } = useTranslation(lng, "concierge"); // Initialize translation

    return (
        <div className="mx-2 mt-2 rounded-4xl py-32" id="concierge">
            <h4 className="font-medium text-xl md:text-2xl font-white mb-4">{t('bentoSection.title')}</h4>
            <h4 className="font-medium text-2xl md:text-4xl mb-4">{t('bentoSection.subtitle')}</h4>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                {t('bentoSection.features', { returnObjects: true }).map((feature, index) => (
                    <BentoCard
                        key={index}
                        eyebrow={feature.eyebrow}
                        title={feature.title}
                        description={feature.description}
                        graphic={<div className="h-40 bg-no-repeat" />}
                        fade={index % 4 === 0 ? ['top'] : undefined} // Example fade logic based on index
                        className={`${index === 0 ? 'max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl' :
                            index === 1 ? 'z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl' :
                                index === 2 ? 'lg:col-span-2 lg:rounded-bl-4xl' :
                                    index === 3 ? 'max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl' :
                                        index === 4 ? 'max-lg:rounded-t-4xl lg:col-span-2 lg:rounded-tl-4xl' :
                                            index === 5 ? 'z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl' :
                                                'lg:col-span-2 lg:rounded-bl-4xl'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
