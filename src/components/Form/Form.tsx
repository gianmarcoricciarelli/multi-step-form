import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../../contexts/FormStepsValidatorsContext';
import { SubscriptionStep } from '../../types/enums';
import { InputProps } from '../Input/Input';
import styles from './Form.module.scss';
import React, {
    Context,
    FC,
    PropsWithChildren,
    ReactElement,
    useContext,
    useEffect,
} from 'react';

export const Form: FC<PropsWithChildren> = ({ children }) => {
    console.log('Rendering Form');

    const {
        globalFormState: { userCanProceed, setUserCanProceed },
        [SubscriptionStep.UserDataForm]: {
            params: { validInputsIds },
        },
    } = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );

    useEffect(() => {
        if (validInputsIds.length === 3) {
            if (!userCanProceed) {
                setUserCanProceed(true);
            }
        } else {
            if (userCanProceed) {
                setUserCanProceed(false);
            }
        }
    }, [setUserCanProceed, userCanProceed, validInputsIds.length]);

    return (
        <form className={styles.container} noValidate>
            <div className={styles['input-container']}>
                {React.Children.map(
                    children as ReactElement<InputProps>[],
                    (child) =>
                        React.cloneElement(child, {
                            ...child.props,
                        }),
                )}
            </div>
        </form>
    );
};
