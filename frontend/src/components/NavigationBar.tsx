import Text from './Text';
// @ts-ignore
import { ReactComponent as Logo } from '../assets/images/logo.svg';
// @ts-ignore
import { ReactComponent as Headset } from '../assets/images/headset.svg';
// @ts-ignore
import { ReactComponent as Question } from '../assets/images/question.svg';
// @ts-ignore
import { ReactComponent as People } from '../assets/images/people.svg';
// @ts-ignore
import { ReactComponent as Discord } from '../assets/images/discord.svg';
import Chip from './Chip';
import { Link } from 'react-router-dom';
import { REACT_APP_DISCORD_LINK, REACT_APP_DISCORD_SERVER } from '../config.js';
import Button from './Button';
import { memo } from 'react';

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
    return (
        <div className='flex justify-center bg-medium text-white border-b border-light'>
            <div className='flex flex-row flex-1 max-w-[1440px] px-3 py-4'>
                <div className='flex flex-1 items-center'>
                    <div className='flex items-center mr-6'>
                        <Text size='extra-large' weight='light' theme='neon'>
                            LFG Dude
                        </Text>
                        <Logo />
                    </div>

                    {[
                        { text: 'Find a group', Icon: Headset, pathname: '/' },
                        { text: 'FAQ', Icon: Question, pathname: '/faq' },
                        { text: 'About us', Icon: People, pathname: '/about' },
                    ].map(({ text, Icon, pathname }) => (
                        <Link
                            key={`${text}`}
                            to={{
                                pathname,
                            }}
                            className='mr-6'
                        >
                            <Chip text={text} Icon={Icon} />
                        </Link>
                    ))}
                </div>
                <div className='flex items-center'>
                    {/* should be 'a' tag - external link */}
                    <a
                        href={REACT_APP_DISCORD_SERVER}
                        target='_blank'
                        className='mr-6'
                        rel='noreferrer'
                    >
                        <Chip text='Join Discord' Icon={Discord} />
                    </a>
                    <Button text='Connect' link={REACT_APP_DISCORD_LINK} />
                </div>
            </div>
        </div>
    );
};

export default memo(NavigationBar);
