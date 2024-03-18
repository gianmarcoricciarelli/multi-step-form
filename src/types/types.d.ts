export type InputType = 'text' | 'tel' | email;
export interface FormValidator {
    isValid: (input: string) => boolean;
}
