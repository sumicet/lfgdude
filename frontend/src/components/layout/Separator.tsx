import { memo } from 'react';

const Separator = () => {
    return <div className='flex flex-1 max-w-[1px] bg-light' />;
};

export default memo(Separator);
