import {
    SubscriptionContext,
    SubscriptionContextProps,
} from './SubscriptionForm.context';
import styles from './SubscriptionForm.module.scss';
import { FirstStep } from './SubscriptionSteps/FirstStep/FirstStep';
import { SecondStep } from './SubscriptionSteps/SecondStep/SecondStep';
import { StepHeader } from './SubscriptionSteps/StepHeader/StepHeader';
import { SubscriptionSteps } from './SubscriptionSteps/SubscriptionSteps';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderLabels {
    title: string;
    subtitle: string;
}

export const SubscriptionForm: FC = () => {
    const { step }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const { t } = useTranslation('subscriptionSteps');

    const headerLabelsToStepMap: Record<number, HeaderLabels> = {
        0: {
            title: t('FIRST_STEP.TITLE'),
            subtitle: t('FIRST_STEP.SUBTITLE'),
        },
        1: {
            title: t('SECOND_STEP.TITLE'),
            subtitle: t('SECOND_STEP.SUBTITLE'),
        },
    };

    return (
        <div className={styles.container}>
            <SubscriptionSteps />
            <div className={styles['subscription-step__container']}>
                <StepHeader
                    title={headerLabelsToStepMap[step].title}
                    subtitle={headerLabelsToStepMap[step].subtitle}
                />
                {step === 0 && <FirstStep />}
                {step === 1 && <SecondStep />}
            </div>
        </div>
    );
};
