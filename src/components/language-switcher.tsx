import useLanguage from '@/hooks/useLanguage'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from "src/app/i18n/settings"

export const LanguageSwitcher = () => {
    const lng = useLanguage()
    return (
        <>
            Switch from <strong>{lng}</strong> to:{' '}

            {languages.filter((l) => lng !== l).map((l, index) => {
                return (
                    <span key={l}>
                        {index > 0 && (' or ')}
                        <Link href={`/${l}`}>
                            {l}
                        </Link>
                    </span>
                )
            })}
        </>

    )
}