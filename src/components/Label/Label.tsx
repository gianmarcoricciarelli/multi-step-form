import styles from './Label.module.scss';
import { FC, PropsWithChildren } from 'react';

interface LabelProps {
    color: string;
    size: 'regular' | 'big';
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
    children,
    color,
    size = 'regular',
}) => {
    const cssClasses: string[] = [];
    cssClasses.push(
        size === 'regular'
            ? styles['label-size__regular']
            : styles['label-size__big'],
    );

    return (
        <p
            style={{ color: `var(--${color})` }}
            className={cssClasses.join(' ')}
        >
            {children}
        </p>
    );
};
