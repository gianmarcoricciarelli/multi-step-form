import { Label } from '../../../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../SubscriptionForm.context';
import styles from './FourthStep.module.scss';
import { Context, FC, useContext } from 'react';

export const FourthStep: FC = () => {
    const { plan, billingMode, addOns } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    console.log(plan);
    console.log(billingMode);
    console.log(addOns);

    return (
        <div className={styles['summary__container']}>
            <div className={styles.recap}>hello hello</div>
            <div className={styles.total}>
                <Label color="cool_gray" fontStyle="semi-bold">
                    Total (per month)
                </Label>
                <Label color="purplish-blue" fontStyle="semi-bold">
                    100$
                </Label>
            </div>
        </div>
    );
};
