import {
    FormDataContext,
    FormDataContextProps,
} from '../../../../contexts/FormDataContext';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../../../../contexts/FormStepsValidatorsContext';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../../contexts/SubscriptionFormContext';
import { SubscriptionStep } from '../../../../types/enums';
import { BillingToggle } from '../../../BillingToggle/BillingToggle';
import { Card } from '../../../Card/Card';
import styles from './SecondStep.module.scss';
import { Context, FC, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const SecondStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    const { plans } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );
    const {
        [SubscriptionStep.SubscriptionSelection]: {
            data: { plan, billingMode },
        },
    } = useContext(FormDataContext as Context<FormDataContextProps>);
    const {
        globalFormState: { userCanProceed, setUserCanProceed },
    } = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );

    useEffect(() => {
        if (plan && billingMode) {
            if (!userCanProceed) {
                setUserCanProceed(true);
            }
        }
        if (!plan || !billingMode) {
            if (userCanProceed) {
                setUserCanProceed(false);
            }
        }
    }, [billingMode, plan, setUserCanProceed, userCanProceed]);

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
