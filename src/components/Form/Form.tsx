import { SubscriptionStep, InputType } from '../../types/enums';
import { InputProps } from '../Input/Input';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../SubscriptionForm/SubscriptionForm.context';
import styles from './Form.module.scss';
import { useFormValidators } from './useFormValidators';
import React, {
    FC,
    type FormEvent,
    PropsWithChildren,
    ReactElement,
    useMemo,
    useState,
    useContext,
    Context,
} from 'react';

export const Form: FC<PropsWithChildren> = ({ children }) => {
    const validators = useFormValidators();

    const { step, setStep }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const [invalidInputs, setInvalidInputs] = useState<string[]>([]);

    const inputIdsToTypeMap: Record<string, string> = useMemo(() => {
        const childrenArray = React.Children.toArray(children);

        return Object.fromEntries(
            childrenArray.map((child) => [
                (child as ReactElement<InputProps>).props.id,
                (child as ReactElement<InputProps>).props.type,
            ]),
        );
    }, [children]);

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const dataObj = Object.fromEntries(formData.entries());
        const _invalidInputs: string[] = [];

        for (const [id, type] of Object.entries(inputIdsToTypeMap)) {
            if (!validators[type as InputType].isValid(dataObj[id] as string)) {
                _invalidInputs.push(id);
            }
        }

        if (_invalidInputs.length) {
            setInvalidInputs(_invalidInputs);
            return;
        }

        setStep((step + 1) as SubscriptionStep);
    };

    return (
        <form
            className={styles.container}
            onSubmit={onSubmitHandler}
            noValidate
        >
            <div className={styles['input-container']}>
                {React.Children.map(
                    children as ReactElement<InputProps>[],
                    (child) =>
                        React.cloneElement(child, {
                            ...child.props,
                            isInvalid: invalidInputs.includes(child.props.id),
                        }),
                )}
            </div>
        </form>
    );
};
