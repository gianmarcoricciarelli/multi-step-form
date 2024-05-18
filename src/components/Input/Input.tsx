import { useFormValidators } from '../Form/useFormValidators';
import { Label } from '../Label/Label';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../SubscriptionForm/SubscriptionForm.context';
import styles from './Input.module.scss';
import {
    ChangeEvent,
    Context,
    Dispatch,
    FC,
    SetStateAction,
    useContext,
} from 'react';
import { useTranslation } from 'react-i18next';

enum InputType {
    Text = 'text',
    Telephone = 'tel',
    Email = 'email',
}

export interface InputProps {
    id: string;
    type: InputType;
    isRequired?: boolean;
    placeHolder: string;
    labelText?: string;
    isInvalid: boolean;
    onInputIsInvalid: Dispatch<SetStateAction<string[]>>;
}

export const Input: FC<InputProps> = ({
    id,
    type,
    isRequired,
    placeHolder,
    labelText,
    isInvalid,
    onInputIsInvalid,
}) => {
    const { t } = useTranslation('input');

    const { [type]: validator } = useFormValidators();

    const { setUserCanProceed } = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const onChangeHandler = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        onInputIsInvalid?.((prevState) => {
            const inputIsValid = validator.isValid(value);
            const idHasToBeRemoved = inputIsValid && prevState.includes(id);
            const idHasToBeAdded = !inputIsValid && !prevState.includes(id);

            if (idHasToBeRemoved) {
                return prevState.filter(
                    (invalidInputIds) => invalidInputIds !== id,
                );
            } else if (idHasToBeAdded) {
                return [...prevState, id];
            }

            return prevState;
        });
    };

    return (
        <div className={styles['container']}>
            <div className={styles['labels-container']}>
                {labelText && (
                    <Label
                        size="small"
                        color="marine-blue"
                        fontStyle="semi-bold"
                        htmlFor={id}
                    >
                        {labelText}
                    </Label>
                )}
                {isRequired && isInvalid && (
                    <Label
                        size="small"
                        color="strawberry-red"
                        fontStyle="bold"
                        htmlFor={id}
                    >
                        {t('REQUIRED_ERROR_MESSAGE')}
                    </Label>
                )}
            </div>
            <input
                className={isInvalid ? styles['input__invalid'] : undefined}
                id={id}
                name={id}
                type={type}
                placeholder={placeHolder}
                formNoValidate
                onChange={onChangeHandler}
            />
        </div>
    );
};
