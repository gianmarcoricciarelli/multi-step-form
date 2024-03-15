import { FC } from 'react';
import styles from './Input.module.scss';
import { InputType } from '../../types/types';

export interface InputProps {
    id: string;
    type: InputType;
    placeHolder: string;
    labelText?: string;
    invalid?: boolean;
}

export const Input: FC<InputProps> = ({
    id,
    type,
    placeHolder,
    labelText,
    invalid,
}) => {
    return (
        <div className={styles['container']}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                className={invalid ? styles['input__invalid'] : undefined}
                id={id}
                name={id}
                type={type}
                placeholder={placeHolder}
                formNoValidate
            />
        </div>
    );
};
