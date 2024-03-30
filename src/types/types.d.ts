export type InputType = 'text' | 'tel' | email;
export type SubscriptionStep = 1 | 2 | 3 | 4;
export interface FormValidator {
    isValid: (input: string) => boolean;
}
