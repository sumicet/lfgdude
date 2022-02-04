import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Text from './Text';
import TagsRow from './TagsRow';
import Chip from './Chip';
// @ts-ignore
import { ReactComponent as CopyToClipboard } from '../assets/images/copy-to-clipboard.svg';
// @ts-ignore
import { ReactComponent as Mic } from '../assets/images/mic.svg';
// @ts-ignore
import { ReactComponent as Fullscreen } from '../assets/images/fullscreen.svg';
// @ts-ignore
import { ReactComponent as ArrowDown } from '../assets/images/arrow-down.svg';

import Button from './Button';
import PlayersGrid from './PlayersGrid';
import { useAppSelector } from '../redux/hooks';
import { useDispatch } from 'react-redux';
import { setActive } from '../redux/slices/lobbyModalSlice';

const LobbyModal = () => {
    const { active, lobby } = useAppSelector(state => state.lobbyModal);

    const dispatch = useDispatch();

    const handleLeaveClick = () => {
        dispatch(setActive({ active: false }));
    };

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                    // 340px + 2px border
                    className='flex absolute z-10 right-0 w-[400px] translate-y-[-50%] top-[50%] h-min rounded-base rounded-r-none bg-light border border-extraLight p-4'
                >
                    <div className='w-full h-full flex flex-col'>
                        <div className='flex items-center'>
                            <div className='flex flex-1'>
                                <Text color='accent' weight='bold'>
                                    {lobby.players.list.length}
                                </Text>
                                <Text className='mr-2'>/{lobby.players.max}</Text>
                                <div className='flex flex-1'>
                                    <Text
                                        weight='medium'
                                        color='medium'
                                        className='max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap'
                                    >
                                        {lobby.game.name}
                                    </Text>
                                </div>
                                <div className='svg-dark hover:svg-medium cursor-pointer ml-2 px-1'>
                                    <ArrowDown className='h-[16px]' />
                                </div>
                                <div className='svg-dark hover:svg-medium cursor-pointer ml-2 px-1'>
                                    <Fullscreen className='h-[16px]' />
                                </div>
                            </div>
                        </div>
                        {lobby.game.code && (
                            <Chip
                                text={lobby.game.code}
                                textProps={{
                                    theme: 'code',
                                    className:
                                        'overflow-hidden text-ellipsis whitespace-nowrap max-w-full',
                                }}
                                Icon={() => <CopyToClipboard />}
                                color='dark'
                                className='mt-4'
                            />
                        )}
                        {lobby.vc && (
                            <div className='flex flex-1 items-center mt-4'>
                                <Text color='dark' className='mr-4 inline'>
                                    This lobby is connected to voice channel{' '}
                                    <span className='font-medium'>#{lobby.vc.name}</span>.
                                </Text>
                                <Button
                                    text='Join VC'
                                    Icon={() => <Mic />}
                                    color='light'
                                    to={lobby.vc.invite}
                                />
                            </div>
                        )}

                        <div className='flex flex-col mt-4'>
                            <Text size='large'>{lobby.title}</Text>
                            <TagsRow className='mt-2 h-max' data={lobby.tags} />
                        </div>

                        <PlayersGrid
                            max={lobby.players.max}
                            list={lobby.players.list}
                            className='mt-4'
                        />

                        <div className='flex mt-4'>
                            <Button
                                text='Get The F*ck Out'
                                color='light'
                                className='w-full'
                                onClick={handleLeaveClick}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default memo(LobbyModal);
