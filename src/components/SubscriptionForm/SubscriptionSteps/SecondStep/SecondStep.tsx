import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../SubscriptionForm.context';
import { BillingToggle } from './BillingToggle/BillingToggle';
import { Card } from './Card/Card';
import styles from './SecondStep.module.scss';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const SecondStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    const { plans } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

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
                            freeMonths={plan.freeMonths!}
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
