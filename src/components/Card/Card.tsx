import {
    FormDataContext,
    FormDataContextProps,
} from '../../contexts/FormDataContext';
import {
    FormStaticDataContext,
    FormStaticDataContextProps,
} from '../../contexts/FormStaticDataContext';
import { PlansNames, BillingModes, SubscriptionStep } from '../../types/enums';
import { Label } from '../Label/Label';
import styles from './Card.module.scss';
import { usePlanSelection } from './usePlanSelection';
import { Context, FC, useContext } from 'react';

interface CardProps {
    planName: PlansNames;
    monthlyAmountLabel: string;
    yearlyAmountLabel: string;
    freeMonths: number;
    freeMonthsLabel?: string;
}

export const Card: FC<CardProps> = ({
    planName,
    monthlyAmountLabel,
    yearlyAmountLabel,
    freeMonths,
    freeMonthsLabel,
}) => {
    const {
        [SubscriptionStep.SubscriptionSelection]: {
            data: { plan, billingMode },
        },
    } = useContext(FormDataContext as Context<FormDataContextProps>);
    const { plans } = useContext(
        FormStaticDataContext as Context<FormStaticDataContextProps>,
    );

    const { onCardClickHandler } = usePlanSelection();

    return (
        <div
            className={`${styles.card}${plan === planName ? ` ${styles['card__selected']}` : ''}`}
            onClick={() => onCardClickHandler(planName, freeMonths)}
        >
            <img src={plans[planName].icon} />
            <div>
                <Label color="marine-blue" fontStyle="semi-bold">
                    {plans[planName].label}
                </Label>
                <Label color="cool_gray" fontStyle="semi-bold">
                    {billingMode === BillingModes.Monthly
                        ? monthlyAmountLabel
                        : yearlyAmountLabel}
                </Label>
                {billingMode === BillingModes.Yearly && (
                    <Label
                        color="marine-blue"
                        size="small"
                        fontStyle="semi-bold"
                    >
                        {freeMonthsLabel}
                    </Label>
                )}
            </div>
        </div>
    );
};
