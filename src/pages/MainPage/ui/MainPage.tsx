import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('mainPageTitle')}
        </div>
    );
};

export default MainPage;
