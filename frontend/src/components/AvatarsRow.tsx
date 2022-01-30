import Image from './Image';
import Row from './Row';

interface AvatarsRowProps {
    filled: number;
    empty: number;
}

const AvatarsRow: React.FC<AvatarsRowProps> = ({ filled, empty }) => {
    return (
        <div className='flex flex-1 flex-row'>
            <Row className='h-4'>
                {filled &&
                    [...Array(filled)].map((_: any, index: number) => (
                        <div key={`${index + 1}`} className={`w-fit ${!empty ? '' : 'mr-2'}`}>
                            <div className='w-4 h-4 rounded-[100%] overflow-hidden'>
                                <Image
                                    src='https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg'
                                    alt=''
                                />
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
