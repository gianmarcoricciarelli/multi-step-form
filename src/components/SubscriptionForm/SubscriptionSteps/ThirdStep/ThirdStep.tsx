import { t } from 'i18next';
import { FC } from 'react';

interface AddOn {
    title: string;
    subtitle: string;
    monthlyAmount: string;
    yearlyAmount: string;
}
const addOns: AddOn[] = [
    {
        title: t('THIRD_STEP.ADD_ONS.ONLINE_STORAGE.TITLE', {
            ns: 'subscriptionSteps',
        }),
        subtitle: t('THIRD_STEP.ADD_ONS.ONLINE_STORAGE.SUBTITLE', {
            ns: 'subscriptionSteps',
        }),
        monthlyAmount: t('THIRD_STEP.ADD_ONS.ONLINE_STORAGE.MONTHLY_AMOUNT', {
            ns: 'subscriptionSteps',
        }),
        yearlyAmount: t('THIRD_STEP.ADD_ONS.ONLINE_STORAGE.YEARLY_AMOUNT', {
            ns: 'subscriptionSteps',
        }),
    },
    {
        title: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.TITLE', {
            ns: 'subscriptionSteps',
        }),
        subtitle: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.SUBTITLE', {
            ns: 'subscriptionSteps',
        }),
        monthlyAmount: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.MONTHLY_AMOUNT', {
            ns: 'subscriptionSteps',
        }),
        yearlyAmount: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.YEARLY_AMOUNT', {
            ns: 'subscriptionSteps',
        }),
    },
    {
        title: t('THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.TITLE', {
            ns: 'subscriptionSteps',
        }),
        subtitle: t('THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.SUBTITLE', {
            ns: 'subscriptionSteps',
        }),
        monthlyAmount: t(
            'THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.MONTHLY_AMOUNT',
            {
                ns: 'subscriptionSteps',
            },
        ),
        yearlyAmount: t(
            'THIRD_STEP.ADD_ONS.CUSTOMIZABLE_PROFILE.YEARLY_AMOUNT',
            {
                ns: 'subscriptionSteps',
            },
        ),
    },
];

export const ThirdStep: FC = () => {
    console.log(addOns);
    return (
        <>
            {addOns.map((addOn) => (
                <p>{addOn.title}</p>
            ))}
        </>
    );
};
