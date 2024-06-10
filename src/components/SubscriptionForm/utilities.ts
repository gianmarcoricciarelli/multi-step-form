import { SubscriptionStep } from '../../types/enums';
import { t } from 'i18next';

interface HeaderLabels {
    title: string;
    subtitle: string;
}

export const headerLabelsToStepMap: Record<number, HeaderLabels | null> = {
    [SubscriptionStep.UserDataForm]: {
        title: t('FIRST_STEP.TITLE', { ns: 'subscriptionSteps' }),
        subtitle: t('FIRST_STEP.SUBTITLE', { ns: 'subscriptionSteps' }),
    },
    [SubscriptionStep.SubscriptionSelection]: {
        title: t('SECOND_STEP.TITLE', { ns: 'subscriptionSteps' }),
        subtitle: t('SECOND_STEP.SUBTITLE', { ns: 'subscriptionSteps' }),
    },
    [SubscriptionStep.AddOnsSelection]: {
        title: t('THIRD_STEP.TITLE', { ns: 'subscriptionSteps' }),
        subtitle: t('THIRD_STEP.SUBTITLE', { ns: 'subscriptionSteps' }),
    },
    [SubscriptionStep.Summary]: {
        title: t('FOURTH_STEP.TITLE', { ns: 'subscriptionSteps' }),
        subtitle: t('FOURTH_STEP.SUBTITLE', { ns: 'subscriptionSteps' }),
    },
    [SubscriptionStep.Final]: null,
};
