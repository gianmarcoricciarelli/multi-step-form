import { InputType } from '../../types/types';
import { Label } from '../Label/Label';
import styles from './Input.module.scss';
import { FC } from 'react';

export interface InputProps {
    id: string;
    type: InputType;
    isRequired?: boolean;
    placeHolder: string;
    labelText?: string;
    isInvalid?: boolean;
}

export const Input: FC<InputProps> = ({
    id,
    type,
    isRequired,
    placeHolder,
    labelText,
    isInvalid,
}) => {
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
                        This field is required
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
            />
        </div>
    );
};
