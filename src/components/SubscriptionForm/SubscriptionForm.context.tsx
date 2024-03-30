import { SubscriptionStep } from '../../types/types';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react';

interface SubscriptionContextProps {
    step: SubscriptionStep;
    setStep: Dispatch<SetStateAction<SubscriptionStep>>;
}

const SubscriptionContext = createContext<SubscriptionContextProps | null>(
    null,
);

export const SubscriptionContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [step, setStep] = useState<SubscriptionStep>(0 as SubscriptionStep);

    const contextInternalState: SubscriptionContextProps = useMemo(
        () => ({
            step,
            setStep,
        }),
        [step],
    );

    return (
        <SubscriptionContext.Provider value={contextInternalState}>
            {children}
        </SubscriptionContext.Provider>
    );
};
