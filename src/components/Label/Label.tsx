import styles from './Label.module.scss';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface LabelProps {
    color: string;
    size?: 'small' | 'regular' | 'big';
    fontStyle?: 'regular' | 'semi-bold' | 'bold' | 'italic';
    htmlFor?: string;
    className?:
        | HTMLAttributes<HTMLParagraphElement>['className']
        | HTMLAttributes<HTMLLabelElement>['className'];
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
    children,
    color,
    size = 'regular',
    fontStyle = 'regular',
    htmlFor,
    className,
}) => {
    const cssClasses: string[] = [];
    if (className) {
        cssClasses.push(className);
    }
    cssClasses.push(styles.label);

    if (size === 'small') cssClasses.push(styles['label-size__small']);
    if (size === 'big') cssClasses.push(styles['label-size__big']);
    if (fontStyle === 'semi-bold')
        cssClasses.push(styles['label-style__semi-bold']);
    if (fontStyle === 'bold') cssClasses.push(styles['label-style__bold']);
    if (fontStyle === 'italic') cssClasses.push(styles['label-style__italic']);

    if (htmlFor) {
        return (
            <label
                style={{ color: `var(--${color})` }}
                className={cssClasses.join(' ')}
                htmlFor={htmlFor}
            >
                {children}
            </label>
        );
    }

    return (
        <p
            style={{ color: `var(--${color})` }}
            className={cssClasses.join(' ')}
        >
            {children}
        </p>
    );
};
