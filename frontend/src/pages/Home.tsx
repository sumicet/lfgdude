import Lobbies from '../components/Lobbies';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div className='flex flex-1 flex-col'>
            <SearchBar />
            <Lobbies className='mt-4' />
        </div>
    );
};

export default Home;
