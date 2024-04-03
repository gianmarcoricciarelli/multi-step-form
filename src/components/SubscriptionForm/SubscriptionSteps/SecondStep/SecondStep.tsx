import { StepHeader } from '../StepHeader/StepHeader';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const SecondStep: FC = () => {
    const { t } = useTranslation('secondStep');

    return (
        <>
            <StepHeader title={t('TITLE')} subtitle={t('SUBTITLE')} />
        </>
    );
};
