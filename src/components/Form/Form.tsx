import { InputProps } from '../Input/Input';
import styles from './Form.module.scss';
import React, { FC, PropsWithChildren, ReactElement } from 'react';

export const Form: FC<PropsWithChildren> = ({ children }) => {
    return (
        <form className={styles.container} noValidate>
            <div className={styles['input-container']}>
                {React.Children.map(
                    children as ReactElement<InputProps>[],
                    (child) =>
                        React.cloneElement(child, {
                            ...child.props,
                        }),
                )}
            </div>
        </form>
    );
};
