import Chip from './Chip';
import Text from './Text';

interface ButtonProps {
    text: string;
    Icon?: any;
    onClick?: () => void;
    color?: 'light' | 'extra-light';
    link?: string;
    className?: string;
}

const Button = ({ onClick, color, text, Icon, link, className = '' }: ButtonProps) => {
    return (
        <ButtonWrapper link={link} className={className}>
            <button
                onClick={onClick}
                className={`group flex h-fit w-fit py-2 px-4 rounded-base ease-in-out duration-200 relative before:absolute before:inset-0 before:rounded-base before:gradient before:!bg-[length:500%] before:blur-[10px] before:hover:opacity-70 before:animate-[gradient_20s_linear_infinite] before:z-1 before:opacity-0 before:transition-[opacity] before:duration-200 before:ease-in-out after:z-[2] after:absolute after:inset-0 after:rounded-base after:gradient after:!bg-[length:500%] after:animate-[gradient_20s_linear_infinite] after:opacity-0 after:hover:opacity-70 after:transition-[opacity] after:duration-200 after:ease-in-out ${
                    color === 'light' ? 'hover:bg-extraLight' : ''
                } ${
                    color === 'light'
                        ? 'bg-light'
                        : color === 'extra-light'
                        ? 'bg-extraLight'
                        : 'gradient !bg-[length:500%] animate-[gradient_20s_linear_infinite]'
                } ${!link && className}`}
            >
                {Icon ? (
                    <Chip
                        text={text}
                        Icon={Icon}
                        color='extra-light'
                        className='z-[3]'
                        noHoverEffect
                    />
                ) : (
                    <Text color='extra-light' className='z-[3]'>
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
                <a className={className} href={link}>
                    {children}
                </a>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
