import { InputType } from '../../types/enums';
import { useMemo } from 'react';

interface FormValidator {
    isValid: (input: string) => boolean;
}

export function useFormValidators() {
    const validators: Record<InputType, FormValidator> = useMemo(
        () => ({
            text: {
                isValid(input) {
                    return !!input?.length;
                },
            },
            tel: {
                isValid(input) {
                    return !!input?.length;
                },
            },
            email: {
                isValid(input) {
                    return !!input?.length;
                },
            },
        }),
        [],
    );

    return validators;
}
