import { memo } from 'react';
import Button from './Button';
import Text from './Text';
// @ts-ignore
import { ReactComponent as plus } from '../assets/images/plus.svg';
import { Lobby } from '../models/Lobby';
import Grid from './Grid';

interface LobbiesProps {
    className?: string;
}

const lobbies: Lobby[] = [
    {
        game: {
            id: '1',
            name: 'Among Us',
            image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        },
        leader: {
            id: '1',
            image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Gojo-Jujutsu-Kaisen-Eyes-Uncovered.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
            username: 'Gojo-senpai',
        },
        title: 'wow amazing title',
        tags: ['chill', 'easy'],
        players: {
            num: 4,
            max: 10,
        },
    },
    {
        game: {
            id: '1',
            name: 'Among Us',
            image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        },
        leader: {
            id: '2',
            image: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png?rect=93,0,679,382&w=700&h=394&dpr=2',
            username: 'Nezuko',
        },
        title: 'Such wow join join long title here!!!',
        tags: ['idk', 'competitive'],
        players: {
            num: 5,
            max: 6,
        },
    },
    {
        game: {
            id: '1',
            name: 'Among Us',
            image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        },
        leader: {
            id: '2',
            image: 'https://cdn.realsport101.com/images/ncavvykf/epicstream/1291d35e00f077741819c23a19e5043c0a54e8fc-864x382.png?rect=93,0,679,382&w=700&h=394&dpr=2',
            username: 'Nezuko',
        },
        title: 'Such wow join join long title here!!!',
        tags: ['idk', 'competitive'],
        players: {
            num: 5,
            max: 6,
        },
    },
];

const Lobbies: React.FC<LobbiesProps> = ({ className }) => {
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
                    <Button text='New' Icon={plus} color='light' />
                </div>
            </div>
            <Grid data={lobbies} className='mt-4' />
        </div>
    );
};

export default memo(Lobbies);
