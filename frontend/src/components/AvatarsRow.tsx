import Image from './Image';

interface AvatarsRowProps {
    filled: number;
    empty: number;
}

const AvatarsRow: React.FC<AvatarsRowProps> = ({ filled, empty }) => {
    return (
        <div className='flex'>
            {filled &&
                [...Array(filled)].map((_: any, index: number) => (
                    <div key={`${index + 1}`} className={!empty ? '' : 'mr-2'}>
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
                    <div key={`${index + 1}`} className={index === empty - 1 ? '' : 'mr-2'}>
                        <div className='w-4 h-4 rounded-[100%] bg-extraLight'></div>
                    </div>
                ))}
        </div>
    );
};

export default AvatarsRow;
