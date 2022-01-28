import { memo } from 'react';
import { Lobby } from '../models/Lobby';
import Text from './Text';

interface CardProps {
    lobby: Lobby;
}

const Card: React.FC<CardProps> = ({ lobby }) => {
    return (
        <div className='flex bg-light p-4 rounded-base w-full'>
            <div className='flex h-fit items-center bg-accent w-full'>
                {/* <div className='flex flex-1 mr-4'>{[...Array(lobby.players.num)].map(())}</div> */}
                <Text>
                    {lobby.players.num}/{lobby.players.max}
                </Text>
            </div>
        </div>
    );
};

export default memo(Card);
