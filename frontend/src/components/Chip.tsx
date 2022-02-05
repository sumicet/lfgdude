import { ElementType } from 'react';
import Text, { TextProps } from './common/Text';

interface ChipProps {
    Icon: ElementType;
    text: string;
    color?: 'medium' | 'dark' | 'light';
    className?: string;
    textProps?: TextProps;
    hover?: boolean;
}

const Chip = ({ Icon, text, color, className = '', textProps = {}, hover = true }: ChipProps) => {
    return (
        <div
            className={`flex group items-center cursor-pointer ${
                hover && 'group'
            } ease-in-out duration-200 ${
                color === 'medium' ? 'svg-medium' : color === 'dark' ? 'svg-dark' : 'svg-light'
            } ${className}`}
        >
            <div
                className={`mr-2 ${
                    hover
                        ? color === 'dark'
                            ? 'group-hover:svg-medium'
                            : color === 'medium'
                            ? 'group-hover:svg-light'
                            : color === 'light'
                            ? 'group-hover:svg-extra-light'
                            : ''
                        : ''
                }`}
            >
                <Icon className='h-[16px]' />
            </div>
            <Text
                {...textProps}
                color={color}
                className={` w-max ${
                    hover
                        ? color === 'dark'
                            ? 'group-hover:text-textMedium'
                            : color === 'medium'
                            ? 'group-hover:text-textLight'
                            : color === 'light'
                            ? 'group-hover:text-textExtraLight'
                            : ''
                        : ''
                } ${textProps?.className || ''}`}
            >
                {text}
            </Text>
        </div>
    );
};

export default Chip;
