export type InputType = 'text' | 'tel' | email;
export type SubscriptionStep = 0 | 1 | 2 | 3;
export interface FormValidator {
    isValid: (input: string) => boolean;
}
