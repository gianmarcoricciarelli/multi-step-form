import { AddOns } from '../../../../types/enums';
import { AddOnCard } from './AddOnCard/AddOnCard';
import styles from './ThirdStep.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AddOn {
    title: AddOns;
    subtitle: string;
    monthlyAmount: string;
    yearlyAmount: string;
}

export const ThirdStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    const addOns: AddOn[] = [
        {
            title: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.TITLE'),
            subtitle: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.SUBTITLE'),
            monthlyAmount: t(
                'THIRD_STEP.ADD_ONS.ONLINE_SERVICE.MONTHLY_AMOUNT',
            ),
            yearlyAmount: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.YEARLY_AMOUNT'),
        },
        {
            title: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.TITLE'),
            subtitle: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.SUBTITLE'),
            monthlyAmount: t(
                'THIRD_STEP.ADD_ONS.LARGER_STORAGE.MONTHLY_AMOUNT',
            ),
            yearlyAmount: t('THIRD_STEP.ADD_ONS.LARGER_STORAGE.YEARLY_AMOUNT'),
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
    ];
    return (
        <div className={styles['third-step-container']}>
            {addOns.map((addOn) => (
                <AddOnCard key={addOn.title} {...addOn} />
            ))}
        </div>
    );
};
