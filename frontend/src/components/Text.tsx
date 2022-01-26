import { memo, ReactElement } from 'react';

interface TextProps {
    weight?: 'bold' | 'light';
    theme?: 'code' | 'neon';
    size?: 'extra-large' | 'large' | 'small';
    className?: string;
    children: string;
}

const Text: React.FC<TextProps> = ({ weight, theme, size, className = '', children }) => {
    return (
        <p
            className={`text-textLight ${className} ${
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
