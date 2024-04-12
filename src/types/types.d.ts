export interface FormValidator {
    isValid: (input: string) => boolean;
}
export interface Plan {
    name: PlanName;
    monthlyAmountLabel: string;
    yearlyAmountLabel: string;
    freeMonths?: number;
}
