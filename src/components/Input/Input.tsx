import styles from './Input.module.scss';

interface InputProps {
    id: string;
    type: 'text' | 'tel' | 'number';
    placeHolder: string;
    labelText?: string;
}

export function Input({ id, type, placeHolder, labelText }: InputProps) {
    return (
        <div className={styles['container']}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input id={id} name={id} type={type} placeholder={placeHolder} />
        </div>
    );
}
