export interface FormValidator {
    isValid: (input: string) => boolean;
}
export interface Plan {
    name: PlanName;
    monthlyAmountLabel: string;
    yearlyAmountLabel: string;
    freeMonths?: number;
}
export interface AddOn {
    title: string;
    subtitle: string;
    monthlyAmount: string;
    yearlyAmount: string;
}
