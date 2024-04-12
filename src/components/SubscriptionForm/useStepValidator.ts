import { SubscriptionStep } from '../../enums/enums';
import { useCallback, useMemo } from 'react';

type Validator = () => boolean;

export function useStepValidator() {
    const isFormValid = useCallback(() => false, []);

    const validators = useMemo<Record<SubscriptionStep, Validator>>(
        () => ({
            [SubscriptionStep.UserDataForm]: isFormValid,
            [SubscriptionStep.SubscriptionSelection]: () => true,
        }),
        [isFormValid],
    );

    return validators;
}
