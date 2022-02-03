import { memo } from 'react';
import { Lobby } from '../models/Lobby';
import AvatarsRow from './AvatarsRow';
import Button from './Button';
import Image from './Image';
import TagsRow from './TagsRow';
import Text from './Text';
// @ts-ignore
import { ReactComponent as HeadsetWithMic } from '../assets/images/headset-with-mic.svg';

interface CardProps {
    lobby: Lobby;
}

const Card = ({ lobby }: CardProps) => {
    return (
        <div className='flex flex-col bg-light p-4 rounded-base w-full'>
            <div className='flex h-fit items-center w-full'>
                <div className='flex flex-1 mr-4'>
                    <AvatarsRow players={lobby.players} />
                </div>
                <Text color='accent' weight='bold'>
                    {lobby.players.list.length}
                </Text>
                <Text>/{lobby.players.max}</Text>
            </div>
            <div className='flex mt-2 items-center'>
                <div className='flex flex-1'>
                    <Text color='dark'>Looking to play&nbsp;</Text>
                    <Text color='medium' weight='medium'>
                        {lobby.game.name}
                    </Text>
                </div>
                <div className='flex items-center'>
                    <div className='flex w-4 h-4 rounded-[100%] overflow-hidden mr-2'>
                        <Image
                            src='https://netflixjunkie.com/wp-content/uploads/2021/12/witcher-ciri.jpg'
                            alt=''
                        />
                    </div>
                    <Text color='medium'>{lobby.leader.username}</Text>
                </div>
            </div>
            <Text className={`mt-2 h-[2.4rem] text-on-2-rows`} size='large'>
                {lobby.title}
            </Text>

            <div className='flex flex-1 mt-4'>
                <div className='flex flex-1 items-center mr-4'>
                    <TagsRow data={lobby.tags} />
                </div>
                <Button text='Join' color='extra-light' Icon={HeadsetWithMic} />
            </div>
        </div>
    );
};

export default memo(Card);
