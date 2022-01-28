import Lobbies from '../components/Lobbies';
import SearchBar from '../components/SearchBar';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <div className='flex flex-1 flex-col'>
            <SearchBar />
            <Lobbies className='mt-4' />
        </div>
    );
};

export default Home;
