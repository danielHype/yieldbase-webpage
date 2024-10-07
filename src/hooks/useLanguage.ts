import { usePathname } from 'next/navigation';

const useLanguage = () => {
    const pathname = usePathname();

    // Split the path into segments
    const pathSegments = pathname.split('/');

    // Assuming the language is always the second segment (i.e., /lang/{language})
    const language = pathSegments[1];

    // If the language is present, return it; otherwise, default to 'en'
    return language || 'en';
};

export default useLanguage;