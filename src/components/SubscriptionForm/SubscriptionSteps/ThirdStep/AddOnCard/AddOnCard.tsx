import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../../../contexts/SubscriptionFormContext';
import { AddOns, BillingModes } from '../../../../../types/enums';
import { Label } from '../../../../Label/Label';
import styles from './AddOnCard.module.scss';
import { Context, FC, useContext } from 'react';

interface AddOnCardProps {
    title: AddOns;
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
    const { billingMode, addOns, setAddOns } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const onChangeHandler = () => {
        if (addOns.find((addOn) => addOn.title === title)) {
            setAddOns(addOns.filter((addOn) => addOn.title !== title));
        } else {
            setAddOns((prevAddOns) => [
                ...prevAddOns,
                { title, subtitle, monthlyAmount, yearlyAmount },
            ]);
        }
    };

    const addOnCardCssClasses = [styles['add-on-card']];
    if (addOns.find((addOn) => addOn.title === title)) {
        addOnCardCssClasses.push(styles['add-on-card__selected']);
    }

    return (
        <label className={addOnCardCssClasses.join(' ')} htmlFor={title}>
            <div className={styles['checkbox-container']}>
                <input
                    type="checkbox"
                    id={title}
                    name={title}
                    checked={!!addOns.find((addOn) => addOn.title === title)}
                    onChange={onChangeHandler}
                />
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
