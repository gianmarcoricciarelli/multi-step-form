import { SubscriptionStep } from '../../types/enums';
import { Label } from '../Label/Label';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../SubscriptionForm/FormStepsValidatorsContext';
import styles from './Input.module.scss';
import { useFormValidators } from './useFormValidators';
import { ChangeEventHandler, Context, FC, useContext } from 'react';
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
}

export const Input: FC<InputProps> = ({
    id,
    type,
    isRequired,
    placeHolder,
    labelText,
}) => {
    const { t } = useTranslation('input');

    const {
        [SubscriptionStep.UserDataForm]: {
            params: { validInputsIds, setValidInputIds },
        },
    } = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );

    const validatorObj = useFormValidators(type);

    const isInvalid = validInputsIds.includes(id);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({
        target: { value },
    }) => {
        if (validatorObj.isValid(value)) {
            if (!validInputsIds.includes(id)) {
                setValidInputIds((prevValidInputIds) => [
                    ...prevValidInputIds,
                    id,
                ]);
            }
        } else {
            if (validInputsIds.includes(id)) {
                setValidInputIds((prevValidInputIds) =>
                    prevValidInputIds.filter(
                        (validInputId) => validInputId !== id,
                    ),
                );
            }
        }
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
