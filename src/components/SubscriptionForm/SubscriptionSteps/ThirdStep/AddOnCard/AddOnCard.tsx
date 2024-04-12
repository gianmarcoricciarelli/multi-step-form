import { BillingModes } from '../../../../../types/enums';
import { Label } from '../../../../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../SubscriptionForm.context';
import styles from './AddOnCard.module.scss';
import { Context, FC, useContext } from 'react';

interface AddOnCardProps {
    title: string;
    subtitle: string;
    monthlyAmount: string;
    yearlyAmount: string;
}

export const AddOnCard: FC<AddOnCardProps> = ({
    title,
    subtitle,
    monthlyAmount,
    yearlyAmount,
}) => {
    const { billingMode } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    return (
        <label className={styles['add-on-card']} htmlFor={title}>
            <div className={styles['checkbox-container']}>
                <input type="checkbox" id={title} name={title} />
                <div className="">
                    <Label color="marine-blue" fontStyle="semi-bold">
                        {title}
                    </Label>
                    <Label color="cool_gray">{subtitle}</Label>
                </div>
            </div>
            <Label color="purplish-blue">
                {billingMode === BillingModes.Monthly
                    ? monthlyAmount
                    : yearlyAmount}
            </Label>
        </label>
    );
};
