import {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 

import Particles, {initParticlesEngine} from '@tsparticles/react';
import {loadFull} from 'tsparticles';

import './App.css';
import particlesOptions from './particles.json';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programming from './components/Programming';
import Media from './components/Media';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    });

    return (
        <div className='App'>
            {init && <Particles options={particlesOptions}/>}
            <BrowserRouter>
                <CustomNavbar />
                <Routes className='App'>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/About' element={<About/>}/>
                    <Route path='/Programming' element={<Programming/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Media' element={<Media/>}/>
                    <Route path='' element={<Error/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;
