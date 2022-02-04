import { ElementType } from 'react';
import Chip from '../Chip';
import Link from './Link';
import Text from './Text';

interface ButtonProps {
    text: string;
    Icon?: ElementType;
    onClick?: () => void;
    color?: 'light' | 'medium';
    to?: string;
    className?: string;
    containerClassName?: string;
}

const Button = ({ to, containerClassName = '', ...props }: ButtonProps) => {
    return (
        <>
            {to ? (
                <Link to={to} className={containerClassName}>
                    <ButtonContent {...props} />
                </Link>
            ) : (
                <ButtonContent to={to} {...props} />
            )}
        </>
    );
};

export default Button;

const ButtonContent = ({ onClick, color, text, Icon, to, className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`group flex justify-center h-fit w-fit py-2 px-4 rounded-base ease-in-out duration-200 relative ${
                color === 'medium'
                    ? 'hover:bg-extraLight'
                    : color === 'light'
                    ? 'hover:bg-doubleExtraLight'
                    : 'before:absolute before:inset-0 before:rounded-base before:gradient before:!bg-[length:500%] before:blur-[10px] before:hover:opacity-70 before:animate-[gradient_20s_linear_infinite] before:z-1 before:opacity-0 before:transition-[opacity] before:duration-200 before:ease-in-out after:z-[2] after:absolute after:inset-0 after:rounded-base after:gradient after:!bg-[length:500%] after:animate-[gradient_20s_linear_infinite] after:opacity-0 after:hover:opacity-70 after:transition-[opacity] after:duration-200 after:ease-in-out'
            } ${
                color === 'medium'
                    ? 'bg-light'
                    : color === 'light'
                    ? 'bg-extraLight'
                    : 'gradient !bg-[length:500%] animate-[gradient_20s_linear_infinite]'
            } ${!to && className}`}
        >
            {Icon ? (
                <Chip text={text} Icon={Icon} color={color} className='z-[3]' />
            ) : (
                <Text color={color} className='z-[3] w-max'>
                    {text}
                </Text>
            )}
        </button>
    );
};
