import { memo } from 'react';
import Input from './Input';
import Separator from './layout/Separator';
import Text from './Text';

const SearchBar = () => {
    return (
        <div className='flex w-full bg-medium h-fit rounded-base overflow-hidden border border-light py-2'>
            <div className='relative flex items-center justify-center px-5 py-2 w-fit'>
                <Text>All games</Text>
            </div>
            <Separator />
            <Input placeholder='Type something...' className='mx-4' />
        </div>
    );
};

export default memo(SearchBar);
