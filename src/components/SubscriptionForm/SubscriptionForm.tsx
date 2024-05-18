import { SubscriptionStep } from '../../types/enums';
import {
    FormStepsValidatorsContext,
    FormStepsValidatorsContextProps,
} from './FormStepsValidatorsContext';
import {
    SubscriptionContext,
    SubscriptionContextProps,
} from './SubscriptionForm.context';
import styles from './SubscriptionForm.module.scss';
import { FinalStep } from './SubscriptionSteps/FinalStep/FinalStep';
import { FirstStep } from './SubscriptionSteps/FirstStep/FirstStep';
import { FourthStep } from './SubscriptionSteps/FourthStep/FourthStep';
import { SecondStep } from './SubscriptionSteps/SecondStep/SecondStep';
import { StepHeader } from './SubscriptionSteps/StepHeader/StepHeader';
import { SubscriptionSteps } from './SubscriptionSteps/SubscriptionSteps';
import { ThirdStep } from './SubscriptionSteps/ThirdStep/ThirdStep';
import { headerLabelsToStepMap } from './utilities';
import { Context, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderLabels {
    title: string;
    subtitle: string;
}

export const SubscriptionForm: FC = () => {
    const {
        step,
        setStep,
        userCanProceed,
        setUserCanProceed,
    }: SubscriptionContextProps = useContext(
        SubscriptionContext as Context<SubscriptionContextProps>,
    );
    const stepsValidators = useContext(
        FormStepsValidatorsContext as Context<FormStepsValidatorsContextProps>,
    );

    const { t } = useTranslation('subscriptionSteps');

    return (
        <div className={styles.container}>
            <SubscriptionSteps />
            <div className={styles['subscription-step__container']}>
                <>
                    {step !== SubscriptionStep.Final && (
                        <StepHeader
                            title={headerLabelsToStepMap[step]!.title}
                            subtitle={headerLabelsToStepMap[step]!.subtitle}
                        />
                    )}
                    {step === SubscriptionStep.UserDataForm && <FirstStep />}
                    {step === SubscriptionStep.SubscriptionSelection && (
                        <SecondStep />
                    )}
                    {step === SubscriptionStep.AddOnsSelection && <ThirdStep />}
                    {step === SubscriptionStep.Summary && <FourthStep />}
                    {step === SubscriptionStep.Final && <FinalStep />}
                </>
                {step !== SubscriptionStep.Final && (
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
                            disabled={!userCanProceed}
                            type="submit"
                            onClick={() => {
                                setStep(
                                    (prevStep) =>
                                        (prevStep + 1) as SubscriptionStep,
                                );
                                setUserCanProceed(false);
                            }}
                        >
                            {t('NEXT_STEP')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
