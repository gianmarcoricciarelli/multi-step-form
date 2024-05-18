import { SubscriptionStep } from '../../types/enums';
import {
    FC,
    PropsWithChildren,
    createContext,
    useCallback,
    useMemo,
} from 'react';

export interface FormStepsValidatorsContextProps {
    [SubscriptionStep.UserDataForm]: (inputIds: string[]) => boolean;
}

export const FormStepsValidatorsContext =
    createContext<FormStepsValidatorsContextProps | null>(null);

export const FormStepsValidatorsContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const firstStepValidator = useCallback((inputsIds: string[]): boolean => {
        return inputsIds.length === 0;
    }, []);

    const stepsValidators = useMemo(
        () => ({
            [SubscriptionStep.UserDataForm]: firstStepValidator,
        }),
        [firstStepValidator],
    );

    return (
        <FormStepsValidatorsContext.Provider value={stepsValidators}>
            {children}
        </FormStepsValidatorsContext.Provider>
    );
};
