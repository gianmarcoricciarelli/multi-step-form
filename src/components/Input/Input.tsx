import { useFormValidators } from '../Form/useFormValidators';
import { Label } from '../Label/Label';
import styles from './Input.module.scss';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
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
    isInvalid?: boolean;
    onInputIsInvalid?: Dispatch<SetStateAction<string[]>>;
    onInputChangedForFirstTime?: Dispatch<SetStateAction<boolean>>;
}

export const Input: FC<InputProps> = ({
    id,
    type,
    isRequired,
    placeHolder,
    labelText,
    isInvalid,
    onInputIsInvalid,
    onInputChangedForFirstTime,
}) => {
    const { t } = useTranslation('input');

    const validators = useFormValidators();

    const onChangeHandler = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        onInputChangedForFirstTime?.(false);
        onInputIsInvalid?.((prevInvalidInputsId) => {
            if (
                validators[type].isValid(value) &&
                prevInvalidInputsId.includes(id)
            ) {
                return prevInvalidInputsId.filter((inputId) => inputId !== id);
            }
            if (
                !validators[type].isValid(value) &&
                !prevInvalidInputsId.includes(id)
            ) {
                return [...prevInvalidInputsId, id];
            }
            return prevInvalidInputsId;
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
