import styles from './Input.module.scss';

interface InputProps {
    id: string;
    type: 'text' | 'tel' | 'email';
    placeHolder: string;
    required?: boolean;
    labelText?: string;
}

export function Input({
    id,
    type,
    placeHolder,
    required,
    labelText,
}: InputProps) {
    return (
        <div className={styles['container']}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeHolder}
                required={required}
            />
        </div>
    );
}
