import iconThankYou from '../../../../assets/images/icon-thank-you.svg';
import { Label } from '../../../Label/Label';
import styles from './FinaleStep.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FinalStep: FC = () => {
    const { t } = useTranslation('subscriptionSteps');

    return (
        <div className={styles.container}>
            <img src={iconThankYou} />
            <Label color="marine-blue" fontStyle="bold" size="huge">
                {t('FINAL_STEP.TITLE')}
            </Label>
            <Label color="cool_gray">{t('FINAL_STEP.SUBTITLE')}</Label>
        </div>
    );
};
