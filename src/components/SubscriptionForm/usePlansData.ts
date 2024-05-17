import { PlansNames } from '../../types/enums';
import { Plan } from '../../types/types';
import { useMemo } from 'react';

export function usePlansData(): Plan[] {
    const plansData: Plan[] = useMemo(
        () => [
            {
                name: PlansNames.Arcade,
                monthlyAmountLabel: '$9/mo',
                yearlyAmountLabel: '$90/yr',
                freeMonths: 2,
            },
            {
                name: PlansNames.Advanced,
                monthlyAmountLabel: '$12/mo',
                yearlyAmountLabel: '$120/yr',
                freeMonths: 2,
            },
            {
                name: PlansNames.Pro,
                monthlyAmountLabel: '$15/mo',
                yearlyAmountLabel: '$150/yr',
                freeMonths: 2,
            },
        ],
        [],
    );

    return plansData;
}
