import { Route, Routes } from 'react-router-dom';
import Container from './components/layout/Container';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Connect from './pages/Connect';
import FAQ from './pages/FAQ';
import Home from './pages/Home';

function App() {
    return (
        <div className='flex flex-1 flex-col bg-dark'>
            <NavigationBar />

            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/connect' element={<Connect />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
