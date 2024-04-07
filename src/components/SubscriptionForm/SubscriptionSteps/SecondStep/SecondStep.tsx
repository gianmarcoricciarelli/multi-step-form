import { Plan } from '../../../../types/types';
import { BillingToggle } from './BillingToggle/BillingToggle';
import { Card } from './Card/Card';
import styles from './SecondStep.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const plans: Plan[] = [
    {
        name: 'ARCADE',
        monthlyAmountLabel: '$9/mo',
        yearlyAmountLabel: '$90/yr',
        freeMonths: 2,
    },
    {
        name: 'ADVANCED',
        monthlyAmountLabel: '$12/mo',
        yearlyAmountLabel: '$120/yr',
        freeMonths: 2,
    },
    {
        name: 'PRO',
        monthlyAmountLabel: '$15/mo',
        yearlyAmountLabel: '$150/yr',
        freeMonths: 2,
    },
];

export const SecondStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    return (
        <>
            <div className={styles.container}>
                <div className={styles['card-container']}>
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            planName={plan.name}
                            monthlyAmountLabel={plan.monthlyAmountLabel}
                            yearlyAmountLabel={plan.yearlyAmountLabel}
                            freeMonthsLabel={t(
                                'SECOND_STEP.MONTHS_FREE_LABEL',
                                { freeMonths: plan.freeMonths },
                            )}
                        />
                    ))}
                </div>
                <BillingToggle />
            </div>
        </>
    );
};
