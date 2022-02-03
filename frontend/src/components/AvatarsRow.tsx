import { User } from '../models/User';
import Image from './Image';
import Row from './Row';

interface AvatarsRowProps {
    players: {
        max: number;
        list: User[];
    };
}

const AvatarsRow = ({ players }: AvatarsRowProps) => {
    const { max, list } = players;
    const empty = max - list.length;

    return (
        <div className='flex flex-1 flex-row'>
            <Row className='h-4'>
                {list.length &&
                    list.map((user: User) => (
                        <div key={user.id} className={`w-fit ${!empty ? '' : 'mr-2'}`}>
                            <div className='w-4 h-4 rounded-[100%] overflow-hidden'>
                                <Image src={user.image} alt='avatar' />
                            </div>
                        </div>
                    ))}
                {empty &&
                    [...Array(empty)].map((_: any, index: number) => (
                        <div
                            key={`${index + 1}`}
                            className={`w-fit ${index === empty - 1 ? '' : 'mr-2'}`}
                        >
                            <div className='w-4 h-4 rounded-[100%] bg-extraLight'></div>
                        </div>
                    ))}
            </Row>
        </div>
    );
};

export default AvatarsRow;
