import Text from './Text';

interface ChipProps {
    Icon: any;
    text: string;
    margin?: string;
    color?: 'extra-light';
}

const Chip: React.FC<ChipProps> = ({ Icon, text, margin, color }) => {
    return (
        <div
            className={`flex items-center ${
                margin && `m-[${margin}]`
            } hover:text-shadow-neon hover:transition-[text-shadow] ease-in-out duration-200 ${
                color === 'extra-light' ? 'svg-extra-light' : 'svg-light'
            } group`}
        >
            <div className='group-hover:neon hover:transition-[text-shadow] ease-in-out duration-200 mr-2'>
                <Icon className='h-[16px]' />
            </div>
            <Text className={`${color === 'extra-light' && 'text-textExtraLight'}`}>{text}</Text>
        </div>
    );
};

export default Chip;
