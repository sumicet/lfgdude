import { ReactElement } from 'react';
// @ts-ignore
import { ReactComponent as AmongUs } from '../../assets/images/among-us.svg';

interface ContainerProps {
    children: ReactElement;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className='flex flex-1 justify-center text-white mt-4'>
            <div className='absolute right-0 top-[50%] translate-y-[-50%] svg-extra-dark'>
                <AmongUs />
            </div>
            <div className='flex max-w-[1400px] mx-4 flex-1 z-[1]'>{children}</div>
        </div>
    );
};

export default Container;
