import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('aboutPageTitle')}
        </div>
    );
};

export default AboutPage;
