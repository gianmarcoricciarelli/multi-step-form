import advancedIcon from '../assets/images/icon-advanced.svg';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import proIcon from '../assets/images/icon-pro.svg';
import { PlansNames } from '../types/enums';
import { AddOn, PlanIconAndLabel } from '../types/types';
import { FC, PropsWithChildren, createContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type PlanNameToIconMap = Record<PlansNames, PlanIconAndLabel>;
export interface FormStaticDataContextProps {
    plans: PlanNameToIconMap;
    addOns: AddOn[];
}

export const FormStaticDataContext =
    createContext<FormStaticDataContextProps | null>(null);

export const FormStaticDataContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const { t } = useTranslation('subscriptionSteps');

    const plans: PlanNameToIconMap = useMemo<PlanNameToIconMap>(
        () => ({
            [PlansNames.Arcade]: {
                icon: arcadeIcon,
                label: t('SECOND_STEP.PLANS.ARCADE'),
            },
            [PlansNames.Advanced]: {
                icon: advancedIcon,
                label: t('SECOND_STEP.PLANS.ADVANCED'),
            },
            [PlansNames.Pro]: {
                icon: proIcon,
                label: t('SECOND_STEP.PLANS.PRO'),
            },
        }),
        [t],
    );
    const addOns: AddOn[] = useMemo(
        () => [
            {
                title: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.TITLE'),
                subtitle: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.SUBTITLE'),
                monthlyAmount: t(
                    'THIRD_STEP.ADD_ONS.ONLINE_SERVICE.MONTHLY_AMOUNT',
                ),
                yearlyAmount: t(
                    'THIRD_STEP.ADD_ONS.ONLINE_SERVICE.YEARLY_AMOUNT',
                ),
            },
            {
                title: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.TITLE'),
                subtitle: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.SUBTITLE'),
                monthlyAmount: t(
                    'THIRD_STEP.ADD_ONS.LARGER_STORAGE.MONTHLY_AMOUNT',
                ),
                yearlyAmount: t(
                    'THIRD_STEP.ADD_ONS.LARGER_STORAGE.YEARLY_AMOUNT',
                ),
            },
            {
                title: t('THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.TITLE'),
                subtitle: t('THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.SUBTITLE'),
                monthlyAmount: t(
                    'THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.MONTHLY_AMOUNT',
                ),
                yearlyAmount: t(
                    'THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.YEARLY_AMOUNT',
                ),
            },
        ],
        [t],
    );

    const staticData = useMemo(
        () => ({
            plans,
            addOns,
        }),
        [addOns, plans],
    );

    return (
        <FormStaticDataContext.Provider value={staticData}>
            {children}
        </FormStaticDataContext.Provider>
    );
};
