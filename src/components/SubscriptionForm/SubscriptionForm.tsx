import styles from './SubscriptionForm.module.scss';
import { SubscriptionSteps } from './SubscriptionSteps/SubscriptionSteps';
import { FC, PropsWithChildren } from 'react';

export const SubscriptionForm: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <SubscriptionSteps />
            <div className={styles['subscription-step__container']}>
                {children}
            </div>
        </div>
    );
};
