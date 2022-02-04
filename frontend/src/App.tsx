import { Navigate, Route, Routes } from 'react-router-dom';
import Container from './components/layout/Container';
import LobbyModal from './components/LobbyModal';
import Header from './components/Header';
import About from './pages/About';
import Connect from './pages/Connect';
import Error from './pages/Error';
import FAQ from './pages/FAQ';
import Home from './pages/Home';

function App() {
    return (
        <div className='flex flex-col w-[100vw] min-h-full min-w-full overflow-y-scroll overflow-x-hidden bg-dark relative'>
            <Header />

            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/connect' element={<Connect />} />
                    <Route path='/404' element={<Error code={404} />} />
                    <Route path='*' element={<Navigate to={{ pathname: '/404' }} />} />
                </Routes>
            </Container>

            <LobbyModal />
        </div>
    );
}

export default App;
