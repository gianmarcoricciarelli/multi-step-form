import { usePlansData } from '../components/SubscriptionForm/usePlansData';
import { SubscriptionStep } from '../types/enums';
import { AddOn, Plan } from '../types/types';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react';

export interface SubscriptionContextProps {
    step: SubscriptionStep;
    setStep: Dispatch<SetStateAction<SubscriptionStep>>;
    addOns: AddOn[];
    setAddOns: Dispatch<SetStateAction<AddOn[]>>;
    plans: Plan[];
}

export const SubscriptionContext =
    createContext<SubscriptionContextProps | null>(null);

export const SubscriptionContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [step, setStep] = useState<SubscriptionStep>(0 as SubscriptionStep);
    const [addOns, setAddOns] = useState<AddOn[]>([]);

    const plans = usePlansData();

    const contextInternalState: SubscriptionContextProps = useMemo(
        () => ({
            step,
            setStep,
            addOns,
            setAddOns,
            plans,
        }),
        [addOns, plans, step],
    );

    return (
        <SubscriptionContext.Provider value={contextInternalState}>
            {children}
        </SubscriptionContext.Provider>
    );
};
