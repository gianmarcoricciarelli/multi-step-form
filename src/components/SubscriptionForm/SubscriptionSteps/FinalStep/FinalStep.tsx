import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FinalStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    return (
        <div>
            <p>{t('FINAL_STEP.TITLE')}</p>
            <p>{t('FINAL_STEP.SUBTITLE')}</p>
        </div>
    );
};
