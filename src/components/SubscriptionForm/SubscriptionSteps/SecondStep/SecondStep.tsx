import { Plan } from '../../../../types/types';
import { BillingToggle } from './BillingToggle/BillingToggle';
import { Card } from './Card/Card';
import styles from './SecondStep.module.scss';
import { FC } from 'react';

const plans: Plan[] = [
    { name: 'ARCADE', amountLabel: '$9/mo', freeMonthsLabel: '' },
    { name: 'ADVANCED', amountLabel: '$12/mo', freeMonthsLabel: '' },
    { name: 'PRO', amountLabel: '$15/mo', freeMonthsLabel: '' },
];

export const SecondStep: FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles['card-container']}>
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            planName={plan.name}
                            amountLabel={plan.amountLabel}
                            freeMonthsLabel={plan.freeMonthsLabel}
                        />
                    ))}
                </div>
                <BillingToggle />
            </div>
        </>
    );
};
