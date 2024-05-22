import {
    FormDataContext,
    FormDataContextProps,
} from '../../../../contexts/FormDataContext';
import {
    FormStaticDataContext,
    FormStaticDataContextProps,
} from '../../../../contexts/FormStaticDataContext';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../../../../contexts/FormStepsValidatorsContext';
import { SubscriptionStep } from '../../../../types/enums';
import { AddOnCard } from './AddOnCard/AddOnCard';
import styles from './ThirdStep.module.scss';
import { Context, FC, useContext, useEffect } from 'react';

export const ThirdStep: FC = () => {
    const {
        [SubscriptionStep.AddOnsSelection]: { data: selectedAddOns },
    } = useContext(FormDataContext as Context<FormDataContextProps>);
    const {
        globalFormState: { userCanProceed, setUserCanProceed },
    } = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );
    const { addOns } = useContext(
        FormStaticDataContext as Context<FormStaticDataContextProps>,
    );

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
