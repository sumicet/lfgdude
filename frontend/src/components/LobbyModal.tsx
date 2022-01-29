import { useState } from 'react';
import Modal from 'react-modal';

interface LobbyModalProps {}

const LobbyModal: React.FC<LobbyModalProps> = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal
            isOpen={isOpen}
            className='z-10 flex'
            style={{
                content: {
                    background: 'purple',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                },
                overlay: { background: 'transparent' },
            }}
        >
            hello
        </Modal>
    );
};

export default LobbyModal;
