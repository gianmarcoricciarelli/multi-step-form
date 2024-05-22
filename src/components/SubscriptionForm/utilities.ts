import { SubscriptionStep } from '../../types/enums';
import i18next from 'i18next';

const t = i18next.getFixedT('en', 'subscriptionSteps');

interface HeaderLabels {
    title: string;
    subtitle: string;
}

export const headerLabelsToStepMap: Record<number, HeaderLabels | null> = {
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
    [SubscriptionStep.Summary]: {
        title: t('FOURTH_STEP.TITLE'),
        subtitle: t('FOURTH_STEP.SUBTITLE'),
    },
    [SubscriptionStep.Final]: null,
};
