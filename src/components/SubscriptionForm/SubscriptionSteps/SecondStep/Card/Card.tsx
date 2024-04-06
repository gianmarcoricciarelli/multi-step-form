import { PlanName } from '../../../../../types/types';
import { Label } from '../../../../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../SubscriptionForm.context';
import styles from './Card.module.scss';
import { usePlanSelection } from './usePlanSelection';
import { Context, FC, useContext } from 'react';

interface CardProps {
    planName: PlanName;
    amountLabel: string;
    freeMonthsLabel?: string;
}

export const Card: FC<CardProps> = ({
    planName,
    amountLabel,
    freeMonthsLabel,
}) => {
    const { plan, setPlan }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const { planNameToIconMap } = usePlanSelection();

    return (
        <div
            className={`${styles.card}${plan === planName ? ` ${styles['card__selected']}` : ''}`}
            onClick={() => setPlan(planName)}
        >
            <img src={planNameToIconMap[planName].icon} />
            <div>
                <Label color="marine-blue" fontStyle="semi-bold">
                    {planNameToIconMap[planName].label}
                </Label>
                <Label color="cool_gray" fontStyle="semi-bold">
                    {amountLabel}
                </Label>
                {freeMonthsLabel && (
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
