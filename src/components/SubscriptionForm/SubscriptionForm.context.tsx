import { BillingModes, PlansNames, SubscriptionStep } from '../../types/enums';
import { AddOn, Plan } from '../../types/types';
import { usePlansData } from './usePlansData';
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
    billingMode: BillingModes.Monthly | BillingModes.Yearly;
    setBillingMode: Dispatch<SetStateAction<BillingModes>>;
    addOns: AddOn[];
    setAddOns: Dispatch<SetStateAction<AddOn[]>>;
    plans: Plan[];
    userCanProceed: boolean;
    setUserCanProceed: Dispatch<SetStateAction<boolean>>;
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
    const [userCanProceed, setUserCanProceed] = useState(false);

    const plans = usePlansData();

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
            plans,
            userCanProceed,
            setUserCanProceed,
        }),
        [addOns, billingMode, plan, plans, step, userCanProceed],
    );

    return (
        <SubscriptionContext.Provider value={contextInternalState}>
            {children}
        </SubscriptionContext.Provider>
    );
};
