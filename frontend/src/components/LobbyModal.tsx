import { memo, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Text from './common/Text';
import TagsRow from './layout/TagsRow';
import Chip from './Chip';
// @ts-ignore
import { ReactComponent as CopyToClipboard } from '../assets/images/copy-to-clipboard.svg';
// @ts-ignore
import { ReactComponent as Mic } from '../assets/images/mic.svg';
// @ts-ignore
import { ReactComponent as Fullscreen } from '../assets/images/fullscreen.svg';
// @ts-ignore
import { ReactComponent as ArrowUp } from '../assets/images/arrow-up.svg';
// @ts-ignore
import { ReactComponent as ArrowDown } from '../assets/images/arrow-down.svg';

import Button from './common/Button';
import PlayersGrid from './layout/PlayersGrid';
import { useAppSelector } from '../redux/hooks';
import { setActive } from '../redux/slices/lobbyModalSlice';
import { useDispatch } from 'react-redux';

const LobbyModal = () => {
    const { active, size, lobby } = useAppSelector(state => state.lobbyModal);

    const dispatch = useDispatch();

    const handleLeaveClick = () => {
        dispatch(setActive({ active: false }));
    };

    const animate = useAnimation();
    const animateContent = useAnimation();

    // animate active
    useEffect(() => {
        if (active) {
            animate.start({ opacity: 1 });
        }
    }, [active, animate]);

    const handleArrowClick = () => {
        if (size === 'minimized') {
            animateContent.start({ height: 'fit-content', opacity: 1 });
            animate.start({ width: 400 });
        } else if (size === 'default') {
            animateContent.start({ height: 0, opacity: 0 });
            animate.start({
                width: 260,
                transition: { duration: 0.1, ease: 'easeInOut' },
            });
        } else {
            animateContent.start({ height: 1000, opacity: 1 });
            animate.start({ width: 1000 });
        }

        if (size === 'minimized') {
            dispatch(setActive({ size: 'default' }));
        } else {
            dispatch(setActive({ size: 'minimized' }));
        }
    };

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={animate}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: 'easeInOut' }}
                    // 340px + 2px border
                    className='flex absolute z-10 top-[20vh] right-0 w-[400px] h-min rounded-base rounded-r-none bg-light border border-extraLight p-4'
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
                                <div
                                    className='svg-dark hover:svg-medium cursor-pointer ml-2 px-1'
                                    onClick={handleArrowClick}
                                >
                                    {size === 'default' ? (
                                        <ArrowUp className='h-[16px]' />
                                    ) : (
                                        <ArrowDown className='h-[16px]' />
                                    )}
                                </div>
                                <div className='svg-dark hover:svg-medium cursor-pointer ml-2 px-1'>
                                    <Fullscreen className='h-[16px]' />
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className='flex flex-col overflow-hidden'
                            initial={{ height: 'fit-content' }}
                            animate={animateContent}
                            transition={{ duration: 0.1, ease: 'easeInOut' }}
                        >
                            {lobby.game.code && (
                                <Chip
                                    text={lobby.game.code}
                                    textProps={{
                                        theme: 'code',
                                        className:
                                            'overflow-hidden text-ellipsis whitespace-nowrap max-w-full',
                                    }}
                                    Icon={CopyToClipboard}
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
                                        Icon={Mic}
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
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default memo(LobbyModal);
