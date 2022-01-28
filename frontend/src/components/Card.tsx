import { memo } from 'react';
import { Lobby } from '../models/Lobby';
import Circle from './Circle';
import CircleRow from './CircleRow';
import Text from './Text';

interface CardProps {
    lobby: Lobby;
}

const Card: React.FC<CardProps> = ({ lobby }) => {
    return (
        <div className='flex bg-light p-4 rounded-base w-full'>
            <div className='flex h-fit items-center w-full'>
                <div className='flex flex-1 mr-4'>
                    <CircleRow
                        colored={lobby.players.num}
                        gray={lobby.players.max - lobby.players.num}
                    />
                </div>
                <Text>
                    {lobby.players.num}/{lobby.players.max}
                </Text>
            </div>
        </div>
    );
};

export default memo(Card);
