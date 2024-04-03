import { Plan } from '../../../../types/types';
import { StepHeader } from '../StepHeader/StepHeader';
import { Card } from './Card/Card';
import styles from './SecondStep.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const plans: Plan[] = [
    { name: 'ARCADE', amountLabel: '$9/mo', freeMonthsLabel: '' },
    { name: 'ADVANCED', amountLabel: '$12/mo', freeMonthsLabel: '' },
    { name: 'PRO', amountLabel: '$15/mo', freeMonthsLabel: '' },
];

export const SecondStep: FC = () => {
    const { t } = useTranslation('secondStep');

    return (
        <>
            <StepHeader title={t('TITLE')} subtitle={t('SUBTITLE')} />
            <div className={styles.container}>
                <div className={styles['card-container']}>
                    {plans.map((plan) => (
                        <Card
                            planName={plan.name}
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
