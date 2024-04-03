import { FC } from 'react';

interface CardProps {
    planName: string;
    amountLabel: string;
    freeMonthsLabel?: string;
}

export const Card: FC<CardProps> = ({
    planName,
    amountLabel,
    freeMonthsLabel,
}) => {
    return (
        <div>
            <p>{planName}</p>
            <p>{amountLabel}</p>
            <p>{freeMonthsLabel}</p>
        </div>
    );
};
