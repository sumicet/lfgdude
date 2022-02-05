import { memo, useEffect } from 'react';
import Button from './common/Button';
import Text from './common/Text';
// @ts-ignore
import { ReactComponent as Plus } from '../assets/images/plus.svg';
import { Lobby } from '../models/Lobby';
import Grid from './layout/Grid';
// import { useGetLobbiesQuery } from '../redux/apis/main/lobby/lobbyApi';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface LobbiesProps {
    className?: string;
}

const lobbies: Lobby[] = [
    {
        id: '1',
        game: {
            id: '1',
            name: 'Among Us',
        },
        owner: {
            id: '1',
            image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Gojo-Jujutsu-Kaisen-Eyes-Uncovered.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
            username: 'Gojo-senpai',
        },
        title: 'wow amazing title',
        tags: ['chill', 'easy', 'competitive', '4th tag'],
        players: {
            max: 10,
            list: [
                {
                    id: '1',
                    username: 'IDK',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
                {
                    id: '2',
                    username: 'IDK2',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
                {
                    id: '3',
                    username: 'UHHHHH',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
            ],
        },
    },
    {
        id: '2',
        game: {
            id: '1',
            name: 'Among Us',
        },
        vc: {
            name: '6547',
            invite: 'https://redux-toolkit.js.org/tutorials/quick-start',
        },
        owner: {
            id: '2',
            image: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png?rect=93,0,679,382&w=700&h=394&dpr=2',
            username: 'Mando',
        },
        title: 'Such wow join join long title here!!!',
        tags: ['idk', 'competitive'],
        players: {
            max: 6,
            list: [
                {
                    id: '4',
                    username: 'mockdata',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
                {
                    id: '5',
                    username: 'toolazyforthis',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
            ],
        },
    },
    {
        id: '3',
        game: {
            id: '1',
            name: 'Among Us',
            code: 'EEWFWERFERFREFERFR',
        },
        owner: {
            id: '2',
            image: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png?rect=93,0,679,382&w=700&h=394&dpr=2',
            username: 'Mando',
        },
        vc: {
            name: '235',
            invite: 'https://redux-toolkit.js.org/tutorials/quick-start',
        },
        title: 'Such wow join join long title here!!! Such wow join join long title here!!! join long title here!!! join long title here!!!',
        tags: ['idk', 'competitive'],
        players: {
            max: 6,
            list: [
                {
                    id: '6',
                    username: 'whatsagoodname',
                    image: 'https://i.pinimg.com/736x/d3/32/83/d3328396ae00e51946c1300216abbc42.jpg',
                },
                {
                    id: '7',
                    username: 'jasmine',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
            ],
        },
    },
    {
        id: '4',
        game: {
            id: '1',
            name: 'Overwatch',
            code: 'EEWFWERFERFREFERFR',
        },
        owner: {
            id: '2',
            image: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png?rect=93,0,679,382&w=700&h=394&dpr=2',
            username: 'Shiro',
        },
        title: 'Such wow join join long title here!!! Such wow join join long title here!!! join long title here!!!',
        tags: ['competitive'],
        players: {
            max: 20,
            list: [
                {
                    id: '8',
                    username: 'notreally',
                    image: 'https://i.pinimg.com/736x/d3/32/83/d3328396ae00e51946c1300216abbc42.jpg',
                },
                {
                    id: '9',
                    username: 'hehe',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
                {
                    id: '10',
                    username: 'lotsofplayers',
                    image: 'https://i.pinimg.com/736x/d3/32/83/d3328396ae00e51946c1300216abbc42.jpg',
                },
                {
                    id: '11',
                    username: 'ranoutofideas',
                    image: 'https://static.cinemagia.ro/img/db/movie/12/38/471/the-witcher-966569l.jpg',
                },
            ],
        },
    },
];

const Lobbies = ({ className }: LobbiesProps) => {
    // const { data, isLoading, isError } = useGetLobbiesQuery();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isError) {
    //         navigate('/404');
    //     }
    // }, [isError, navigate]);

    const handleNewClick = () => {
        toast.error('OOps');
        toast.success('Yay!!');
        toast.warning('no');
        toast.info('yes');
    };

    return (
        <div
            className={`flex bg-medium flex-1 flex-col rounded-base border border-light p-4 ${className}`}
        >
            <div className='flex w-full h-fit'>
                <Text color='extra-dark'>4 lobbies found</Text>
                <div className='flex flex-1  justify-end items-center'>
                    <Text color='extra-dark' className='mr-4'>
                        Can’t find what you’re looking for? Create your own lobby!
                    </Text>
                    <Button text='New' Icon={Plus} color='medium' onClick={handleNewClick} />
                </div>
            </div>
            <Grid data={lobbies} className='mt-4' />
        </div>
    );
};

export default memo(Lobbies);
