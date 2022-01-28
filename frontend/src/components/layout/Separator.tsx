import { memo } from 'react';

interface SeparatorProps {}

const Separator: React.FC<SeparatorProps> = () => {
    return <div className='flex flex-1 max-w-[1px] bg-light' />;
};

export default memo(Separator);
