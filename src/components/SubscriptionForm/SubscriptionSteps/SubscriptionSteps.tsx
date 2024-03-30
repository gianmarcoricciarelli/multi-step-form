import { Label } from '../../Label/Label';
import styles from './SubscriptionSteps.module.scss';
import { FC } from 'react';

export const SubscriptionSteps: FC = () => {
    const steps: string[] = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
    const selectedStep = 0;

    return (
        <div className={styles['container']}>
            {steps.map((stepName, index) => (
                <div className={styles.step}>
                    <div
                        className={`${styles['step-number']}${selectedStep === index ? ` ${styles['step-number__selected']}` : ''}`}
                    >
                        <Label
                            color={
                                selectedStep === index ? 'marine-blue' : 'white'
                            }
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
