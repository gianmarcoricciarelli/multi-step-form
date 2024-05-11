import { BillingModes, PlansNames, SubscriptionStep } from '../../types/enums';
import { AddOn } from '../../types/types';
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
    plan: PlansNames;
    setPlan: Dispatch<SetStateAction<PlansNames>>;
    billingMode: BillingModes;
    setBillingMode: Dispatch<SetStateAction<BillingModes>>;
    addOns: AddOn[];
    setAddOns: Dispatch<SetStateAction<AddOn[]>>;
}

export const SubscriptionContext =
    createContext<SubscriptionContextProps | null>(null);

export const SubscriptionContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [step, setStep] = useState<SubscriptionStep>(0 as SubscriptionStep);
    const [plan, setPlan] = useState<PlansNames>(PlansNames.Arcade);
    const [billingMode, setBillingMode] = useState<BillingModes>(
        BillingModes.Monthly,
    );
    const [addOns, setAddOns] = useState<AddOn[]>([]);

    const contextInternalState: SubscriptionContextProps = useMemo(
        () => ({
            step,
            setStep,
            plan,
            setPlan,
            billingMode,
            setBillingMode,
            addOns,
            setAddOns,
        }),
        [addOns, billingMode, plan, step],
    );

    return (
        <SubscriptionContext.Provider value={contextInternalState}>
            {children}
        </SubscriptionContext.Provider>
    );
};
