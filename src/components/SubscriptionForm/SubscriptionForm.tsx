import { SubscriptionStep } from '../../types/enums';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from './SubscriptionForm.context';
import styles from './SubscriptionForm.module.scss';
import { FirstStep } from './SubscriptionSteps/FirstStep/FirstStep';
import { SecondStep } from './SubscriptionSteps/SecondStep/SecondStep';
import { StepHeader } from './SubscriptionSteps/StepHeader/StepHeader';
import { SubscriptionSteps } from './SubscriptionSteps/SubscriptionSteps';
import { ThirdStep } from './SubscriptionSteps/ThirdStep/ThirdStep';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderLabels {
    title: string;
    subtitle: string;
}

export const SubscriptionForm: FC = () => {
    const { step, setStep }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );

    const { t } = useTranslation('subscriptionSteps');

    const headerLabelsToStepMap: Record<number, HeaderLabels> = {
        [SubscriptionStep.UserDataForm]: {
            title: t('FIRST_STEP.TITLE'),
            subtitle: t('FIRST_STEP.SUBTITLE'),
        },
        [SubscriptionStep.SubscriptionSelection]: {
            title: t('SECOND_STEP.TITLE'),
            subtitle: t('SECOND_STEP.SUBTITLE'),
        },
        [SubscriptionStep.AddOnsSelection]: {
            title: t('THIRD_STEP.TITLE'),
            subtitle: t('THIRD_STEP.SUBTITLE'),
        },
    };

    return (
        <div className={styles.container}>
            <SubscriptionSteps />
            <div className={styles['subscription-step__container']}>
                <>
                    <StepHeader
                        title={headerLabelsToStepMap[step].title}
                        subtitle={headerLabelsToStepMap[step].subtitle}
                    />
                    {step === SubscriptionStep.UserDataForm && <FirstStep />}
                    {step === SubscriptionStep.SubscriptionSelection && (
                        <SecondStep />
                    )}
                    {step === SubscriptionStep.AddOnsSelection && <ThirdStep />}
                </>
                <div
                    className={`${styles['buttons-container']}${step !== 0 ? ` ${styles['buttons-container-with-go-back']}` : ''}`}
                >
                    {step !== 0 && (
                        <button
                            className={styles['go-back-button']}
                            onClick={() =>
                                setStep(
                                    (prevStep) =>
                                        (prevStep - 1) as SubscriptionStep,
                                )
                            }
                        >
                            {t('GO_BACK')}
                        </button>
                    )}
                    <button
                        className={styles['next-step-button']}
                        onClick={() =>
                            setStep(
                                (prevStep) =>
                                    (prevStep + 1) as SubscriptionStep,
                            )
                        }
                    >
                        {t('NEXT_STEP')}
                    </button>
                </div>
            </div>
        </div>
    );
};
