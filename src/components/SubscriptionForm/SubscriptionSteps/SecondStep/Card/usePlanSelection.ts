import advancedIcon from '../../../../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../../../../assets/images/icon-arcade.svg';
import proIcon from '../../../../../assets/images/icon-pro.svg';
import { PlansNames } from '../../../../../enums/enums';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../SubscriptionForm.context';
import { Context, Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface PlanIconAndLabel {
    icon: string;
    label: string;
}
type PlanNameToIconMap = Record<PlansNames, PlanIconAndLabel>;

export function usePlanSelection(): {
    planNameToIconMap: PlanNameToIconMap;
    onCardClickHandler: Dispatch<SetStateAction<PlansNames>>;
} {
    const { t } = useTranslation('subscriptionSteps');

    const { setPlan } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
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
        onCardClickHandler: Dispatch<SetStateAction<PlansNames>>;
    }>(
        () => ({
            planNameToIconMap,
            onCardClickHandler: setPlan,
        }),
        [planNameToIconMap, setPlan],
    );

    return toReturn;
}
