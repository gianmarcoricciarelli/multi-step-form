import { Label } from '../../../../Label/Label';
import styles from './BillingToggle.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const BillingToggle: FC = () => {
    const { t } = useTranslation('billingToggle');

    return (
        <div className={styles['billing-toggle']}>
            <Label color="marine-blue" fontStyle="semi-bold">
                {t('MONTHLY_SUB')}
            </Label>
            <p>Toggle</p>
            <Label color="marine-blue" fontStyle="semi-bold">
                {t('YEARLY_SUB')}
            </Label>
        </div>
    );
};
