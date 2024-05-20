import {
    BillingModes,
    InputType,
    PlansNames,
    SubscriptionStep,
} from '../types/enums';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react';

type StepData<T> = {
    data: T;
    setData: Dispatch<SetStateAction<T>>;
};
type FirstStepData = {
    [valueof in InputType]: string;
};
type SecondStepData = {
    plan: PlansNames;
    billingMode: BillingModes;
};

export interface FormDataContextProps {
    [SubscriptionStep.UserDataForm]: StepData<FirstStepData>;
    [SubscriptionStep.SubscriptionSelection]: StepData<SecondStepData>;
}

export const FormDataContext = createContext<FormDataContextProps | null>(null);

export const FormDataContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [firstStepData, setFirstStepData] = useState<FirstStepData>({
        text: '',
        email: '',
        tel: '',
    });
    const [secondStepData, setSecondStepData] = useState<SecondStepData>({
        plan: PlansNames.Arcade,
        billingMode: BillingModes.Yearly,
    });

    const formData: FormDataContextProps = useMemo(
        () => ({
            [SubscriptionStep.UserDataForm]: {
                data: firstStepData,
                setData: setFirstStepData,
            },
            [SubscriptionStep.SubscriptionSelection]: {
                data: secondStepData,
                setData: setSecondStepData,
            },
        }),
        [firstStepData, secondStepData],
    );

    return (
        <FormDataContext.Provider value={formData}>
            {children}
        </FormDataContext.Provider>
    );
};
