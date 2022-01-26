import { Link } from 'react-router-dom';
import Chip from './Chip';
import Text from './Text';

interface ButtonProps {
    text: string;
    Icon?: any;
    pathname: string;
    color?: 'light' | 'extra-light';
}

const Button: React.FC<ButtonProps> = ({ pathname, color, text, Icon }) => {
    return (
        <Link
            to={{
                pathname,
            }}
            className={`flex h-fit py-2 px-4 rounded-base ${
                color === 'light'
                    ? 'bg-light'
                    : color === 'extra-light'
                    ? 'bg-extraLight'
                    : 'bg-accent'
            }`}
        >
            {Icon ? (
                <Chip text={text} Icon={Icon} color='extra-light' />
            ) : (
                <Text className='text-textExtraLight'>{text}</Text>
            )}
        </Link>
    );
};

export default Button;
