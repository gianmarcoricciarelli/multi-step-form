import {
    FormDataContext,
    FormDataContextProps,
} from '../../../../contexts/FormDataContext';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../../../../contexts/FormStepsValidatorsContext';
import { SubscriptionStep } from '../../../../types/enums';
import { AddOn } from '../../../../types/types';
import { AddOnCard } from './AddOnCard/AddOnCard';
import styles from './ThirdStep.module.scss';
import { Context, FC, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ThirdStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    const {
        [SubscriptionStep.AddOnsSelection]: { data: selectedAddOns },
    } = useContext(FormDataContext as Context<FormDataContextProps>);
    const {
        globalFormState: { userCanProceed, setUserCanProceed },
    } = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );

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

    useEffect(() => {
        if (selectedAddOns.length) {
            if (!userCanProceed) {
                setUserCanProceed(true);
            }
        } else {
            if (userCanProceed) {
                setUserCanProceed(false);
            }
        }
    }, [selectedAddOns.length, setUserCanProceed, userCanProceed]);

    return (
        <div className={styles['third-step-container']}>
            {addOns.map((addOn) => (
                <AddOnCard key={addOn.title} {...addOn} />
            ))}
        </div>
    );
};
