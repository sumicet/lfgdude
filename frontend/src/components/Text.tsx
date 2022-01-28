import { memo } from 'react';

interface TextProps {
    color?: 'extra-light' | 'dark' | 'extra-dark' | 'accent' | 'medium';
    weight?: 'bold' | 'light' | 'medium';
    theme?: 'code' | 'neon';
    size?: 'extra-large' | 'large' | 'small';
    className?: string;
    children: any;
    rows?: number;
}

// text-overflow: ellipsis;
//   word-wrap: break-word;
//   overflow: hidden;
//   max-height: 3.6em;
//   line-height: 1.8em;

const Text: React.FC<TextProps> = ({
    color,
    weight,
    theme,
    size,
    className = '',
    rows,
    children,
}) => {
    return (
        <p
            className={`${
                size === 'extra-large'
                    ? 'leading-extraLarge'
                    : size === 'large'
                    ? 'leading-large'
                    : size === 'small'
                    ? 'leading-small'
                    : 'leading-base'
            } align-middle flex items-center ${
                color === 'extra-light'
                    ? 'text-textExtraLight'
                    : color === 'medium'
                    ? 'text-textMedium'
                    : color === 'dark'
                    ? 'text-textDark'
                    : color === 'extra-dark'
                    ? 'text-textExtraDark'
                    : color === 'accent'
                    ? 'text-accent'
                    : 'text-textLight'
            } ${
                size === 'extra-large'
                    ? 'text-extraLarge'
                    : size === 'large'
                    ? 'text-large'
                    : size === 'small'
                    ? 'text-small'
                    : 'text-base'
            } ${theme === 'code' ? 'font-code' : 'font-text'} ${
                theme === 'neon' && 'text-shadow-neon'
            } ${
                weight === 'light'
                    ? 'font-light'
                    : weight === 'bold'
                    ? 'font-bold'
                    : weight === 'medium'
                    ? 'font-medium'
                    : 'font-normal'
            } ${className}`}
        >
            {children}
        </p>
    );
};

export default memo(Text);
