import { InputProps } from '../Input/Input';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../SubscriptionForm/SubscriptionForm.context';
import styles from './Form.module.scss';
import React, {
    FC,
    PropsWithChildren,
    ReactElement,
    useState,
    useContext,
    Context,
    useEffect,
} from 'react';

export const Form: FC<PropsWithChildren> = ({ children }) => {
    const { setUserCanProceed } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const [invalidInputs, setInvalidInputs] = useState<string[]>([]);
    const [inputsArePristine, setInputsArePristine] = useState(true);

    useEffect(() => {
        if (!invalidInputs.length && !inputsArePristine) {
            setUserCanProceed(true);
        } else {
            setUserCanProceed(false);
        }
    }, [inputsArePristine, invalidInputs.length, setUserCanProceed]);

    return (
        <form className={styles.container} noValidate>
            <div className={styles['input-container']}>
                {React.Children.map(
                    children as ReactElement<InputProps>[],
                    (child) =>
                        React.cloneElement(child, {
                            ...child.props,
                            isInvalid: invalidInputs.includes(child.props.id),
                            onInputIsInvalid: setInvalidInputs,
                            onInputChangedForFirstTime: setInputsArePristine,
                        }),
                )}
            </div>
        </form>
    );
};
