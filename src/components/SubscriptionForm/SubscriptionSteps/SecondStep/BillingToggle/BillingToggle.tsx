import { BillingMode } from '../../../../../types/types';
import { Label } from '../../../../Label/Label';
import styles from './BillingToggle.module.scss';
import gsap from 'gsap';
import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BillingToggle: FC = () => {
    const { t } = useTranslation('billingToggle');

    const [billingMode, setBillingMode] = useState<BillingMode>('MONTHLY');

    const circleToggleRef = useRef<HTMLDivElement>(null);

    const onToggleClickHandler = () => {
        const appliedStyles = circleToggleRef.current?.computedStyleMap();

        if (appliedStyles) {
            if ((appliedStyles.get('left') as { value: number }).value === 8) {
                gsap.to(circleToggleRef.current, {
                    left: '64%',
                    duration: 0.3,
                    onComplete: () => setBillingMode('YEARLY'),
                });
            } else {
                gsap.to(circleToggleRef.current, {
                    left: '8%',
                    duration: 0.3,
                    onComplete: () => setBillingMode('MONTHLY'),
                });
            }
        }
    };

    return (
        <div className={styles['billing-toggle']}>
            <Label
                className={styles['billing-mode-label']}
                color={billingMode === 'MONTHLY' ? 'marine-blue' : 'cool_gray'}
                fontStyle="semi-bold"
            >
                {t('MONTHLY_SUB')}
            </Label>
            <div className={styles.toggle} onClick={onToggleClickHandler}>
                <div className={styles.circle} ref={circleToggleRef} />
            </div>
            <Label
                className={styles['billing-mode-label']}
                color={billingMode === 'YEARLY' ? 'marine-blue' : 'cool_gray'}
                fontStyle="semi-bold"
            >
                {t('YEARLY_SUB')}
            </Label>
        </div>
    );
};
