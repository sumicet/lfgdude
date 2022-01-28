import { ChangeEvent, memo, useState } from 'react';

interface InputProps {
    theme?: 'filled' | 'transparent';
    placeholder: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ theme, placeholder, className }) => {
    const [input, setInput] = useState<string>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    return (
        <input
            value={input}
            onChange={handleChange}
            className={`flex flex-1 text-textLight bg-transparent placeholder:text-textExtraDark ${
                theme === 'filled' && 'px-4 py-2'
            } ${className}`}
            placeholder={placeholder}
        />
    );
};

export default memo(Input);
