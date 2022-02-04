import Text from './Text';
// @ts-ignore
import { ReactComponent as Headset } from '../assets/images/headset.svg';
// @ts-ignore
import { ReactComponent as Question } from '../assets/images/question.svg';
// @ts-ignore
import { ReactComponent as People } from '../assets/images/people.svg';
// @ts-ignore
import { ReactComponent as Discord } from '../assets/images/discord.svg';
import Chip from './Chip';
import { config } from '../config.js';
import Button from './Button';
import { memo } from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='flex justify-center bg-medium text-white border-b border-light z-[1]'>
            <div className='flex flex-row flex-1 max-w-[1440px] px-3 py-4'>
                <div className='flex flex-1 items-center'>
                    <div className='flex items-center mr-6 cursor-pointer'>
                        <Link to='/'>
                            <Text size='extra-large' weight='bold' theme='colored'>
                                {config.appName}
                            </Text>
                        </Link>
                    </div>

                    {[
                        { text: 'Find a group', Icon: Headset, to: '/' },
                        { text: 'FAQ', Icon: Question, to: '/faq' },
                        { text: 'About us', Icon: People, to: '/about' },
                    ].map(({ text, Icon, to }) => (
                        <Link key={`${text}`} to={to} className='mr-6'>
                            <Chip text={text} Icon={Icon} />
                        </Link>
                    ))}
                </div>
                <div className='flex items-center'>
                    {/* should be 'a' tag - external link */}
                    <a
                        href={config.discordServer}
                        target='_blank'
                        className='mr-6'
                        rel='noreferrer'
                    >
                        <Chip text='Join Discord' Icon={Discord} />
                    </a>
                    <Button text='Connect' to={config.discordLink} />
                </div>
            </div>
        </div>
    );
};

export default memo(Header);
