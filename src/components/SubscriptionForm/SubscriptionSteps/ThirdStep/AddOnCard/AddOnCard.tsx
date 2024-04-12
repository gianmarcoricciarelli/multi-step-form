import { Label } from '../../../../Label/Label';
import styles from './AddOnCard.module.scss';
import { FC } from 'react';

interface AddOnCardProps {
    title: string;
    subtitle: string;
    monthlyAmount: string;
    yearlyAmount: string;
}

export const AddOnCard: FC<AddOnCardProps> = ({
    title,
    subtitle,
    monthlyAmount,
    yearlyAmount,
}) => {
    return (
        <div className={styles['add-on-card']}>
            <div className={styles['checkbox-container']}>
                <input type="checkbox" />
                <div className="">
                    <Label color="marine-blue" fontStyle="semi-bold">
                        {title}
                    </Label>
                    <Label color="cool_gray">{subtitle}</Label>
                </div>
            </div>
            <Label color="purplish-blue">{monthlyAmount}</Label>
        </div>
    );
};
