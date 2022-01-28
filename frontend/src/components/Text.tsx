import { memo } from 'react';

interface TextProps {
    color?: 'extra-light' | 'dark' | 'extra-dark' | 'accent';
    weight?: 'bold' | 'light';
    theme?: 'code' | 'neon';
    size?: 'extra-large' | 'large' | 'small';
    className?: string;
    children: any;
}

const Text: React.FC<TextProps> = ({ color, weight, theme, size, className = '', children }) => {
    return (
        <p
            className={`${
                color === 'extra-light'
                    ? 'text-textExtraLight'
                    : color === 'dark'
                    ? 'text-textDark'
                    : color === 'extra-dark'
                    ? 'text-textExtraDark'
                    : color === 'accent'
                    ? 'text-accent'
                    : 'text-textLight'
            } ${className} ${
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
                weight === 'light' ? 'font-light' : weight === 'bold' ? 'font-bold' : 'font-normal'
            } leading-base align-middle`}
        >
            {children}
        </p>
    );
};

export default memo(Text);
