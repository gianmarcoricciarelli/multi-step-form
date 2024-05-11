import styles from './Label.module.scss';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

type LabelColors =
    | 'marine-blue'
    | 'purplish-blue'
    | 'purple-blue'
    | 'light-blue'
    | 'strawberry-red'
    | 'cool_gray'
    | 'light_gray'
    | 'magnolia'
    | 'alabaster'
    | 'white';
type LabelSizes = 'small' | 'regular' | 'big' | 'huge';
type LabelFontStyles = 'regular' | 'semi-bold' | 'bold' | 'italic';
interface LabelProps {
    color: LabelColors;
    size?: LabelSizes;
    fontStyle?: LabelFontStyles;
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
    if (size === 'huge') cssClasses.push(styles['label-size__huge']);
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
