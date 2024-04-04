import {
    FormValidator,
    InputType,
    SubscriptionStep,
} from '../../../../../types/types';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../../SubscriptionForm/SubscriptionForm.context';
import { InputProps } from '../Input/Input';
import styles from './Form.module.scss';
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
import { useTranslation } from 'react-i18next';

const validators: Record<InputType, FormValidator> = {
    text: {
        isValid(input) {
            return !!input?.length;
        },
    },
    tel: {
        isValid(input) {
            return !!input?.length;
        },
    },
    email: {
        isValid(input) {
            return !!input?.length;
        },
    },
};

export const Form: FC<PropsWithChildren> = ({ children }) => {
    const { t } = useTranslation();

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
            <button type="submit">{t('NEXT_STEP')}</button>
        </form>
    );
};
