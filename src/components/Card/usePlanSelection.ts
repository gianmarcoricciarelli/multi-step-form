import advancedIcon from '../../../../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../../../../assets/images/icon-arcade.svg';
import proIcon from '../../../../../assets/images/icon-pro.svg';
import { PlansNames } from '../../../../../types/enums';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../SubscriptionForm.context';
import { Context, useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface PlanIconAndLabel {
    icon: string;
    label: string;
}
type PlanNameToIconMap = Record<PlansNames, PlanIconAndLabel>;

export function usePlanSelection(): {
    planNameToIconMap: PlanNameToIconMap;
    onCardClickHandler: (plan: PlansNames, freeMonths: number) => void;
} {
    const { t } = useTranslation('subscriptionSteps');

    const { setPlan, setFreeMonths } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const onCardClickHandler = useCallback(
        (plan: PlansNames, freeMonths: number) => {
            setPlan(plan);
            setFreeMonths(freeMonths);
        },
        [setFreeMonths, setPlan],
    );

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

    const toReturn = useMemo<{
        planNameToIconMap: PlanNameToIconMap;
        onCardClickHandler: (plan: PlansNames, freeMonths: number) => void;
    }>(
        () => ({
            planNameToIconMap,
            onCardClickHandler,
        }),
        [onCardClickHandler, planNameToIconMap],
    );

    return toReturn;
}
