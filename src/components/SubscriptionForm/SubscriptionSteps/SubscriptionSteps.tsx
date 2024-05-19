import {
    SubscriptionContext,
    SubscriptionContextProps,
} from '../../../contexts/SubscriptionForm.context';
import { SubscriptionStep } from '../../../types/enums';
import { Label } from '../../Label/Label';
import styles from './SubscriptionSteps.module.scss';
import { Context, FC, useContext } from 'react';

export const SubscriptionSteps: FC = () => {
    const steps: string[] = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

    const { step, setStep }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const onClickHandler = (newStep: SubscriptionStep) => {
        setStep(newStep);
    };

    return (
        <div className={styles['container']}>
            {steps.map((stepName, index) => (
                <div
                    key={stepName}
                    className={styles.step}
                    onClick={() => onClickHandler(index as SubscriptionStep)}
                >
                    <div
                        className={`${styles['step-number']}${step === index ? ` ${styles['step-number__selected']}` : ''}`}
                    >
                        <Label
                            color={step === index ? 'marine-blue' : 'white'}
                        >{`${index + 1}`}</Label>
                    </div>
                    <div className={styles['step-info']}>
                        <Label
                            color="light_gray"
                            size="small"
                        >{`STEP ${index + 1}`}</Label>
                        <Label color="white" fontStyle="bold">
                            {stepName}
                        </Label>
                    </div>
                </div>
            ))}
        </div>
    );
};
