import { BillingModes } from '../../../../types/enums';
import { Label } from '../../../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../SubscriptionForm.context';
import styles from './FourthStep.module.scss';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const FourthStep: FC = () => {
    const { plan, billingMode, addOns } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const { t } = useTranslation('subscriptionSteps');

    const totalAmount: number = addOns.reduce(
        (prevAmount, { monthlyAmount, yearlyAmount }) => {
            const currentAmount = Number(
                (billingMode === BillingModes.Monthly
                    ? monthlyAmount
                    : yearlyAmount
                )
                    .match(/\d+/gm)
                    ?.pop(),
            );

            return prevAmount + currentAmount;
        },
        0,
    );

    return (
        <div className={styles['summary__container']}>
            <div className={styles.recap}>
                <div className={styles['addons__container']}>
                    {addOns.map((addOn) => (
                        <div className={styles.addon}>
                            <Label key={addOn.title} color="cool_gray">
                                {addOn.title}
                            </Label>
                            <Label color="marine-blue">
                                {billingMode === BillingModes.Monthly
                                    ? addOn.monthlyAmount
                                    : addOn.yearlyAmount}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.total}>
                <Label color="cool_gray" fontStyle="semi-bold">
                    {t(
                        `FOURTH_STEP.TOTAL_${
                            billingMode === BillingModes.Monthly
                                ? 'MONTHLY'
                                : 'YEARLY'
                        }`,
                    )}
                </Label>
                <Label color="purplish-blue" size="big" fontStyle="bold">
                    {`$${totalAmount}/${billingMode === BillingModes.Monthly ? 'mo' : 'yr'}`}
                </Label>
            </div>
        </div>
    );
};
