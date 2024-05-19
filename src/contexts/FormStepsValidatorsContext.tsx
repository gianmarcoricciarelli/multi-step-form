import { SubscriptionStep } from '../types/enums';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useCallback,
    useMemo,
    useState,
} from 'react';

export interface FormStepsValidatorsContextProps {
    globalFormState: {
        userCanProceed: boolean;
        setUserCanProceed: Dispatch<SetStateAction<boolean>>;
    };
    [SubscriptionStep.UserDataForm]: {
        params: {
            validInputsIds: string[];
            setValidInputIds: Dispatch<SetStateAction<string[]>>;
        };
        validator: (inputIds: string[]) => boolean;
    };
}

export const FormStepsValidatorsContext =
    createContext<FormStepsValidatorsContextProps | null>(null);

export const FormStepsValidatorsContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [userCanProceed, setUserCanProceed] = useState(false);
    const [firstStepValidInputsIds, setFirstStepValidInputsIds] = useState<
        string[]
    >([]);

    const firstStepValidator = useCallback((inputsIds: string[]): boolean => {
        return inputsIds.length === 0;
    }, []);

    const contextValue = useMemo(
        () => ({
            globalFormState: {
                userCanProceed,
                setUserCanProceed,
            },
            [SubscriptionStep.UserDataForm]: {
                params: {
                    validInputsIds: firstStepValidInputsIds,
                    setValidInputIds: setFirstStepValidInputsIds,
                },
                validator: firstStepValidator,
            },
        }),
        [firstStepValidInputsIds, firstStepValidator, userCanProceed],
    );

    return (
        <FormStepsValidatorsContext.Provider value={contextValue}>
            {children}
        </FormStepsValidatorsContext.Provider>
    );
};
