import { PlanName, SubscriptionStep } from '../../types/types';
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
    plan: PlanName;
    setPlan: Dispatch<SetStateAction<PlanName>>;
}

export const SubscriptionContext =
    createContext<SubscriptionContextProps | null>(null);

export const SubscriptionContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [step, setStep] = useState<SubscriptionStep>(0 as SubscriptionStep);
    const [plan, setPlan] = useState<PlanName>('ARCADE');

    const contextInternalState: SubscriptionContextProps = useMemo(
        () => ({
            step,
            setStep,
            plan,
            setPlan,
        }),
        [plan, step],
    );

    return (
        <SubscriptionContext.Provider value={contextInternalState}>
            {children}
        </SubscriptionContext.Provider>
    );
};
