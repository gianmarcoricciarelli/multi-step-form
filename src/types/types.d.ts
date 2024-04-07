export type InputType = 'text' | 'tel' | email;
export type SubscriptionStep = 0 | 1 | 2 | 3;
export type PlanName = 'ARCADE' | 'ADVANCED' | 'PRO';
export type BillingMode = 'MONTHLY' | 'YEARLY';

export interface FormValidator {
    isValid: (input: string) => boolean;
}
export interface Plan {
    name: PlanName;
    monthlyAmountLabel: string;
    yearlyAmountLabel: string;
    freeMonths?: number;
}
