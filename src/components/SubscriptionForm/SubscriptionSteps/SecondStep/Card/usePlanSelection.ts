import advancedIcon from '../../../../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../../../../assets/images/icon-arcade.svg';
import proIcon from '../../../../../assets/images/icon-pro.svg';
import { PlanName } from '../../../../../types/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface PlanIconAndLabel {
    icon: string;
    label: string;
}
type PlanNameToIconMap = Record<PlanName, PlanIconAndLabel>;

export function usePlanSelection() {
    const { t } = useTranslation('subscriptionSteps');

    const planNameToIconMap: PlanNameToIconMap = useMemo<PlanNameToIconMap>(
        () => ({
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
        }),
        [t],
    );

    const toReturn: {
        planNameToIconMap: PlanNameToIconMap;
    } = useMemo<{ planNameToIconMap: PlanNameToIconMap }>(
        () => ({
            planNameToIconMap,
        }),
        [planNameToIconMap],
    );

    return toReturn;
}
