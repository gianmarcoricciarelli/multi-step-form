import { Colors, FontStyles, TextSizes } from '../../types/types';
import { useCssClasses } from './useCssClasses';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface LabelProps {
    color: Colors;
    size?: TextSizes;
    fontStyle?: FontStyles;
    href?: string;
    htmlFor?: string;
    className?:
        | HTMLAttributes<HTMLParagraphElement>['className']
        | HTMLAttributes<HTMLLabelElement>['className']
        | HTMLAttributes<HTMLAnchorElement>['className'];
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
    children,
    className,
    href,
    htmlFor,
    color,
    size = 'regular',
    fontStyle = 'regular',
}) => {
    const cssClasses = useCssClasses({ className, size, fontStyle });

    if (href) {
        return (
            <a
                style={{ color: `var(--${color})` }}
                className={cssClasses.join(' ')}
                href={href}
            >
                {children}
            </a>
        );
    }

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
