import { Link } from 'react-router-dom';
import Chip from './Chip';
import Text from './Text';

interface ButtonProps {
    text: string;
    Icon?: any;
    onClick?: () => void;
    color?: 'light' | 'medium';
    link?: string;
    className?: string;
}

const Button = ({ onClick, color, text, Icon, link, className = '' }: ButtonProps) => {
    return (
        <ButtonWrapper link={link} className={className}>
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
                } ${!link && className}`}
            >
                {Icon ? (
                    <Chip text={text} Icon={Icon} color={color} className='z-[3]' />
                ) : (
                    <Text color={color} className='z-[3] w-max'>
                        {text}
                    </Text>
                )}
            </button>
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper = ({
    link,
    className,
    children,
}: {
    link?: string;
    className?: string;
    children: any;
}) => {
    return (
        <>
            {link ? (
                link.includes('https://') ? (
                    <a className={className} href={link} target='_blank' rel='noreferrer'>
                        {children}
                    </a>
                ) : (
                    <Link className={className} to={{ pathname: link }}>
                        {children}
                    </Link>
                )
            ) : (
                <>{children}</>
            )}
        </>
    );
};
