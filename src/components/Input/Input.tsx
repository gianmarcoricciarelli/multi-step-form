import {
    FormDataContext,
    FormDataContextProps,
} from '../../contexts/FormDataContext';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from '../../contexts/FormStepsValidatorsContext';
import { InputType, SubscriptionStep } from '../../types/enums';
import { Label } from '../Label/Label';
import styles from './Input.module.scss';
import { useFormValidators } from './useFormValidators';
import { ChangeEventHandler, Context, FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface InputProps {
    id: InputType;
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
    const {
        [SubscriptionStep.UserDataForm]: {
            data: { [type]: currentValue },
            setData,
        },
    } = useContext(FormDataContext as Context<FormDataContextProps>);

    const validatorObj = useFormValidators(type);

    const [inputIsPristine, setInputIsPristine] = useState(true);

    const isInvalid = !validInputsIds.includes(id) && !inputIsPristine;

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({
        target: { value },
    }) => {
        setData((prevData) => ({ ...prevData, [type]: value }));

        if (inputIsPristine) {
            setInputIsPristine(false);
        }

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
                value={currentValue}
                formNoValidate
                onChange={onChangeHandler}
            />
        </div>
    );
};
