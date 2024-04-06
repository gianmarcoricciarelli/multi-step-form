import advancedIcon from '../../../../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../../../../assets/images/icon-arcade.svg';
import proIcon from '../../../../../assets/images/icon-pro.svg';
import { PlanName } from '../../../../../types/types';
import { Label } from '../../../../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../SubscriptionForm.context';
import styles from './Card.module.scss';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation('subscriptionSteps');

    const planNameToIconMap: Record<PlanName, { icon: string; label: string }> =
        {
            ARCADE: {
                icon: arcadeIcon,
                label: t('SECOND_STEP.PLANS.ARCADE'),
            },
            ADVANCED: {
                icon: advancedIcon,
                label: t('SECOND_STEP.PLANS.ADVANCED'),
            },
            PRO: {
                icon: proIcon,
                label: t('SECOND_STEP.PLANS.PRO'),
            },
        };

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
