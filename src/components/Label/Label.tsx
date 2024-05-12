import { Colors, FontStyles, TextSizes } from '../../types/types';
import { useCssClasses } from './useCssClasses';
import {
    FC,
    HTMLAttributes,
    MouseEventHandler,
    PropsWithChildren,
} from 'react';

interface LabelProps {
    className?:
        | HTMLAttributes<HTMLParagraphElement>['className']
        | HTMLAttributes<HTMLLabelElement>['className']
        | HTMLAttributes<HTMLAnchorElement>['className'];
    href?: string;
    htmlFor?: string;
    color: Colors;
    size?: TextSizes;
    fontStyle?: FontStyles;
    onClick?: MouseEventHandler<
        HTMLAnchorElement | HTMLLabelElement | HTMLParagraphElement
    >;
}

export const Label: FC<PropsWithChildren<LabelProps>> = ({
    children,
    className,
    href,
    htmlFor,
    color,
    size = 'regular',
    fontStyle = 'regular',
    onClick,
}) => {
    const cssClasses = useCssClasses({ className, size, fontStyle });

    if (href) {
        return (
            <a
                style={{ color: `var(--${color})` }}
                className={cssClasses.join(' ')}
                href={href}
                onClick={onClick ?? undefined}
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
                onClick={onClick ?? undefined}
            >
                {children}
            </label>
        );
    }

    return (
        <p
            style={{ color: `var(--${color})` }}
            className={cssClasses.join(' ')}
            onClick={onClick ?? undefined}
        >
            {children}
        </p>
    );
};
