import { FontStyles, TextSizes } from '../../types/types';
import styles from './Label.module.scss';
import { HTMLAttributes, useMemo } from 'react';

interface UseCssClassesProps {
    className?:
        | HTMLAttributes<HTMLParagraphElement>['className']
        | HTMLAttributes<HTMLLabelElement>['className']
        | HTMLAttributes<HTMLAnchorElement>['className'];
    size?: TextSizes;
    fontStyle?: FontStyles;
}

export function useCssClasses({
    className,
    size,
    fontStyle,
}: UseCssClassesProps): string[] {
    const cssClasses = useMemo(() => {
        const computedClasses: string[] = [];

        if (className) {
            computedClasses.push(className);
        }
        computedClasses.push(styles.label);

        if (size === 'small') computedClasses.push(styles['label-size__small']);
        if (size === 'big') computedClasses.push(styles['label-size__big']);
        if (size === 'huge') computedClasses.push(styles['label-size__huge']);
        if (fontStyle === 'semi-bold')
            computedClasses.push(styles['label-style__semi-bold']);
        if (fontStyle === 'bold')
            computedClasses.push(styles['label-style__bold']);
        if (fontStyle === 'italic')
            computedClasses.push(styles['label-style__italic']);

        return computedClasses;
    }, [className, fontStyle, size]);

    return cssClasses;
}
