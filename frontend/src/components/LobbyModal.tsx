import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface LobbyModalProps {}

const LobbyModal: React.FC<LobbyModalProps> = () => {
    const [isOpen, setIsOpen] = useState(true);
    return <></>;

    // return (
    //     <div className='flex absolute z-10 bottom-0 w-full max-w-[1400px] translate-x-[-50%] left-[50%] h-fit bg-red-600'>
    //         <div className='w-[300px] h-[300px]'>hi</div>
    //     </div>
    // );
};

export default LobbyModal;
