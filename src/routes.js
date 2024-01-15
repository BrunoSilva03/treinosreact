import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import InputComFoto from './InputComFoto';

function RoutesApp() {
    return(
        <>
        <BrowserRouter>
            <Routes>

            <Route exact path="/treinosreact" element={<Home />}/>

            <Route path="/input-com-foto" element={<InputComFoto />}/>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default RoutesApp;