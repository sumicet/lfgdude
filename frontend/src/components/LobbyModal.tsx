import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Text from './Text';
import { Lobby } from '../models/Lobby';
import TagsRow from './TagsRow';
import Button from './Button';
import Chip from './Chip';
// @ts-ignore
import { ReactComponent as CopyToClipboard } from '../assets/images/copy-to-clipboard.svg';

const lobby: Lobby = {
    id: '1',
    game: {
        id: '1',
        name: 'Among us',
        code: 'CWEFWEWFFEWFLKHRVHIOVVEWEFFWFWEFWFR',
    },
    leader: {
        id: '1',
        image: '',
        username: 'Leader',
    },
    players: {
        max: 10,
        list: [{ username: 'IDK', id: '1', image: '' }],
    },
    title: "The Witcher S2 Spoilers: First look at Francesca and Yennefer's fate revealed - Redanian Intelligence | The witcher, Fate, The witcher books",
    tags: ['chill', 'tryhard', 'competitive', 'idkwhatelse'],
};

const LobbyModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex absolute z-10 right-0 w-full max-w-[300px] translate-y-[-50%] top-[50%] h-fit rounded-base rounded-r-none bg-extraLight p-4'
                >
                    <div className='w-full h-full flex flex-col'>
                        <Text weight='bold' color='medium' className='mb-2 max-w-[50]'>
                            {lobby.game.name}
                        </Text>
                        {lobby.game.code && (
                            <Chip
                                text={lobby.game.code}
                                textProps={{
                                    theme: 'code',
                                    className: 'overflow-hidden text-ellipsis whitespace-nowrap',
                                }}
                                Icon={() => <CopyToClipboard />}
                                color='medium'
                            />
                        )}
                        {/* <Text className='mt-2 max-w-[50%] overflow-hidden text-ellipsis whitespace-nowrap'></Text> */}
                        <div className='flex flex-col mt-2'>
                            <Text size='large'>{lobby.title}</Text>
                            <TagsRow className='mt-2' data={lobby.tags} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LobbyModal;
