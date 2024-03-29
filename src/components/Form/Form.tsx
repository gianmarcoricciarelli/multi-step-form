import { FormValidator, InputType } from '../../types/types';
import React, {
    FC,
    type FormEvent,
    PropsWithChildren,
    ReactElement,
    useMemo,
    useState,
} from 'react';
import { InputProps } from '../Input/Input';
import styles from './Form.module.scss';

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
                            invalid: invalidInputs.includes(child.props.id),
                        }),
                )}
            </div>
            <button type="submit">Next Step</button>
        </form>
    );
};
