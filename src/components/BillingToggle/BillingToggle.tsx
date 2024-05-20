import {
    FormDataContext,
    FormDataContextProps,
} from '../../contexts/FormDataContext';
import { BillingModes, SubscriptionStep } from '../../types/enums';
import { Label } from '../Label/Label';
import styles from './BillingToggle.module.scss';
import gsap from 'gsap';
import { Context, FC, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const BillingToggle: FC = () => {
    const { t } = useTranslation('billingToggle');

    const {
        [SubscriptionStep.SubscriptionSelection]: {
            data: { billingMode },
            setData,
        },
    } = useContext(FormDataContext as Context<FormDataContextProps>);

    const circleToggleRef = useRef<HTMLDivElement>(null);

    const onToggleClickHandler = () => {
        const appliedStyles = circleToggleRef.current?.computedStyleMap();

        if (appliedStyles) {
            if ((appliedStyles.get('left') as { value: number }).value === 8) {
                gsap.to(circleToggleRef.current, {
                    left: '64%',
                    duration: 0.3,
                    onComplete: () =>
                        setData((prevData) => ({
                            ...prevData,
                            billingMode: BillingModes.Yearly,
                        })),
                });
            } else {
                gsap.to(circleToggleRef.current, {
                    left: '8%',
                    duration: 0.3,
                    onComplete: () =>
                        setData((prevData) => ({
                            ...prevData,
                            billingMode: BillingModes.Monthly,
                        })),
                });
            }
        }
    };

    return (
        <div className={styles['billing-toggle']}>
            <Label
                className={styles['billing-mode-label']}
                color={
                    billingMode === BillingModes.Monthly
                        ? 'marine-blue'
                        : 'cool_gray'
                }
                fontStyle="semi-bold"
            >
                {t('MONTHLY_SUB')}
            </Label>
            <div className={styles.toggle} onClick={onToggleClickHandler}>
                <div
                    style={{
                        left:
                            billingMode === BillingModes.Monthly ? '8%' : '64%',
                    }}
                    className={styles.circle}
                    ref={circleToggleRef}
                />
            </div>
            <Label
                className={styles['billing-mode-label']}
                color={
                    billingMode === BillingModes.Yearly
                        ? 'marine-blue'
                        : 'cool_gray'
                }
                fontStyle="semi-bold"
            >
                {t('YEARLY_SUB')}
            </Label>
        </div>
    );
};
