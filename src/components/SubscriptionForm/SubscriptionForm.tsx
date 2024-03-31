import {
    SubscriptionContext,
    SubscriptionContextProps,
} from './SubscriptionForm.context';
import styles from './SubscriptionForm.module.scss';
import { FirstStep } from './SubscriptionSteps/FirstStep/FirstStep';
import { SecondStep } from './SubscriptionSteps/SecondStep/SecondStep';
import { SubscriptionSteps } from './SubscriptionSteps/SubscriptionSteps';
import { Context, FC, useContext } from 'react';

export const SubscriptionForm: FC = () => {
    const { step }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    return (
        <div className={styles.container}>
            <SubscriptionSteps />
            <div className={styles['subscription-step__container']}>
                {step === 0 && <FirstStep />}
                {step === 1 && <SecondStep />}
            </div>
        </div>
    );
};
