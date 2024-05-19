import { InputType, SubscriptionStep } from '../types/enums';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from 'react';

type FirstStepData = {
    [valueof in InputType]: string;
};
export interface FormDataContextProps {
    [SubscriptionStep.UserDataForm]: {
        data: FirstStepData;
        setData: Dispatch<SetStateAction<FirstStepData>>;
    };
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

    const formData: FormDataContextProps = useMemo(
        () => ({
            [SubscriptionStep.UserDataForm]: {
                data: firstStepData,
                setData: setFirstStepData,
            },
        }),
        [firstStepData],
    );

    return (
        <FormDataContext.Provider value={formData}>
            {children}
        </FormDataContext.Provider>
    );
};
