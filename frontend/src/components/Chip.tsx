import Text from './Text';

interface ChipProps {
    Icon: any;
    text: string;
    margin?: string;
    color?: 'extra-light';
    noHoverEffect?: boolean;
}

const Chip: React.FC<ChipProps> = ({ Icon, text, margin, color, noHoverEffect = false }) => {
    return (
        <div
            className={`flex items-center ${margin && `m-[${margin}]`}  ${
                !noHoverEffect && 'group hover:text-shadow-neon hover:transition-[text-shadow]'
            } ease-in-out duration-200 ${
                color === 'extra-light' ? 'svg-extra-light' : 'svg-light'
            }`}
        >
            <div
                className={`${
                    !noHoverEffect && 'group-hover:neon hover:transition-[text-shadow]'
                } ease-in-out duration-200 mr-2`}
            >
                <Icon className='h-[16px]' />
            </div>
            <Text color={color}>{text}</Text>
        </div>
    );
};

export default Chip;
