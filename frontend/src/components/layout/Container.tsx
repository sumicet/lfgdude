import { ReactElement } from 'react';

interface ContainerProps {
    children: ReactElement;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='flex flex-1 justify-center text-white mt-4'>
            <div className='flex max-w-[1400px] mx-4 flex-1'>{children}</div>
        </div>
    );
};

export default Container;
