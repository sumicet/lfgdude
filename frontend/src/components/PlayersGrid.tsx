import Image from './Image';
import Row from './Row';
import Text from './Text';
// @ts-ignore
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { User } from '../models/User';

interface PlayersGridProps {
    max: number;
    list: User[];
    className?: string;
}

const PlayersGrid: React.FC<PlayersGridProps> = ({ max, list, className = '' }) => {
    return (
        <Row className={`grid grid-cols-3 gap-2 ${className}`}>
            {[...Array(Math.min(max, 11) + 1)].map((_: any, index: number) => {
                if (index >= max) {
                    return null;
                }

                if (index === Math.min(max, 11) && max >= 11) {
                    // 2.5 (img) + 0.625 (margin) + 1.2 * 0.875 (text line height) = 4.175rem
                    return (
                        <div
                            id={`${index + 1}-key`}
                            className='h-[4.175rem] flex flex-col items-center justify-center'
                        >
                            <Text color='extra-dark'>{max - 11} more</Text>
                        </div>
                    );
                }

                if (index < list.length) {
                    const { id, image, username } = list[index];
                    return (
                        <div
                            key={`${id}-elem`}
                            className='flex flex-col items-center p-2 cursor-pointer hover:bg-medium group rounded-base'
                        >
                            <Image
                                src={image}
                                alt='avatar'
                                className='w-6 h-6 rounded-[100%] overflow-hidden'
                            />
                            <Text
                                className='mt-2 text-center group-hover:text-textLight overflow-hidden text-ellipsis w-full'
                                color='medium'
                            >
                                {username}
                            </Text>
                        </div>
                    );
                }

                return (
                    <div
                        key={`${index + 1}-empty`}
                        className='group flex flex-col items-center justify-center cursor-pointer p-2 rounded-base hover:bg-medium'
                    >
                        <div className='flex items-center justify-center svg-extra-dark w-6 h-6 rounded-[100%] overflow-hidden bg-textDoubleExtraDark group-hover:svg-dark group-hover:bg-extraLight'>
                            <Plus />
                        </div>
                        <Text
                            className='mt-2 group-hover:text-textMedium w-20 text-center'
                            color='extra-dark'
                        >
                            Invite
                        </Text>
                    </div>
                );
            })}
        </Row>
    );
};

export default PlayersGrid;
