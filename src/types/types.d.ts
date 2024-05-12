// TYPOGRAPHY
export type Colors =
    | 'marine-blue'
    | 'purplish-blue'
    | 'purple-blue'
    | 'light-blue'
    | 'strawberry-red'
    | 'cool_gray'
    | 'light_gray'
    | 'magnolia'
    | 'alabaster'
    | 'white';
export type TextSizes = 'small' | 'regular' | 'big' | 'huge';
export type FontStyles = 'regular' | 'semi-bold' | 'bold' | 'italic';

// PLANS
export type PlansNames = 'ARCADE' | 'ADVANCED' | 'PRO';
export interface Plan {
    name: PlansNames;
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
