import { FC, PropsWithChildren } from 'react';
import styles from './SubscriptionForm.module.scss';

export const SubscriptionForm: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div>subscription steps</div>
            <div className="subscription-step__container">{children}</div>
        </div>
    );
};
