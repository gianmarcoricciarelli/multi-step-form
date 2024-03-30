import { Label } from '../../Label/Label';
import styles from './SubscriptionSteps.module.scss';
import { FC } from 'react';

export const SubscriptionSteps: FC = () => {
    const steps: string[] = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

    return (
        <div className={styles['container']}>
            {steps.map((stepName, index) => (
                <div>
                    <div className={styles['step-number']}>
                        <Label
                            color="marine-blue"
                            size="small"
                        >{`${index + 1}`}</Label>
                    </div>
                    <div className={styles['step-info']}>
                        <Label color="white">{`STEP ${index + 1}`}</Label>
                        <Label color="white" fontStyle="bold">
                            {stepName}
                        </Label>
                    </div>
                </div>
            ))}
        </div>
    );
};
