import { Label } from '../../../Label/Label';
import { FC } from 'react';

interface StepHeaderProps {
    title: string;
    subtitle: string;
}

export const StepHeader: FC<StepHeaderProps> = ({ title, subtitle }) => {
    return (
        <div>
            <Label size="huge" color="marine-blue" fontStyle="bold">
                {title}
            </Label>
            <Label color="cool_gray">{subtitle}</Label>
        </div>
    );
};
