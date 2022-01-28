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

const Button: React.FC<ButtonProps> = ({ onClick, color, text, Icon, link, className }) => {
    return (
        <ButtonWrapper link={link} className={className}>
            <button
                onClick={onClick}
                className={`flex h-fit w-fit py-2 px-4 rounded-base ease-in-out duration-200 ${
                    color === 'light' ? 'hover:bg-extraLight' : 'hover:neon'
                } ${
                    color === 'light'
                        ? 'bg-light'
                        : color === 'extra-light'
                        ? 'bg-extraLight'
                        : 'bg-accent'
                } ${!link && className}`}
            >
                {Icon ? (
                    <Chip text={text} Icon={Icon} color='extra-light' noHoverEffect />
                ) : (
                    <Text color='extra-light'>{text}</Text>
                )}
            </button>
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper: React.FC<{ link?: string; className?: string }> = ({
    link,
    className,
    children,
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
