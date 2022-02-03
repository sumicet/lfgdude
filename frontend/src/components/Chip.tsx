import Text, { TextProps } from './Text';

interface ChipProps {
    Icon: any;
    text: string;
    margin?: string;
    color?: 'extra-light' | 'medium';
    className?: string;
    textProps?: TextProps;
    noHoverEffect?: boolean;
}

const Chip = ({
    Icon,
    text,
    margin,
    color,
    className = '',
    textProps,
    noHoverEffect = false,
}: ChipProps) => {
    return (
        <div
            className={`flex items-center cursor-pointer ${margin && `m-[${margin}]`}  ${
                !noHoverEffect && 'group'
            } ease-in-out duration-200 ${
                color === 'extra-light'
                    ? 'svg-extra-light'
                    : color === 'medium'
                    ? 'svg-medium'
                    : 'svg-light'
            } ${className}`}
        >
            <div className={`mr-2 ${!noHoverEffect ? 'group-hover:svg-extra-light' : ''}`}>
                <Icon className='h-[16px]' />
            </div>
            <Text
                {...textProps}
                color={color}
                className={`${!noHoverEffect ? 'group-hover:text-textExtraLight' : ''} ${
                    textProps?.className || ''
                }`}
            >
                {text}
            </Text>
        </div>
    );
};

export default Chip;
