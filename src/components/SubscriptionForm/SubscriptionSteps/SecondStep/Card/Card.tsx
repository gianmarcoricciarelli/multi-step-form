import advancedIcon from '../../../../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../../../../assets/images/icon-arcade.svg';
import proIcon from '../../../../../assets/images/icon-pro.svg';
import { PlanName } from '../../../../../types/types';
import { Label } from '../../../../Label/Label';
import styles from './Card.module.scss';
import { FC } from 'react';
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
    const { t } = useTranslation('secondStep');

    const planNameToIconMap: Record<PlanName, { icon: string; label: string }> =
        {
            ARCADE: {
                icon: arcadeIcon,
                label: t('PLANS.ARCADE'),
            },
            ADVANCED: {
                icon: advancedIcon,
                label: t('PLANS.ADVANCED'),
            },
            PRO: {
                icon: proIcon,
                label: t('PLANS.PRO'),
            },
        };

    return (
        <div className={styles.card}>
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
