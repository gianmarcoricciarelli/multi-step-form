import { Plan, PlanName } from '../../../../types/types';
import { StepHeader } from '../StepHeader/StepHeader';
import { Card } from './Card/Card';
import styles from './SecondStep.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const plans: Plan[] = [
    { name: 'ARCADE', amountLabel: '', freeMonthsLabel: '' },
    { name: 'ADVANCED', amountLabel: '', freeMonthsLabel: '' },
    { name: 'PRO', amountLabel: '', freeMonthsLabel: '' },
];

export const SecondStep: FC = () => {
    const { t } = useTranslation('secondStep');

    const plansNamesLabelMap: Record<PlanName, string> = {
        ARCADE: t('PLANS.ARCADE'),
        ADVANCED: t('PLANS.ADVANCED'),
        PRO: t('PLANS.PRO'),
    };

    return (
        <>
            <StepHeader title={t('TITLE')} subtitle={t('SUBTITLE')} />
            <div className={styles.container}>
                <div className={styles['card-container']}>
                    {plans.map((plan) => (
                        <Card
                            planName={plansNamesLabelMap[plan.name]}
                            amountLabel={plan.amountLabel}
                            freeMonthsLabel={plan.freeMonthsLabel}
                        />
                    ))}
                </div>
                <p>subscrition</p>
            </div>
        </>
    );
};
