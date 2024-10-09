import { useTranslation } from "@/app/i18n/client"
import useLanguage from "@/hooks/useLanguage"

export default function FrequentlyAskedQuestions() {

    const lng = useLanguage()
    const { t } = useTranslation(lng, "faq")

    return (
        <section id="faqs" className="scroll-mt-8">
            <h4 className="text-center font-medium text-xl md:text-2xl font-white mb-4">{t('faqSection.title')}</h4>
            <h4 className="text-center font-medium text-2xl md:text-4xl mb-4">{t('faqSection.subtitle')}</h4>
            <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
                {t('faqSection.faqs', { returnObjects: true }).map((faq: any, index: number) => (
                    <dl key={index}>
                        <dt className="text-sm font-semibold">{faq.question}</dt>
                        <dd className="mt-4 text-sm/6 text-gray-600">{faq.answer}</dd>
                    </dl>
                ))}
            </div>
        </section>
    )
}