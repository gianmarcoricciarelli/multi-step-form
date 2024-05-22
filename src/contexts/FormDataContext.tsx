import {
    BillingModes,
    InputType,
    PlansNames,
    SubscriptionStep,
} from '../types/enums';
import { AddOn } from '../types/types';
import { t } from 'i18next';
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
type ThirdStepData = AddOn[];

export interface FormDataContextProps {
    [SubscriptionStep.UserDataForm]: StepData<FirstStepData>;
    [SubscriptionStep.SubscriptionSelection]: StepData<SecondStepData>;
    [SubscriptionStep.AddOnsSelection]: StepData<ThirdStepData>;
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
    const [thirdStepData, setThirdStepData] = useState<ThirdStepData>([
        {
            title: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.TITLE', {
                ns: 'subscriptionSteps',
            }),
            subtitle: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.SUBTITLE', {
                ns: 'subscriptionSteps',
            }),
            monthlyAmount: t(
                'THIRD_STEP.ADD_ONS.ONLINE_SERVICE.MONTHLY_AMOUNT',
                {
                    ns: 'subscriptionSteps',
                },
            ),
            yearlyAmount: t('THIRD_STEP.ADD_ONS.ONLINE_SERVICE.YEARLY_AMOUNT', {
                ns: 'subscriptionSteps',
            }),
        },
    ]);

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
            [SubscriptionStep.AddOnsSelection]: {
                data: thirdStepData,
                setData: setThirdStepData,
            },
        }),
        [firstStepData, secondStepData, thirdStepData],
    );

    return (
        <FormDataContext.Provider value={formData}>
            {children}
        </FormDataContext.Provider>
    );
};
