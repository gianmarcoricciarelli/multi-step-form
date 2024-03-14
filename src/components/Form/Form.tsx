import type { FormEvent } from 'react';
import styles from './Form.module.scss';

export function Form({ children }: React.PropsWithChildren) {
    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        for (const iterator of formData.entries()) {
            console.log(iterator);
        }
    };

    return (
        <form className={styles.container} onSubmit={onSubmitHandler}>
            <div className={styles['input-container']}>{children}</div>
            <button type="submit">Next Step</button>
        </form>
    );
}
