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

    return (
        <div className={styles['summary__container']}>
            <div className={styles.recap}>hello hello</div>
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
                <Label color="purplish-blue" fontStyle="semi-bold">
                    100$
                </Label>
            </div>
        </div>
    );
};
