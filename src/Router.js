import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import MiniGame from './MiniGame.js';
import RedCode from './RedCode.js';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/minigame" element={ <MiniGame/>} />
                <Route path="/redcode" element={ <RedCode/>} />
            </Routes>
        </BrowserRouter>
   
    )
}

export default Router;