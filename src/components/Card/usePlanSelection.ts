import {
    FormDataContext,
    FormDataContextProps,
} from '../../contexts/FormDataContext';
import { PlansNames, SubscriptionStep } from '../../types/enums';
import { Context, useCallback, useContext, useMemo } from 'react';

export function usePlanSelection(): {
    onCardClickHandler: (plan: PlansNames, freeMonths: number) => void;
} {
    const {
        [SubscriptionStep.SubscriptionSelection]: { setData },
    } = useContext(FormDataContext as Context<FormDataContextProps>);

    const onCardClickHandler = useCallback(
        (plan: PlansNames) => {
            setData((prevData) => ({ ...prevData, plan }));
        },
        [setData],
    );

    const toReturn = useMemo<{
        onCardClickHandler: (plan: PlansNames, freeMonths: number) => void;
    }>(
        () => ({
            onCardClickHandler,
        }),
        [onCardClickHandler],
    );

    return toReturn;
}
