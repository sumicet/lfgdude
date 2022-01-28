import { memo } from 'react';
import { Lobby } from '../models/Lobby';
import AvatarsRow from './AvatarsRow';
import Image from './Image';
import Text from './Text';

interface CardProps {
    lobby: Lobby;
}

const Card: React.FC<CardProps> = ({ lobby }) => {
    return (
        <div className='flex flex-col bg-light p-4 rounded-base w-full'>
            <div className='flex h-fit items-center w-full'>
                <div className='flex flex-1 mr-4'>
                    <AvatarsRow
                        filled={lobby.players.num}
                        empty={lobby.players.max - lobby.players.num}
                    />
                </div>
                <Text color='accent' weight='bold'>
                    {lobby.players.num}
                </Text>
                <Text>/{lobby.players.max}</Text>
            </div>
            <div className='flex mt-2'>
                <div className='flex flex-1'>
                    <Text>Looking to play&nbsp;</Text>
                    <Text weight='medium'>{lobby.game.name}</Text>
                </div>
                <div className='flex'>
                    <div className='flex w-4'>
                        <Image
                            src='https://netflixjunkie.com/wp-content/uploads/2021/12/witcher-ciri.jpg'
                            alt=''
                        />
                    </div>
                    <Text>{lobby.leader.username}</Text>
                </div>
            </div>
        </div>
    );
};

export default memo(Card);
